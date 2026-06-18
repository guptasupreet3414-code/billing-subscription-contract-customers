import styled from 'styled-components'

const Track = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #EAF1FB;
  overflow: hidden;
`

const Fill = styled.div`
  height: 100%;
  border-radius: 999px;
  width: ${({ $pct }) => `${$pct}%`};
  background: ${({ theme }) => theme.colors.blue300};
  transition: width 0.2s ease;
`

export default function UsageBar({ consumed, total }) {
  const pct = total > 0 ? Math.min((consumed / total) * 100, 100) : 0
  return (
    <Track role="presentation">
      <Fill $pct={pct} />
    </Track>
  )
}
