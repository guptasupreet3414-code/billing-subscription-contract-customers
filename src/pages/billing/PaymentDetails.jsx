import { useEffect } from 'react'
import styled from 'styled-components'
import { CreditCardIcon } from '../../components/Icons'
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

export default function PaymentDetails() {
  useEffect(() => {
    document.title = 'Payment details — DigiCert ONE'
  }, [])

  return (
    <Main>
      <PageTitle>Payment details</PageTitle>
      <PageDescription>
        View how your account is billed and who to contact about payment information.
      </PageDescription>

      <BillingEmptyState
        icon={<CreditCardIcon size={40} color="currentColor" />}
        title="Payment details are managed through your enterprise contract"
        action={<ContactAccountManagerButton subject="Update billing or payment information" />}
      >
        To update billing or payment information, contact your DigiCert account manager.
      </BillingEmptyState>
    </Main>
  )
}
