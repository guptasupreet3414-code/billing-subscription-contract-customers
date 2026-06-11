import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { CloseIcon, UserIcon, getIcon } from '../Icons'
import { accountManager } from '../../data/billingData'
import StatusBadge from './StatusBadge'
import UsageBar from './UsageBar'
import ContactAccountManagerButton from './ContactAccountManagerButton'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.2s ease;
`

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 520px;
  max-width: 100vw;
  height: 100vh;
  background: #ffffff;
  z-index: 1200;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0,0,0,0.15);
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  flex-shrink: 0;
`

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`

const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.blue300};
  flex-shrink: 0;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral600};
  transition: background 0.15s;
  flex-shrink: 0;

  &:hover { background: ${({ theme }) => theme.colors.neutral100}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const StatusRow = styled.div`
  display: flex;
  align-items: center;
`

const InfoGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin: 0;
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InfoLabel = styled.dt`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const InfoValue = styled.dd`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SectionTitle = styled.h3`
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral600};
`

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 13px;
`

const Th = styled.th`
  text-align: ${({ $align }) => $align || 'left'};
  padding: 0 0 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral600};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  padding-bottom: 8px;
`

const Td = styled.td`
  text-align: ${({ $align }) => $align || 'left'};
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.neutral900};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral100};
  vertical-align: top;
`

const EntName = styled.div`
  font-weight: 500;
  margin-bottom: 6px;
`

const RemainingValue = styled.span`
  font-weight: 500;
  color: ${({ $negative, theme }) => ($negative ? theme.colors.error : theme.colors.neutral900)};
`

const NoDataBox = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px dashed ${({ theme }) => theme.colors.neutral300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.neutral600};
  font-size: 13px;
  line-height: 20px;
`

const ContactCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral50};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const ContactAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.neutral700};
  flex-shrink: 0;
`

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const ContactName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ContactMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ContactActions = styled.div`
  margin-top: 12px;
`

function statusTone(remaining, total) {
  if (remaining < 0) return 'error'
  if (total > 0 && remaining / total <= 0.15) return 'warning'
  return 'success'
}

export default function SubscriptionDetailDrawer({ subscription, open, onClose }) {
  const closeBtnRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    closeBtnRef.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusable = panel.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return createPortal(
    <>
      <Overlay $open={open} onClick={onClose} aria-hidden="true" />
      <Panel
        $open={open}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscription-detail-heading"
        aria-hidden={!open}
      >
        {subscription && (
          <>
            <Header>
              <HeaderTitle>
                <IconBadge>{getIcon(subscription.iconType, 18, 'currentColor')}</IconBadge>
                <Title id="subscription-detail-heading">{subscription.name}</Title>
              </HeaderTitle>
              <CloseBtn ref={closeBtnRef} onClick={onClose} aria-label="Close subscription details">
                <CloseIcon size={16} color="currentColor" />
              </CloseBtn>
            </Header>

            <Body>
              <div>
                <SectionTitle>Status</SectionTitle>
                <StatusRow>
                  <StatusBadge status={subscription.status} />
                </StatusRow>
              </div>

              <div>
                <SectionTitle>Subscription overview</SectionTitle>
                <InfoGrid>
                  <InfoItem>
                    <InfoLabel>Billing type</InfoLabel>
                    <InfoValue>{subscription.billingType}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Contract ID</InfoLabel>
                    <InfoValue>{subscription.contractId}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Renewal date</InfoLabel>
                    <InfoValue>{subscription.renewalDate}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Environment</InfoLabel>
                    <InfoValue>{subscription.environment}</InfoValue>
                  </InfoItem>
                </InfoGrid>
              </div>

              <div>
                <SectionTitle>Entitlements and usage</SectionTitle>
                {subscription.entitlements.length === 0 ? (
                  <NoDataBox>
                    Usage data is not available for this product yet. Contact your account
                    manager for the latest entitlement details.
                  </NoDataBox>
                ) : (
                  <Table>
                    <thead>
                      <tr>
                        <Th style={{ width: '32%' }}>Entitlement</Th>
                        <Th $align="right">Purchased</Th>
                        <Th $align="right">Allocated</Th>
                        <Th $align="right">Consumed</Th>
                        <Th $align="right">Remaining</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscription.entitlements.map((ent) => (
                        <tr key={ent.name}>
                          <Td>
                            <EntName>{ent.name}</EntName>
                            <UsageBar
                              consumed={ent.consumed}
                              total={ent.allocated}
                              tone={statusTone(ent.remaining, ent.allocated)}
                            />
                          </Td>
                          <Td $align="right">{ent.purchased.toLocaleString()}</Td>
                          <Td $align="right">{ent.allocated.toLocaleString()}</Td>
                          <Td $align="right">{ent.consumed.toLocaleString()}</Td>
                          <Td $align="right">
                            <RemainingValue $negative={ent.remaining < 0}>
                              {ent.remaining < 0
                                ? `Over by ${Math.abs(ent.remaining).toLocaleString()}`
                                : ent.remaining.toLocaleString()}
                            </RemainingValue>
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </div>

              <div>
                <SectionTitle>Need help with this subscription?</SectionTitle>
                <ContactCard>
                  <ContactAvatar>
                    <UserIcon size={20} color="currentColor" />
                  </ContactAvatar>
                  <ContactInfo>
                    <ContactName>{accountManager.name}</ContactName>
                    <ContactMeta>{accountManager.title}</ContactMeta>
                    <ContactMeta>{accountManager.email} · {accountManager.phone}</ContactMeta>
                    <ContactActions>
                      <ContactAccountManagerButton
                        variant="outline"
                        subject={`Question about ${subscription.name} (${subscription.contractId})`}
                      />
                    </ContactActions>
                  </ContactInfo>
                </ContactCard>
              </div>
            </Body>
          </>
        )}
      </Panel>
    </>,
    document.body
  )
}
