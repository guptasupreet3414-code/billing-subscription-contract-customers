import styled from 'styled-components'
import { accountManager } from '../../data/billingData'

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.15s ease;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const Outline = styled(Btn)`
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.blue300};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral50};
    color: ${({ theme }) => theme.colors.blue500};
    border-color: ${({ theme }) => theme.colors.blue500};
  }
`

export default function ContactAccountManagerButton({ variant = 'primary', subject, ...rest }) {
  const params = new URLSearchParams({
    subject: subject || `Question about my DigiCert ONE subscription (${accountManager.name})`,
  })
  const href = `mailto:${accountManager.email}?${params.toString()}`
  const Component = variant === 'outline' ? Outline : Btn

  return (
    <Component href={href} {...rest}>
      Contact account manager
    </Component>
  )
}
