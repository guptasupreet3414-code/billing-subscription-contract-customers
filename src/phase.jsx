import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

// Prototype-only release phase switch. Not part of the product UI.
// - 'mvp':     Phase 1 — no CertCentral e-commerce card, no "Ecommerce billing" nav
// - 'phase2':  Phase 2 — full layout
export const PHASES = {
  mvp: { id: 'mvp', label: 'Phase 1 (MVP)' },
  phase2: { id: 'phase2', label: 'Phase 2' },
}

const DEFAULT_PHASE = 'mvp'
const STORAGE_KEY = 'prototype-phase'

function readInitialPhase() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('phase')
    if (fromUrl === '1') return 'mvp'
    if (fromUrl === '2') return 'phase2'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (PHASES[stored]) return stored
  } catch {}
  return DEFAULT_PHASE
}

const PhaseContext = createContext({ phase: DEFAULT_PHASE, isMvp: true, setPhase: () => {} })

export function PhaseProvider({ children }) {
  const [phase, setPhaseState] = useState(readInitialPhase)

  const setPhase = useCallback((next) => {
    setPhaseState(next)
    try { window.localStorage.setItem(STORAGE_KEY, next) } catch {}
  }, [])

  return (
    <PhaseContext.Provider value={{ phase, isMvp: phase === 'mvp', setPhase }}>
      {children}
    </PhaseContext.Provider>
  )
}

export function usePhase() {
  return useContext(PhaseContext)
}

// ── Prototype switcher ────────────────────────────────────────────────────────
// Deliberately styled outside the DigiCert design language (dark, monospace,
// dashed outline) so it reads as a review tool, not a product control.

const Switcher = styled.div`
  position: fixed;
  right: 12px;
  bottom: 12px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px 4px 10px;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  background: rgba(17, 24, 39, 0.82);
  color: rgba(255, 255, 255, 0.75);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  line-height: 1;
  opacity: 0.55;
  transition: opacity 0.15s;
  user-select: none;

  &:hover, &:focus-within { opacity: 1; }

  @media print { display: none; }
`

const Tag = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 9px;
  color: rgba(255, 255, 255, 0.5);
`

const Option = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.92)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#111827' : 'rgba(255, 255, 255, 0.75)')};
  font: inherit;
  cursor: ${({ $active }) => ($active ? 'default' : 'pointer')};

  &:hover { color: ${({ $active }) => ($active ? '#111827' : '#fff')}; }
  &:focus-visible { outline: 2px solid #fff; outline-offset: 1px; }
`

export function PhaseSwitcher() {
  const { phase, setPhase } = usePhase()

  useEffect(() => {
    document.documentElement.dataset.prototypePhase = phase
  }, [phase])

  return (
    <Switcher
      role="group"
      aria-label="Prototype layout variant (review tool, not part of the product)"
      title="Prototype review tool — not part of the product UI"
    >
      <Tag>Prototype</Tag>
      {Object.values(PHASES).map((p) => (
        <Option
          key={p.id}
          type="button"
          $active={phase === p.id}
          aria-pressed={phase === p.id}
          onClick={() => setPhase(p.id)}
        >
          {p.label}
        </Option>
      ))}
    </Switcher>
  )
}
