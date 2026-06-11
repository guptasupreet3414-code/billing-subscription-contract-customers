import { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { primaryProducts, secondaryProducts, productSubNavs } from '../data/navigation'
import { getIcon, ChevronRightIcon, ChevronLeftIcon, CloseIcon } from './Icons'

const Overlay = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1000;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`

const Drawer = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  left: 0;
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: #ffffff;
  z-index: 1001;
  transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
  display: flex;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }
`

const SlideContainer = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${({ $offset }) => $offset}%);
  transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
`

const Panel = styled.div`
  width: 50%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  flex-shrink: 0;
  gap: 8px;
`

const DrawerTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const HeaderBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral600};
  flex-shrink: 0;
  transition: background 0.12s;

  &:hover { background: ${({ theme }) => theme.colors.neutral100}; }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
  }
`

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`

const Separator = styled.hr`
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 8px 12px;
`

const ProductBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border: none;
  background: ${({ $active }) => ($active ? 'rgba(25,118,210,0.10)' : 'transparent')};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? '500' : '400')};
  color: ${({ $active }) => ($active ? '#1976D2' : '#374151')};
  text-align: left;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;
  overflow: hidden;

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
    transition: background 0.15s;
  }

  &:hover {
    background: ${({ $active }) => ($active ? 'rgba(25,118,210,0.14)' : 'rgba(0,0,0,0.06)')};
    color: ${({ $active }) => ($active ? '#1976D2' : '#111827')};
  }

  &:focus-visible {
    outline: 2px solid #1976D2;
    outline-offset: -2px;
  }
`

const ProductLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`

const SectionTitle = styled.div`
  padding: 10px 16px 4px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral500};
`

const SubNavLink = styled(NavLink)`
  display: block;
  padding: 9px 16px 9px 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
  text-decoration: none;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.neutral900};
  }

  &.active,
  &[aria-current='page'] {
    background: ${({ theme }) => theme.colors.blue300};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`

export default function MobileDrawer({ open, activeProductId, onSelectProduct, onClose }) {
  const navigate = useNavigate()
  const location = useLocation()
  const drawerRef = useRef(null)
  const backBtnRef = useRef(null)
  const [level, setLevel] = useState('l1')
  const [drillId, setDrillId] = useState(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (!open) { setLevel('l1'); setDrillId(null) }
  }, [open])

  useEffect(() => {
    const drawer = drawerRef.current
    if (!drawer) return
    if (open) drawer.removeAttribute('inert')
    else drawer.setAttribute('inert', '')
  }, [open])

  useEffect(() => {
    if (!open) return
    const timer = setTimeout(() => {
      drawerRef.current?.querySelector('button')?.focus()
    }, 50)
    return () => clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const drawer = drawerRef.current
      if (!drawer) return
      const focusable = drawer.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  const handleDrill = (id) => {
    setDrillId(id)
    setLevel('l2')
    setTimeout(() => {
      backBtnRef.current?.focus()
    }, 50)
  }

  const handleBack = () => {
    setLevel('l1')
  }

  const handleProductSelect = (product) => {
    const hasSubNav = !!productSubNavs[product.id]
    if (hasSubNav) {
      handleDrill(product.id)
    } else {
      onSelectProduct(product.id)
      navigate(product.route)
      onClose()
    }
  }

  const handleSubNavClick = () => {
    onClose()
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current)
    if (dx < -80 && dy < 60) onClose()
  }

  const drillProduct = drillId ? productSubNavs[drillId] : null

  return (
    <>
      <Overlay $open={open} onClick={onClose} aria-hidden="true" />
      <Drawer
        $open={open}
        ref={drawerRef}
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <SlideContainer $offset={level === 'l1' ? 0 : -50}>
          {/* L1: Product list */}
          <Panel aria-hidden={level !== 'l1'}>
            <DrawerHeader>
              <DrawerTitle>Navigation</DrawerTitle>
              <HeaderBtn onClick={onClose} aria-label="Close menu">
                <CloseIcon size={16} color="currentColor" />
              </HeaderBtn>
            </DrawerHeader>
            <DrawerBody>
              <nav aria-label="Product list">
                <ProductList>
                  {primaryProducts.map((p) => (
                    <ProductBtn
                      key={p.id}
                      $active={activeProductId === p.id}
                      onClick={() => handleProductSelect(p)}
                      aria-current={activeProductId === p.id ? 'page' : undefined}
                      aria-haspopup={!!productSubNavs[p.id] ? 'menu' : undefined}
                    >
                      {getIcon(p.iconType, 18, activeProductId === p.id ? '#1976D2' : '#6B7280')}
                      <ProductLabel>{p.label}</ProductLabel>
                      {productSubNavs[p.id] && <ChevronRightIcon size={14} color={activeProductId === p.id ? '#1976D2' : '#9CA3AF'} />}
                    </ProductBtn>
                  ))}
                </ProductList>
                <Separator />
                <ProductList>
                  {secondaryProducts.map((p) => (
                    <ProductBtn
                      key={p.id}
                      $active={activeProductId === p.id}
                      onClick={() => handleProductSelect(p)}
                      aria-current={activeProductId === p.id ? 'page' : undefined}
                      aria-haspopup={!!productSubNavs[p.id] ? 'menu' : undefined}
                    >
                      {getIcon(p.iconType, 18, activeProductId === p.id ? '#1976D2' : '#6B7280')}
                      <ProductLabel>{p.label}</ProductLabel>
                      {productSubNavs[p.id] && <ChevronRightIcon size={14} color={activeProductId === p.id ? '#1976D2' : '#9CA3AF'} />}
                    </ProductBtn>
                  ))}
                </ProductList>
              </nav>
            </DrawerBody>
          </Panel>

          {/* L2: Sub-nav */}
          <Panel ref={backBtnRef} aria-hidden={level !== 'l2'}>
            <DrawerHeader>
              <HeaderBtn onClick={handleBack} aria-label="Back to menu">
                <ChevronLeftIcon size={16} color="currentColor" />
              </HeaderBtn>
              <DrawerTitle>{drillProduct?.label ?? ''}</DrawerTitle>
              <HeaderBtn onClick={onClose} aria-label="Close menu">
                <CloseIcon size={16} color="currentColor" />
              </HeaderBtn>
            </DrawerHeader>
            <DrawerBody>
              {drillProduct && (
                <nav aria-label={`${drillProduct.label} navigation`}>
                  {drillProduct.sections.map((section, i) => (
                    <div key={section.title || i}>
                      {section.title && <SectionTitle>{section.title}</SectionTitle>}
                      {section.items.map((item) => (
                        <SubNavLink
                          key={item.route}
                          to={item.route}
                          end
                          aria-current={location.pathname === item.route ? 'page' : undefined}
                          onClick={handleSubNavClick}
                        >
                          {item.label}
                        </SubNavLink>
                      ))}
                    </div>
                  ))}
                </nav>
              )}
            </DrawerBody>
          </Panel>
        </SlideContainer>
      </Drawer>
    </>
  )
}
