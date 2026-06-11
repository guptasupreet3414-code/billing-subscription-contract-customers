import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ChevronDownIcon } from '../Icons'
import { environments } from '../../data/billingData'

const Wrap = styled.div`
  position: relative;
  display: inline-block;
`

const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral800};
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
    background: ${({ theme }) => theme.colors.neutral50};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

const Label = styled.span`
  color: ${({ theme }) => theme.colors.neutral600};
`

const Value = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 160px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 16px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.08);
  z-index: 50;
  overflow: hidden;
  animation: dropIn 0.12s ease;

  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const Option = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 9px 14px;
  border: none;
  background: ${({ theme, $active }) => ($active ? theme.colors.neutral50 : 'transparent')};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  color: ${({ theme, $active }) => ($active ? theme.colors.blue300 : theme.colors.neutral900)};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral50};
    color: ${({ theme }) => theme.colors.blue300};
  }
`

export default function EnvironmentSelector({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <Wrap ref={ref}>
      <Trigger
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Label>Environment:</Label>
        <Value>{value}</Value>
        <ChevronDownIcon size={14} color="currentColor" />
      </Trigger>
      {open && (
        <Dropdown role="listbox" aria-label="Select environment">
          {environments.map((env) => (
            <Option
              key={env}
              type="button"
              role="option"
              aria-selected={env === value}
              $active={env === value}
              onClick={() => { onChange(env); setOpen(false) }}
            >
              {env}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrap>
  )
}
