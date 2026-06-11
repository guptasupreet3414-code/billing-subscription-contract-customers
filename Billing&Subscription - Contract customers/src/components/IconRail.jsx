import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { primaryProducts, secondaryProducts } from '../data/navigation'
import { getIcon } from './Icons'

const Rail = styled.nav`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  left: 0;
  bottom: 0;
  width: ${({ theme }) => theme.layout.iconRailWidth};
  background: #E8EAED;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  border-right: 1px solid rgba(0,0,0,0.08);
  z-index: 900;
  overflow: hidden;

  @media (max-width: 767px) {
    display: none;
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Separator = styled.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin: 8px 10px;
  width: calc(100% - 20px);
`

const ItemBtn = styled.button`
  position: relative;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ $active }) => ($active ? '#D1D5DB' : 'transparent')};
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 28px;
    background: ${({ $active }) => ($active ? '#1976D2' : 'transparent')};
    border-radius: 0 2px 2px 0;
    transition: background 0.15s ease;
  }

  &:hover {
    background: ${({ $active }) => ($active ? '#D1D5DB' : '#CDD0D5')};
  }

  &:focus-visible {
    outline: 2px solid #1976D2;
    outline-offset: -2px;
  }
`

const Tooltip = styled.span`
  position: fixed;
  left: calc(56px + 8px);
  transform: translateY(-50%);
  background: rgba(0,0,0,0.82);
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  padding: 4px 8px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 120ms ease;
  z-index: 950;

  @media (max-width: 767px) {
    display: none;
  }
`

const TOOLTIP_DELAY = 350

function RailItem({ product, isActive, onSelect }) {
  const navigate = useNavigate()
  const btnRef = useRef(null)
  const timerRef = useRef(null)
  const [tooltip, setTooltip] = useState({ visible: false, y: 0 })

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const getY = () => {
    const rect = btnRef.current?.getBoundingClientRect()
    return rect ? rect.top + rect.height / 2 : 0
  }

  const showTooltip = (immediate) => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null }
    if (immediate) {
      setTooltip({ visible: true, y: getY() })
    } else {
      timerRef.current = setTimeout(() => setTooltip({ visible: true, y: getY() }), TOOLTIP_DELAY)
    }
  }

  const hideTooltip = () => {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null }
    setTooltip((t) => ({ ...t, visible: false }))
  }

  const handleClick = () => {
    hideTooltip()
    onSelect(product.id)
    navigate(product.route)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { hideTooltip(); return }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick() }
  }

  return (
    <>
      <ItemBtn
        ref={btnRef}
        $active={isActive}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => showTooltip(false)}
        onMouseLeave={hideTooltip}
        onFocus={() => showTooltip(true)}
        onBlur={hideTooltip}
        aria-label={product.ariaLabel}
        aria-current={isActive ? 'page' : undefined}
      >
        {getIcon(product.iconType, 20, isActive ? '#111827' : '#6B7280')}
      </ItemBtn>
      {createPortal(
        <Tooltip $visible={tooltip.visible} style={{ top: `${tooltip.y}px` }} role="tooltip" aria-hidden="true">
          {product.label}
        </Tooltip>,
        document.body
      )}
    </>
  )
}

export default function IconRail({ activeProductId, onSelectProduct }) {
  return (
    <Rail aria-label="Product navigation">
      <Group>
        {primaryProducts.map((p) => (
          <RailItem key={p.id} product={p} isActive={activeProductId === p.id} onSelect={onSelectProduct} />
        ))}
      </Group>
      <Separator />
      <Group>
        {secondaryProducts.map((p) => (
          <RailItem key={p.id} product={p} isActive={activeProductId === p.id} onSelect={onSelectProduct} />
        ))}
      </Group>
    </Rail>
  )
}
