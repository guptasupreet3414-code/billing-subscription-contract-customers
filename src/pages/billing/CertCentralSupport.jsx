import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PhoneIcon, EnvelopeIcon, ExternalLinkIcon, ChatBubbleIcon } from '../../components/Icons'

/* ── Layout ── */

const Main = styled.main`
  padding: 32px;
`

const PageTitle = styled.h1`
  margin: 0 0 24px;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PlanBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  margin-bottom: 28px;
`

const PlanLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PlanLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const PlanName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PlanBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  background: #FEF3C7;
  color: #92400E;
  font-size: 12px;
  font-weight: 500;
`

const AccountLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const AccountNumber = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
  text-align: right;
`

/* ── Region selector ── */

const RegionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
`

const RegionLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral700};
`

const RegionSelect = styled.select`
  padding: 6px 32px 6px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral900};
  background: white;
  cursor: pointer;
  appearance: auto;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.15);
  }
`

/* ── Two-column grid ── */

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

/* ── Support section ── */

const SupportSection = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`

const SectionTitle = styled.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SectionDesc = styled.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
  line-height: 1.5;
`

const ChatBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 14px;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 14px;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const InfoIcon = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.neutral500};
  display: flex;
`

const InfoLink = styled.a`
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

const HoursTitle = styled.p`
  margin: 12px 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral800};
`

const HoursRow = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

/* ── Sales contact card ── */

const SalesContactSection = styled.div``

const SalesContactTitle = styled.h2`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SalesContactDesc = styled.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SalesContactLabel = styled.p`
  margin: 0 0 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const ContactCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-size: 15px;
  font-weight: 600;
  flex-shrink: 0;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const ContactName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

/* ── Upgrade callout ── */

const UpgradeCallout = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: #EAF1FB;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const CalloutIconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blue300};
`

const CalloutHeading = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
  line-height: 1.4;
`

const CalloutBody = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
  line-height: 1.5;
`

const CalloutLink = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

export default function CertCentralSupport() {
  const [region, setRegion] = useState('north-america')

  useEffect(() => {
    document.title = 'Support — CertCentral'
  }, [])

  return (
    <Main>
      <PageTitle>Support</PageTitle>

      <PlanBar>
        <PlanLeft>
          <div>
            <PlanLabel>Current plan</PlanLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
              <PlanName>Standard</PlanName>
              <PlanBadge>24x5 support</PlanBadge>
            </div>
          </div>
        </PlanLeft>
        <div style={{ textAlign: 'right' }}>
          <AccountLabel>Account number</AccountLabel>
          <AccountNumber>126993</AccountNumber>
        </div>
      </PlanBar>

      <RegionRow>
        <RegionLabel htmlFor="support-region">Region</RegionLabel>
        <RegionSelect
          id="support-region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="north-america">North America</option>
          <option value="europe">Europe</option>
          <option value="asia-pacific">Asia Pacific</option>
        </RegionSelect>
      </RegionRow>

      <ContentGrid>
        <LeftCol>
          <SupportSection>
            <SectionTitle>Technical support</SectionTitle>
            <SectionDesc>Get help with certificate installation, CSRs, and other technical issues.</SectionDesc>
            <ChatBtn type="button">Support chat</ChatBtn>
            <InfoList>
              <InfoRow>
                <InfoIcon><PhoneIcon size={14} /></InfoIcon>
                <InfoLink href="#">Upgrade to the Business plan for phone support.</InfoLink>
              </InfoRow>
              <InfoRow>
                <InfoIcon><EnvelopeIcon size={14} /></InfoIcon>
                <InfoLink href="mailto:cc.standard.support@digicert.com">cc.standard.support@digicert.com</InfoLink>
              </InfoRow>
              <InfoRow>
                <InfoIcon><ExternalLinkIcon size={14} /></InfoIcon>
                <InfoLink href="https://support.digicert.com" target="_blank" rel="noopener noreferrer">Support portal</InfoLink>
              </InfoRow>
            </InfoList>
            <HoursTitle>Support hours</HoursTitle>
            <HoursRow>Monday - Friday: 24 hours</HoursRow>
            <HoursRow>Saturday and Sunday: Closed</HoursRow>
          </SupportSection>

          <SupportSection>
            <SectionTitle>Validation support</SectionTitle>
            <SectionDesc>Get help with domain and organization validation.</SectionDesc>
            <ChatBtn type="button">Validation chat</ChatBtn>
            <InfoList>
              <InfoRow>
                <InfoIcon><PhoneIcon size={14} /></InfoIcon>
                <span>+1 800 579 2848</span>
              </InfoRow>
              <InfoRow>
                <InfoIcon><PhoneIcon size={14} /></InfoIcon>
                <span>+1 801 769 0749</span>
              </InfoRow>
              <InfoRow>
                <InfoIcon><EnvelopeIcon size={14} /></InfoIcon>
                <InfoLink href="mailto:standard.validation@digicert.com">standard.validation@digicert.com</InfoLink>
              </InfoRow>
            </InfoList>
            <HoursTitle>Support hours</HoursTitle>
            <HoursRow>Monday - Friday: 24 hours</HoursRow>
            <HoursRow>Saturday and Sunday: Closed</HoursRow>
          </SupportSection>

          <SupportSection>
            <SectionTitle>Sales support</SectionTitle>
            <SectionDesc>Get help with contract terms, pricing, and product selection.</SectionDesc>
            <InfoList>
              <InfoRow>
                <InfoIcon><PhoneIcon size={14} /></InfoIcon>
                <InfoLink href="tel:+18017701701">+1 801 770 1701</InfoLink>
              </InfoRow>
            </InfoList>
          </SupportSection>
        </LeftCol>

        <RightCol>
          <SalesContactSection>
            <SalesContactTitle>Sales contact</SalesContactTitle>
            <SalesContactDesc>Get help with any sales related questions.</SalesContactDesc>
            <SalesContactLabel>Talk to your Sales contact:</SalesContactLabel>
            <ContactCard>
              <Avatar>d</Avatar>
              <ContactInfo>
                <ContactName>Sales Team</ContactName>
                <InfoRow>
                  <InfoIcon><PhoneIcon size={14} /></InfoIcon>
                  <span style={{ color: '#9ca3af' }}>*</span>
                </InfoRow>
                <InfoRow>
                  <InfoIcon><EnvelopeIcon size={14} /></InfoIcon>
                  <InfoLink href="mailto:sales@digicert.com">sales@digicert.com</InfoLink>
                </InfoRow>
              </ContactInfo>
            </ContactCard>
          </SalesContactSection>

          <UpgradeCallout>
            <CalloutIconWrap>
              <ChatBubbleIcon size={28} color="currentColor" />
            </CalloutIconWrap>
            <CalloutHeading>Need to give us a call?<br />Get <span style={{ color: '#0174C3' }}>Business support</span> today.</CalloutHeading>
            <CalloutBody>
              Fast, knowledgeable phone assistance is available now with DigiCert's Business support plan.
              Upgrade anytime – select the link below or contact your sales representative.
            </CalloutBody>
            <CalloutLink href="mailto:sales@digicert.com">
              Contact sales@digicert.com to upgrade your support plan
            </CalloutLink>
            <CalloutLink href="#">Compare all support plans</CalloutLink>
          </UpgradeCallout>
        </RightCol>
      </ContentGrid>
    </Main>
  )
}
