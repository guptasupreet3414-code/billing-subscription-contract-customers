import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ChevronDownIcon, FilterIcon, DownloadIcon, AlertCircleFillIcon, InboxIcon, ChatBubbleIcon } from '../../components/Icons'
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
  margin-bottom: 24px;
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

const SummaryRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`

const SummaryCard = styled.div`
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 16px 20px;
  border: 1px solid ${({ $alert, theme }) => ($alert ? theme.colors.error : theme.colors.neutral200)};
  border-left: 3px solid ${({ $alert, theme }) => ($alert ? theme.colors.error : theme.colors.neutral300)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
`

const SummaryLabel = styled.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
  display: flex;
  align-items: center;
  gap: 6px;
`

const SummaryValue = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: ${({ $blue, theme }) => ($blue ? theme.colors.blue300 : theme.colors.neutral900)};
`

const ToolBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`

const ToolBarRight = styled.div`
  margin-left: auto;
`

const DropdownBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral800};
  cursor: pointer;

  &:hover { background: ${({ theme }) => theme.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const FilterBtn = styled(DropdownBtn)`
  background: ${({ theme }) => theme.colors.blue300};
  border-color: ${({ theme }) => theme.colors.blue300};
  color: white;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; border-color: ${({ theme }) => theme.colors.blue500}; }
`

const DownloadBtn = styled(DropdownBtn)``

const TableWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`

const Th = styled.th`
  text-align: ${({ $align }) => $align || 'left'};
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral600};
  background: ${({ theme }) => theme.colors.neutral50};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  white-space: nowrap;
  user-select: none;
`

const Td = styled.td`
  text-align: ${({ $align }) => $align || 'left'};
  padding: 12px 14px;
  color: ${({ theme }) => theme.colors.neutral900};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral100};
  vertical-align: middle;

  tr:last-child & { border-bottom: none; }
`

const InvoiceLink = styled.a`
  color: ${({ theme }) => theme.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`

const statusStyles = {
  Upcoming: { bg: '#FFF8EB', border: '#F5B517', color: '#92660A' },
  Overdue: { bg: '#FEF2F2', border: '#FCA5A5', color: '#DC2626' },
  Paid: { bg: '#F0FDF4', border: '#86EFAC', color: '#166534' },
  Refund: { bg: '#F5F3FF', border: '#C4B5FD', color: '#6D28D9' },
}

const StatusPill = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ $status }) => statusStyles[$status]?.bg || '#F3F4F6'};
  border: 1px solid ${({ $status }) => statusStyles[$status]?.border || '#D1D5DB'};
  color: ${({ $status }) => statusStyles[$status]?.color || '#374151'};
`

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PayBtn = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`

const DownloadRowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral600};
  cursor: pointer;
  border-radius: 4px;

  &:hover { color: ${({ theme }) => theme.colors.blue300}; background: ${({ theme }) => theme.colors.neutral100}; }
`

const TableFooter = styled.div`
  padding: 12px 16px;
  text-align: right;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral50};
`

const VIEW_OPTIONS = ['All', 'Invoices', 'Receipts', 'Refunds']

const mockRows = [
  { id: 'INV-2025-089', type: 'Invoice', issuedOn: 'Apr 2, 2025', status: 'Upcoming', amount: '$2,100.00', dueOn: 'May 2, 2025', orderedBy: 'John Doe' },
  { id: 'INV-2025-090', type: 'Receipt', issuedOn: 'Mar 20, 2025', status: 'Overdue', amount: '$1,500.00', dueOn: '—', orderedBy: 'Jane Smith' },
  { id: 'INV-2025-090', type: 'Receipt', issuedOn: 'Mar 15, 2025', status: 'Overdue', amount: '$100.00', dueOn: '—', orderedBy: 'Bob Brown' },
  { id: 'INV-2025-090', type: 'Invoice', issuedOn: 'Mar 10, 2025', status: 'Overdue', amount: '$750.00', dueOn: 'Mar 10, 2025', orderedBy: 'Alice John' },
  { id: 'INV-2025-090', type: 'Receipt', issuedOn: 'Mar 1, 2025', status: 'Overdue', amount: '$1,200.00', dueOn: '—', orderedBy: 'Kate Do' },
  { id: 'INV-2025-091', type: 'Invoice', issuedOn: 'Feb 20, 2025', status: 'Paid', amount: '$900.00', dueOn: 'Feb 20, 2025', orderedBy: 'Sarah Lee' },
  { id: 'REC-2025-004', type: 'Receipt', issuedOn: 'Feb 18, 2025', status: 'Paid', amount: '$500.00', dueOn: '—', orderedBy: 'Emily Stone' },
  { id: 'INV-2025-092', type: 'Invoice', issuedOn: 'Feb 15, 2025', status: 'Paid', amount: '$600.00', dueOn: 'Feb 15, 2025', orderedBy: 'Alex John' },
  { id: 'REC-2025-005', type: 'Receipt', issuedOn: 'Feb 10, 2025', status: 'Paid', amount: '$1,800.00', dueOn: '—', orderedBy: 'Kaleb' },
]

export default function Receipts({ scenario }) {
  const [view, setView] = useState('All')
  const [viewOpen, setViewOpen] = useState(false)
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false)

  useEffect(() => {
    document.title = 'Receipts and invoices — DigiCert ONE'
  }, [])

  if (scenario === 'enterprise') {
    return (
      <Main>
        <PageTitle>Receipts and invoices</PageTitle>
        <PageDescription style={{ marginBottom: 24 }}>Download receipts, invoices, and other billing documents for your account.</PageDescription>
        <BillingEmptyState
          icon={<InboxIcon size={40} color="currentColor" />}
          title="Receipts are not available here yet"
          action={<ContactAccountManagerButton subject="Request for invoices and billing documents" />}
        >
          For invoices, receipts, or billing documents, contact your DigiCert account manager.
        </BillingEmptyState>
      </Main>
    )
  }

  const overdueCount = 4
  const overdueBalance = '$2,520.00'
  const nextDue = 'Nov 20, 2025'

  const filteredRows = view === 'All' ? mockRows : mockRows.filter((r) => {
    if (view === 'Invoices') return r.type === 'Invoice'
    if (view === 'Receipts') return r.type === 'Receipt'
    if (view === 'Refunds') return r.type === 'Refund'
    return true
  })

  return (
    <Main>
      <PageHeader>
        <TitleBlock>
          <PageTitle>Receipts and invoices</PageTitle>
          <PageDescription>
            Track your invoices, receipts, and refunds for all e-commerce products, self-service add-ons, and other usage.
          </PageDescription>
        </TitleBlock>
        <NeedHelpBtn type="button" onClick={() => setIsContactDrawerOpen(true)}>
          <ChatBubbleIcon size={15} color="currentColor" />
          Contact account manager
        </NeedHelpBtn>
      </PageHeader>

      <SummaryRow>
        <SummaryCard $alert>
          <SummaryLabel>
            <AlertCircleFillIcon size={14} color="#DC2626" />
            Invoices overdue
          </SummaryLabel>
          <SummaryValue>{overdueCount}</SummaryValue>
        </SummaryCard>
        <SummaryCard $alert>
          <SummaryLabel>
            <AlertCircleFillIcon size={14} color="#DC2626" />
            Total balance overdue
          </SummaryLabel>
          <SummaryValue $blue>{overdueBalance}</SummaryValue>
        </SummaryCard>
        <SummaryCard>
          <SummaryLabel>Next invoice due</SummaryLabel>
          <SummaryValue $blue>{nextDue}</SummaryValue>
        </SummaryCard>
      </SummaryRow>

      <ToolBar>
        <div style={{ position: 'relative' }}>
          <DropdownBtn
            type="button"
            onClick={() => setViewOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={viewOpen}
          >
            View: {view}
            <ChevronDownIcon size={13} color="currentColor" />
          </DropdownBtn>
          {viewOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, marginTop: 4,
              background: 'white', border: '1px solid #E2E5E8', borderRadius: 8,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 100, minWidth: 140,
              overflow: 'hidden',
            }}>
              {VIEW_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setView(opt); setViewOpen(false) }}
                  style={{
                    display: 'block', width: '100%', padding: '9px 16px',
                    textAlign: 'left', border: 'none', cursor: 'pointer',
                    fontSize: 13, fontFamily: 'inherit',
                    background: opt === view ? '#EAF1FB' : 'white',
                    color: opt === view ? '#0174C3' : '#1A1F27',
                    fontWeight: opt === view ? 500 : 400,
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        <FilterBtn type="button">
          <FilterIcon size={14} color="currentColor" />
          Filter
          <ChevronDownIcon size={13} color="currentColor" />
        </FilterBtn>

        <ToolBarRight>
          <DownloadBtn type="button">
            Download CSV
            <ChevronDownIcon size={13} color="currentColor" />
          </DownloadBtn>
        </ToolBarRight>
      </ToolBar>

      <TableWrap>
        <Table>
          <thead>
            <tr>
              <Th style={{ width: '140px' }}>Invoice</Th>
              <Th>Type</Th>
              <Th>Issued on</Th>
              <Th>Status</Th>
              <Th $align="right">Amount</Th>
              <Th>Due on</Th>
              <Th>Ordered by</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, i) => (
              <tr key={`${row.id}-${i}`}>
                <Td>
                  <InvoiceLink href="#">{row.id}</InvoiceLink>
                </Td>
                <Td>{row.type}</Td>
                <Td>{row.issuedOn}</Td>
                <Td>
                  <StatusPill $status={row.status}>{row.status}</StatusPill>
                </Td>
                <Td $align="right">{row.amount}</Td>
                <Td>{row.dueOn}</Td>
                <Td>{row.orderedBy}</Td>
                <Td>
                  <ActionCell>
                    {(row.status === 'Overdue' || row.status === 'Upcoming') && (
                      <PayBtn type="button">Pay</PayBtn>
                    )}
                    <DownloadRowBtn type="button" aria-label="Download">
                      <DownloadIcon size={15} color="currentColor" />
                    </DownloadRowBtn>
                  </ActionCell>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TableFooter>1 to {filteredRows.length} of 8,618</TableFooter>
      </TableWrap>

      <ContactManagerDrawer
        open={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
        helpContext="receipts"
      />
    </Main>
  )
}
