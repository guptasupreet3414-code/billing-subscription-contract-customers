import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { EnvelopeIcon, ExternalLinkIcon, LifeRingIcon } from '../Icons'
import { accountManager } from '../../data/billingData'
import { PrototypeToggle } from '../../context/PrototypeContext'

/* ── Shared drawer shell ── */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
  transition: opacity 200ms ease;
`

const DrawerPanel = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({ theme }) => theme.colors.white};
  z-index: ${({ $zIndex }) => $zIndex || 1101};
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.14);

  @media (max-width: 500px) {
    width: 100%;
  }
`

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  flex-shrink: 0;
`

const DrawerTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const DrawerTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral600};
  border-radius: 6px;
  font-size: 20px;
  line-height: 1;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.neutral900};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral700};
  padding: 0;

  &:hover { color: ${({ theme }) => theme.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; border-radius: 3px; }
`

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral300};
    border-radius: 2px;
  }
`

const DrawerFooter = styled.div`
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1.5px dashed #fde68a;
  background: #fffbeb;
`

/* ── Manager card ── */

const ManagerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral50};
`

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #D5E6F7;
  color: ${({ theme }) => theme.colors.blue300};
  font-size: 15px;
  font-weight: 600;
  flex-shrink: 0;
`

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const AvatarName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const AvatarMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

/* ── Blue callout ── */

const HelpCallout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
`

const BannerHeading = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const BannerText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
  line-height: 1.5;
`

/* ── Form ── */

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.neutral200};
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FormTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral800};
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const FieldLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral700};
`

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral900};

  &::placeholder { color: ${({ theme }) => theme.colors.neutral400}; }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.15);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral900};
  resize: vertical;

  &::placeholder { color: ${({ theme }) => theme.colors.neutral400}; }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.15);
  }
`

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const FormHelper = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const SendBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

/* ── Alt help ── */

const AltHelpWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const AltHelpLabel = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const AltHelpLinkBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  width: fit-content;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; border-radius: 2px; }
`

/* ── CertCentral support sub-drawer ── */

const SupportSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const SupportSectionTitle = styled.h3`
  margin: 0 0 2px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SupportSectionDesc = styled.p`
  margin: 0 0 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SupportChatBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  margin-bottom: 12px;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
`

const SupportInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SupportInfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const SupportInfoIcon = styled.span`
  flex-shrink: 0;
  width: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const SupportHoursTitle = styled.p`
  margin: 10px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral800};
`

const SupportHoursRow = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const SupportContactLink = styled.a`
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

const SupportSubDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.neutral200};
  margin: 4px 0;
`

const PlanBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 10px;
  background: #EAF1FB;
  color: ${({ theme }) => theme.colors.blue300};
  font-size: 11px;
  font-weight: 600;
  margin-left: 8px;
  vertical-align: middle;
`

const SalesContactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF1FB;
`

const SalesCardLabel = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SalesCardDesc = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SalesCardTalkTo = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SalesAvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const SalesAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
`

const SalesAvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const SalesAvatarName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SalesAvatarMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const SalesInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral700};
`

/* ── Sub-drawer: CertCentral support ── */

function CertCentralSupportDrawer({ open, onClose }) {
  const firstFocusRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  useEffect(() => {
    if (open && firstFocusRef.current) {
      setTimeout(() => firstFocusRef.current?.focus(), 260)
    }
  }, [open])

  return (
    <DrawerPanel
      $open={open}
      $zIndex={1103}
      role="dialog"
      aria-modal="true"
      aria-label="CertCentral support"
    >
      <DrawerHeader>
        <BackBtn type="button" onClick={onClose} ref={firstFocusRef}>
          ← Back
        </BackBtn>
        <CloseBtn type="button" onClick={onClose} aria-label="Close drawer">
          ×
        </CloseBtn>
      </DrawerHeader>

      <DrawerBody>
        <div>
          <p style={{ margin: '0 0 2px', fontSize: '13px', color: '#6b7280' }}>Current plan</p>
          <p style={{ margin: '0', fontSize: '18px', fontWeight: '500', color: '#111827' }}>
            Standard plus <PlanBadge>24x5 support</PlanBadge>
          </p>
        </div>

        <SupportSubDivider />

        <SupportSection>
          <SupportSectionTitle>Technical support</SupportSectionTitle>
          <SupportSectionDesc>Get help with certificate installation, CSRs, and other technical issues.</SupportSectionDesc>
          <SupportChatBtn type="button">Support chat</SupportChatBtn>
          <SupportInfoList>
            <SupportInfoRow>
              <SupportInfoIcon>📞</SupportInfoIcon>
              <span>+1 800 579 2848</span>
            </SupportInfoRow>
            <SupportInfoRow>
              <SupportInfoIcon>📞</SupportInfoIcon>
              <span>+1 801 769 0749</span>
            </SupportInfoRow>
            <SupportInfoRow>
              <SupportInfoIcon style={{ color: 'transparent' }}>·</SupportInfoIcon>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>PIN: 1779</span>
            </SupportInfoRow>
            <SupportInfoRow>
              <SupportInfoIcon>✉</SupportInfoIcon>
              <SupportContactLink href="mailto:cc.standard.support@digicert.com">
                cc.standard.support@digicert.com
              </SupportContactLink>
            </SupportInfoRow>
            <SupportInfoRow>
              <SupportInfoIcon>🔗</SupportInfoIcon>
              <SupportContactLink href="#" target="_blank" rel="noopener noreferrer">
                Support portal
                <ExternalLinkIcon size={11} color="currentColor" style={{ marginLeft: 3, verticalAlign: 'middle' }} />
              </SupportContactLink>
            </SupportInfoRow>
          </SupportInfoList>
          <SupportHoursTitle>Support hours</SupportHoursTitle>
          <SupportHoursRow>Monday – Friday: 24 hours</SupportHoursRow>
          <SupportHoursRow>Saturday and Sunday: Closed</SupportHoursRow>
        </SupportSection>

        <SupportSubDivider />

        <SupportSection>
          <SupportSectionTitle>Validation support</SupportSectionTitle>
          <SupportSectionDesc>Get help with domain and organization validation.</SupportSectionDesc>
          <SupportChatBtn type="button">Validation chat</SupportChatBtn>
          <SupportInfoList>
            <SupportInfoRow>
              <SupportInfoIcon>📞</SupportInfoIcon>
              <span>+1 800 579 2848</span>
            </SupportInfoRow>
            <SupportInfoRow>
              <SupportInfoIcon>📞</SupportInfoIcon>
              <span>+1 801 769 0749</span>
            </SupportInfoRow>
            <SupportInfoRow>
              <SupportInfoIcon>✉</SupportInfoIcon>
              <SupportContactLink href="mailto:standard.validation@digicert.com">
                standard.validation@digicert.com
              </SupportContactLink>
            </SupportInfoRow>
          </SupportInfoList>
          <SupportHoursTitle>Support hours</SupportHoursTitle>
          <SupportHoursRow>Monday – Friday: 24 hours</SupportHoursRow>
          <SupportHoursRow>Saturday and Sunday: Closed</SupportHoursRow>
        </SupportSection>

        <SupportSubDivider />

        <SalesContactCard>
          <SalesCardLabel>Sales contact</SalesCardLabel>
          <SalesCardDesc>Get help with any sales related questions.</SalesCardDesc>
          <SalesCardTalkTo>Talk to your Sales contact:</SalesCardTalkTo>
          <SalesAvatarRow>
            <SalesAvatar>d</SalesAvatar>
            <SalesAvatarInfo>
              <SalesAvatarName>Sales Team</SalesAvatarName>
              <SalesAvatarMeta>
                <SalesInfoRow>
                  <span>·</span>
                </SalesInfoRow>
                <SalesInfoRow>
                  <EnvelopeIcon size={12} color="currentColor" />
                  <SupportContactLink href="mailto:sales@digicert.com">sales@digicert.com</SupportContactLink>
                </SalesInfoRow>
              </SalesAvatarMeta>
            </SalesAvatarInfo>
          </SalesAvatarRow>
        </SalesContactCard>

        <SupportSection>
          <SupportSectionTitle style={{ fontSize: '13px' }}>Sales support</SupportSectionTitle>
          <SupportSectionDesc>Get help with contract terms, pricing, and product selection.</SupportSectionDesc>
          <SupportInfoRow>
            <SupportInfoIcon>📞</SupportInfoIcon>
            <span>+1 801 770 1701</span>
          </SupportInfoRow>
        </SupportSection>
      </DrawerBody>
    </DrawerPanel>
  )
}

/* ── Banner content ── */

const BANNER_CONTENT = {
  default: {
    heading: 'Questions about this purchase?',
    body: 'Use the form below to contact your DigiCert account manager.',
    bodyNoManager: "Send us a message below and we'll route it to the appropriate DigiCert team.",
  },
  'payment-details': {
    heading: 'Questions about payment details?',
    body: 'Use the form below to contact your DigiCert account manager about billing or payment questions.',
    bodyNoManager: "Have questions about your payment methods or charges? Send us a message below and we'll route it to the appropriate DigiCert team.",
  },
  receipts: {
    heading: 'Questions about your invoices?',
    body: 'Use the form below to contact your DigiCert account manager about receipts or billing history.',
    bodyNoManager: "Have questions about invoices or billing history? Send us a message below and we'll route it to the appropriate DigiCert team.",
  },
}

/* ── Main drawer ── */

export default function ContactUsDrawer({ open, onClose, helpContext = 'default', hasAccountManager = true }) {
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const banner = BANNER_CONTENT[helpContext] || BANNER_CONTENT.default
  const initials = accountManager.name.split(' ').map((w) => w[0]).join('')
  const firstFocusRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) {
        if (isSupportOpen) {
          setIsSupportOpen(false)
        } else {
          onClose()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose, isSupportOpen])

  useEffect(() => {
    if (open && firstFocusRef.current) {
      setTimeout(() => firstFocusRef.current?.focus(), 260)
    }
  }, [open])

  return (
    <>
      <Overlay $open={open} onClick={onClose} aria-hidden="true" />
      <DrawerPanel
        $open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Need help?"
      >
        <DrawerHeader>
          <DrawerTitleRow>
            <LifeRingIcon size={18} color="currentColor" />
            <DrawerTitle>Need help?</DrawerTitle>
          </DrawerTitleRow>
          <CloseBtn type="button" onClick={onClose} aria-label="Close drawer" ref={firstFocusRef}>
            ×
          </CloseBtn>
        </DrawerHeader>

        <DrawerBody>
          {hasAccountManager && (
            <ManagerCard>
              <AvatarRow>
                <Avatar>{initials}</Avatar>
                <AvatarInfo>
                  <AvatarName>{accountManager.name}</AvatarName>
                  <AvatarMeta>{accountManager.title}</AvatarMeta>
                </AvatarInfo>
              </AvatarRow>
              <ContactList>
                <ContactItem>
                  <EnvelopeIcon size={14} color="currentColor" />
                  <ContactLink href={`mailto:${accountManager.email}`}>{accountManager.email}</ContactLink>
                </ContactItem>
              </ContactList>
            </ManagerCard>
          )}

          <HelpCallout>
            <BannerHeading>{banner.heading}</BannerHeading>
            <BannerText>{hasAccountManager ? banner.body : banner.bodyNoManager}</BannerText>
          </HelpCallout>

          <Divider />

          <FormSection>
            <FormTitle>Send a message</FormTitle>
            <FieldGroup>
              <FieldLabel htmlFor="contact-us-subject">Subject</FieldLabel>
              <Input
                id="contact-us-subject"
                type="text"
                placeholder="e.g. Questions about my subscription"
              />
            </FieldGroup>
            <FieldGroup>
              <FieldLabel htmlFor="contact-us-message">Message</FieldLabel>
              <Textarea
                id="contact-us-message"
                placeholder="Describe what you need help with..."
                rows={4}
              />
            </FieldGroup>
            <FormFooter>
              <FormHelper>
                {hasAccountManager
                  ? `Your message will be sent to ${accountManager.name}.`
                  : 'Your message will be routed to the appropriate DigiCert team.'}
              </FormHelper>
              <SendBtn type="button">Send message</SendBtn>
            </FormFooter>
          </FormSection>

          <AltHelpWrap>
            <AltHelpLabel>Need to speak to Technical, Validation, or Sales instead?</AltHelpLabel>
            <AltHelpLinkBtn type="button" onClick={() => setIsSupportOpen(true)}>
              Contact CertCentral support
              <ExternalLinkIcon size={12} color="currentColor" />
            </AltHelpLinkBtn>
          </AltHelpWrap>
        </DrawerBody>

        <DrawerFooter>
          <PrototypeToggle />
        </DrawerFooter>
      </DrawerPanel>

      <CertCentralSupportDrawer
        open={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </>
  )
}
