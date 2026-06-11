import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  right: 0;
  width: 400px;
  bottom: 0;
  background: #ffffff;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0,0,0,0.12);
  border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.2s ease;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  flex-shrink: 0;
`

const Title = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral600};
  font-size: 18px;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.neutral100}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px 16px;
  gap: 16px;
  overflow-y: auto;
`

const Prompt = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const InputRow = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`

const Input = styled.input`
  flex: 1;
  padding: 9px 12px;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral900};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue300};
    box-shadow: 0 0 0 2px rgba(1, 116, 195, 0.2);
  }

  &::placeholder { color: ${({ theme }) => theme.colors.neutral500}; }
`

const SendBtn = styled.button`
  padding: 9px 16px;
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

export default function AIAssistPanel({ open, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <Panel
      $open={open}
      ref={panelRef}
      role="complementary"
      aria-label="AI Assist panel"
      aria-hidden={!open}
    >
      <Header>
        <Title>AI Assist</Title>
        <CloseBtn onClick={onClose} aria-label="Close AI Assist">×</CloseBtn>
      </Header>
      <Body>
        <Prompt>How can I help you today?</Prompt>
        <InputRow>
          <Input
            type="text"
            placeholder="Ask anything..."
            aria-label="Ask AI Assist"
          />
          <SendBtn aria-label="AI Assist send">Send</SendBtn>
        </InputRow>
      </Body>
    </Panel>
  )
}
