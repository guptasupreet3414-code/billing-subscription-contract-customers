import styled from 'styled-components'
import { getIcon, ChevronRightIcon } from '../Icons'
import { statusConfig } from '../../data/billingData'
import StatusBadge from './StatusBadge'
import UsageBar from './UsageBar'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
`

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`

const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.blue300};
  flex-shrink: 0;
`

const TitleBlock = styled.div`
  min-width: 0;
`

const CardTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardMeta = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const RenewalRow = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const EntitlementBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const EntitlementHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral800};
`

const EntitlementLabel = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const RemainingText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme, $tone }) => ($tone === 'error' ? theme.colors.error : theme.colors.neutral600)};
  font-weight: ${({ $tone }) => ($tone === 'error' ? 500 : 400)};
`

const NoUsageBlock = styled.div`
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px dashed ${({ theme }) => theme.colors.neutral300};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`

const ViewDetailsBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral800};
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
    color: ${({ theme }) => theme.colors.blue300};
    background: ${({ theme }) => theme.colors.neutral50};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

export default function SubscriptionCard({ subscription, onViewDetails }) {
  const { name, iconType, billingType, contractId, renewalDate, status, primaryEntitlement } = subscription
  const tone = statusConfig[status].tone

  return (
    <Card>
      <CardHeader>
        <HeaderLeft>
          <IconBadge>{getIcon(iconType, 18, 'currentColor')}</IconBadge>
          <TitleBlock>
            <CardTitle>{name}</CardTitle>
            <CardMeta>{billingType} · {contractId}</CardMeta>
          </TitleBlock>
        </HeaderLeft>
        <StatusBadge status={status} />
      </CardHeader>

      <RenewalRow>Renews {renewalDate}</RenewalRow>

      {primaryEntitlement ? (
        <EntitlementBlock>
          <EntitlementHeader>
            <EntitlementLabel>{primaryEntitlement.label}</EntitlementLabel>
            <span>
              {primaryEntitlement.consumed.toLocaleString()} / {primaryEntitlement.total.toLocaleString()}
            </span>
          </EntitlementHeader>
          <UsageBar consumed={primaryEntitlement.consumed} total={primaryEntitlement.total} tone={tone} />
          {status === 'over-entitlement' ? (
            <RemainingText $tone="error">
              Over entitlement by {(primaryEntitlement.consumed - primaryEntitlement.total).toLocaleString()}
            </RemainingText>
          ) : (
            <RemainingText>
              {(primaryEntitlement.total - primaryEntitlement.consumed).toLocaleString()} remaining
            </RemainingText>
          )}
        </EntitlementBlock>
      ) : (
        <NoUsageBlock>
          Usage data is not available for this product yet.
        </NoUsageBlock>
      )}

      <CardFooter>
        <ViewDetailsBtn type="button" onClick={() => onViewDetails(subscription)}>
          View details
          <ChevronRightIcon size={14} color="currentColor" />
        </ViewDetailsBtn>
      </CardFooter>
    </Card>
  )
}
