import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getFixedSubscriptions } from '../../data/billingData'
import SubscriptionCard from '../../components/billing/SubscriptionCard'
import ContactManagerDrawer from '../../components/billing/ContactManagerDrawer'
import { ChatBubbleIcon } from '../../components/Icons'

const Main = styled.main`
  padding: 32px;
`

const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`

const PageTitleBlock = styled.div``

const PageTitle = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PageDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral700};
  max-width: 640px;
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

/* ── Summary cards ── */
const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
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
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`

export default function MySubscriptions() {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false)

  useEffect(() => {
    document.title = 'My subscriptions — DigiCert ONE'
  }, [])

  const subscriptions = getFixedSubscriptions()

  return (
    <Main>
      <PageHeader>
        <PageTitleBlock>
          <PageTitle>My subscriptions</PageTitle>
          <PageDescription>
            View your active product subscriptions, entitlement usage, and renewal information.
          </PageDescription>
        </PageTitleBlock>
        <NeedHelpBtn type="button" onClick={() => setIsContactDrawerOpen(true)}>
          <ChatBubbleIcon size={15} color="currentColor" />
          Contact account manager
        </NeedHelpBtn>
      </PageHeader>

      <ProductGrid>
        {subscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        ))}
      </ProductGrid>

      <ContactManagerDrawer
        open={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
      />
    </Main>
  )
}
