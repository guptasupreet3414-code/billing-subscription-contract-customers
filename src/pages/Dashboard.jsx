import { useState } from 'react'
import styled from 'styled-components'
import { CloseIcon, HamburgerIcon, getIcon } from '../components/Icons'

const Main = styled.main`
  padding: 32px;
  min-height: calc(100vh - ${({ theme }) => theme.layout.topNavHeight});
  background: ${({ theme }) => theme.colors.white};
`

/* ── Greeting ── */
const GreetingRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`

const GreetingText = styled.div``

const GreetingTitle = styled.h1`
  margin: 0 0 6px;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.neutral900};
`

const GreetingSubtitle = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral600};
`

const PageSettingsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.neutral600};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
    border-color: ${({ theme }) => theme.colors.neutral300};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`

/* ── Two-col layout ── */
const ContentGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

/* ── Product cards ── */
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
  padding: 20px 24px;
`

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`

const CardIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const CardTitleBlock = styled.div`
  min-width: 0;
`

const CardTitle = styled.h3`
  margin: 0 0 3px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.neutral900};
  font-weight: 600;
`

const CardSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral500};
`

const ActionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ActionLink = styled.a`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
  width: 100%;
  min-height: 180px;
  background: linear-gradient(180deg, #0F3565 0%, #0C1F43 100%);
`

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`

const BlogBody = styled.div`
  padding: 16px 20px 20px;
`

const BlogBadge = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(1, 116, 195, 0.45);
  color: ${({ theme }) => theme.colors.blue300};
  letter-spacing: 0.02em;
`

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral500};
  margin-bottom: 10px;
`

const BlogTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.neutral900};
  font-weight: 500;
`

const BlogDesc = styled.p`
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const BlogLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue300};
  font-weight: 500;
  font-size: 14px;

  &:hover { text-decoration: underline; }
`

/* ── Spotlight card ── */
const SpotlightCard = styled.article`
  background: #EAF4FC;
  border: 1px solid #C9E3F7;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SpotlightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const SpotlightTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(0, 155, 135, 0.45);
  color: #007B6E;
  letter-spacing: 0.02em;
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
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral900};
    background: rgba(0,0,0,0.06);
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
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.neutral700};
`

const SpotlightLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.blue300};
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;

  &:hover { text-decoration: underline; }
`

/* ── Data ── */
const productCards = [
  {
    title: 'Trust Lifecycle',
    subtitle: 'Certificate management',
    iconType: 'cycle',
    actions: [
      { label: 'Set up alerts', href: '/trust-lifecycle/alerts' },
      { label: 'Discover certificates', href: '/trust-lifecycle/dashboard' },
      { label: 'Automate certificate lifecycle', href: '/trust-lifecycle/tools' },
    ],
  },
  {
    title: 'Valimail',
    subtitle: 'Email authentication',
    iconType: 'envelope',
    actions: [
      { label: 'Review DMARC status', href: '/valimail/dashboard' },
      { label: 'Manage sender sources', href: '/valimail/dashboard' },
      { label: 'Monitor domains', href: '/valimail/dashboard' },
      { label: 'Investigate spoofing risks', href: '/valimail/dashboard' },
    ],
  },
  {
    title: 'Quantum Central',
    subtitle: 'Post-quantum readiness',
    iconType: 'settings',
    actions: [
      { label: 'Assess cryptographic risk', href: '/quantum-central/dashboard' },
      { label: 'Review PQC readiness', href: '/quantum-central/dashboard' },
      { label: 'View algorithm inventory', href: '/quantum-central/dashboard' },
      { label: 'Track remediation', href: '/quantum-central/dashboard' },
    ],
  },
  {
    title: 'AI Agents',
    subtitle: 'AI identity & governance',
    iconType: 'sparkle',
    actions: [
      { label: 'Register agents', href: '/ai-agents/dashboard' },
      { label: 'Manage agent identities', href: '/ai-agents/dashboard' },
      { label: 'Review agent activity', href: '/ai-agents/dashboard' },
      { label: 'Configure trust policies', href: '/ai-agents/dashboard' },
    ],
  },
  {
    title: 'Device Trust',
    subtitle: 'IoT device security',
    iconType: 'mobile',
    actions: [
      { label: 'Register devices', href: '/device-trust/dashboard' },
      { label: 'Manage device identities', href: '/device-trust/dashboard' },
      { label: 'Configure device policies', href: '/device-trust/dashboard' },
      { label: 'Review device lifecycle', href: '/device-trust/dashboard' },
    ],
  },
  {
    title: 'Private CA',
    subtitle: 'Internal PKI',
    iconType: 'hierarchy',
    actions: [
      { label: 'Issue internal certificate', href: '/private-ca/dashboard' },
      { label: 'Create issuing CA', href: '/private-ca/dashboard' },
      { label: 'Manage certificate profiles', href: '/private-ca/certificate-profiles' },
      { label: 'Configure OCSP', href: '/private-ca/ocsps' },
    ],
  },
  {
    title: 'Software Trust',
    subtitle: 'Code signing',
    iconType: 'code',
    actions: [
      { label: 'Manage signing keys', href: '/software-trust/dashboard' },
      { label: 'Configure signing policies', href: '/software-trust/dashboard' },
      { label: 'Sign software', href: '/software-trust/dashboard' },
      { label: 'Generate SBOM', href: '/software-trust/dashboard' },
    ],
  },
  {
    title: 'DNS Trust',
    subtitle: 'DNS management',
    iconType: 'globe',
    actions: [
      { label: 'Manage zones', href: '/dns/dashboard' },
      { label: 'Update DNS records', href: '/dns/dashboard' },
      { label: 'Configure traffic steering', href: '/dns/dashboard' },
      { label: 'Review DNSSEC settings', href: '/dns/dashboard' },
    ],
  },
  {
    title: 'Content Trust',
    subtitle: 'Document & content signing',
    iconType: 'document',
    actions: [
      { label: 'Manage signing credentials', href: '/content-trust/dashboard' },
      { label: 'Verify signed content', href: '/content-trust/dashboard' },
      { label: 'Review signing activity', href: '/content-trust/dashboard' },
      { label: 'Configure seal policies', href: '/content-trust/dashboard' },
    ],
  },
  {
    title: 'CertCentral',
    subtitle: 'Public certificates',
    iconType: 'shield',
    actions: [
      { label: 'Order public certificate', href: '/certcentral/dashboard' },
      { label: 'Validate domains', href: '/certcentral/dashboard' },
      { label: 'Manage organizations', href: '/certcentral/dashboard' },
      { label: 'Expiring certificates', href: '/certcentral/inventory' },
    ],
  },
]

export default function Dashboard() {
  const [spotlightDismissed, setSpotlightDismissed] = useState(false)

  return (
    <Main>
      {/* Greeting */}
      <GreetingRow>
        <GreetingText>
          <GreetingTitle>Hello, John</GreetingTitle>
          <GreetingSubtitle>Access your DigiCert trust solutions and discover what's new</GreetingSubtitle>
        </GreetingText>
        <PageSettingsBtn aria-label="Page settings">
          <HamburgerIcon size={18} color="currentColor" />
        </PageSettingsBtn>
      </GreetingRow>

      <ContentGrid>
        {/* Product cards */}
        <ProductGrid>
          {productCards.map((card) => (
            <ProductCard key={card.title}>
              <CardHeader>
                <CardIconWrap>{getIcon(card.iconType, 20, 'currentColor')}</CardIconWrap>
                <CardTitleBlock>
                  <CardTitle>{card.title}</CardTitle>
                  <CardSubtitle>{card.subtitle}</CardSubtitle>
                </CardTitleBlock>
              </CardHeader>
              <ActionList>
                {card.actions.map((action) => (
                  <li key={action.label}>
                    <ActionLink href={action.href}>{action.label}</ActionLink>
                  </li>
                ))}
              </ActionList>
            </ProductCard>
          ))}
        </ProductGrid>

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
              <BlogBadge>Certificate lifecycle</BlogBadge>
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
                <SpotlightTag>Software Trust Manager</SpotlightTag>
                <SpotlightDismiss
                  aria-label="Dismiss spotlight"
                  onClick={() => setSpotlightDismissed(true)}
                >
                  <CloseIcon size={14} color="currentColor" />
                </SpotlightDismiss>
              </SpotlightHeader>
              <SpotlightTitle>Centralize code-signing at scale</SpotlightTitle>
              <SpotlightDesc>
                Centralize code-signing keys, enforce signing policy, and produce SBOMs across
                your build pipelines.
              </SpotlightDesc>
              <SpotlightLink href="/software-trust/dashboard">Explore STM →</SpotlightLink>
            </SpotlightCard>
          )}
        </RightCol>
      </ContentGrid>
    </Main>
  )
}
