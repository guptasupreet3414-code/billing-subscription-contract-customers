import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ENVIRONMENTS, getMultiEnvSubscriptions } from '../../data/billingData'
import SubscriptionCard from '../../components/billing/SubscriptionCard'
import ContactManagerDrawer from '../../components/billing/ContactManagerDrawer'
import { LifeRingIcon, ChevronDownIcon } from '../../components/Icons'

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

const PageTitleBlock = styled.div``

const PageTitle = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PageDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral700};
  max-width: 640px;
`

const NeedHelpBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
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
  transition: color 0.15s;

  &:hover { color: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
    border-radius: 3px;
  }
`

/* ── Summary cards ── */
const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const SummaryCard = styled.div`
  padding: 18px 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const SummaryLabel = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SummaryValue = styled.p`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const SummarySub = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral600};
`

/* ── Product subscriptions section ── */
const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral900};
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(358px, auto);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`

/* ── Filter bar ── */
const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

const FilterDropdownBtn = styled.button`
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

const FilterDropdownList = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 220px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow: hidden;
`

const FilterDropdownItem = styled.button`
  display: block;
  width: 100%;
  padding: 9px 16px;
  text-align: left;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-family: inherit;
  background: ${({ $active, theme }) => ($active ? '#EAF1FB' : theme.colors.white)};
  color: ${({ $active, theme }) => ($active ? theme.colors.blue300 : theme.colors.neutral800)};
  font-weight: ${({ $active }) => ($active ? 500 : 400)};

  &:hover { background: ${({ $active, theme }) => ($active ? '#EAF1FB' : theme.colors.neutral50)}; }
`

export default function MySubscriptions() {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const envFilter = searchParams.get('env') || 'all'
  const productFilter = searchParams.get('product') || 'all'
  const [envDropdownOpen, setEnvDropdownOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const envDropdownRef = useRef(null)
  const productDropdownRef = useRef(null)

  useEffect(() => {
    document.title = 'My subscriptions — DigiCert ONE'
  }, [])

  useEffect(() => {
    if (!envDropdownOpen) return
    const handler = (e) => {
      if (envDropdownRef.current && !envDropdownRef.current.contains(e.target)) setEnvDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [envDropdownOpen])

  useEffect(() => {
    if (!productDropdownOpen) return
    const handler = (e) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(e.target)) setProductDropdownOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [productDropdownOpen])

  const allSubscriptions = getMultiEnvSubscriptions()
  const uniqueProducts = [...new Map(allSubscriptions.map(s => [s.name, { id: s.name, name: s.name }])).values()]

  const filteredSubscriptions = allSubscriptions.filter(s => {
    if (envFilter !== 'all') {
      const passesEnv = s.envIds ? s.envIds.includes(envFilter) : s.envId === envFilter
      if (!passesEnv) return false
    }
    if (productFilter !== 'all' && s.name !== productFilter) return false
    return true
  })

  // For cross-env cards (envIds), collapse to the active env when a specific env is selected
  const displaySubscriptions = filteredSubscriptions.map(s => {
    if (s.envIds && envFilter !== 'all') {
      const envName = ENVIRONMENTS.find(e => e.id === envFilter)?.name ?? envFilter
      return { ...s, envId: envFilter, envName, envIds: undefined, envNames: undefined }
    }
    return s
  })

  const selectedEnvName = envFilter === 'all'
    ? 'All environments'
    : ENVIRONMENTS.find(e => e.id === envFilter)?.name ?? envFilter
  const selectedProductName = productFilter === 'all'
    ? 'All products'
    : productFilter

  return (
    <Main>
      <PageHeader>
        <PageTitleBlock>
          <PageTitle>My subscriptions</PageTitle>
          <PageDescription>
            View your active product subscriptions, entitlement usage, and renewal information.
          </PageDescription>
        </PageTitleBlock>
        <NeedHelpBtn type="button" onClick={() => setIsContactDrawerOpen(true)}>
          <LifeRingIcon size={15} color="currentColor" />
          Need help?
        </NeedHelpBtn>
      </PageHeader>

      <FilterBar>
        <div style={{ position: 'relative' }} ref={envDropdownRef}>
          <FilterDropdownBtn
            type="button"
            onClick={() => setEnvDropdownOpen(v => !v)}
            aria-haspopup="listbox"
            aria-expanded={envDropdownOpen}
          >
            {selectedEnvName}
            <ChevronDownIcon size={13} color="currentColor" />
          </FilterDropdownBtn>
          {envDropdownOpen && (
            <FilterDropdownList>
              {[{ id: 'all', name: 'All environments' }, ...ENVIRONMENTS].map(env => (
                <FilterDropdownItem
                  key={env.id}
                  type="button"
                  $active={envFilter === env.id}
                  onClick={() => {
                    setSearchParams(prev => {
                      const next = new URLSearchParams(prev)
                      env.id === 'all' ? next.delete('env') : next.set('env', env.id)
                      return next
                    }, { replace: true })
                    setEnvDropdownOpen(false)
                  }}
                >
                  {env.name}
                </FilterDropdownItem>
              ))}
            </FilterDropdownList>
          )}
        </div>
        <div style={{ position: 'relative' }} ref={productDropdownRef}>
          <FilterDropdownBtn
            type="button"
            onClick={() => setProductDropdownOpen(v => !v)}
            aria-haspopup="listbox"
            aria-expanded={productDropdownOpen}
          >
            {selectedProductName}
            <ChevronDownIcon size={13} color="currentColor" />
          </FilterDropdownBtn>
          {productDropdownOpen && (
            <FilterDropdownList>
              {[{ id: 'all', name: 'All products' }, ...uniqueProducts].map(product => (
                <FilterDropdownItem
                  key={product.id}
                  type="button"
                  $active={productFilter === product.id}
                  onClick={() => {
                    setSearchParams(prev => {
                      const next = new URLSearchParams(prev)
                      product.id === 'all' ? next.delete('product') : next.set('product', product.id)
                      return next
                    }, { replace: true })
                    setProductDropdownOpen(false)
                  }}
                >
                  {product.name}
                </FilterDropdownItem>
              ))}
            </FilterDropdownList>
          )}
        </div>
      </FilterBar>

      <ProductGrid>
        {displaySubscriptions.map((subscription) => (
          <SubscriptionCard key={`${subscription.id}-${subscription.envId ?? 'global'}`} subscription={subscription} />
        ))}
      </ProductGrid>

      <ContactManagerDrawer
        open={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
      />
    </Main>
  )
}
