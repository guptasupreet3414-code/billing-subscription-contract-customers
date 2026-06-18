import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronUpIcon, ChevronDownIcon, InfoCircleIcon, UserIcon, CartOutlineIcon, CheckCircleIcon, CalendarIcon, LayersIcon, CubeIcon, DollarIcon, CreditCardIcon, getIcon } from '../../components/Icons'
import { getSubscriptions, accountManager, subscriptionTypeConfig } from '../../data/billingData'
import ContactAccountManagerButton from '../../components/billing/ContactAccountManagerButton'
import BillingTypeModal from '../../components/billing/BillingTypeModal'

const billingTypeColors = {
  enterprise: '#0174C3',
  ecommerce: '#1F8F60',
}

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
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

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

const BillingTypeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${({ $type }) => billingTypeColors[$type]};
  cursor: pointer;

  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
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

const InstanceTypeText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $type }) => billingTypeColors[$type]};
`

const Section = styled.section`
  margin-bottom: 32px;
`

const SectionTitle = styled.h2`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral600};
`

const InfoGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px 32px;
  margin: 0;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InfoLabel = styled.dt`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const InfoValue = styled.dd`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

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
  color: ${({ $negative, theme }) => ($negative ? theme.colors.error : theme.colors.neutral900)};
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

const ContactCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral50};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const ContactAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.neutral700};
  flex-shrink: 0;
`

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const ContactName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ContactMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ContactActions = styled.div`
  margin-top: 12px;
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
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
    color: ${({ theme }) => theme.colors.blue300};
    background: ${({ theme }) => theme.colors.neutral50};
  }
`

// ── KPI stat cards (enterprise contract info) ──────────────────────────────────

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const KPICard = styled.div`
  padding: 18px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ $highlight, theme }) => ($highlight ? '#27A872' : theme.colors.neutral200)};
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
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
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

// ── E-commerce subscription summary card ──────────────────────────────────────

const EcomSummaryCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`

const EcomSummaryTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 18px;
`

const EcomSummaryMicroLabel = styled.p`
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral500};
`

const EcomSummaryPrice = styled.p`
  margin: 0 0 5px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral900};
  display: flex;
  align-items: baseline;
  gap: 8px;
`

const EcomSummaryPriceSub = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral600};
`

const EcomSummaryMeta = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const EcomSummaryBuyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
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
`

const EcomSummaryDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.neutral100};
`

const EcomSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 16px 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px 0;
  }
`

const EcomSummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const EcomSummaryItemLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const EcomSummaryItemValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
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
            <Th style={{ width: '40%' }}>Entitlement</Th>
            <Th $align="right">Purchased</Th>
            <Th $align="right">Used</Th>
            <Th $align="right">Available</Th>
          </tr>
        </thead>
        <tbody>
          {entitlements.map((ent) => (
            <tr key={ent.name}>
              <Td>{ent.name}</Td>
              <Td $align="right">{ent.purchased.toLocaleString()}</Td>
              <Td $align="right">{ent.consumed.toLocaleString()}</Td>
              <Td $align="right">
                <RemainingValue $negative={ent.remaining < 0}>
                  {ent.remaining < 0
                    ? `Over by ${Math.abs(ent.remaining).toLocaleString()}`
                    : ent.remaining.toLocaleString()}
                </RemainingValue>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  )
}

function computeUsagePct(entitlements) {
  if (!entitlements.length) return null
  const totalAllocated = entitlements.reduce((s, e) => s + e.allocated, 0)
  const totalConsumed = entitlements.reduce((s, e) => s + e.consumed, 0)
  if (totalAllocated === 0) return null
  return Math.round((totalConsumed / totalAllocated) * 100)
}

function getUsageColor(pct) {
  if (pct >= 100) return '#DC2626'
  if (pct >= 75) return '#D97706'
  return null
}

function StatusCard({ instance, onOpenBillingModal }) {
  const planLabel = subscriptionTypeConfig[instance.subscriptionType].label
  return (
    <KPICard>
      <KPICardHeader>
        <KPILabel>Status</KPILabel>
        <ActiveBadge>Active</ActiveBadge>
      </KPICardHeader>
      <KPIValue>
        {planLabel}
        <PlanInfoBtn type="button" onClick={onOpenBillingModal} aria-haspopup="dialog">
          <InfoCircleIcon size={14} color="currentColor" />
        </PlanInfoBtn>
      </KPIValue>
    </KPICard>
  )
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

function ContractInfoSection({ instance, onOpenBillingModal }) {
  return (
    <Section>
      <KPIGrid>
        <StatusCard instance={instance} onOpenBillingModal={onOpenBillingModal} />

        <KPICard>
          <KPICardHeader>
            <KPILabel>Renewal date</KPILabel>
            <CalendarIcon size={15} color="#9CA3AF" />
          </KPICardHeader>
          <KPIValue>{instance.renewalDate}</KPIValue>
          <KPISubValue>{instance.contractTerm}</KPISubValue>
        </KPICard>

        <UsageCard entitlements={instance.entitlements} />
      </KPIGrid>
    </Section>
  )
}

function AccountManagerSection({ instance }) {
  return (
    <Section>
      <SectionTitle>Your DigiCert account team</SectionTitle>
      <ContactCard>
        <ContactAvatar>
          <UserIcon size={20} color="currentColor" />
        </ContactAvatar>
        <ContactInfo>
          <ContactName>{accountManager.name}</ContactName>
          <ContactMeta>{accountManager.title}</ContactMeta>
          <ContactMeta>{accountManager.email} · {accountManager.phone}</ContactMeta>
          <ContactActions>
            <ContactAccountManagerButton
              variant="outline"
              subject={`Question about ${instance.instanceLabel} (${instance.contractId})`}
            />
          </ContactActions>
        </ContactInfo>
      </ContactCard>
    </Section>
  )
}

function EntitlementsSection({ entitlements }) {
  return (
    <Section>
      <SectionTitle>Entitlements and usage</SectionTitle>
      <EntitlementsTable entitlements={entitlements} />
    </Section>
  )
}

function EcommerceBillingSection({ instance, onOpenBillingModal }) {
  const [priceAmount, pricePeriod] = instance.billing.price.split(' / ')

  return (
    <Section>
      <KPIGrid>
        <StatusCard instance={instance} onOpenBillingModal={onOpenBillingModal} />

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

        <KPICard>
          <KPICardHeader>
            <KPILabel>Renewal date</KPILabel>
            <CalendarIcon size={15} color="#9CA3AF" />
          </KPICardHeader>
          <KPIValue>{instance.billing.nextChargeDate}</KPIValue>
          <KPISubValue>Auto-renew enabled</KPISubValue>
        </KPICard>

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
                      <RemainingValue $negative={p.available === 0}>{p.available}</RemainingValue>
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

export default function SubscriptionDetail({ scenario }) {
  const { subscriptionId } = useParams()
  const [activeInstanceId, setActiveInstanceId] = useState(null)
  const [billingModalOpen, setBillingModalOpen] = useState(false)

  const subscription = getSubscriptions(scenario).find((s) => s.id === subscriptionId)

  useEffect(() => {
    document.title = subscription ? `${subscription.name} — DigiCert ONE` : 'Subscription — DigiCert ONE'
  }, [subscription?.id, subscription?.name])

  useEffect(() => {
    setActiveInstanceId(subscription?.instances[0]?.instanceId ?? null)
  }, [subscriptionId, scenario])

  if (!subscription) {
    return (
      <Main>
        <BackLink to="/settings/billing">
          <ChevronLeftIcon size={14} color="currentColor" />
          Back to Subscriptions
        </BackLink>
        <NoDataBox>This subscription is not available in the current scenario.</NoDataBox>
      </Main>
    )
  }

  const activeInstance = subscription.instances.find((i) => i.instanceId === activeInstanceId) || subscription.instances[0]
  const openBillingModal = () => setBillingModalOpen(true)

  return (
    <Main>
      <BackLink to="/settings/billing">
        <ChevronLeftIcon size={14} color="currentColor" />
        Back to Subscriptions
      </BackLink>

      <HeaderRow>
        <HeaderLeft>
          <IconBadge>{getIcon(subscription.iconType, 24, 'currentColor')}</IconBadge>
          <PageTitle>{subscription.name}</PageTitle>
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
          <ContractInfoSection instance={activeInstance} onOpenBillingModal={openBillingModal} />
          <EntitlementsSection entitlements={activeInstance.entitlements} />
          <AccountManagerSection instance={activeInstance} />
        </>
      ) : (
        <>
          <EcommerceBillingSection instance={activeInstance} onOpenBillingModal={openBillingModal} />
          <ProductsSection categories={activeInstance.productCategories} />
        </>
      )}

      <BillingTypeModal
        open={billingModalOpen}
        onClose={() => setBillingModalOpen(false)}
        instances={subscription.instances}
        initialInstanceId={activeInstance.instanceId}
      />
    </Main>
  )
}
