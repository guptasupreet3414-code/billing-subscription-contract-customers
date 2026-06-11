import styled from 'styled-components'

const toneColors = {
  success: '#0174C3',
  warning: '#F5B517',
  error: '#DC2626',
  neutral: '#C1C8CD',
}

const Track = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.neutral200};
  overflow: hidden;
`

const Fill = styled.div`
  height: 100%;
  border-radius: 999px;
  width: ${({ $pct }) => `${$pct}%`};
  background: ${({ $tone }) => toneColors[$tone] ?? toneColors.success};
  transition: width 0.2s ease;
`

export default function UsageBar({ consumed, total, tone = 'success' }) {
  const pct = total > 0 ? Math.min((consumed / total) * 100, 100) : 0
  return (
    <Track role="presentation">
      <Fill $pct={pct} $tone={tone} />
    </Track>
  )
}
