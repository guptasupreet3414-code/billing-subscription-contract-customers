import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronUpIcon, ChevronDownIcon, InfoCircleIcon, EnvelopeIcon, PhoneIcon, CartOutlineIcon, CalendarIcon, LayersIcon, DollarIcon, getIcon } from '../../components/Icons'
import { getFixedSubscriptions, accountManager, contractTypeConfig } from '../../data/billingData'

const Main = styled.main`
  padding: 32px;
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral700};
  text-decoration: none;

  &:hover { color: ${({ theme }) => theme.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`

const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF1FB;
  color: ${({ theme }) => theme.colors.blue300};
  flex-shrink: 0;
`

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`

const PageTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PageTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #353535;
`

const SummaryLine = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const InstanceTabRow = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  margin-bottom: 28px;
`

const InstanceTab = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin-bottom: -1px;
  border: none;
  border-bottom: 2px solid ${({ theme, $active }) => ($active ? theme.colors.neutral900 : 'transparent')};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.neutral900 : theme.colors.neutral500)};
  cursor: pointer;

  &:hover { color: ${({ theme }) => theme.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const Section = styled.section`
  margin-bottom: 32px;
`

const SectionTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral600};
`

// ── KPI cards ──────────────────────────────────────────────────────────────────

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 3}, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const KPICard = styled.div`
  padding: 18px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const KPICardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const KPILabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral500};
`

const KPIValue = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ $blue, theme }) => ($blue ? theme.colors.blue300 : theme.colors.neutral900)};
  display: flex;
  align-items: baseline;
  gap: 5px;
`

const KPIValueSmall = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral600};
`

const KPISubValue = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const ActiveBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(39,168,114,0.10);
  color: #1F8F60;
`

const PlanInfoBtn = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue300};
  border-radius: 4px;

  &:hover { opacity: 0.7; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const PlanInfoBtnWrap = styled.div`
  position: relative;
  display: inline-flex;
`

const PlanInfoTooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -8px;
  width: 320px;
  padding: 14px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.neutral900};
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.55;
  z-index: 10;
  pointer-events: auto;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 14px;
    border: 5px solid transparent;
    border-bottom-color: ${({ theme }) => theme.colors.neutral900};
  }

  p {
    margin: 0 0 10px;
    &:last-child { margin-bottom: 0; }
  }
`

const TooltipKVBlock = styled.div`
  margin: 0 0 10px;
`

const TooltipKVLabel = styled.span`
  display: block;
  font-size: 11px;
  opacity: 0.7;
`

const TooltipKVValue = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
`

const TooltipBtn = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 2px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral400};
  border-radius: 4px;

  &:hover { color: ${({ theme }) => theme.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const TooltipBox = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  padding: 10px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.neutral900};
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  z-index: 10;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.neutral900};
  }
`

// ── Shared KPI helper cards ───────────────────────────────────────────────────

const PlanTypeSecondary = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

function PlanTypeCard({ instance, isCertCentral }) {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!tooltipOpen) return
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setTooltipOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [tooltipOpen])

  const isEnterprise = instance.subscriptionType === 'enterprise'
  const planLabel = isEnterprise ? 'Enterprise' : 'E-commerce'
  const contractConfig = isEnterprise && instance.contractType ? contractTypeConfig[instance.contractType] : null
  const secondaryLabel = contractConfig
    ? `${contractConfig.label} contract`
    : instance.billing
    ? instance.billing.plan
    : null

  let tooltipContent
  if (isEnterprise && !isCertCentral) {
    tooltipContent = (
      <>
        <p>This product is covered by an enterprise agreement with DigiCert.</p>
        <p>Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team.</p>
        <p>Contact your account manager for contract-related questions.</p>
      </>
    )
  } else if (isEnterprise && isCertCentral && instance.contractType === 'committed-value') {
    tooltipContent = (
      <>
        <p>This CertCentral account is managed through an enterprise agreement with DigiCert.</p>
        <TooltipKVBlock>
          <TooltipKVLabel>Contract type:</TooltipKVLabel>
          <TooltipKVValue>Fixed value</TooltipKVValue>
        </TooltipKVBlock>
        <p>Your organization has committed to a fixed spend amount over the contract term and receives negotiated pricing in return.</p>
        <p>Billing, renewals, and contract changes are managed through your DigiCert account team.</p>
        <p>Contact your account manager for contract-related questions.</p>
      </>
    )
  } else if (isEnterprise && isCertCentral && instance.contractType === 'negotiated-pricing') {
    tooltipContent = (
      <>
        <p>This CertCentral account is managed through an enterprise agreement with DigiCert.</p>
        <TooltipKVBlock>
          <TooltipKVLabel>Contract type:</TooltipKVLabel>
          <TooltipKVValue>Negotiated pricing</TooltipKVValue>
        </TooltipKVBlock>
        <p>Your organization has negotiated pricing for specific products. Purchases and usage are billed according to the agreed pricing terms.</p>
        <p>Billing, renewals, and contract changes are managed through your DigiCert account team.</p>
        <p>Contact your account manager for contract-related questions.</p>
      </>
    )
  } else {
    tooltipContent = (
      <>
        <p>This subscription is purchased and managed through DigiCert's self-service purchasing experience.</p>
        <p>You can manage payment methods, receipts, renewals, and purchases directly from this account.</p>
      </>
    )
  }

  return (
    <KPICard>
      <KPICardHeader>
        <KPILabel style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Plan type
          <PlanInfoBtnWrap ref={wrapRef}>
            <PlanInfoBtn type="button" onClick={() => setTooltipOpen((v) => !v)}>
              <InfoCircleIcon size={13} color="currentColor" />
            </PlanInfoBtn>
            {tooltipOpen && (
              <PlanInfoTooltipBox>{tooltipContent}</PlanInfoTooltipBox>
            )}
          </PlanInfoBtnWrap>
        </KPILabel>
      </KPICardHeader>
      <KPIValue>{planLabel}</KPIValue>
      {secondaryLabel && <PlanTypeSecondary>{secondaryLabel}</PlanTypeSecondary>}
    </KPICard>
  )
}

function computeUsagePct(entitlements) {
  if (!entitlements.length) return null
  const totalAllocated = entitlements.reduce((s, e) => s + e.allocated, 0)
  const totalConsumed = entitlements.reduce((s, e) => s + e.consumed, 0)
  if (totalAllocated === 0) return null
  return Math.round((totalConsumed / totalAllocated) * 100)
}

function UsageCard({ entitlements }) {
  const usagePct = computeUsagePct(entitlements)
  return (
    <KPICard>
      <KPICardHeader>
        <KPILabel>Usage</KPILabel>
        <LayersIcon size={15} color="#9CA3AF" />
      </KPICardHeader>
      {usagePct !== null ? (
        <KPIValue>
          {usagePct}%<KPIValueSmall>consumed</KPIValueSmall>
        </KPIValue>
      ) : (
        <KPIValue>—</KPIValue>
      )}
      <KPISubValue>
        {entitlements.length
          ? `${entitlements.length} entitlement types`
          : 'No usage data available'}
      </KPISubValue>
    </KPICard>
  )
}

function daysUntil(dateStr) {
  const target = new Date(dateStr)
  const now = new Date()
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

function RenewalCard({ dateStr, sub }) {
  const days = daysUntil(dateStr)
  return (
    <KPICard>
      <KPICardHeader>
        <KPILabel>Renewal date</KPILabel>
        <CalendarIcon size={15} color="#9CA3AF" />
      </KPICardHeader>
      <KPIValue>{dateStr}</KPIValue>
      <KPISubValue>{sub || `${days} days remaining`}</KPISubValue>
    </KPICard>
  )
}

// ── (ContractTypeCard merged into PlanTypeCard above) ─────────────────────────

// ── Entitlements table ────────────────────────────────────────────────────────

const TableWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`

const Th = styled.th`
  text-align: ${({ $align }) => $align || 'left'};
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral600};
  background: ${({ theme }) => theme.colors.neutral50};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const Td = styled.td`
  text-align: ${({ $align }) => $align || 'left'};
  padding: 14px 16px;
  color: ${({ theme }) => theme.colors.neutral900};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`

const RemainingValue = styled.span`
  font-weight: 500;
  color: ${({ $tone, theme }) =>
    $tone === 'error' ? '#DC2626' :
    $tone === 'warning' ? '#D97706' :
    theme.colors.neutral900};
`

const NoDataBox = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`

function EntitlementsTable({ entitlements }) {
  if (entitlements.length === 0) {
    return (
      <NoDataBox>
        Usage data is not available for this product yet. Contact your account manager for the
        latest entitlement details.
      </NoDataBox>
    )
  }

  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <Th style={{ width: '30%' }}>Entitlement</Th>
            <Th $align="right">Allocated</Th>
            <Th $align="right">Used</Th>
            <Th $align="right">Remaining</Th>
          </tr>
        </thead>
        <tbody>
          {entitlements.map((ent) => {
            const pct = ent.allocated > 0 ? ent.consumed / ent.allocated : 0
            const tone = ent.remaining < 0 ? 'error' : pct >= 0.8 ? 'warning' : undefined
            return (
              <tr key={ent.name}>
                <Td>{ent.name}</Td>
                <Td $align="right">{ent.allocated.toLocaleString()}</Td>
                <Td $align="right">{ent.consumed.toLocaleString()}</Td>
                <Td $align="right">
                  <RemainingValue $tone={tone}>
                    {ent.remaining < 0
                      ? `Exceeded by ${Math.abs(ent.remaining).toLocaleString()}`
                      : ent.remaining === 0
                      ? '0'
                      : ent.remaining.toLocaleString()}
                  </RemainingValue>
                </Td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </TableWrap>
  )
}

// ── Account team section (unified, contextual) ───────────────────────────────

const AccountTeamCard = styled.div`
  padding: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral50};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AccountTeamTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #D5E6F7;
  color: ${({ theme }) => theme.colors.blue300};
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 0;
`

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`

const AvatarName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const AvatarMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ContactInline = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 13px;
`

const ContactItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

const ContactPhone = styled.span`
  color: ${({ theme }) => theme.colors.neutral700};
`

const HelpCallout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF1FB;
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.neutral800};
`

const HelpCalloutIcon = styled.span`
  display: flex;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.blue300};
`

const FieldLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral700};
  margin-bottom: 6px;
`

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const SubjectInput = styled.input`
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

const MessageRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`

const Textarea = styled.textarea`
  width: 100%;
  min-height: 80px;
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

const SendBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid transparent;
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

function AccountTeamSection({ isCertCentral }) {
  const initials = accountManager.name.split(' ').map((w) => w[0]).join('')

  const helpText = isCertCentral
    ? 'Need more licenses, additional capacity, contract changes, billing help, or renewal assistance? Your DigiCert account manager can help.'
    : 'Have questions about this product, need help with configuration, or want to discuss your entitlements? Your DigiCert account manager can help.'

  return (
    <Section>
      <SectionTitle>Your DigiCert account manager</SectionTitle>
      <AccountTeamCard>
        <AccountTeamTop>
          <AvatarRow>
            <Avatar>{initials}</Avatar>
            <AvatarInfo>
              <AvatarName>{accountManager.name}</AvatarName>
              <AvatarMeta>{accountManager.title}</AvatarMeta>
            </AvatarInfo>
          </AvatarRow>
          <ContactInline>
            <ContactItem>
              <EnvelopeIcon size={14} color="currentColor" />
              <ContactLink href={`mailto:${accountManager.email}`}>{accountManager.email}</ContactLink>
            </ContactItem>
            <ContactItem>
              <PhoneIcon size={14} color="currentColor" />
              <ContactPhone>{accountManager.phone}</ContactPhone>
            </ContactItem>
          </ContactInline>
        </AccountTeamTop>

        <HelpCallout>
          <HelpCalloutIcon><InfoCircleIcon size={16} color="currentColor" /></HelpCalloutIcon>
          <span>{helpText}</span>
        </HelpCallout>

        <FieldGroup>
          <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
          <SubjectInput id="contact-subject" type="text" placeholder="e.g. Request additional SSL/TLS licenses" />
        </FieldGroup>
        <FieldGroup>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea id="contact-message" placeholder="Describe what you need help with..." rows={3} />
        </FieldGroup>
        <FormFooter>
          <FormHelper>Your message will be sent directly to {accountManager.name}.</FormHelper>
          <SendBtn type="button">Send message</SendBtn>
        </FormFooter>
      </AccountTeamCard>
    </Section>
  )
}

// ── Enterprise contract section ───────────────────────────────────────────────

function ContractInfoSection({ instance, isCertCentral }) {
  return (
    <Section>
      <KPIGrid $cols={3}>
        <PlanTypeCard instance={instance} isCertCentral={isCertCentral} />
        <RenewalCard dateStr={instance.renewalDate} sub={instance.contractTerm} />
        <UsageCard entitlements={instance.entitlements} />
      </KPIGrid>
    </Section>
  )
}

// ── E-commerce section ────────────────────────────────────────────────────────

const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`

const BuyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const OutlineLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.neutral800};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
    color: ${({ theme }) => theme.colors.blue300};
  }
`

function EcommerceBillingSection({ instance, isCertCentral }) {
  const [priceAmount, pricePeriod] = instance.billing.price.split(' / ')

  return (
    <Section>
      <KPIGrid $cols={4}>
        <PlanTypeCard instance={instance} isCertCentral={isCertCentral} />

        <KPICard>
          <KPICardHeader>
            <KPILabel>Monthly cost</KPILabel>
            <DollarIcon size={15} color="#9CA3AF" />
          </KPICardHeader>
          <KPIValue $blue>
            {priceAmount}<KPIValueSmall>/ {pricePeriod}</KPIValueSmall>
          </KPIValue>
          <KPISubValue>{instance.billing.plan}</KPISubValue>
        </KPICard>

        <RenewalCard dateStr={instance.billing.nextChargeDate} sub="Auto-renew enabled" />
        <UsageCard entitlements={instance.entitlements} />
      </KPIGrid>

      <ActionsRow>
        <BuyBtn type="button">
          <CartOutlineIcon size={16} color="currentColor" />
          Buy certificates
        </BuyBtn>
        <OutlineLink to="/settings/billing/payment-details">Manage payment details</OutlineLink>
        <OutlineLink to="/settings/billing/receipts">View receipts</OutlineLink>
      </ActionsRow>
    </Section>
  )
}

// ── Product accordions (e-commerce) ───────────────────────────────────────────

const AccordionWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: 12px;
`

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  user-select: none;

  &:hover { background: ${({ theme }) => theme.colors.neutral50}; }
`

const AccordionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const AccordionToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral600};
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 4px;

  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const AccordionName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const AccordionBuyLink = styled.a`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;

  &:hover { text-decoration: underline; }
`

const AccordionBody = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const ProductName = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
`

const ProductType = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
  margin-top: 2px;
`

const EmptyCategoryBox = styled.div`
  padding: 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral500};
  text-align: center;
`

function ProductAccordion({ category }) {
  const [open, setOpen] = useState(category.products.length > 0)

  return (
    <AccordionWrap>
      <AccordionHeader onClick={() => setOpen((v) => !v)}>
        <AccordionLeft>
          <AccordionToggleBtn
            type="button"
            aria-expanded={open}
            aria-label={open ? 'Collapse' : 'Expand'}
            onClick={(e) => { e.stopPropagation(); setOpen((v) => !v) }}
          >
            {open
              ? <ChevronUpIcon size={14} color="currentColor" />
              : <ChevronDownIcon size={14} color="currentColor" />
            }
          </AccordionToggleBtn>
          <AccordionName>{category.name}</AccordionName>
        </AccordionLeft>
        <AccordionBuyLink
          href="#"
          onClick={(e) => e.stopPropagation()}
        >
          {category.buyLabel}
        </AccordionBuyLink>
      </AccordionHeader>

      {open && (
        <AccordionBody>
          {category.products.length === 0 ? (
            <EmptyCategoryBox>No products purchased yet.</EmptyCategoryBox>
          ) : (
            <Table>
              <thead>
                <tr>
                  <Th style={{ width: '40%' }}>Product</Th>
                  <Th $align="right">Purchased</Th>
                  <Th $align="right">Used</Th>
                  <Th $align="right">Available</Th>
                </tr>
              </thead>
              <tbody>
                {category.products.map((p, i) => (
                  <tr key={i}>
                    <Td>
                      <ProductName>{p.name}</ProductName>
                      <ProductType>{p.type}</ProductType>
                    </Td>
                    <Td $align="right">{p.purchased}</Td>
                    <Td $align="right">{p.used}</Td>
                    <Td $align="right">
                      <RemainingValue $tone={p.available === 0 ? 'error' : undefined}>{p.available}</RemainingValue>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </AccordionBody>
      )}
    </AccordionWrap>
  )
}

function ProductsSection({ categories }) {
  return (
    <Section>
      <SectionTitle>Products</SectionTitle>
      {categories.map((cat) => (
        <ProductAccordion key={cat.id} category={cat} />
      ))}
    </Section>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function SubscriptionDetail() {
  const { subscriptionId } = useParams()
  const [activeInstanceId, setActiveInstanceId] = useState(null)

  const subscription = getFixedSubscriptions().find((s) => s.id === subscriptionId)
  const isCertCentral = subscriptionId?.startsWith('certcentral-') ?? false

  useEffect(() => {
    document.title = subscription ? `${subscription.name} — DigiCert ONE` : 'Subscription — DigiCert ONE'
  }, [subscription?.id, subscription?.name])

  useEffect(() => {
    setActiveInstanceId(subscription?.instances[0]?.instanceId ?? null)
  }, [subscriptionId])

  if (!subscription) {
    return (
      <Main>
        <BackLink to="/settings/billing">
          <ChevronLeftIcon size={14} color="currentColor" />
          Back to subscriptions
        </BackLink>
        <NoDataBox>This subscription could not be found.</NoDataBox>
      </Main>
    )
  }

  const activeInstance = subscription.instances.find((i) => i.instanceId === activeInstanceId) || subscription.instances[0]

  return (
    <Main>
      <BackLink to="/settings/billing">
        <ChevronLeftIcon size={14} color="currentColor" />
        Back to subscriptions
      </BackLink>

      <HeaderRow>
        <HeaderLeft>
          <IconBadge>{getIcon(subscription.iconType, 24, 'currentColor')}</IconBadge>
          <TitleBlock>
            <PageTitleRow>
              <PageTitle>{subscription.name}</PageTitle>
              <ActiveBadge>Active</ActiveBadge>
            </PageTitleRow>
            {subscription.accountName && (
              <SummaryLine>{subscription.accountName}</SummaryLine>
            )}
          </TitleBlock>
        </HeaderLeft>
      </HeaderRow>

      {subscription.instances.length > 1 && (
        <InstanceTabRow role="tablist" aria-label="CertCentral instances">
          {subscription.instances.map((instance) => (
            <InstanceTab
              key={instance.instanceId}
              role="tab"
              type="button"
              $active={instance.instanceId === activeInstance.instanceId}
              aria-selected={instance.instanceId === activeInstance.instanceId}
              onClick={() => setActiveInstanceId(instance.instanceId)}
            >
              {instance.subscriptionType === 'enterprise' ? 'Enterprise' : 'E-commerce'}
            </InstanceTab>
          ))}
        </InstanceTabRow>
      )}

      {activeInstance.subscriptionType === 'enterprise' ? (
        <>
          <ContractInfoSection instance={activeInstance} isCertCentral={isCertCentral} />
          <Section>
            <SectionTitle>Entitlements and usage</SectionTitle>
            <EntitlementsTable entitlements={activeInstance.entitlements} />
          </Section>
          <AccountTeamSection isCertCentral={isCertCentral} />
        </>
      ) : (
        <>
          <EcommerceBillingSection instance={activeInstance} isCertCentral={isCertCentral} />
          <ProductsSection categories={activeInstance.productCategories} />
        </>
      )}

    </Main>
  )
}
