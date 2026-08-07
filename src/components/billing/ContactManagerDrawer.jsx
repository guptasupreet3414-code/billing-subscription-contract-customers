import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ExternalLinkIcon, LifeRingIcon, ChevronDownIcon, ChevronUpIcon, DollarIcon, GearIcon } from '../Icons'

/* ── Shell ── */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1100;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
  transition: opacity 200ms ease;
`

const DrawerPanel = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.layout.topNavHeight};
  right: 0;
  bottom: 0;
  width: 440px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1101;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
  transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -4px 0 32px rgba(0, 0, 0, 0.14);

  @media (max-width: 500px) {
    width: 100%;
  }
`

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  flex-shrink: 0;
`

const DrawerTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const DrawerTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral600};
  border-radius: 6px;
  font-size: 20px;
  line-height: 1;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
    color: ${({ theme }) => theme.colors.neutral900};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral300};
    border-radius: 2px;
  }
`

/* ── Category cards ── */

const QuestionHeading = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
`

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const CategoryCard = styled.div`
  border: 1.5px solid ${({ $selected, theme }) => ($selected ? theme.colors.blue300 : theme.colors.neutral200)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({ $selected, theme }) => ($selected ? theme.colors.blue300 : theme.colors.neutral400)};
  }
`

const CategoryTrigger = styled.button`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  gap: 12px;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: -2px;
  }
`

const CategoryIconWrap = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.neutral500};
  padding-top: 1px;
`

const CategoryContent = styled.div`
  flex: 1;
  min-width: 0;
`

const CategoryTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral900};
  margin-bottom: 4px;
`

const CategoryHelper = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral500};
  line-height: 1.45;
`

const CategoryChevron = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.neutral500};
`

const CategoryCTAWrap = styled.div`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral200};
`

const CTALink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.blue300};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  box-sizing: border-box;

  &:hover { background: ${({ theme }) => theme.colors.blue500}; }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

const CATEGORIES = [
  {
    id: 'sales',
    title: 'Sales',
    helper: 'Questions about purchasing, pricing, renewals, account growth, additional products, or billing.',
    cta: 'Contact sales',
    href: 'https://www.digicert.com/contact-us',
  },
  {
    id: 'support',
    title: 'Support',
    helper: 'Help with product issues, errors, troubleshooting, or technical questions.',
    cta: 'Contact support',
    href: 'https://www.digicert.com/support/pki-support',
  },
]

export default function ContactManagerDrawer({ open, onClose }) {
  const [selected, setSelected] = useState(null)
  const firstFocusRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  useEffect(() => {
    if (open && firstFocusRef.current) {
      setTimeout(() => firstFocusRef.current?.focus(), 260)
    }
    if (!open) setSelected(null)
  }, [open])

  return (
    <>
      <Overlay $open={open} onClick={onClose} aria-hidden="true" />
      <DrawerPanel
        $open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Need help?"
      >
        <DrawerHeader>
          <DrawerTitleRow>
            <LifeRingIcon size={18} color="currentColor" />
            <DrawerTitle>Need help?</DrawerTitle>
          </DrawerTitleRow>
          <CloseBtn type="button" onClick={onClose} aria-label="Close drawer" ref={firstFocusRef}>
            ×
          </CloseBtn>
        </DrawerHeader>

        <DrawerBody>
          <QuestionHeading>What do you need help with?</QuestionHeading>

          <CategoryList>
            {CATEGORIES.map((cat) => {
              const isExpanded = selected === cat.id
              return (
                <CategoryCard key={cat.id} $selected={isExpanded}>
                  <CategoryTrigger
                    type="button"
                    onClick={() => setSelected(isExpanded ? null : cat.id)}
                    aria-expanded={isExpanded}
                  >
                    <CategoryIconWrap>
                      {cat.id === 'sales'
                        ? <DollarIcon size={18} color="currentColor" />
                        : <GearIcon size={18} color="currentColor" />
                      }
                    </CategoryIconWrap>
                    <CategoryContent>
                      <CategoryTitle>{cat.title}</CategoryTitle>
                      <CategoryHelper>{cat.helper}</CategoryHelper>
                    </CategoryContent>
                    <CategoryChevron>
                      {isExpanded
                        ? <ChevronUpIcon size={16} color="currentColor" />
                        : <ChevronDownIcon size={16} color="currentColor" />
                      }
                    </CategoryChevron>
                  </CategoryTrigger>

                  {isExpanded && (
                    <CategoryCTAWrap>
                      <CTALink
                        href={cat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cat.cta}
                        <ExternalLinkIcon size={14} color="currentColor" />
                      </CTALink>
                    </CategoryCTAWrap>
                  )}
                </CategoryCard>
              )
            })}
          </CategoryList>
        </DrawerBody>
      </DrawerPanel>
    </>
  )
}
