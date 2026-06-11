import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
  padding: 64px 24px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral50};
`

const IconWrap = styled.div`
  color: ${({ theme }) => theme.colors.neutral400};
`

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const Text = styled.p`
  margin: 0;
  max-width: 460px;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutral600};
`

export default function BillingEmptyState({ icon, title, children, action }) {
  return (
    <Wrap>
      <IconWrap>{icon}</IconWrap>
      {title && <Title>{title}</Title>}
      <Text>{children}</Text>
      {action}
    </Wrap>
  )
}
