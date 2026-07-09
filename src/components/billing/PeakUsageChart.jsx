import { useState, useRef } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  position: relative;
  width: 100%;
  user-select: none;
`

const LegendRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  margin-bottom: 8px;
`

const LegendItem = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 0;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 10px;
  color: ${({ $dim, theme }) => ($dim ? theme.colors.neutral400 : theme.colors.neutral700)};
  cursor: pointer;
  opacity: ${({ $dim }) => ($dim ? 0.5 : 1)};
  transition: opacity 0.15s;
  text-decoration: ${({ $dim }) => ($dim ? 'line-through' : 'none')};
`

const LegendDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
`

const LegendToggles = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
`

const LegendToggleBtn = styled.button`
  padding: 2px 7px;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral600};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral50};
    border-color: ${({ theme }) => theme.colors.neutral400};
  }
`

const SvgWrap = styled.div`
  position: relative;
`

const TooltipBox = styled.div`
  position: absolute;
  pointer-events: none;
  background: rgba(20, 25, 35, 0.9);
  color: white;
  padding: 8px 11px;
  border-radius: 6px;
  font-size: 11px;
  white-space: nowrap;
  z-index: 10;
  min-width: 170px;
  top: 12px;
`

const TooltipTitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  color: #E5E7EB;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const TooltipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.8;
`

const TooltipDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 2px;
  flex-shrink: 0;
`

// SVG coordinate constants — smaller chart
const VW = 620
const VH = 190
const ML = 46
const MR = 16
const MT = 18
const MB = 34
const IW = VW - ML - MR
const IH = VH - MT - MB

function formatTick(v, yFormat) {
  if (yFormat === '$') {
    if (v >= 100000) return `$${(v / 1000).toFixed(0)}k`
    if (v >= 1000) return `$${(v / 1000).toFixed(1)}k`
    return `$${v}`
  }
  if (v >= 1000) return `${(v / 1000).toFixed(0)}k`
  return `${v}`
}

function formatTooltipVal(v, yFormat) {
  if (yFormat === '$') {
    if (v >= 1000) return `$${v.toLocaleString()}`
    return `$${v}`
  }
  return v.toLocaleString()
}

export default function PeakUsageChart({ series, monthLabels, yFormat }) {
  const [hidden, setHidden] = useState(new Set())
  const [hoverIdx, setHoverIdx] = useState(null)
  const svgRef = useRef(null)
  const nM = monthLabels.length

  // Stacked data — hidden series contribute 0 height
  const stacked = monthLabels.map((_, mi) => {
    let cum = 0
    return series.map(s => {
      const v = hidden.has(s.name) ? 0 : s.monthly[mi]
      const lo = cum
      cum += v
      return { lo, hi: cum, val: v }
    })
  })

  const rawMax = Math.max(...stacked.map(m => m[m.length - 1]?.hi || 0), 1)
  const niceMax = Math.ceil((rawMax * 1.1) / 50) * 50

  function xScale(i) { return (i / (nM - 1)) * IW }
  function yScale(v) { return IH - (v / niceMax) * IH }

  // Polygon points for each stacked series
  function areaPoints(si) {
    const top = monthLabels.map((_, i) =>
      `${xScale(i).toFixed(1)},${yScale(stacked[i][si].hi).toFixed(1)}`
    )
    const bot = [...monthLabels].reverse().map((_, rev) => {
      const i = nM - 1 - rev
      return `${xScale(i).toFixed(1)},${yScale(stacked[i][si].lo).toFixed(1)}`
    })
    return [...top, ...bot].join(' ')
  }

  // Y-axis ticks
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(f => ({
    v: Math.round(niceMax * f),
    y: yScale(niceMax * f),
  }))

  // Peak month (highest stacked total)
  const peakIdx = stacked.reduce((best, month, i) => {
    const total = month[month.length - 1]?.hi || 0
    const bestTotal = stacked[best][stacked[best].length - 1]?.hi || 0
    return total > bestTotal ? i : best
  }, 0)

  function handleMouseMove(e) {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const chartLeft = (ML / VW) * rect.width
    const chartRight = ((ML + IW) / VW) * rect.width
    const x = Math.max(chartLeft, Math.min(chartRight, e.clientX - rect.left))
    const frac = (x - chartLeft) / (chartRight - chartLeft)
    setHoverIdx(Math.round(frac * (nM - 1)))
  }

  function toggleSeries(name) {
    setHidden(prev => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  const tooltipLeftPct = hoverIdx !== null ? ((ML + xScale(hoverIdx)) / VW) * 100 : 0
  const tooltipTransform = hoverIdx !== null && hoverIdx > nM - 3
    ? 'translateX(-100%)'
    : hoverIdx !== null && hoverIdx < 2
    ? 'translateX(4px)'
    : 'translateX(-50%)'

  const totalVal = hoverIdx !== null ? stacked[hoverIdx][stacked[hoverIdx].length - 1]?.hi || 0 : 0
  const totalLabel = yFormat === '$' ? 'Total' : 'Total active'

  return (
    <Wrap>
      <LegendRow>
        {series.map(s => (
          <LegendItem
            key={s.name}
            $dim={hidden.has(s.name)}
            type="button"
            onClick={() => toggleSeries(s.name)}
          >
            <LegendDot style={{ background: s.color }} />
            {s.name}
          </LegendItem>
        ))}
        <LegendToggles>
          <LegendToggleBtn type="button" onClick={() => setHidden(new Set())}>All</LegendToggleBtn>
          <LegendToggleBtn type="button" onClick={() => setHidden(new Set(series.map(s => s.name)))}>None</LegendToggleBtn>
        </LegendToggles>
      </LegendRow>

      <SvgWrap>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VW} ${VH}`}
          style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible', cursor: 'crosshair' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverIdx(null)}
        >
          <g transform={`translate(${ML},${MT})`}>
            {/* Horizontal grid lines + Y labels */}
            {yTicks.map(t => (
              <g key={t.v}>
                <line x1={0} y1={t.y.toFixed(1)} x2={IW} y2={t.y.toFixed(1)} stroke="#E5E7EB" strokeWidth={1} />
                <text x={-8} y={t.y.toFixed(1)} textAnchor="end" fontSize={7} fill="#9CA3AF" dominantBaseline="middle">
                  {formatTick(t.v, yFormat)}
                </text>
              </g>
            ))}

            {/* Bottom axis */}
            <line x1={0} y1={IH} x2={IW} y2={IH} stroke="#D1D5DB" strokeWidth={1} />

            {/* X labels — every other tick */}
            {monthLabels.map((label, i) => {
              if (i % 2 !== 0 && i !== nM - 1) return null
              return (
                <text key={i} x={xScale(i).toFixed(1)} y={IH + 13} textAnchor="middle" fontSize={7} fill="#9CA3AF">
                  {label}
                </text>
              )
            })}

            {/* Stacked area polygons (bottom-most first) */}
            {series.map((s, si) => (
              <polygon
                key={s.name}
                points={areaPoints(si)}
                fill={s.color}
                fillOpacity={0.78}
              />
            ))}

            {/* Peak annotation */}
            <g>
              <line
                x1={xScale(peakIdx).toFixed(1)} y1={0}
                x2={xScale(peakIdx).toFixed(1)} y2={IH}
                stroke="#6B7280" strokeWidth={1} strokeDasharray="4,3" opacity={0.55}
              />
              <text
                x={xScale(peakIdx).toFixed(1)} y={-5}
                textAnchor="middle" fontSize={7} fill="#4B5563" fontWeight="600"
              >
                Peak {monthLabels[peakIdx]}
              </text>
            </g>

            {/* Hover cursor line */}
            {hoverIdx !== null && (
              <line
                x1={xScale(hoverIdx).toFixed(1)} y1={0}
                x2={xScale(hoverIdx).toFixed(1)} y2={IH}
                stroke="#374151" strokeWidth={1.5} opacity={0.6}
              />
            )}
          </g>
        </svg>

        {/* HTML tooltip overlay */}
        {hoverIdx !== null && (
          <TooltipBox style={{ left: `${tooltipLeftPct}%`, transform: tooltipTransform }}>
            <TooltipTitle>{monthLabels[hoverIdx]}</TooltipTitle>
            {series.map((s, si) => {
              if (hidden.has(s.name)) return null
              return (
                <TooltipRow key={s.name}>
                  <TooltipDot style={{ background: s.color }} />
                  <span style={{ flex: 1 }}>{s.name}</span>
                  <span style={{ fontWeight: 600 }}>{formatTooltipVal(stacked[hoverIdx][si].val, yFormat)}</span>
                </TooltipRow>
              )
            })}
            <TooltipRow style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 4, paddingTop: 4 }}>
              <span style={{ flex: 1, fontWeight: 600 }}>{totalLabel}</span>
              <span style={{ fontWeight: 700 }}>{formatTooltipVal(totalVal, yFormat)}</span>
            </TooltipRow>
          </TooltipBox>
        )}
      </SvgWrap>
    </Wrap>
  )
}
