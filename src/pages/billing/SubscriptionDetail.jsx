import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ChevronLeftIcon, ChevronUpIcon, ChevronDownIcon, InfoCircleIcon, CartOutlineIcon, CalendarIcon, DollarIcon, ExternalLinkIcon, DotsVerticalIcon, ChatBubbleIcon, getIcon } from '../../components/Icons'
import { getFixedSubscriptions, contractTypeConfig } from '../../data/billingData'
import ContactManagerDrawer from '../../components/billing/ContactManagerDrawer'
import ContactUsDrawer from '../../components/billing/ContactUsDrawer'
import PeakUsageChart from '../../components/billing/PeakUsageChart'

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

const NeedHelpBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 0;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s;

  &:hover { color: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
    border-radius: 3px;
  }
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
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral500};
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

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`

const HeaderBuyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const ActionMenuWrap = styled.div`
  position: relative;
`

const ActionMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1.5px solid ${({ theme }) => theme.colors.blue300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  padding: 0;
  transition: background 0.12s;

  &:hover { background: rgba(1,116,195,0.06); }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const ActionMenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 210px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  z-index: 50;
  overflow: hidden;
`

const ActionMenuItem = styled.a`
  display: block;
  padding: 10px 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ $destructive, theme }) => $destructive ? '#DC2626' : theme.colors.neutral800};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({ theme }) => theme.colors.neutral50}; }
`

const DualChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ChartBlock = styled.div``

const ChartSubLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral800};
  margin-bottom: 10px;
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
  width: 300px;
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

// ── Shared KPI helper cards ───────────────────────────────────────────────────

function PlanTypeCard({ instance, isCertCentral, plan }) {
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
  const tierLabel = instance.tier || (isEnterprise ? 'Enterprise' : 'E-commerce')

  let tooltipContent
  if (isEnterprise && !isCertCentral) {
    tooltipContent = (
      <>
        <p>This product is covered by an enterprise agreement with DigiCert.</p>
        <p>Contract renewals, billing changes, and additional capacity requests are managed through your DigiCert account team.</p>
        <p>Contact your account manager for contract-related questions.</p>
      </>
    )
  } else if (isEnterprise && isCertCentral) {
    tooltipContent = (
      <>
        <p>This CertCentral account is managed through an enterprise agreement with DigiCert.</p>
        <p>Billing, renewals, and any contract changes are handled directly by your DigiCert account team.</p>
        <p>Contact your account manager for any questions.</p>
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
          Tier
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
      <KPIValue>{tierLabel}</KPIValue>
      {plan && <KPISubValue>{plan}</KPISubValue>}
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
      {sub && <KPISubValue>{sub}</KPISubValue>}
      {!sub && <KPISubValue>{days} days remaining</KPISubValue>}
    </KPICard>
  )
}

function ContractTermCard({ term }) {
  return (
    <KPICard>
      <KPICardHeader>
        <KPILabel>Contract term</KPILabel>
        <CalendarIcon size={15} color="#9CA3AF" />
      </KPICardHeader>
      <KPIValue style={{ fontSize: 15, fontWeight: 600 }}>{term || '—'}</KPIValue>
    </KPICard>
  )
}

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

function EntitlementsTable({ entitlements, contractType }) {
  if (entitlements.length === 0) {
    return (
      <NoDataBox>
        Usage data is not available for this product yet. Contact your account manager for the
        latest entitlement details.
      </NoDataBox>
    )
  }

  if (contractType === 'drawdown') {
    return (
      <TableWrap>
        <Table>
          <thead>
            <tr>
              <Th style={{ width: '45%' }}>Entitlement</Th>
              <Th $align="right">Purchased</Th>
              <Th style={{ width: '20%' }}></Th>
            </tr>
          </thead>
          <tbody>
            {entitlements.map((ent) => (
              <tr key={ent.name}>
                <Td>{ent.name}</Td>
                <Td $align="right">{ent.purchased.toLocaleString()}</Td>
                <Td></Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
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

// ── Section header with toggle ────────────────────────────────────────────────

const SectionHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`

const ViewToggle = styled.div`
  display: inline-flex;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const ViewToggleBtn = styled.button`
  padding: 5px 14px;
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ $active, theme }) => ($active ? theme.colors.blue300 : theme.colors.white)};
  color: ${({ $active }) => ($active ? '#fff' : 'inherit')};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;

  &:last-child { border-right: none; }
  &:hover:not([data-active='true']) { background: ${({ $active, theme }) => (!$active ? theme.colors.neutral50 : undefined)}; }
`

// ── Peak-usage model table ────────────────────────────────────────────────────

function PeakUsageTable({ entitlements, purchasedOnly }) {
  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <Th>Entitlement</Th>
            {purchasedOnly && <Th $align="right">Current active</Th>}
            <Th $align="right">Purchased</Th>
            {!purchasedOnly && <Th $align="right">Consumed</Th>}
            {!purchasedOnly && <Th $align="right">Remaining</Th>}
            {purchasedOnly && <Th $align="right">Period peak</Th>}
          </tr>
        </thead>
        <tbody>
          {entitlements.map(ent => {
            const tone = ent.remaining < 0 ? 'error' : undefined
            return (
              <tr key={ent.name}>
                <Td>{ent.name}</Td>
                {purchasedOnly && <Td $align="right">{ent.consumed?.toLocaleString() ?? '—'}</Td>}
                <Td $align="right">{ent.purchased.toLocaleString()}</Td>
                {!purchasedOnly && <Td $align="right">{ent.consumed.toLocaleString()}</Td>}
                {!purchasedOnly && (
                  <Td $align="right">
                    <RemainingValue $tone={tone}>
                      {ent.remaining < 0
                        ? `Exceeded by ${Math.abs(ent.remaining).toLocaleString()}`
                        : ent.remaining.toLocaleString()}
                    </RemainingValue>
                  </Td>
                )}
                {purchasedOnly && <Td $align="right">{ent.periodPeak?.toLocaleString() ?? '—'}</Td>}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </TableWrap>
  )
}

function PeakUsageUSDTable({ series }) {
  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <Th style={{ width: '40%' }}>Certificate type</Th>
            <Th $align="right">Current month ($)</Th>
            <Th $align="right">Period peak ($)</Th>
            <Th $align="right">Peak date</Th>
          </tr>
        </thead>
        <tbody>
          {series.map(s => {
            const currentCost = s.monthlyCost[s.monthlyCost.length - 1] ?? 0
            const peakCost = Math.max(...s.monthlyCost)
            return (
              <tr key={s.name}>
                <Td>{s.name}</Td>
                <Td $align="right">${currentCost.toLocaleString()}</Td>
                <Td $align="right">${peakCost.toLocaleString()}</Td>
                <Td $align="right">{s.periodPeakDate}</Td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </TableWrap>
  )
}

function PeakUsageMergedTable({ entitlements }) {
  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <Th>Entitlement</Th>
            <Th $align="right">Purchased (Quantities)</Th>
            <Th $align="right">Purchased (USD)</Th>
          </tr>
        </thead>
        <tbody>
          {entitlements.map(ent => (
            <tr key={ent.name}>
              <Td>{ent.name}</Td>
              <Td $align="right">{ent.purchased.toLocaleString()}</Td>
              <Td $align="right">{ent.purchasedUSD ?? '—'}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrap>
  )
}

function PeakUsageSection({ instance, purchasedOnly }) {
  const [viewMode, setViewMode] = useState('table')
  const { peakUsageData } = instance

  const costSeries = peakUsageData.series.map(s => ({
    ...s,
    monthly: s.monthlyCost,
  }))

  return (
    <Section>
      <SectionHeaderRow>
        <SectionTitle style={{ margin: 0 }}>
          {purchasedOnly ? 'Entitlements and usage' : 'Consumption'}
        </SectionTitle>
        <ViewToggle>
          <ViewToggleBtn $active={viewMode === 'table'} onClick={() => setViewMode('table')}>Table</ViewToggleBtn>
          <ViewToggleBtn $active={viewMode === 'chart'} onClick={() => setViewMode('chart')}>Chart</ViewToggleBtn>
        </ViewToggle>
      </SectionHeaderRow>
      {viewMode === 'table' ? (
        purchasedOnly ? (
          <>
            <ChartSubLabel style={{ marginBottom: 10 }}>Consumption quantities</ChartSubLabel>
            <PeakUsageTable entitlements={instance.entitlements} purchasedOnly={true} />
            <div style={{ marginTop: 24 }}>
              <ChartSubLabel style={{ marginBottom: 10 }}>Consumption (USD)</ChartSubLabel>
              <PeakUsageUSDTable series={peakUsageData.series} />
            </div>
          </>
        ) : (
          <PeakUsageTable entitlements={instance.entitlements} purchasedOnly={false} />
        )
      ) : (
          <DualChartWrap>
            <ChartBlock>
              <ChartSubLabel>Consumption (USD)</ChartSubLabel>
              <PeakUsageChart series={costSeries} monthLabels={peakUsageData.monthLabels} yFormat="$" />
            </ChartBlock>
            <ChartBlock>
              <ChartSubLabel>Consumption quantities</ChartSubLabel>
              <PeakUsageChart series={peakUsageData.series} monthLabels={peakUsageData.monthLabels} />
            </ChartBlock>
          </DualChartWrap>
        )
      }
    </Section>
  )
}

// ── Negotiated-pricing: Manage in CertCentral ─────────────────────────────────

const ManageCertCentralCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.white};
  flex-wrap: wrap;
`

const ManageCertCentralText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const ManageCertCentralTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ManageCertCentralDesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const OpenCertCentralBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: ${({ theme }) => theme.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

// ── Software Trust: purchased controls + included resources tables ─────────────

const SectionDesc = styled.p`
  margin: 0 0 14px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

function SoftwareTrustSection({ instance }) {
  const { purchasedControls = [], includedResources = [] } = instance

  return (
    <>
      <Section>
        <SectionTitle>Entitlements and usage</SectionTitle>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <Th style={{ width: '40%' }}>Entitlement</Th>
                <Th $align="right">Allocated</Th>
                <Th $align="right">Used</Th>
                <Th $align="right">Remaining</Th>
              </tr>
            </thead>
            <tbody>
              {purchasedControls.map(ctrl => {
                const pct = ctrl.purchased > 0 ? ctrl.used / ctrl.purchased : 0
                const tone = ctrl.remaining < 0 ? 'error' : pct >= 0.8 ? 'warning' : undefined
                return (
                  <tr key={ctrl.name}>
                    <Td>{ctrl.name}</Td>
                    <Td $align="right">{ctrl.purchased.toLocaleString()}</Td>
                    <Td $align="right">{ctrl.used.toLocaleString()}</Td>
                    <Td $align="right">
                      <RemainingValue $tone={tone}>{ctrl.remaining.toLocaleString()}</RemainingValue>
                    </Td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </TableWrap>
      </Section>

      <Section>
        <SectionTitle>Included resources</SectionTitle>
        <SectionDesc>Resource quotas included with your plan. Quotas increase automatically when you upgrade your plan.</SectionDesc>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <Th style={{ width: '40%' }}>Entitlement</Th>
                <Th $align="right">Allocated</Th>
                <Th $align="right">Used</Th>
                <Th $align="right">Remaining</Th>
              </tr>
            </thead>
            <tbody>
              {includedResources.map(res => {
                const pct = res.available > 0 ? res.used / res.available : 0
                const tone = res.remaining < 0 ? 'error' : pct >= 0.8 ? 'warning' : undefined
                return (
                  <tr key={res.name}>
                    <Td>{res.name}</Td>
                    <Td $align="right">{typeof res.available === 'number' ? res.available.toLocaleString() : res.available}</Td>
                    <Td $align="right">{res.used.toLocaleString()}</Td>
                    <Td $align="right">
                      <RemainingValue $tone={tone}>{res.remaining.toLocaleString()}</RemainingValue>
                    </Td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </TableWrap>
      </Section>
    </>
  )
}

function ManageCertCentralSection() {
  return (
    <Section>
      <ManageCertCentralCard>
        <ManageCertCentralText>
          <ManageCertCentralTitle>Manage finances and funds</ManageCertCentralTitle>
          <ManageCertCentralDesc>
            View purchase history, balance, account pricing, deposit funds, and pay invoices in CertCentral.
          </ManageCertCentralDesc>
        </ManageCertCentralText>
        <OpenCertCentralBtn
          href="https://www.digicert.com/certcentral/finances/purchase-history"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manage finances
          <ExternalLinkIcon size={14} color="currentColor" />
        </OpenCertCentralBtn>
      </ManageCertCentralCard>
    </Section>
  )
}

// ── Enterprise contract section ───────────────────────────────────────────────

function ContractInfoSection({ instance, isCertCentral }) {
  return (
    <Section>
      <KPIGrid $cols={2}>
        <PlanTypeCard instance={instance} isCertCentral={isCertCentral} plan={instance.plan} />
        <ContractTermCard term={instance.contractTerm} />
      </KPIGrid>
    </Section>
  )
}

// ── E-commerce section ────────────────────────────────────────────────────────


function EcommerceBillingSection({ instance, isCertCentral, showLastMonth = true }) {
  const lastMonthAmount = instance.receipts?.[0]?.amount ?? instance.billing.price.split(' / ')[0]

  return (
    <Section>
      <KPIGrid $cols={showLastMonth ? 3 : 2}>
        <PlanTypeCard instance={instance} isCertCentral={isCertCentral} />

        {showLastMonth && <KPICard>
          <KPICardHeader>
            <KPILabel>Last 30 days</KPILabel>
            <DollarIcon size={15} color="#9CA3AF" />
          </KPICardHeader>
          <KPIValue>
            {lastMonthAmount}
          </KPIValue>
          <KPISubValue>Last month's spend</KPISubValue>
        </KPICard>}

        <RenewalCard dateStr={instance.billing.nextChargeDate} sub="Auto-renew enabled" />
      </KPIGrid>
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
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false)
  const [isContactUsDrawerOpen, setIsContactUsDrawerOpen] = useState(false)
  const [actionMenuOpen, setActionMenuOpen] = useState(false)
  const actionMenuRef = useRef(null)

  const subscription = getFixedSubscriptions().find((s) => s.id === subscriptionId)
  const isCertCentral = subscriptionId?.startsWith('certcentral-') ?? false

  useEffect(() => {
    document.title = subscription ? `${subscription.name} — DigiCert ONE` : 'Subscription — DigiCert ONE'
  }, [subscription?.id, subscription?.name])

  useEffect(() => {
    setActiveInstanceId(subscription?.instances[0]?.instanceId ?? null)
  }, [subscriptionId])

  useEffect(() => {
    if (!actionMenuOpen) return
    const handler = (e) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(e.target)) setActionMenuOpen(false)
    }
    const keyHandler = (e) => { if (e.key === 'Escape') setActionMenuOpen(false) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [actionMenuOpen])

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

  const isEcommerceActive = isCertCentral && activeInstance.subscriptionType === 'ecommerce'
  const productOpenName = isCertCentral ? 'CertCentral' : subscription.name
  const detailMenuItems = isEcommerceActive
    ? [
        { label: 'Open CertCentral' },
        { label: 'Documentation' },
        { label: 'Product overview' },
        { label: 'Cancel subscription', destructive: true },
      ]
    : [
        { label: `Open ${productOpenName}` },
        { label: 'Product overview' },
        { label: 'Documentation' },
      ]

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
            </PageTitleRow>
            {subscription.accountName && (
              <SummaryLine>
                <strong>Account name:</strong> {subscription.accountName}
                {subscription.accountId && (
                  <> | <strong>Account ID:</strong> {subscription.accountId}</>
                )}
              </SummaryLine>
            )}
          </TitleBlock>
        </HeaderLeft>
        <HeaderRight>
          {isEcommerceActive ? (
            <NeedHelpBtn type="button" onClick={() => setIsContactUsDrawerOpen(true)}>
              <ChatBubbleIcon size={15} color="currentColor" />
              Contact us
            </NeedHelpBtn>
          ) : (
            <NeedHelpBtn type="button" onClick={() => setIsContactDrawerOpen(true)}>
              <ChatBubbleIcon size={15} color="currentColor" />
              Contact account manager
            </NeedHelpBtn>
          )}
          {isEcommerceActive && (
            <HeaderBuyBtn type="button">
              <CartOutlineIcon size={14} color="currentColor" />
              Buy certificates
            </HeaderBuyBtn>
          )}
          <ActionMenuWrap ref={actionMenuRef}>
            <ActionMenuBtn
              type="button"
              onClick={() => setActionMenuOpen(v => !v)}
              aria-label="More actions"
              aria-expanded={actionMenuOpen}
            >
              <DotsVerticalIcon size={15} color="currentColor" />
            </ActionMenuBtn>
            {actionMenuOpen && (
              <ActionMenuDropdown>
                {detailMenuItems.map(item => (
                  <ActionMenuItem
                    key={item.label}
                    $destructive={item.destructive}
                    href="#"
                    onClick={() => setActionMenuOpen(false)}
                  >
                    {item.label}
                  </ActionMenuItem>
                ))}
              </ActionMenuDropdown>
            )}
          </ActionMenuWrap>
        </HeaderRight>
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
          {subscription.id === 'software-trust' ? (
            <SoftwareTrustSection instance={activeInstance} />
          ) : isCertCentral && activeInstance.contractType === 'peak-usage' ? (
            <PeakUsageSection instance={activeInstance} purchasedOnly={subscription.accountId === '1001445'} />
          ) : (
            <Section>
              <SectionTitle>Entitlements and usage</SectionTitle>
              <EntitlementsTable entitlements={activeInstance.entitlements} contractType={activeInstance.contractType} />
            </Section>
          )}
          {isCertCentral && subscription.accountId !== '1001445' && subscription.accountId !== '2003891' && (
            <ManageCertCentralSection />
          )}
        </>
      ) : (
        <>
          <EcommerceBillingSection
            instance={activeInstance}
            isCertCentral={isCertCentral}
            showLastMonth={subscription.accountId !== '3007234'}
          />
          <ProductsSection categories={activeInstance.productCategories} />
        </>
      )}

      <ContactManagerDrawer
        open={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
      />
      <ContactUsDrawer
        open={isContactUsDrawerOpen}
        onClose={() => setIsContactUsDrawerOpen(false)}
      />
    </Main>
  )
}
