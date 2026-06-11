import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

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

const UserInfo = styled.div`
  padding: 12px 16px;
`

const UserName = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const UserEmail = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
  margin-top: 2px;
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  margin: 0;
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

  &[data-destructive='true'] {
    color: ${({ theme }) => theme.colors.error};
    &:hover {
      background: #FEF2F2;
      color: ${({ theme }) => theme.colors.error};
    }
  }
`

export default function ProfileMenu({ onClose, onSelectProduct }) {
  const navigate = useNavigate()

  const handleProfile = (e) => {
    e.preventDefault()
    onSelectProduct('profile')
    navigate('/profile')
    onClose()
  }

  return (
    <Dropdown role="menu" aria-label="User profile menu">
      <UserInfo>
        <UserName>Deepika Chauhan</UserName>
        <UserEmail>deepika.chauhan@digicert.com</UserEmail>
      </UserInfo>
      <Divider />
      <MenuList>
        <MenuItem href="/profile" role="menuitem" onClick={handleProfile}>
          My profile
        </MenuItem>
        <Divider />
        <MenuItem href="#" role="menuitem" data-destructive="true" onClick={onClose}>
          Sign out
        </MenuItem>
      </MenuList>
    </Dropdown>
  )
}
