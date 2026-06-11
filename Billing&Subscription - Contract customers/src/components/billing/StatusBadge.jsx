import styled from 'styled-components'
import { CheckCircleIcon, AlertTriangleIcon, AlertCircleIcon, MinusCircleIcon } from '../Icons'
import { statusConfig } from '../../data/billingData'

const toneStyles = {
  success: { bg: 'rgba(39, 168, 114, 0.12)', fg: '#1F8F60' },
  warning: { bg: 'rgba(245, 181, 23, 0.18)', fg: '#92660A' },
  error: { bg: 'rgba(220, 38, 38, 0.10)', fg: '#DC2626' },
  neutral: { bg: '#F0F2F5', fg: '#636A6E' },
}

const toneIcons = {
  success: CheckCircleIcon,
  warning: AlertTriangleIcon,
  error: AlertCircleIcon,
  neutral: MinusCircleIcon,
}

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  background: ${({ $tone }) => toneStyles[$tone].bg};
  color: ${({ $tone }) => toneStyles[$tone].fg};
`

export default function StatusBadge({ status }) {
  const config = statusConfig[status]
  const Icon = toneIcons[config.tone]

  return (
    <Badge $tone={config.tone}>
      <Icon size={14} color="currentColor" />
      {config.label}
    </Badge>
  )
}
