/**
 * PROTOTYPE ONLY — delete this file and its usages to clean up.
 * Provides a global `hasAccountManager` toggle for testing both drawer variants.
 */
import { createContext, useContext, useState } from 'react'
import styled from 'styled-components'

const PrototypeContext = createContext({
  hasAccountManager: true,
  setHasAccountManager: () => {},
})

export function usePrototype() {
  return useContext(PrototypeContext)
}

/* ── Toggle UI — rendered inside drawer footers ── */

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

const ProtoLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d97706;
  white-space: nowrap;
  padding-right: 8px;
  border-right: 1px solid #fde68a;
`

const SegmentedControl = styled.div`
  display: flex;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
`

const Segment = styled.button`
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;

  background: ${({ $active }) => ($active ? '#fff' : 'transparent')};
  color: ${({ $active }) => ($active ? '#111827' : '#6b7280')};
  box-shadow: ${({ $active }) => ($active ? '0 1px 3px rgba(0,0,0,0.12)' : 'none')};

  &:hover {
    color: ${({ $active }) => ($active ? '#111827' : '#374151')};
  }
  &:focus-visible {
    outline: 2px solid #f59e0b;
    outline-offset: 1px;
  }
`

export function PrototypeToggle() {
  const { hasAccountManager, setHasAccountManager } = usePrototype()
  return (
    <ToggleWrap>
      <ProtoLabel>Prototype</ProtoLabel>
      <SegmentedControl>
        <Segment
          type="button"
          $active={hasAccountManager === true}
          onClick={() => setHasAccountManager(true)}
        >
          Known account manager
        </Segment>
        <Segment
          type="button"
          $active={hasAccountManager === false}
          onClick={() => setHasAccountManager(false)}
        >
          No account manager
        </Segment>
      </SegmentedControl>
    </ToggleWrap>
  )
}

/* ── Provider ── */

export function PrototypeProvider({ children }) {
  const [hasAccountManager, setHasAccountManager] = useState(true)

  return (
    <PrototypeContext.Provider value={{ hasAccountManager, setHasAccountManager }}>
      {children}
    </PrototypeContext.Provider>
  )
}
