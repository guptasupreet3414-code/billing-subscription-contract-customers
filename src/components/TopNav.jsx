import { useRef } from 'react'
import styled from 'styled-components'
import { CartIcon, GearIcon, HelpIcon, SparkleIcon, HamburgerIcon } from './Icons'
import SettingsMenu from './menus/SettingsMenu'
import HelpMenu from './menus/HelpMenu'
import ProfileMenu from './menus/ProfileMenu'
import CartPanel from './CartPanel'
import AIAssistPanel from './AIAssistPanel'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.layout.topNavHeight};
  background: ${({ theme }) => theme.colors.topNavBg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const HamburgerWrap = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`

const Logo = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.02em;
  user-select: none;

  .logo-bold { font-weight: 700; }
  .logo-normal { font-weight: 400; }
`

const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover { background: rgba(255,255,255,0.15); }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }
`

const Badge = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  pointer-events: none;
`

const AvatarBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0D2137;
  border: 2px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 12px;
  font-weight: 700;
  transition: ${({ theme }) => theme.transitions.default};
  margin-left: 4px;

  &:hover { border-color: ${({ theme }) => theme.colors.white}; }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }
`

const MenuWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`

export default function TopNav({
  isDrawerOpen,
  onToggleDrawer,
  activeTopNav,
  onOpenTopNav,
  onCloseTopNav,
  onSelectProduct,
  cartCount = 3,
}) {
  const hasOverlay = activeTopNav === 'settings' || activeTopNav === 'help' || activeTopNav === 'profile'

  return (
    <>
      <Header role="banner">
        <LeftGroup>
          <HamburgerWrap>
            <IconBtn
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="nav-drawer"
              onClick={onToggleDrawer}
            >
              <HamburgerIcon size={20} />
            </IconBtn>
          </HamburgerWrap>

          <Logo aria-label="DigiCert ONE">
            <span className="logo-normal">digicert </span>
            <span className="logo-bold">ONE</span>
          </Logo>
        </LeftGroup>

        <RightGroup>
          {/* Cart */}
          <MenuWrap>
            <IconBtn
              aria-label="Open cart"
              aria-expanded={activeTopNav === 'cart'}
              aria-haspopup="dialog"
              onClick={() => onOpenTopNav('cart')}
            >
              <CartIcon size={20} />
              {cartCount > 0 && <Badge aria-hidden="true">{cartCount}</Badge>}
            </IconBtn>
          </MenuWrap>

          {/* Settings */}
          <MenuWrap>
            <IconBtn
              aria-label="Settings"
              aria-expanded={activeTopNav === 'settings'}
              aria-haspopup="menu"
              onClick={() => onOpenTopNav('settings')}
            >
              <GearIcon size={20} />
            </IconBtn>
            {activeTopNav === 'settings' && (
              <SettingsMenu onClose={onCloseTopNav} onSelectProduct={onSelectProduct} />
            )}
          </MenuWrap>

          {/* Help */}
          <MenuWrap>
            <IconBtn
              aria-label="Help"
              aria-expanded={activeTopNav === 'help'}
              aria-haspopup="menu"
              onClick={() => onOpenTopNav('help')}
            >
              <HelpIcon size={20} />
            </IconBtn>
            {activeTopNav === 'help' && (
              <HelpMenu onClose={onCloseTopNav} />
            )}
          </MenuWrap>

          {/* AI Assist */}
          <IconBtn
            aria-label="Open AI Assist"
            aria-expanded={activeTopNav === 'ai-assist'}
            onClick={() => onOpenTopNav('ai-assist')}
          >
            <SparkleIcon size={20} />
          </IconBtn>

          {/* Profile */}
          <MenuWrap>
            <AvatarBtn
              aria-label="User profile"
              aria-expanded={activeTopNav === 'profile'}
              aria-haspopup="menu"
              onClick={() => onOpenTopNav('profile')}
            >
              D
            </AvatarBtn>
            {activeTopNav === 'profile' && (
              <ProfileMenu onClose={onCloseTopNav} onSelectProduct={onSelectProduct} />
            )}
          </MenuWrap>
        </RightGroup>
      </Header>

      {hasOverlay && <Backdrop onClick={onCloseTopNav} aria-hidden="true" />}

      <CartPanel open={activeTopNav === 'cart'} onClose={onCloseTopNav} />
      <AIAssistPanel open={activeTopNav === 'ai-assist'} onClose={onCloseTopNav} />
    </>
  )
}
