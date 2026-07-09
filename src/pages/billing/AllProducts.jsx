import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
  padding: 32px;
  max-width: 1100px;
`

const PageHeader = styled.div`
  margin-bottom: 36px;
`

const PageTitle = styled.h1`
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral900};
`

const PageDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral700};
  line-height: 1.5;
  max-width: 560px;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  }
`

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

const CardTopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ProductBadge = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1.5px solid ${({ $color }) => $color || '#2563EB'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: ${({ $color }) => $color || '#2563EB'};
  flex-shrink: 0;
  letter-spacing: -0.3px;
`

const ProductName = styled.a`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  text-decoration: none;
  cursor: pointer;

  &:hover { text-decoration: underline; }
`

const StatusBadge = styled.span`
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ $variant }) =>
    $variant === 'included' ? 'rgba(39,168,114,0.1)' :
    $variant === 'licensed' ? '#EAF1FB' :
    '#F3F4F6'};
  color: ${({ $variant }) =>
    $variant === 'included' ? '#1F8F60' :
    $variant === 'licensed' ? '#0174C3' :
    '#4B5563'};
`

const CardDescription = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral800};
  line-height: 1.5;
`

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.neutral700};
  line-height: 1.45;

  &::before {
    content: '·';
    color: ${({ theme }) => theme.colors.neutral400};
    font-size: 14px;
    margin-top: 1px;
    flex-shrink: 0;
  }
`

const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 4px;
`

const ActionBtn = styled.button`
  padding: 7px 18px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
  transition: background 0.12s;

  &:hover { background: ${({ theme }) => theme.colors.neutral50}; }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.blue300}; outline-offset: 2px; }
`

const PRODUCTS = [
  {
    abbr: 'TL',
    color: '#0174C3',
    name: 'Trust Lifecycle',
    status: 'essentials',
    statusLabel: 'Essentials',
    description: 'Modernizes certificate lifecycle visibility and management across public and private CAs.',
    features: [
      'Gain full visibility with discovery and a centralized certificate inventory',
      'Manage certificates regardless of who issued them (CA-agnostic control)',
      'Automate enrollment, renewal, and provisioning at enterprise scale',
      'Prevent outages with real-time monitoring, alerts, and reporting',
    ],
    action: 'Upgrade',
  },
  {
    abbr: 'DNS',
    color: '#0174C3',
    name: 'DigiCert DNS',
    status: null,
    description: 'Modern DNS management for secure, scalable global traffic delivery',
    features: [
      'Unified DNS platform for secure, scalable deployments',
      'Real-time insights to optimize performance and availability',
      'Intelligent monitoring to enforce best practices and compliance',
      'Global traffic routing for speed, resilience, and reliability',
    ],
    action: 'Learn more',
  },
  {
    abbr: 'CC',
    color: '#0174C3',
    name: 'CertCentral',
    status: 'included',
    statusLabel: 'Included',
    description: 'Centralizes certificate purchasing and management with scale, compliance, APIs—and AI-based validation automation.',
    features: [
      'Buy and manage public trust certificates across TLS/SSL, S/MIME, Code Signing, and more',
      'AI-based validation automation to speed issuance and reduce manual effort',
      'Multi-language support with regional data residency options',
      'Renewal reminders, notifications, plus flexible APIs and webhooks for existing workflows',
    ],
    action: 'Buy certificates',
  },
  {
    abbr: 'ST',
    color: '#0174C3',
    name: 'Software Trust',
    status: null,
    description: 'Secure and govern software releases with trusted code signing',
    features: [
      'Centralized access control for decentralized signing operations',
      'Policy-based signing to ensure compliance and integrity',
      'CI/CD integration across modern development platforms',
      'Automated signing for releases, artifacts, and SBOMs',
    ],
    action: 'Learn more',
  },
  {
    abbr: 'CA+',
    color: '#0174C3',
    name: 'Private CA',
    status: 'licensed',
    statusLabel: 'Licensed',
    description: 'Enterprise-grade private PKI with centralized control and governance',
    features: [
      'Centralized governance for internal public key infrastructure',
      'Rapid deployment of root and intermediate certificate authorities',
      'Support for cloud, on-prem, and hybrid environments',
      'Hardware-backed key protection with modern cryptographic standards',
    ],
    action: 'Learn more',
  },
  {
    abbr: 'IoT',
    color: '#0174C3',
    name: 'Device Trust',
    status: null,
    description: 'End-to-end device identity and security lifecycle management',
    features: [
      'Device protection across manufacturing, deployment, and retirement',
      'Hardware-rooted identities for every connected device',
      'Automated onboarding, configuration, and updates at scale',
      'Readiness for evolving cryptographic and post-quantum standards',
    ],
    action: 'Learn more',
  },
  {
    abbr: 'CT',
    color: '#0174C3',
    name: 'Content Trust',
    status: null,
    description: 'Centralized control and governance for document signing workflows',
    features: [
      'Centralized visibility across signing activity, policies, and certificates',
      'PKI-backed digital signing aligned with global trust standards',
      'Seamless integration with existing tools via CSC-based APIs',
      'Cloud-based key protection to reduce loss, theft, and misuse',
    ],
    action: 'Learn more',
  },
]

export default function AllProducts() {
  useEffect(() => {
    document.title = 'Explore DigiCert products — DigiCert ONE'
  }, [])

  return (
    <Main>
      <PageHeader>
        <PageTitle>Explore DigiCert products</PageTitle>
        <PageDescription>
          Build and protect digital trust across every certificate, identity, and device — all from one platform.
        </PageDescription>
      </PageHeader>

      <ProductGrid>
        {PRODUCTS.map(p => (
          <ProductCard key={p.name}>
            <CardTop>
              <CardTopLeft>
                <ProductBadge $color={p.color}>{p.abbr}</ProductBadge>
                <ProductName href="#">{p.name}</ProductName>
              </CardTopLeft>
              {p.status && (
                <StatusBadge $variant={p.status}>{p.statusLabel}</StatusBadge>
              )}
            </CardTop>
            <CardDescription>{p.description}</CardDescription>
            <FeatureList>
              {p.features.map(f => (
                <FeatureItem key={f}>{f}</FeatureItem>
              ))}
            </FeatureList>
            <CardFooter>
              <ActionBtn type="button">{p.action}</ActionBtn>
            </CardFooter>
          </ProductCard>
        ))}
      </ProductGrid>
    </Main>
  )
}
