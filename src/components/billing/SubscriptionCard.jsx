import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getIcon, DotsVerticalIcon } from '../Icons'
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
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
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
  flex-shrink: 1;
  min-width: 0;
`

const SubtitleText = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const RenewalPill = styled.span`
  flex-shrink: 0;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  background: #1C7852;
  color: #ffffff;
`

const MetaSection = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, 1fr);
  gap: 10px;
  padding: 10px 0 2px;
`

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`

const MetaLabel = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral500};
`

const MetaValue = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const CardMenuWrap = styled.div`
  position: relative;
  flex-shrink: 0;
`

const CardMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: rgba(1,116,195,0.06); }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const CardHeaderRight = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`

const CardMenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  min-width: 192px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  z-index: 50;
  overflow: hidden;
`

const CardMenuItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 9px 14px;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ $destructive, theme }) => $destructive ? '#DC2626' : theme.colors.neutral800};
  cursor: pointer;
  transition: background 0.1s;

  &:hover { background: ${({ theme }) => theme.colors.neutral50}; }
`

function CardActionMenu({ items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const keyHandler = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', keyHandler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [open])

  return (
    <CardMenuWrap ref={ref}>
      <CardMenuBtn
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(v => !v) }}
        aria-label="More actions"
        aria-expanded={open}
      >
        <DotsVerticalIcon size={14} color="currentColor" />
      </CardMenuBtn>
      {open && (
        <CardMenuDropdown onClick={(e) => e.stopPropagation()}>
          {items.map(item => (
            <CardMenuItem
              key={item.label}
              type="button"
              $destructive={item.destructive}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(false) }}
            >
              {item.label}
            </CardMenuItem>
          ))}
        </CardMenuDropdown>
      )}
    </CardMenuWrap>
  )
}

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

const AccountNameSpan = styled.span``

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

// ── Metadata row helper ────────────────────────────────────────────────────────

function buildMetaItems(subscription) {
  const isCertCentral = subscription.id.startsWith('certcentral-')
  if (isCertCentral) {
    const hasEnt = subscription.subscriptionTypes.includes('enterprise')
    const hasEcom = subscription.subscriptionTypes.includes('ecommerce')
    const tierLabel = hasEnt && hasEcom ? 'Enterprise + E-commerce' : hasEnt ? 'Enterprise' : 'E-commerce'
    return [
      { label: 'Tier', value: tierLabel },
      { label: 'Account name', value: subscription.accountName },
      { label: 'Account ID', value: subscription.accountId },
    ]
  }
  const tierValue = subscription.tier || 'Enterprise'
  const items = [{ label: 'Tier', value: tierValue }]
  if (subscription.plan) items.push({ label: 'Plan', value: subscription.plan })
  if (subscription.autoRenewal !== undefined) items.push({ label: 'Auto-renewal', value: subscription.autoRenewal ? 'On' : 'Off' })
  return items
}

// ── Mixed CertCentral card (enterprise + ecommerce tabs) ──────────────────────

function MixedInstanceCard({ subscription }) {
  const [activeId, setActiveId] = useState(subscription.instances[0].instanceId)
  const instance = subscription.instances.find((i) => i.instanceId === activeId) || subscription.instances[0]
  const isEnterprise = instance.subscriptionType === 'enterprise'
  const visibleEnts = instance.entitlements.slice(0, 3)
  const extraCount = instance.entitlements.length - visibleEnts.length

  const mixedMenuItems = [
    { label: 'Open CertCentral' },
    { label: 'Documentation' },
  ]

  const metaItems = buildMetaItems(subscription)

  return (
    <Card to={`/settings/billing/${subscription.id}`}>
      <CardHeader>
        <HeaderLeft>
          <IconBadge>{getIcon(subscription.iconType, 20, 'currentColor')}</IconBadge>
          <TitleBlock>
            <CardTitleRow>
              <CardTitle>{subscription.name}</CardTitle>
              <RenewalPill>Renews {subscription.renewalDate}</RenewalPill>
            </CardTitleRow>
          </TitleBlock>
        </HeaderLeft>
        <CardHeaderRight>
          <CardActionMenu items={mixedMenuItems} />
        </CardHeaderRight>
      </CardHeader>
      <MetaSection $cols={metaItems.length}>
        {metaItems.map(item => (
          <MetaItem key={item.label}>
            <MetaLabel>{item.label}</MetaLabel>
            <MetaValue>{item.value}</MetaValue>
          </MetaItem>
        ))}
      </MetaSection>

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
            {extraCount > 0 && <MoreLink>+{extraCount} more</MoreLink>}
            <ManagedByText>Managed by your Account Manager</ManagedByText>
          </BottomRow>
        </>
      ) : (
        <>
          <EntitlementRows entitlements={instance.entitlements} maxVisible={3} />
          <BottomRow>
            <span />
            <ManagedByText>Self-service subscription</ManagedByText>
          </BottomRow>
        </>
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
  const isEcommerce = subscription.subscriptionTypes.includes('ecommerce')
  const isEcommerceOnly = isEcommerce && !isEnterprise
  const isCertCentral = id.startsWith('certcentral-')
  const visibleEntitlements = entitlements.slice(0, 3)
  const extraCount = entitlements.length - visibleEntitlements.length

  const bottomText = isEnterprise
    ? 'Managed by your Account Manager'
    : isEcommerce
    ? 'Self-service subscription'
    : null

  const productOpenName = isCertCentral ? 'CertCentral' : name
  const cardMenuItems = isEcommerceOnly && isCertCentral
    ? [
        { label: 'Open CertCentral' },
        { label: 'Documentation' },
        { label: 'Cancel subscription', destructive: true },
      ]
    : [
        { label: `Open ${productOpenName}` },
        { label: 'Documentation' },
      ]

  const metaItems = buildMetaItems(subscription)

  return (
    <Card to={`/settings/billing/${id}${subscription.envId ? `?env=${subscription.envId}` : ''}`}>
      <CardHeader>
        <HeaderLeft>
          <IconBadge>{getIcon(iconType, 20, 'currentColor')}</IconBadge>
          <TitleBlock>
            <CardTitleRow>
              <CardTitle>{name}</CardTitle>
              {isEcommerceOnly && renewalDate && <RenewalPill>Renews {renewalDate}</RenewalPill>}
            </CardTitleRow>
            {(subscription.envNames || subscription.envId) && (
              <SubtitleText>
                {subscription.envNames
                  ? subscription.envNames.join(', ')
                  : subscription.envName}
              </SubtitleText>
            )}
          </TitleBlock>
        </HeaderLeft>
        <CardHeaderRight>
          <CardActionMenu items={cardMenuItems} />
        </CardHeaderRight>
      </CardHeader>
      <MetaSection $cols={metaItems.length}>
        {metaItems.map(item => (
          <MetaItem key={item.label}>
            <MetaLabel>{item.label}</MetaLabel>
            <MetaValue>{item.value}</MetaValue>
          </MetaItem>
        ))}
      </MetaSection>

      {visibleEntitlements.length > 0 ? (
        <EntitlementRows entitlements={entitlements} maxVisible={3} />
      ) : (
        <NoUsageBlock>Usage data is not available for this product yet.</NoUsageBlock>
      )}

      {bottomText && (
        <BottomRow>
          {extraCount > 0 ? <MoreLink>+{extraCount} more</MoreLink> : <span />}
          <ManagedByText>{bottomText}</ManagedByText>
        </BottomRow>
      )}
    </Card>
  )
}
