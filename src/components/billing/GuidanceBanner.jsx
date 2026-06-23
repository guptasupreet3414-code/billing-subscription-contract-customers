import styled from 'styled-components'
import { InfoCircleIcon } from '../Icons'

const Banner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
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

const copy = {
  enterprise: 'Enterprise billing is managed through your DigiCert account representative. You can view subscriptions, entitlements, usage, and renewal information here.',
  ecommerce: 'Most of your subscriptions are managed under an Enterprise Contract through your account team. CertCentral is billed separately as a self-service E-commerce subscription.',
  mixed: 'This environment includes both Enterprise Contract and E-commerce Subscription billing. Enterprise subscriptions are managed by your account team, while E-commerce subscriptions can be managed here.',
}

export default function GuidanceBanner({ scenario }) {
  return (
    <Banner role="note">
      <IconWrap>
        <InfoCircleIcon size={20} color="currentColor" />
      </IconWrap>
      <Text>{copy[scenario] ?? copy.mixed}</Text>
    </Banner>
  )
}
