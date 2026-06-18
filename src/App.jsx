import { useState, useCallback, useRef, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import TopNav from './components/TopNav'
import IconRail from './components/IconRail'
import SpokeNav from './components/SpokeNav'
import MobileDrawer from './components/MobileDrawer'
import Dashboard from './pages/Dashboard'
import StubPage from './pages/StubPage'
import MySubscriptions from './pages/billing/MySubscriptions'
import SubscriptionDetail from './pages/billing/SubscriptionDetail'
import Receipts from './pages/billing/Receipts'
import PaymentDetails from './pages/billing/PaymentDetails'
import { allRoutes } from './data/navigation'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-padding-top: ${({ theme }) => theme.layout.topNavHeight};
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.neutral900};
    -webkit-font-smoothing: antialiased;
  }

  .skip-link {
    position: absolute;
    top: -9999px;
    left: 0;
    z-index: 9999;
    padding: 8px 16px;
    background: ${({ theme }) => theme.colors.blue300};
    color: white;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 14px;
    text-decoration: none;
    border-radius: 0 0 4px 0;

    &:focus {
      top: 0;
    }
  }
`

const MainContent = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  left: ${({ $leftOffset }) => $leftOffset};
  right: ${({ $rightOffset }) => $rightOffset};
  bottom: 0;
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  transition: left 0.2s ease, right 0.2s ease;

  @media (max-width: 1023px) and (min-width: 768px) {
    left: ${({ theme }) => theme.layout.iconRailWidth};
    right: 0;
  }

  @media (max-width: 767px) {
    left: 0;
    right: 0;
  }
`

function getViewport() {
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

function useViewport() {
  const [vp, setVp] = useState(() => (typeof window !== 'undefined' ? getViewport() : 'desktop'))
  useEffect(() => {
    const handle = () => setVp(getViewport())
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])
  return vp
}

function useAppState() {
  const [activeProductId, setActiveProductId] = useState('dashboard')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isSpokeOpen, setIsSpokeOpen] = useState(true)
  const [activeTopNav, setActiveTopNav] = useState(null)
  const [billingScenario, setBillingScenario] = useState('mixed')

  const toggleDrawer = useCallback(() => setIsDrawerOpen((v) => !v), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])
  const toggleSpoke = useCallback(() => setIsSpokeOpen((v) => !v), [])

  const selectProduct = useCallback((id) => {
    setActiveProductId(id)
    setIsSpokeOpen(true)
  }, [])

  const selectProductFromDrawer = useCallback((id) => {
    setActiveProductId(id)
    setIsSpokeOpen(true)
    setIsDrawerOpen(false)
  }, [])

  const openTopNav = useCallback((panel) => {
    setActiveTopNav((cur) => (cur === panel ? null : panel))
  }, [])

  const closeTopNav = useCallback(() => setActiveTopNav(null), [])

  return {
    activeProductId, isDrawerOpen, isSpokeOpen, activeTopNav, billingScenario,
    toggleDrawer, closeDrawer, toggleSpoke, setBillingScenario,
    selectProduct, selectProductFromDrawer, openTopNav, closeTopNav,
  }
}

export default function App() {
  const {
    activeProductId, isDrawerOpen, isSpokeOpen, activeTopNav, billingScenario,
    toggleDrawer, closeDrawer, toggleSpoke, setBillingScenario,
    selectProduct, selectProductFromDrawer, openTopNav, closeTopNav,
  } = useAppState()

  const viewport = useViewport()
  const isMobile = viewport === 'mobile'
  const mainRef = useRef(null)

  useEffect(() => {
    if (viewport !== 'mobile' && isDrawerOpen) closeDrawer()
  }, [viewport, isDrawerOpen, closeDrawer])

  useEffect(() => {
    const el = mainRef.current
    if (!el) return
    if (isMobile && isDrawerOpen) {
      el.setAttribute('inert', '')
      el.setAttribute('aria-hidden', 'true')
    } else {
      el.removeAttribute('inert')
      el.removeAttribute('aria-hidden')
    }
  }, [isMobile, isDrawerOpen])

  const leftOffset = isSpokeOpen ? '276px' : '56px'
  const rightOffset = activeTopNav === 'ai-assist' ? '400px' : '0px'

  return (
    <>
      <GlobalStyle />

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <TopNav
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={toggleDrawer}
        activeTopNav={activeTopNav}
        onOpenTopNav={openTopNav}
        onCloseTopNav={closeTopNav}
        onSelectProduct={selectProduct}
        cartCount={3}
      />

      <IconRail
        activeProductId={activeProductId}
        onSelectProduct={selectProduct}
      />

      <SpokeNav
        activeProductId={activeProductId}
        isSpokeOpen={isSpokeOpen}
        onToggleSpoke={toggleSpoke}
        billingScenario={billingScenario}
      />

      <MobileDrawer
        open={isDrawerOpen}
        activeProductId={activeProductId}
        onSelectProduct={selectProductFromDrawer}
        onClose={closeDrawer}
      />

      <MainContent
        ref={mainRef}
        id="main-content"
        $leftOffset={leftOffset}
        $rightOffset={rightOffset}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {allRoutes
            .filter((r) => r !== '/')
            .map((r) => {
              let element = <StubPage />
              if (r === '/dashboard') element = <Dashboard />
              else if (r === '/settings/billing') element = <MySubscriptions scenario={billingScenario} onScenarioChange={setBillingScenario} />
              else if (r === '/settings/billing/receipts') element = <Receipts scenario={billingScenario} />
              else if (r === '/settings/billing/payment-details') element = <PaymentDetails scenario={billingScenario} />
              return <Route key={r} path={r} element={element} />
            })}
          <Route path="/settings/billing/:subscriptionId" element={<SubscriptionDetail scenario={billingScenario} />} />
          <Route path="*" element={<StubPage />} />
        </Routes>
      </MainContent>
    </>
  )
}
