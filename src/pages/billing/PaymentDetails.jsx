import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PlusIcon, DotsVerticalIcon, InfoCircleIcon, CreditCardIcon, ChatBubbleIcon } from '../../components/Icons'
import BillingEmptyState from '../../components/billing/BillingEmptyState'
import ContactAccountManagerButton from '../../components/billing/ContactAccountManagerButton'
import ContactManagerDrawer from '../../components/billing/ContactManagerDrawer'

const Main = styled.main`
  padding: 32px;
`

const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
`

const TitleBlock = styled.div``

const PageTitle = styled.h1`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PageDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral600};
  max-width: 600px;
`

const NeedHelpBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 0;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  padding-top: 6px;
  transition: color 0.15s;

  &:hover { color: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
    border-radius: 3px;
  }
`

const SectionBlock = styled.div`
  margin-bottom: 32px;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const AddBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral50};
  }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
`

const CardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const VisaLogo = styled.div`
  width: 56px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  color: #1a1f71;
  letter-spacing: -0.5px;
  background: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
`

const CardInfo = styled.div``

const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`

const CardName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const DefaultBadge = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.neutral800};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 600;
`

const CardExpiry = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral600};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  &:hover { background: ${({ theme }) => theme.colors.neutral100}; color: ${({ theme }) => theme.colors.neutral900}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const ContactCard = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  position: relative;
`

const ContactName = styled.h3`
  margin: 0 0 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ContactMenuBtn = styled(MenuBtn)`
  position: absolute;
  top: 16px;
  right: 16px;
`

const ContactField = styled.div`
  margin-bottom: 14px;

  &:last-child { margin-bottom: 0; }
`

const ContactFieldLabel = styled.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ContactFieldValue = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral900};
  line-height: 1.5;
`

const VatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 3px;
`

export default function PaymentDetails({ scenario }) {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false)

  useEffect(() => {
    document.title = 'Payment details — DigiCert ONE'
  }, [])

  if (scenario === 'enterprise') {
    return (
      <Main>
        <PageTitle>Payment details</PageTitle>
        <PageDescription style={{ marginBottom: 24 }}>
          View how your account is billed and who to contact about payment information.
        </PageDescription>
        <BillingEmptyState
          icon={<CreditCardIcon size={40} color="currentColor" />}
          title="Payment details are managed through your enterprise contract"
          action={<ContactAccountManagerButton subject="Update billing or payment information" />}
        >
          To update billing or payment information, contact your DigiCert account manager.
        </BillingEmptyState>
      </Main>
    )
  }

  return (
    <Main>
      <PageHeader>
        <TitleBlock>
          <PageTitle>Payment details</PageTitle>
          <PageDescription>
            Payments for e-commerce products, self-service add-ons, and other usage are made using your default payment method.
          </PageDescription>
        </TitleBlock>
        <NeedHelpBtn type="button" onClick={() => setIsContactDrawerOpen(true)}>
          <ChatBubbleIcon size={15} color="currentColor" />
          Contact account manager
        </NeedHelpBtn>
      </PageHeader>

      <SectionBlock>
        <SectionHeader>
          <SectionTitle>Payment methods</SectionTitle>
          <AddBtn type="button">
            <PlusIcon size={14} color="currentColor" />
            Add payment method
          </AddBtn>
        </SectionHeader>

        <Card>
          <CardLeft>
            <VisaLogo>VISA</VisaLogo>
            <CardInfo>
              <CardTitleRow>
                <CardName>Visa •••• 8350</CardName>
                <DefaultBadge>Default</DefaultBadge>
              </CardTitleRow>
              <CardExpiry>Expires 02/28</CardExpiry>
            </CardInfo>
          </CardLeft>
          <MenuBtn type="button" aria-label="Payment method options">
            <DotsVerticalIcon size={16} color="currentColor" />
          </MenuBtn>
        </Card>
      </SectionBlock>

      <SectionBlock>
        <SectionHeader>
          <SectionTitle>Billing contacts</SectionTitle>
          <AddBtn type="button">
            <PlusIcon size={14} color="currentColor" />
            Add billing contact
          </AddBtn>
        </SectionHeader>

        <ContactCard>
          <ContactMenuBtn type="button" aria-label="Contact options">
            <DotsVerticalIcon size={16} color="currentColor" />
          </ContactMenuBtn>

          <ContactName>John Doe</ContactName>

          <ContactField>
            <ContactFieldLabel>Address</ContactFieldLabel>
            <ContactFieldValue>
              123 Main Street<br />
              Suite 100<br />
              San Francisco, CA 94105<br />
              United States
            </ContactFieldValue>
          </ContactField>

          <ContactField>
            <ContactFieldLabel>Email address</ContactFieldLabel>
            <ContactFieldValue>john.doe@winthecustomer.com</ContactFieldValue>
          </ContactField>

          <ContactField>
            <ContactFieldLabel>Phone number</ContactFieldLabel>
            <ContactFieldValue>650 123 4567</ContactFieldValue>
          </ContactField>

          <ContactField>
            <VatRow>
              <ContactFieldLabel style={{ margin: 0 }}>VAT ID</ContactFieldLabel>
              <InfoCircleIcon size={14} color="#0174C3" />
            </VatRow>
            <ContactFieldValue>23503820</ContactFieldValue>
          </ContactField>
        </ContactCard>
      </SectionBlock>

      <ContactManagerDrawer
        open={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
        helpContext="payment-details"
      />
    </Main>
  )
}
