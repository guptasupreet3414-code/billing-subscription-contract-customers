import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { EnvelopeIcon, ExternalLinkIcon, LifeRingIcon, PhoneIcon } from '../Icons'
import { accountManager } from '../../data/billingData'

/* ── Shell ── */

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
  z-index: 1101;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.14);

  @media (max-width: 500px) { width: 100%; }
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

  &:hover { background: ${({ theme }) => theme.colors.neutral100}; color: ${({ theme }) => theme.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.colors.neutral300}; border-radius: 2px; }
`

/* ── Prototype footer ── */

const DrawerFooter = styled.div`
  flex-shrink: 0;
  padding: 12px 16px;
  border-top: 1.5px dashed #fde68a;
  background: #fffbeb;
`

const ProtoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

const ProtoLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
  white-space: nowrap;
  padding-right: 8px;
  border-right: 1px solid #fde68a;
`

const SegControl = styled.div`
  display: flex;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
`

const Seg = styled.button`
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
  background: ${({ $active }) => ($active ? '#fff' : 'transparent')};
  color: ${({ $active }) => ($active ? '#111827' : '#6b7280')};
  box-shadow: ${({ $active }) => ($active ? '0 1px 3px rgba(0,0,0,0.12)' : 'none')};

  &:hover { color: ${({ $active }) => ($active ? '#111827' : '#374151')}; }
  &:focus-visible { outline: 2px solid #f59e0b; outline-offset: 1px; }
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
  &:focus { outline: none; border-color: ${({ theme }) => theme.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
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
  &:focus { outline: none; border-color: ${({ theme }) => theme.colors.blue300}; box-shadow: 0 0 0 2px rgba(1,116,195,0.15); }
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

/* ── Alt help (below form) ── */

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

const SubDrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1102;
  background: transparent;
  pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
`

const SubDrawerPanel = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1103;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.18);

  @media (max-width: 500px) { width: 100%; }
`

const SubDrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.colors.neutral300}; border-radius: 2px; }
`

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  margin-bottom: 16px;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; border-radius: 2px; }
`

const PlanBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`

const PlanLabel = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const PlanRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PlanName = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PlanBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #EAF1FB;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  white-space: nowrap;
`

const SubDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.neutral200};
  margin: 14px 0;
`

const SupportGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SupportGroupTitle = styled.h4`
  margin: 0 0 2px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SupportGroupDesc = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
  line-height: 1.5;
`

const ChatBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const SupportContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral800};
`

const SupportContactLink = styled.a`
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  font-size: 13px;
  &:hover { text-decoration: underline; }
`

const PinText = styled.p`
  margin: 0 0 0 24px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const HoursBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 2px;
`

const HoursTitle = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral800};
`

const HoursText = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SalesBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #EAF1FB;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  width: fit-content;
`

/* ── Banner content ── */

const BANNER = {
  default: {
    known:   { heading: 'Questions about this purchase?', body: 'Use the form below to contact your DigiCert account manager.' },
    unknown: { heading: 'Questions about this purchase?', body: "Send us a message below and we'll route it to the appropriate DigiCert team." },
  },
  'payment-details': {
    known:   { heading: 'Questions about payment details?', body: 'Use the form below to contact your DigiCert account manager about billing or payment questions.' },
    unknown: { heading: 'Questions about payment details?', body: "Have questions about payment methods, billing contacts, or charges? Send us a message and we'll route it to the appropriate team." },
  },
  receipts: {
    known:   { heading: 'Questions about your invoices?', body: 'Use the form below to contact your DigiCert account manager about receipts or billing history.' },
    unknown: { heading: 'Questions about your invoices?', body: "Have questions about invoices or billing history? Send us a message and we'll route it to the appropriate team." },
  },
}

/* ── Component ── */

export default function ContactUsDrawer({ open, onClose, helpContext = 'default' }) {
  const [hasAccountManager, setHasAccountManager] = useState(true)
  const [supportOpen, setSupportOpen] = useState(false)
  const bannerSet = BANNER[helpContext] || BANNER.default
  const banner = hasAccountManager ? bannerSet.known : bannerSet.unknown
  const initials = accountManager.name.split(' ').map((w) => w[0]).join('')
  const firstFocusRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (supportOpen) { setSupportOpen(false); return }
        if (open) onClose()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose, supportOpen])

  useEffect(() => {
    if (open && !supportOpen && firstFocusRef.current) {
      setTimeout(() => firstFocusRef.current?.focus(), 260)
    }
  }, [open, supportOpen])

  useEffect(() => {
    if (!open) setSupportOpen(false)
  }, [open])

  return (
    <>
      <Overlay $open={open} onClick={() => { setSupportOpen(false); onClose() }} aria-hidden="true" />

      {/* Main drawer */}
      <DrawerPanel $open={open} role="dialog" aria-modal="true" aria-label="Need help?">
        <DrawerHeader>
          <DrawerTitleRow>
            <LifeRingIcon size={18} color="currentColor" />
            <DrawerTitle>Need help?</DrawerTitle>
          </DrawerTitleRow>
          <CloseBtn type="button" onClick={onClose} aria-label="Close drawer" ref={firstFocusRef}>×</CloseBtn>
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
            <BannerText>{banner.body}</BannerText>
          </HelpCallout>

          <Divider />

          <FormSection>
            <FormTitle>Send a message</FormTitle>
            <FieldGroup>
              <FieldLabel htmlFor="cu-subject">Subject</FieldLabel>
              <Input id="cu-subject" type="text" placeholder="e.g. Request additional SSL/TLS licenses" />
            </FieldGroup>
            <FieldGroup>
              <FieldLabel htmlFor="cu-message">Message</FieldLabel>
              <Textarea id="cu-message" placeholder="Describe what you need help with..." rows={4} />
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
            <AltHelpLinkBtn type="button" onClick={() => setSupportOpen(true)}>
              Contact CertCentral support
              <ExternalLinkIcon size={12} color="currentColor" />
            </AltHelpLinkBtn>
          </AltHelpWrap>
        </DrawerBody>

        <DrawerFooter>
          <ProtoRow>
            <ProtoLabel>Prototype</ProtoLabel>
            <SegControl>
              <Seg type="button" $active={hasAccountManager} onClick={() => setHasAccountManager(true)}>
                Known account manager
              </Seg>
              <Seg type="button" $active={!hasAccountManager} onClick={() => setHasAccountManager(false)}>
                No account manager
              </Seg>
            </SegControl>
          </ProtoRow>
        </DrawerFooter>
      </DrawerPanel>

      {/* CertCentral support sub-drawer */}
      <SubDrawerOverlay $open={supportOpen} onClick={() => setSupportOpen(false)} />
      <SubDrawerPanel $open={supportOpen} role="dialog" aria-modal="true" aria-label="CertCentral support">
        <DrawerHeader>
          <DrawerTitleRow>
            <LifeRingIcon size={18} color="currentColor" />
            <DrawerTitle>Need help?</DrawerTitle>
          </DrawerTitleRow>
          <CloseBtn type="button" onClick={() => { setSupportOpen(false); onClose() }} aria-label="Close">×</CloseBtn>
        </DrawerHeader>

        <SubDrawerBody>
          <BackBtn type="button" onClick={() => setSupportOpen(false)}>
            ← Back
          </BackBtn>

          <PlanBlock>
            <PlanLabel>Current plan</PlanLabel>
            <PlanRow>
              <PlanName>Standard plus</PlanName>
              <PlanBadge>24x5 support</PlanBadge>
            </PlanRow>
          </PlanBlock>

          <SubDivider />

          <SupportGroup>
            <SupportGroupTitle>Technical support</SupportGroupTitle>
            <SupportGroupDesc>Get help with certificate installation, CSRs, and other technical issues.</SupportGroupDesc>
            <ChatBtn type="button">Support chat</ChatBtn>
            <SupportContactRow>
              <PhoneIcon size={14} color="currentColor" />
              <span>+1 800 579 2848</span>
            </SupportContactRow>
            <SupportContactRow>
              <PhoneIcon size={14} color="currentColor" />
              <span>+1 801 769 0749</span>
            </SupportContactRow>
            <PinText>PIN: 1779</PinText>
            <SupportContactRow>
              <EnvelopeIcon size={14} color="currentColor" />
              <SupportContactLink href="mailto:cc.standard.support@digicert.com">
                cc.standard.support@digicert.com
              </SupportContactLink>
            </SupportContactRow>
            <SupportContactRow>
              <ExternalLinkIcon size={14} color="currentColor" />
              <SupportContactLink href="https://support.digicert.com" target="_blank" rel="noopener noreferrer">
                Support portal
              </SupportContactLink>
            </SupportContactRow>
            <HoursBlock>
              <HoursTitle>Support hours</HoursTitle>
              <HoursText>Monday – Friday: 24 hours</HoursText>
              <HoursText>Saturday and Sunday: Closed</HoursText>
            </HoursBlock>
          </SupportGroup>

          <SubDivider />

          <SupportGroup>
            <SupportGroupTitle>Validation support</SupportGroupTitle>
            <SupportGroupDesc>Get help with domain and organization validation.</SupportGroupDesc>
            <ChatBtn type="button">Validation chat</ChatBtn>
            <SupportContactRow>
              <PhoneIcon size={14} color="currentColor" />
              <span>+1 800 579 2848</span>
            </SupportContactRow>
            <SupportContactRow>
              <PhoneIcon size={14} color="currentColor" />
              <span>+1 801 769 0749</span>
            </SupportContactRow>
            <SupportContactRow>
              <EnvelopeIcon size={14} color="currentColor" />
              <SupportContactLink href="mailto:standard.validation@digicert.com">
                standard.validation@digicert.com
              </SupportContactLink>
            </SupportContactRow>
            <HoursBlock>
              <HoursTitle>Support hours</HoursTitle>
              <HoursText>Monday – Friday: 24 hours</HoursText>
              <HoursText>Saturday and Sunday: Closed</HoursText>
            </HoursBlock>
          </SupportGroup>

          <SubDivider />

          <SupportGroup>
            <SupportGroupTitle>Sales</SupportGroupTitle>
            <SupportContactRow>
              <PhoneIcon size={14} color="currentColor" />
              <SupportContactLink href="tel:+18017019600">+1 (801) 701-9600</SupportContactLink>
            </SupportContactRow>
            <SupportContactRow>
              <EnvelopeIcon size={14} color="currentColor" />
              <SupportContactLink href="mailto:sales@digicert.com">sales@digicert.com</SupportContactLink>
            </SupportContactRow>
            <HoursBlock>
              <HoursTitle>Support hours</HoursTitle>
              <HoursText>Monday – Friday: 24 hours</HoursText>
              <HoursText>Saturday and Sunday: Closed</HoursText>
            </HoursBlock>
          </SupportGroup>
        </SubDrawerBody>
      </SubDrawerPanel>
    </>
  )
}
