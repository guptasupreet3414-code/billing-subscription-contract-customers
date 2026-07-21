import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { EnvelopeIcon, ExternalLinkIcon, LifeRingIcon } from '../Icons'
import { accountManager } from '../../data/billingData'
import { PrototypeToggle } from '../../context/PrototypeContext'

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

const AltHelpLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  width: fit-content;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; border-radius: 2px; }
`

/* ── Banner content ── */

const BANNER_CONTENT = {
  subscriptions: {
    heading: 'Questions about subscriptions?',
    body: 'Use the form below to contact your DigiCert account manager.',
    bodyNoManager: 'Fill out the form below and your message will be routed to the appropriate DigiCert team.',
  },
  'payment-details': {
    heading: 'Questions about payment details?',
    body: 'Use the form below to contact your DigiCert account manager about billing or payment questions.',
    bodyNoManager: 'Fill out the form below about billing or payment questions and your message will be routed to the appropriate DigiCert team.',
  },
  receipts: {
    heading: 'Questions about your invoices?',
    body: 'Use the form below to contact your DigiCert account manager about receipts or billing history.',
    bodyNoManager: 'Fill out the form below about receipts or billing history and your message will be routed to the appropriate DigiCert team.',
  },
}

export default function ContactManagerDrawer({ open, onClose, helpContext = 'subscriptions', hasAccountManager = true }) {
  const banner = BANNER_CONTENT[helpContext] || BANNER_CONTENT.subscriptions
  const initials = accountManager.name.split(' ').map((w) => w[0]).join('')
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
              <FieldLabel htmlFor="drawer-subject">Subject</FieldLabel>
              <Input
                id="drawer-subject"
                type="text"
                placeholder="e.g. Request additional SSL/TLS licenses"
              />
            </FieldGroup>
            <FieldGroup>
              <FieldLabel htmlFor="drawer-message">Message</FieldLabel>
              <Textarea
                id="drawer-message"
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
            <AltHelpLabel>Need to speak to sales instead?</AltHelpLabel>
            <AltHelpLink
              href="https://www.digicert.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact sales
              <ExternalLinkIcon size={12} color="currentColor" />
            </AltHelpLink>
          </AltHelpWrap>
        </DrawerBody>

        <DrawerFooter>
          <PrototypeToggle />
        </DrawerFooter>
      </DrawerPanel>
    </>
  )
}
