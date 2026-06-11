import { useEffect } from 'react'
import styled from 'styled-components'
import { InboxIcon } from '../../components/Icons'
import BillingEmptyState from '../../components/billing/BillingEmptyState'
import ContactAccountManagerButton from '../../components/billing/ContactAccountManagerButton'

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

export default function Receipts() {
  useEffect(() => {
    document.title = 'Receipts — DigiCert ONE'
  }, [])

  return (
    <Main>
      <PageTitle>Receipts and invoices</PageTitle>
      <PageDescription>
        Download receipts, invoices, and other billing documents for your account.
      </PageDescription>

      <BillingEmptyState
        icon={<InboxIcon size={40} color="currentColor" />}
        title="Receipts are not available here yet"
        action={<ContactAccountManagerButton subject="Request for invoices and billing documents" />}
      >
        For invoices, receipts, or billing documents, contact your DigiCert account manager.
      </BillingEmptyState>
    </Main>
  )
}
