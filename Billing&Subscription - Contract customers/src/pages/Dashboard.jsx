import { useState } from 'react'
import styled from 'styled-components'
import { ChevronRightIcon, CloseIcon } from '../components/Icons'

const Main = styled.main`
  padding: 32px;
  min-height: calc(100vh - ${({ theme }) => theme.layout.topNavHeight});
  background: ${({ theme }) => theme.colors.white};
`

/* ── Hero section ── */
const HeroSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
`

const HeroText = styled.div`
  flex: 1 1 520px;
  min-width: 280px;
`

const HeroLabel = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const HeroHeading = styled.h1`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
  max-width: 720px;
  color: ${({ theme }) => theme.colors.neutral900};
  font-weight: 400;
`

const HeroDesc = styled.p`
  margin: 16px 0 0;
  max-width: 680px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const HeroCTAs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex: 0 1 auto;
  min-width: 220px;
`

const CTABtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme, $primary }) => ($primary ? 'transparent' : theme.colors.blue300)};
  background: ${({ theme, $primary }) => ($primary ? theme.colors.blue300 : theme.colors.white)};
  color: ${({ theme, $primary }) => ($primary ? theme.colors.white : theme.colors.blue300)};
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme, $primary }) => ($primary ? theme.colors.blue500 : theme.colors.neutral100)};
    border-color: ${({ theme, $primary }) => ($primary ? 'transparent' : theme.colors.blue500)};
    color: ${({ theme, $primary }) => ($primary ? theme.colors.white : theme.colors.blue500)};
  }
`

/* ── Section label ── */
const SectionLabel = styled.h2`
  margin: 0 0 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral600};
`

/* ── Two-col layout ── */
const ContentGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

/* ── Product action cards ── */
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 1px 2px rgba(53,56,58,0.05);
  padding: 24px;
`

const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral900};
  font-weight: 500;
`

const CardSubtitle = styled.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const ActionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
`

const ActionLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral900};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.white};
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral50};
    border-color: ${({ theme }) => theme.colors.blue300};
  }
`

/* ── Right column ── */
const RightCol = styled.div`
  display: grid;
  gap: 16px;
`

/* ── Blog card ── */
const BlogCard = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const BlogImageWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 192px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 192px;
  object-fit: cover;
  display: block;
`

const BlogBody = styled.div`
  padding: 20px 20px 24px;
`

const BlogBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(1, 116, 195, 0.12);
  color: ${({ theme }) => theme.colors.blue300};
`

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
  margin-bottom: 12px;
`

const BlogTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.neutral900};
  font-weight: 500;
`

const BlogDesc = styled.p`
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const BlogLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue300};
  font-weight: 500;

  &:hover { text-decoration: underline; }
`

/* ── Spotlight card ── */
const SpotlightCard = styled.article`
  background: ${({ theme }) => theme.colors.neutral100};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 20px;
  display: grid;
  gap: 16px;
`

const SpotlightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const SpotlightTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral600};
`

const SpotlightDismiss = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.neutral500};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral900};
    background: ${({ theme }) => theme.colors.neutral200};
  }
`

const SpotlightTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral900};
  font-weight: 500;
`

const SpotlightDesc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const SpotlightLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.blue300};
  font-weight: 500;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`

/* ── Data ── */
const productCards = [
  {
    title: 'CertCentral',
    subtitle: 'Public certificates',
    actions: [
      { label: 'Order a new certificate', href: '/certcentral/dashboard' },
      { label: 'Reissue a certificate', href: '/certcentral/dashboard' },
      { label: 'Configure ACME automation', href: '/certcentral/client-tools' },
      { label: 'Manage organizations', href: '/certcentral/client-tools' },
    ],
  },
  {
    title: 'Trust Lifecycle Manager',
    subtitle: 'Certificate lifecycle',
    actions: [
      { label: 'Discover certificates', href: '/trust-lifecycle/dashboard' },
      { label: 'Apply policies', href: '/trust-lifecycle/dashboard' },
      { label: 'Set up alerts', href: '/trust-lifecycle/alerts' },
      { label: 'Set up certificate automation', href: '/trust-lifecycle/tools' },
    ],
  },
  {
    title: 'DNS Trust Manager',
    subtitle: 'DNS & DNSSEC',
    actions: [
      { label: 'Update CAA records', href: '/dns/dashboard' },
      { label: 'Add or edit a zone', href: '/dns/dashboard' },
      { label: 'Enable DNSSEC', href: '/dns/dashboard' },
      { label: 'Set traffic routing rules', href: '/dns/dashboard' },
    ],
  },
  {
    title: 'Private CA',
    subtitle: 'Internal PKI',
    actions: [
      { label: 'Issue an internal certificate', href: '/private-ca/dashboard' },
      { label: 'Create issuing CA', href: '/private-ca/dashboard' },
      { label: 'Manage CRL & OCSP', href: '/private-ca/dashboard' },
      { label: 'Manage certificate templates', href: '/private-ca/certificate-templates' },
    ],
  },
]

export default function Dashboard() {
  const [spotlightDismissed, setSpotlightDismissed] = useState(false)

  return (
    <Main>
      {/* Hero */}
      <HeroSection>
        <HeroText>
          <HeroLabel>Hi, John Smith</HeroLabel>
          <HeroHeading>What would you like to do?</HeroHeading>
          <HeroDesc>
            Your DigiCert ONE workspace — manage certificates, policies, and trust across products.
          </HeroDesc>
        </HeroText>
        <HeroCTAs>
          <CTABtn href="/certcentral/inventory">View inventory</CTABtn>
          <CTABtn href="/certcentral/dashboard" $primary>Order certificate</CTABtn>
        </HeroCTAs>
      </HeroSection>

      {/* Product actions */}
      <SectionLabel>Browse actions by product</SectionLabel>
      <ContentGrid>
        <div>
          <ProductGrid>
            {productCards.map((card) => (
              <ProductCard key={card.title}>
                <CardTitle>{card.title}</CardTitle>
                <CardSubtitle>{card.subtitle}</CardSubtitle>
                <ActionList>
                  {card.actions.map((action) => (
                    <li key={action.label}>
                      <ActionLink href={action.href}>
                        <span>{action.label}</span>
                        <ChevronRightIcon size={16} color="currentColor" />
                      </ActionLink>
                    </li>
                  ))}
                </ActionList>
              </ProductCard>
            ))}
          </ProductGrid>
        </div>

        {/* Right column */}
        <RightCol>
          {/* Blog card */}
          <BlogCard>
            <BlogImageWrap>
              <BlogImage
                src="/idc-marketspace-blog-hero.png"
                alt="Certificate lifecycle management illustration"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </BlogImageWrap>
            <BlogBody>
              <BlogBadge>Certificate Lifecycle</BlogBadge>
              <BlogMeta>
                <span>Brian Trzupek · 5 min read</span>
                <span>digicert.com/blog</span>
              </BlogMeta>
              <BlogTitle>
                Certificate lifecycle management reaches an inflection point
              </BlogTitle>
              <BlogDesc>
                Cert volumes keep climbing while validity windows keep shrinking. Why teams that
                scaled on annual renewals are rebuilding for continuous lifecycle operations.
              </BlogDesc>
              <BlogLink
                href="https://www.digicert.com/blog"
                target="_blank"
                rel="noreferrer noopener"
              >
                Read on the blog →
              </BlogLink>
            </BlogBody>
          </BlogCard>

          {/* Spotlight card */}
          {!spotlightDismissed && (
            <SpotlightCard>
              <SpotlightHeader>
                <SpotlightTag>Spotlight</SpotlightTag>
                <SpotlightDismiss
                  aria-label="Dismiss spotlight"
                  onClick={() => setSpotlightDismissed(true)}
                >
                  <CloseIcon size={16} color="currentColor" />
                </SpotlightDismiss>
              </SpotlightHeader>
              <SpotlightTitle>Software Trust Manager</SpotlightTitle>
              <SpotlightDesc>
                Centralize code-signing keys, enforce signing policy, and produce SBOMs across
                your build pipelines.
              </SpotlightDesc>
              <SpotlightLink href="/software-trust/dashboard">Learn more →</SpotlightLink>
            </SpotlightCard>
          )}
        </RightCol>
      </ContentGrid>
    </Main>
  )
}
