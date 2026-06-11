import styled from 'styled-components'
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

  @media (max-width: 767px) {
    align-self: flex-start;
  }
`

export default function GuidanceBanner() {
  return (
    <Banner role="note">
      <IconWrap>
        <InfoCircleIcon size={20} color="currentColor" />
      </IconWrap>
      <Text>
        Enterprise billing is managed through your DigiCert account representative. You can view
        subscriptions, entitlements, usage, and renewal information here. To request changes or
        additional capacity, contact your account manager.
      </Text>
      <ActionWrap>
        <ContactAccountManagerButton />
      </ActionWrap>
    </Banner>
  )
}
