import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { settingsAdminLinks, settingsDevLinks } from '../../data/navigation'

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 240px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08);
  z-index: 1100;
  overflow: hidden;
  animation: dropIn 0.12s ease;

  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const SectionLabel = styled.div`
  padding: 12px 16px 10px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral900};
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  margin: 0;
`

const MenuItem = styled.a`
  display: block;
  padding: 9px 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral900};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral50};
    color: ${({ theme }) => theme.colors.blue300};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: -2px;
  }
`

export default function SettingsMenu({ onClose, onSelectProduct }) {
  const navigate = useNavigate()

  const handleClick = (link) => {
    onSelectProduct(link.productId)
    navigate(link.route)
    onClose()
  }

  return (
    <Dropdown role="menu" aria-label="Settings menu">
      <SectionLabel>Settings</SectionLabel>
      <Divider />
      {settingsAdminLinks.map((link) => (
        <MenuItem
          key={link.route}
          href={link.route}
          role="menuitem"
          onClick={(e) => { e.preventDefault(); handleClick(link) }}
        >
          {link.label}
        </MenuItem>
      ))}
      <Divider />
      {settingsDevLinks.map((link) => (
        <MenuItem
          key={link.route}
          href={link.route}
          role="menuitem"
          onClick={(e) => { e.preventDefault(); handleClick(link) }}
        >
          {link.label}
        </MenuItem>
      ))}
    </Dropdown>
  )
}
