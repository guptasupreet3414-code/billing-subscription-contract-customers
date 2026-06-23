import { useEffect } from 'react'
import styled from 'styled-components'
import { getSubscriptions, getSummary, getBillingTypeSummary } from '../../data/billingData'
import GuidanceBanner from '../../components/billing/GuidanceBanner'
import SubscriptionCard from '../../components/billing/SubscriptionCard'

const Main = styled.main`
  padding: 32px;
  max-width: 1280px;
`

const PageTitle = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PageDescription = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral700};
  max-width: 640px;
`

const ContextBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`

/* ── Scenario switcher (for design review only) ── */
const ScenarioSwitcher = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ScenarioGroup = styled.div`
  display: inline-flex;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const ScenarioOption = styled.button`
  padding: 6px 12px;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.neutral300};
  background: ${({ theme, $active }) => ($active ? theme.colors.blue300 : theme.colors.white)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.neutral800)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 12px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:first-child { border-left: none; }

  &:hover {
    background: ${({ theme, $active }) => ($active ? theme.colors.blue500 : theme.colors.neutral50)};
  }
`

const scenarios = [
  { id: 'mixed', label: 'Enterprise + E-commerce' },
  { id: 'enterprise', label: 'Enterprise only' },
  { id: 'ecommerce', label: 'E-commerce only' },
]

/* ── Summary cards ── */
const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const SummaryCard = styled.div`
  padding: 18px 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const SummaryLabel = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SummaryValue = styled.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SummarySub = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

/* ── Product subscriptions section ── */
const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export default function MySubscriptions({ scenario, onScenarioChange }) {
  useEffect(() => {
    document.title = 'My subscriptions — DigiCert ONE'
  }, [])

  const visibleSubscriptions = getSubscriptions(scenario)
  const summary = getSummary(visibleSubscriptions)
  const billingType = getBillingTypeSummary(visibleSubscriptions)

  return (
    <Main>
      <PageTitle>My subscriptions</PageTitle>
      <PageDescription>
        View your active product subscriptions, entitlement usage, and renewal information.
      </PageDescription>

      <GuidanceBanner scenario={scenario} />

      <ContextBar>
        <ScenarioSwitcher>
          Scenario:
          <ScenarioGroup>
            {scenarios.map((option) => (
              <ScenarioOption
                key={option.id}
                type="button"
                $active={scenario === option.id}
                onClick={() => onScenarioChange(option.id)}
              >
                {option.label}
              </ScenarioOption>
            ))}
          </ScenarioGroup>
        </ScenarioSwitcher>
      </ContextBar>

      <SummaryGrid>
        <SummaryCard>
          <SummaryLabel>Active subscriptions</SummaryLabel>
          <SummaryValue>{summary.productCount + 1} products</SummaryValue>
          <SummarySub>{summary.certCentralCount} CertCentral account{summary.certCentralCount !== 1 ? 's' : ''} linked</SummarySub>
        </SummaryCard>

        <SummaryCard>
          <SummaryLabel>Next renewal</SummaryLabel>
          <SummaryValue>{summary.earliestRenewal}</SummaryValue>
          <SummarySub>
            {summary.renewalDatesCount > 1
              ? 'Renewal dates vary by product'
              : 'All products renew on this date'}
          </SummarySub>
        </SummaryCard>

        <SummaryCard>
          <SummaryLabel>Usage status</SummaryLabel>
          <SummaryValue>
            {summary.needsAttention > 0 ? `${summary.needsAttention} need attention` : 'All healthy'}
          </SummaryValue>
          <SummarySub>
            {summary.approaching} approaching limit · {summary.over} over entitlement
          </SummarySub>
        </SummaryCard>

        <SummaryCard>
          <SummaryLabel>Billing type</SummaryLabel>
          <SummaryValue>{billingType.label}</SummaryValue>
          <SummarySub>{billingType.sub}</SummarySub>
        </SummaryCard>
      </SummaryGrid>

      <SectionTitle>Product subscriptions</SectionTitle>
      <ProductGrid>
        {visibleSubscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        ))}
      </ProductGrid>
    </Main>
  )
}
