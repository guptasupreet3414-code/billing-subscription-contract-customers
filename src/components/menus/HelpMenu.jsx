import styled from 'styled-components'
import { helpLinks } from '../../data/navigation'

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 220px;
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

const MenuList = styled.div`
  padding: 4px 0;
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

export default function HelpMenu({ onClose }) {
  return (
    <Dropdown role="menu" aria-label="Help menu">
      <MenuList>
        {helpLinks.map((link) => (
          <MenuItem
            key={link.label}
            href={link.href}
            role="menuitem"
            onClick={onClose}
          >
            {link.label}
          </MenuItem>
        ))}
      </MenuList>
    </Dropdown>
  )
}
