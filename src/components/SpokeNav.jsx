import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { productSubNavs } from '../data/navigation'
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon } from './Icons'

const SpokeWrap = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  left: ${({ theme }) => theme.layout.iconRailWidth};
  bottom: 0;
  width: ${({ $open }) => ($open ? '220px' : '4px')};
  overflow: visible;
  z-index: 900;
  transition: ${({ $open }) =>
    $open
      ? 'width 220ms cubic-bezier(0.4,0,0.2,1)'
      : 'width 180ms cubic-bezier(0.4,0,0.2,1) 60ms'};

  @media (max-width: 767px) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`

const SpokeInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #E8EAED;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral300};
`

const SpokeContent = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: ${({ $open }) =>
    $open
      ? 'opacity 100ms cubic-bezier(0.4,0,0.2,1) 60ms'
      : 'opacity 60ms cubic-bezier(0.4,0,0.2,1)'};

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`

const SpokeHeader = styled.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral300};
  flex-shrink: 0;
`

const SpokeTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
  margin: 0;
`

const SpokeBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral300};
    border-radius: 2px;
  }
`

const ToggleBtn = styled.button`
  position: absolute;
  right: -12px;
  top: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: ${({ theme }) => theme.colors.neutral600};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  transform: ${({ $open }) => ($open ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: background 0.15s, color 0.15s, transform 200ms cubic-bezier(0.4,0,0.2,1);

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.neutral900};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`

const TabletOverlay = styled.div`
  display: none;

  @media (max-width: 1023px) and (min-width: 768px) {
    display: ${({ $visible }) => ($visible ? 'block' : 'none')};
    position: fixed;
    top: ${({ theme }) => theme.layout.topNavHeight};
    left: ${({ theme }) => theme.layout.iconRailWidth};
    right: 0;
    bottom: 0;
    z-index: 899;
  }
`

const SectionWrap = styled.div`
  margin-bottom: 2px;
`

const SectionBtn = styled.button`
  display: ${({ $hasTitle }) => ($hasTitle ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ $isNavParent }) => ($isNavParent ? '7px 12px 7px 20px' : '6px 12px 6px 16px')};
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ $isNavParent }) => ($isNavParent ? '13px' : '11px')};
  font-weight: ${({ $isNavParent }) => ($isNavParent ? '400' : '600')};
  color: ${({ theme }) => theme.colors.neutral700};
  text-transform: none;
  letter-spacing: normal;
  transition: color 0.15s, background 0.12s;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral900};
    background: ${({ $isNavParent, theme }) => ($isNavParent ? theme.colors.neutral200 : 'transparent')};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: -2px;
  }
`

const SectionItems = styled.div`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '800px' : '0')};
  transition: max-height 0.2s ease;
`

const NavItem = styled(NavLink)`
  display: block;
  padding: ${({ $indent }) => ($indent ? '7px 12px 7px 32px' : '7px 12px 7px 20px')};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
  text-decoration: none;
  transition: background 0.12s, color 0.12s;
  border-radius: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral200};
    color: ${({ theme }) => theme.colors.neutral900};
  }

  &.active,
  &[aria-current='page'] {
    background: ${({ theme }) => theme.colors.blue300};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: -2px;
  }
`

function NavSection({ section, index }) {
  const [expanded, setExpanded] = useState(section.defaultExpanded ?? index === 0)
  const location = useLocation()
  const hasTitle = !!section.title
  const isNavParent = !!section.isNavParent
  const sectionId = `nav-section-${(section.title || String(index)).replace(/\s+/g, '-').toLowerCase()}`

  return (
    <SectionWrap>
      <SectionBtn
        $hasTitle={hasTitle}
        $isNavParent={isNavParent}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={sectionId}
      >
        <span>{section.title}</span>
        {expanded ? <ChevronUpIcon size={12} color="currentColor" /> : <ChevronDownIcon size={12} color="currentColor" />}
      </SectionBtn>
      <SectionItems id={sectionId} $open={expanded || !hasTitle}>
        {section.items.map((item) => (
          <NavItem
            key={item.route}
            to={item.route}
            end
            $indent={isNavParent}
            aria-current={location.pathname === item.route ? 'page' : undefined}
          >
            {item.label}
          </NavItem>
        ))}
      </SectionItems>
    </SectionWrap>
  )
}

export default function SpokeNav({ activeProductId, isSpokeOpen, onToggleSpoke, billingScenario }) {
  let product = productSubNavs[activeProductId]

  if (activeProductId === 'settings-billing' && billingScenario === 'enterprise') {
    product = {
      ...product,
      sections: product.sections.filter((section) => !section.isSelfService),
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isSpokeOpen) onToggleSpoke()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isSpokeOpen, onToggleSpoke])

  return (
    <>
      <TabletOverlay $visible={isSpokeOpen} onClick={onToggleSpoke} aria-hidden="true" />
      <SpokeWrap $open={isSpokeOpen} id="spoke-panel" aria-hidden={!isSpokeOpen}>
        <SpokeInner>
          <SpokeContent $open={isSpokeOpen}>
            {product && (
              <>
                <SpokeHeader>
                  <SpokeTitle>{product.label}</SpokeTitle>
                </SpokeHeader>
                <SpokeBody>
                  <nav aria-label="Product navigation">
                    {product.sections.map((section, i) => (
                      <NavSection key={section.title || i} section={section} index={i} />
                    ))}
                  </nav>
                </SpokeBody>
              </>
            )}
          </SpokeContent>
        </SpokeInner>
        <ToggleBtn
          $open={isSpokeOpen}
          onClick={onToggleSpoke}
          aria-label="Toggle product navigation"
          aria-expanded={isSpokeOpen}
          aria-controls="spoke-panel"
        >
          <ChevronLeftIcon size={14} color="currentColor" />
        </ToggleBtn>
      </SpokeWrap>
    </>
  )
}
