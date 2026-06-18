import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getIcon } from '../Icons'
import { subscriptionTypeConfig } from '../../data/billingData'
import UsageBar from './UsageBar'

// ── Shared card shell ──────────────────────────────────────────────────────────

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
    box-shadow: 0 2px 8px rgba(53,56,58,0.08);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
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
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: #EAF1FB;
  color: ${({ theme }) => theme.colors.blue300};
  flex-shrink: 0;
`

const TitleBlock = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const SubtitleText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const RenewalPill = styled.span`
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  background: rgba(39, 168, 114, 0.10);
  color: #1F8F60;
`

// ── Segmented control (for mixed CertCentral card) ─────────────────────────────

const SegmentedContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: 999px;
  padding: 3px;
`

const SegmentBtn = styled.button`
  flex: 1;
  padding: 6px 12px;
  border: none;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.15s, color 0.15s;
  background: ${({ $active }) => ($active ? 'white' : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.neutral900 : theme.colors.neutral500)};
  box-shadow: ${({ $active }) => ($active ? '0 1px 4px rgba(0,0,0,0.12)' : 'none')};

  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

// ── Entitlement usage bars ─────────────────────────────────────────────────────

const EntitlementBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const EntitlementHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral800};
  margin-bottom: 7px;
`

const EntitlementLabel = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const RemainingText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

// ── Instance meta / e-commerce summary ────────────────────────────────────────

const InstanceMeta = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
  font-weight: 500;
`

const EcomBillingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const EcomPrice = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const EcomMeta = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

// ── Bottom row (managed-by text + more link) ──────────────────────────────────

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
`

const ManagedByText = styled.p`
  margin: 0;
  font-size: 12px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.neutral500};
`

const MoreLink = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  flex-shrink: 0;
`

const NoUsageBlock = styled.div`
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px dashed ${({ theme }) => theme.colors.neutral300};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

// ── Helpers ────────────────────────────────────────────────────────────────────

function singleInstanceSubtitle(subscription) {
  const type = subscription.subscriptionTypes[0]
  return subscriptionTypeConfig[type].label
}

function EntitlementRows({ entitlements, maxVisible = 3 }) {
  const visible = entitlements.slice(0, maxVisible)
  return (
    <EntitlementBlock>
      {visible.map((ent) => (
        <div key={ent.name}>
          <EntitlementHeader>
            <EntitlementLabel>{ent.name}</EntitlementLabel>
            <span>{ent.consumed.toLocaleString()} / {ent.allocated.toLocaleString()}</span>
          </EntitlementHeader>
          <UsageBar consumed={ent.consumed} total={ent.allocated} />
          {ent.remaining < 0 ? (
            <RemainingText>Over by {Math.abs(ent.remaining).toLocaleString()}</RemainingText>
          ) : (
            <RemainingText>{ent.remaining.toLocaleString()} remaining</RemainingText>
          )}
        </div>
      ))}
    </EntitlementBlock>
  )
}

// ── Mixed CertCentral card (enterprise + ecommerce tabs) ──────────────────────

function MixedInstanceCard({ subscription }) {
  const [activeId, setActiveId] = useState(subscription.instances[0].instanceId)
  const instance = subscription.instances.find((i) => i.instanceId === activeId) || subscription.instances[0]
  const isEnterprise = instance.subscriptionType === 'enterprise'
  const visibleEnts = instance.entitlements.slice(0, 3)
  const extraCount = instance.entitlements.length - visibleEnts.length

  return (
    <Card to={`/settings/billing/${subscription.id}`}>
      <CardHeader>
        <HeaderLeft>
          <IconBadge>{getIcon(subscription.iconType, 20, 'currentColor')}</IconBadge>
          <TitleBlock>
            <CardTitle>{subscription.name}</CardTitle>
            <SubtitleText>
              {subscription.subscriptionTypes.map((t) => subscriptionTypeConfig[t].label).join(' · ')}
            </SubtitleText>
          </TitleBlock>
        </HeaderLeft>
        <RenewalPill>Renews {subscription.renewalDate}</RenewalPill>
      </CardHeader>

      <SegmentedContainer onClick={(e) => e.preventDefault()}>
        {subscription.instances.map((inst) => (
          <SegmentBtn
            key={inst.instanceId}
            type="button"
            $active={inst.instanceId === activeId}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveId(inst.instanceId) }}
          >
            {inst.subscriptionType === 'enterprise' ? 'Enterprise' : 'E-commerce'}
          </SegmentBtn>
        ))}
      </SegmentedContainer>

      {isEnterprise ? (
        <>
          {visibleEnts.length > 0
            ? <EntitlementRows entitlements={instance.entitlements} maxVisible={3} />
            : <NoUsageBlock>Usage data not available yet.</NoUsageBlock>
          }
          <BottomRow>
            <ManagedByText>Managed by your Account Manager</ManagedByText>
            {extraCount > 0 && <MoreLink>+{extraCount} more</MoreLink>}
          </BottomRow>
        </>
      ) : (
        <EntitlementRows entitlements={instance.entitlements} maxVisible={3} />
      )}
    </Card>
  )
}

// ── Standard single-instance card ─────────────────────────────────────────────

export default function SubscriptionCard({ subscription }) {
  if (subscription.instances.length > 1) {
    return <MixedInstanceCard subscription={subscription} />
  }

  const { id, name, iconType, renewalDate, entitlements } = subscription
  const isEnterprise = subscription.subscriptionTypes.includes('enterprise')
  const visibleEntitlements = entitlements.slice(0, 3)
  const extraCount = entitlements.length - visibleEntitlements.length
  const hasBottom = isEnterprise

  return (
    <Card to={`/settings/billing/${id}`}>
      <CardHeader>
        <HeaderLeft>
          <IconBadge>{getIcon(iconType, 20, 'currentColor')}</IconBadge>
          <TitleBlock>
            <CardTitle>{name}</CardTitle>
            <SubtitleText>{singleInstanceSubtitle(subscription)}</SubtitleText>
          </TitleBlock>
        </HeaderLeft>
        <RenewalPill>Renews {renewalDate}</RenewalPill>
      </CardHeader>

      {visibleEntitlements.length > 0 ? (
        <EntitlementRows entitlements={entitlements} maxVisible={3} />
      ) : (
        <NoUsageBlock>Usage data is not available for this product yet.</NoUsageBlock>
      )}

      {hasBottom && (
        <BottomRow>
          <ManagedByText>Managed by your Account Manager</ManagedByText>
          {extraCount > 0 && <MoreLink>+{extraCount} more</MoreLink>}
        </BottomRow>
      )}
    </Card>
  )
}
