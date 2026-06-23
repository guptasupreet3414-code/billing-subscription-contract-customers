import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CloseIcon, CreditCardIcon, InboxIcon } from '../Icons'
import { subscriptionTypeConfig } from '../../data/billingData'
import SubscriptionTypeBadge from './SubscriptionTypeBadge'
import ContactAccountManagerButton from './ContactAccountManagerButton'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const Panel = styled.div`
  width: 100%;
  max-width: 560px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const Subtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
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
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover { background: ${({ theme }) => theme.colors.neutral100}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const TabRow = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const Tab = styled.button`
  padding: 8px 4px;
  margin-bottom: -1px;
  border: none;
  border-bottom: 2px solid ${({ theme, $active }) => ($active ? theme.colors.blue300 : 'transparent')};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.blue300 : theme.colors.neutral700)};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover { color: ${({ theme }) => theme.colors.blue300}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const Body = styled.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutral800};
`

const InfoGrid = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 24px;
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

const ActionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const LinkAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.neutral800};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue300};
    color: ${({ theme }) => theme.colors.blue300};
    background: ${({ theme }) => theme.colors.neutral50};
  }
`

function EnterpriseSection({ instance }) {
  const contractTypeLabels = {
    'committed-value': 'Committed Value',
    'negotiated-pricing': 'Negotiated Pricing',
  }
  const contractTypeDescs = {
    'committed-value': 'A contract with a committed spend amount. You receive negotiated pricing in exchange for a minimum purchase commitment over the contract term.',
    'negotiated-pricing': 'A contract with custom pricing negotiated by your account team. You pay per-unit pricing without a minimum spend commitment.',
  }

  return (
    <Body>
      <Description>{subscriptionTypeConfig.enterprise.description}</Description>
      {instance.contractType && (
        <>
          <InfoItem>
            <InfoLabel>Contract type</InfoLabel>
            <InfoValue>{contractTypeLabels[instance.contractType]}</InfoValue>
          </InfoItem>
          <Description style={{ fontSize: '13px', color: '#6B7280' }}>
            {contractTypeDescs[instance.contractType]}
          </Description>
        </>
      )}
      <InfoGrid>
        <InfoItem>
          <InfoLabel>Contract term</InfoLabel>
          <InfoValue>{instance.contractTerm}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Renewal date</InfoLabel>
          <InfoValue>{instance.renewalDate}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Contract ID</InfoLabel>
          <InfoValue>{instance.contractId}</InfoValue>
        </InfoItem>
      </InfoGrid>
      <ActionsRow>
        <ContactAccountManagerButton
          variant="outline"
          subject={`Question about ${instance.instanceLabel} (${instance.contractId})`}
        />
      </ActionsRow>
    </Body>
  )
}

function EcommerceSection({ instance, onClose }) {
  return (
    <Body>
      <Description>{subscriptionTypeConfig.ecommerce.description}</Description>
      <InfoGrid>
        <InfoItem>
          <InfoLabel>Plan</InfoLabel>
          <InfoValue>{instance.billing.plan}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Price</InfoLabel>
          <InfoValue>{instance.billing.price}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Next charge date</InfoLabel>
          <InfoValue>{instance.billing.nextChargeDate}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Payment method</InfoLabel>
          <InfoValue>{instance.paymentMethod.type} •••• {instance.paymentMethod.last4}</InfoValue>
        </InfoItem>
      </InfoGrid>
      <ActionsRow>
        <LinkAction to="/settings/billing/payment-details" onClick={onClose}>
          <CreditCardIcon size={16} color="currentColor" />
          Manage payment details
        </LinkAction>
        <LinkAction to="/settings/billing/receipts" onClick={onClose}>
          <InboxIcon size={16} color="currentColor" />
          View receipts
        </LinkAction>
      </ActionsRow>
    </Body>
  )
}

export default function BillingTypeModal({ open, onClose, instances = [], initialInstanceId }) {
  const closeBtnRef = useRef(null)
  const [activeId, setActiveId] = useState(initialInstanceId || instances[0]?.instanceId)

  useEffect(() => {
    if (open) setActiveId(initialInstanceId || instances[0]?.instanceId)
  }, [open, initialInstanceId, instances])

  useEffect(() => {
    if (!open) return
    closeBtnRef.current?.focus()
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  const active = instances.find((i) => i.instanceId === activeId) || instances[0]
  if (!active) return null

  return createPortal(
    <Overlay onClick={onClose} aria-hidden="false">
      <Panel
        role="dialog"
        aria-modal="true"
        aria-labelledby="billing-type-heading"
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <div>
            <Title id="billing-type-heading">Plan type</Title>
            <Subtitle>
              {instances.length > 1
                ? 'This environment includes both Enterprise and E-commerce CertCentral subscriptions.'
                : 'How this subscription is billed and managed.'}
            </Subtitle>
          </div>
          <CloseBtn ref={closeBtnRef} onClick={onClose} aria-label="Close plan type details">
            <CloseIcon size={16} color="currentColor" />
          </CloseBtn>
        </Header>

        {instances.length > 1 && (
          <TabRow role="tablist" aria-label="Plan type by instance">
            {instances.map((instance) => (
              <Tab
                key={instance.instanceId}
                role="tab"
                type="button"
                $active={instance.instanceId === activeId}
                aria-selected={instance.instanceId === activeId}
                onClick={() => setActiveId(instance.instanceId)}
              >
                {instance.instanceLabel}
                <SubscriptionTypeBadge type={instance.subscriptionType} />
              </Tab>
            ))}
          </TabRow>
        )}

        {instances.length === 1 && (
          <div style={{ padding: '12px 24px 0' }}>
            <SubscriptionTypeBadge type={active.subscriptionType} />
          </div>
        )}

        {active.subscriptionType === 'enterprise' ? (
          <EnterpriseSection instance={active} />
        ) : (
          <EcommerceSection instance={active} onClose={onClose} />
        )}
      </Panel>
    </Overlay>,
    document.body
  )
}
