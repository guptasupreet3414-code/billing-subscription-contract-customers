import styled from 'styled-components'
import { subscriptionTypeConfig } from '../../data/billingData'
import { InfoCircleIcon } from '../Icons'

const toneStyles = {
  enterprise: { bg: '#EAF1FB', fg: '#0F4C8A' },
  ecommerce: { bg: '#EAF8F1', fg: '#1F8F60' },
}

const sharedStyles = `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  font-family: inherit;
`

const Pill = styled.span`
  ${sharedStyles}
  background: ${({ $type }) => toneStyles[$type].bg};
  color: ${({ $type }) => toneStyles[$type].fg};
`

const PillButton = styled.button`
  ${sharedStyles}
  border: none;
  cursor: pointer;
  background: ${({ $type }) => toneStyles[$type].bg};
  color: ${({ $type }) => toneStyles[$type].fg};
  transition: filter 0.15s ease;

  &:hover { filter: brightness(0.96); }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

export default function SubscriptionTypeBadge({ type, onClick, showInfoIcon = false }) {
  const config = subscriptionTypeConfig[type]

  if (onClick) {
    return (
      <PillButton type="button" $type={type} onClick={onClick} aria-haspopup="dialog">
        {config.label}
        {showInfoIcon && <InfoCircleIcon size={13} color="currentColor" />}
      </PillButton>
    )
  }

  return <Pill $type={type}>{config.label}</Pill>
}
