import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { InfoCircleIcon } from '../Icons'
import ContactAccountManagerButton from './ContactAccountManagerButton'

const Banner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF4FC;
  border: 1px solid #C9E3F7;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const IconWrap = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.blue300};
  padding-top: 1px;
`

const Text = styled.p`
  flex: 1;
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutral800};
`

const ActionWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    align-self: flex-start;
  }
`

const ManagePaymentLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const copy = {
  enterprise: 'Enterprise billing is managed through your DigiCert account representative. You can view subscriptions, entitlements, usage, and renewal information here. To request changes or additional capacity, contact your account manager.',
  ecommerce: 'Most of your subscriptions are managed under an Enterprise Contract through your account team. CertCentral is billed separately as a self-service E-commerce subscription — manage its plan, payment details, and receipts here.',
  mixed: 'This environment includes both Enterprise Contract and E-commerce Subscription billing. Enterprise subscriptions are managed by your account team, while E-commerce subscriptions can be managed here, including payment details and receipts.',
}

export default function GuidanceBanner({ scenario }) {
  return (
    <Banner role="note">
      <IconWrap>
        <InfoCircleIcon size={20} color="currentColor" />
      </IconWrap>
      <Text>{copy[scenario] ?? copy.mixed}</Text>
      <ActionWrap>
        {scenario === 'ecommerce' ? (
          <ManagePaymentLink to="/settings/billing/payment-details">Manage payment details</ManagePaymentLink>
        ) : (
          <ContactAccountManagerButton />
        )}
      </ActionWrap>
    </Banner>
  )
}
