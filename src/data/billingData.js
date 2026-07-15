// Status tone drives badge color, progress bar color, and iconography.
// healthy | approaching-limit | over-entitlement | no-data
export const statusConfig = {
  healthy: { label: 'Healthy', tone: 'success' },
  'approaching-limit': { label: 'Approaching limit', tone: 'warning' },
  'over-entitlement': { label: 'Over entitlement', tone: 'error' },
  'no-data': { label: 'No usage data', tone: 'neutral' },
}

// Distinguishes Enterprise CertCentral Contracts from E-commerce CertCentral
// Subscriptions. Drives terminology, badge styling, and which billing
// actions/navigation are available for a given subscription.
export const subscriptionTypeConfig = {
  enterprise: {
    label: 'Enterprise plan',
    description:
      'Billed and managed directly through your DigiCert account team. Contract terms, renewals, and invoicing are handled by your account manager, so no self-service payment actions are needed here.',
  },
  ecommerce: {
    label: 'E-commerce plan',
    description:
      'A self-service subscription billed automatically to the payment method on file. Manage your plan, payment details, and receipts at any time from this account.',
  },
}

export const contractTypeConfig = {
  'committed-value': {
    label: 'Fixed value',
    tooltip: 'A contract with a fixed spend amount. You receive negotiated pricing in exchange for a minimum purchase commitment over the contract term.',
  },
  'negotiated-pricing': {
    label: 'Negotiated pricing',
    tooltip: 'A contract with custom pricing negotiated by your account team. You pay per-unit pricing without a minimum spend commitment.',
  },
  'peak-usage': {
    label: 'Peak usage',
    tooltip: 'Billing is based on the highest single-day certificate count recorded during your contract year. Usage is monitored continuously; your peak day drives renewal pricing.',
  },
  'drawdown': {
    label: 'Drawdown',
    tooltip: 'Purchase a fixed certificate pool upfront and draw from it as you issue certificates. Overage charges apply if the pool is exhausted before renewal.',
  },
}

export const accountManager = {
  name: 'Sarah Mitchell',
  title: 'Enterprise Account Manager, DigiCert',
  email: 'sarah.mitchell@digicert.com',
  phone: '+1 (801) 555-0142',
}

// ── Enterprise CertCentral Contract products ──
// Each entry below is rendered as a single-instance subscription.
const enterpriseProducts = [
  {
    id: 'trust-lifecycle',
    name: 'Trust Lifecycle',
    iconType: 'cycle',
    plan: 'Advanced',
    contractId: 'CTR-2024-TL-00098',
    contractTerm: 'Sep 2, 2025 – Sep 1, 2026',
    contractOwner: 'PKI Operations',
    renewalDate: 'Sep 1, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Seats', consumed: 30, total: 75 },
    entitlements: [
      { name: 'Seats', purchased: 75, allocated: 75, consumed: 30, remaining: 45 },
    ],
  },
  {
    id: 'software-trust',
    name: 'Software Trust',
    iconType: 'code',
    tier: 'Enterprise',
    plan: 'Premium',
    autoRenewal: true,
    contractId: 'CTR-2024-ST-00187',
    contractTerm: 'Jun 7, 2025 – Jun 6, 2026',
    contractOwner: 'DevOps Engineering',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Signatures', consumed: 124210, total: 250000 },
    entitlements: [
      { name: 'Signatures', purchased: 250000, allocated: 250000, consumed: 124210, remaining: 125790 },
      { name: 'HSM keypairs', purchased: 4, allocated: 4, consumed: 2, remaining: 2 },
    ],
    purchasedControls: [
      { name: 'Signatures', purchased: 250000, used: 124210, remaining: 125790 },
      { name: 'HSM keypair (add-on)', purchased: 4, used: 2, remaining: 2 },
    ],
    includedResources: [
      { name: 'Repositories', includedWithPlan: 'Up to 100', available: 100, used: 76, remaining: 24 },
      { name: 'Test signatures', includedWithPlan: '2,500,000', available: 2500000, used: 812430, remaining: 1687570 },
      { name: 'Active releases per repository', includedWithPlan: '10 most recent releases', available: 10, used: 7, remaining: 3 },
      { name: 'Users per keypair/certificate', includedWithPlan: 'Up to 10', available: 10, used: 6, remaining: 4 },
      { name: 'HSM keypairs (baseline)', includedWithPlan: '6', available: 6, used: 4, remaining: 2 },
    ],
  },
  {
    id: 'private-ca',
    name: 'Private CA',
    iconType: 'hierarchy',
    contractId: 'CTR-2024-PCA-00071',
    contractTerm: 'Sep 2, 2025 – Sep 1, 2026',
    contractOwner: 'PKI Operations',
    renewalDate: 'Sep 1, 2026',
    environment: 'Production',
    status: 'approaching-limit',
    primaryEntitlement: { label: 'Private root certificates', consumed: 9, total: 10 },
    entitlements: [
      { name: 'Private root certificates', purchased: 10, allocated: 10, consumed: 9, remaining: 1 },
      { name: 'Private intermediate CA certificates', purchased: 25, allocated: 25, consumed: 20, remaining: 5 },
      { name: 'Dynamic intermediate CAs', purchased: 50000, allocated: 50000, consumed: 38500, remaining: 11500 },
    ],
  },
  {
    id: 'content-trust',
    name: 'Content Trust',
    iconType: 'document',
    contractId: 'CTR-2024-DT-00231',
    contractTerm: 'Jun 7, 2025 – Jun 6, 2026',
    contractOwner: 'Compliance Operations',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'approaching-limit',
    primaryEntitlement: { label: 'Signatures', consumed: 8200, total: 10000 },
    entitlements: [
      { name: 'Seats', purchased: 500, allocated: 500, consumed: 340, remaining: 160 },
      { name: 'Signatures', purchased: 10000, allocated: 10000, consumed: 8200, remaining: 1800 },
    ],
  },
  {
    id: 'device-trust',
    name: 'Device Trust',
    iconType: 'mobile',
    contractId: 'CTR-2024-DVT-00153',
    contractTerm: 'Aug 15, 2025 – Aug 14, 2026',
    contractOwner: 'IoT Platform Team',
    renewalDate: 'Aug 14, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Device certificates', consumed: 45000, total: 100000 },
    entitlements: [
      { name: 'Device certificates', purchased: 100000, allocated: 100000, consumed: 45000, remaining: 55000 },
      { name: 'Device groups', purchased: 50, allocated: 50, consumed: 32, remaining: 18 },
      { name: 'API calls / month', purchased: 1000000, allocated: 1000000, consumed: 620000, remaining: 380000 },
    ],
  },
  {
    id: 'dns',
    name: 'DigiCert DNS',
    iconType: 'globe',
    contractId: 'CTR-2024-DNS-00076',
    contractTerm: 'Jun 7, 2025 – Jun 6, 2026',
    contractOwner: 'Network Engineering',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Queries', consumed: 450000, total: 1000000 },
    entitlements: [
      { name: 'Queries', purchased: 1000000, allocated: 1000000, consumed: 450000, remaining: 550000 },
    ],
  },
  {
    id: 'valimail',
    name: 'Valimail',
    iconType: 'envelope',
    plan: 'Essential',
    autoRenewal: false,
    contractId: 'CTR-2024-VML-00038',
    contractTerm: 'Jul 16, 2025 – Jul 15, 2026',
    contractOwner: 'IT Security Team',
    renewalDate: 'Jul 15, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Domains', consumed: 18, total: 25 },
    entitlements: [
      { name: 'Domains', purchased: 25, allocated: 25, consumed: 18, remaining: 7 },
      { name: 'Email volume/month', purchased: 5000000, allocated: 5000000, consumed: 2800000, remaining: 2200000 },
    ],
  },
  {
    id: 'iot-trust',
    name: 'IoT Trust',
    iconType: 'chip',
    contractId: 'CTR-2024-IOT-00044',
    contractTerm: 'Jun 7, 2025 – Jun 6, 2026',
    contractOwner: 'IoT Platform Team',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'End entity certificates', consumed: 280000, total: 500000 },
    entitlements: [
      { name: 'End entity certificates', purchased: 500000, allocated: 500000, consumed: 280000, remaining: 220000 },
      { name: 'End entity devices', purchased: 100000, allocated: 100000, consumed: 45000, remaining: 55000 },
      { name: 'Intermediate CA certificates', purchased: 50, allocated: 50, consumed: 12, remaining: 38 },
      { name: 'Intermediate CA devices', purchased: 100, allocated: 100, consumed: 45, remaining: 55 },
    ],
  },
]

// ── CertCentral accounts ──
// An environment can have multiple CertCentral accounts linked to it. Each
// account may carry an Enterprise Contract instance, an E-commerce
// Subscription instance, or both. The subscriptions page renders one card
// per account so users can distinguish them by account name.
const certCentralAccounts = [
  {
    accountId: 'acme-global-security',
    displayAccountId: '1001445',
    accountName: 'ACME Global Security',
    enterpriseInstance: {
      instanceId: 'acme-global-enterprise',
      instanceLabel: 'Enterprise',
      subscriptionType: 'enterprise',
      contractType: 'peak-usage',
      contractId: 'CTR-2024-CC-00012',
      contractTerm: 'Jun 7, 2025 – Jun 6, 2026',
      contractOwner: 'IT Security Team',
      renewalDate: 'Jun 6, 2026',
      environment: 'Production',
      status: 'over-entitlement',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 108, total: 100 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 100, allocated: 100, consumed: 108, remaining: -8, periodPeak: 128, periodPeakDate: 'Aug 14, 2025', purchasedUSD: '$80,000' },
        { name: 'Code signing certificates', purchased: 24, allocated: 24, consumed: 16, remaining: 8, periodPeak: 22, periodPeakDate: 'Sep 3, 2025', purchasedUSD: '$9,600' },
        { name: 'S/MIME certificates', purchased: 200, allocated: 200, consumed: 140, remaining: 60, periodPeak: 180, periodPeakDate: 'Oct 12, 2025', purchasedUSD: '$24,000' },
        { name: 'Document signing certificates', purchased: 12, allocated: 12, consumed: 5, remaining: 7, periodPeak: 8, periodPeakDate: 'Nov 5, 2025', purchasedUSD: '$2,400' },
        { name: 'Common mark certificates', purchased: 5, allocated: 5, consumed: 1, remaining: 4, periodPeak: 2, periodPeakDate: '—', purchasedUSD: '$1,500' },
      ],
      peakUsageData: {
        periodPeakDate: 'Aug 14, 2025',
        monthLabels: ['Jun 25','Jul 25','Aug 25','Sep 25','Oct 25','Nov 25','Dec 25','Jan 26','Feb 26','Mar 26','Apr 26','May 26','Jun 26'],
        series: [
          {
            name: 'SSL/TLS certificates',
            color: '#4B91D6',
            currentActive: 108,
            periodPeak: 128,
            periodPeakDate: 'Aug 14, 2025',
            monthly: [90, 110, 128, 122, 115, 108, 100, 96, 92, 98, 104, 110, 108],
            monthlyCost: [72000, 88000, 102400, 97600, 92000, 86400, 80000, 76800, 73600, 78400, 83200, 88000, 86400],
          },
          {
            name: 'Code signing',
            color: '#F59E0B',
            currentActive: 16,
            periodPeak: 22,
            periodPeakDate: 'Sep 3, 2025',
            monthly: [10, 14, 18, 22, 20, 18, 16, 15, 14, 15, 16, 16, 16],
            monthlyCost: [6000, 8400, 10800, 13200, 12000, 10800, 9600, 9000, 8400, 9000, 9600, 9600, 9600],
          },
          {
            name: 'S/MIME certificates',
            color: '#10B981',
            currentActive: 140,
            periodPeak: 180,
            periodPeakDate: 'Oct 12, 2025',
            monthly: [120, 138, 155, 168, 180, 174, 162, 152, 148, 152, 158, 145, 140],
            monthlyCost: [24000, 27600, 31000, 33600, 36000, 34800, 32400, 30400, 29600, 30400, 31600, 29000, 28000],
          },
          {
            name: 'Document signing',
            color: '#8B5CF6',
            currentActive: 5,
            periodPeak: 8,
            periodPeakDate: 'Nov 5, 2025',
            monthly: [2, 3, 4, 5, 7, 8, 7, 6, 5, 5, 5, 5, 5],
            monthlyCost: [1000, 1500, 2000, 2500, 3500, 4000, 3500, 3000, 2500, 2500, 2500, 2500, 2500],
          },
        ],
      },
    },
    ecommerceInstance: {
      instanceId: 'acme-global-ecommerce',
      instanceLabel: 'Self-service',
      subscriptionType: 'ecommerce',
      renewalDate: 'Jun 6, 2026',
      environment: 'Production',
      status: 'healthy',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 1, total: 4 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 4, allocated: 4, consumed: 1, remaining: 3 },
        { name: 'Codesigning certificates', purchased: 4, allocated: 4, consumed: 1, remaining: 3 },
        { name: 'S/MIME certificates', purchased: 4, allocated: 4, consumed: 1, remaining: 3 },
      ],
      billing: {
        plan: 'Pay-as-you-go',
        price: '$249.00 / month',
        billingCycle: 'Monthly',
        nextChargeDate: 'Jul 1, 2026',
      },
      paymentMethod: { type: 'Visa', last4: '4242', expiry: '08/27' },
      productCategories: [
        {
          id: 'ssl-tls',
          name: 'SSL/TLS certificates',
          buyLabel: 'Buy SSL/TLS',
          products: [
            { name: 'Basic OV', type: 'Single domain', purchased: 4, used: 1, available: 3 },
            { name: 'Secure Site OV', type: 'Single domain', purchased: 10, used: 8, available: 2 },
            { name: 'Secure Site Pro OV', type: 'Single domain', purchased: 6, used: 3, available: 3 },
            { name: 'Secure Site Pro OV', type: 'Multi-domain', purchased: 8, used: 4, available: 4 },
            { name: 'Basic OV', type: 'Multi-domain', purchased: 1, used: 1, available: 0 },
            { name: 'Basic OV', type: 'Wildcard domain', purchased: 1, used: 1, available: 0 },
          ],
        },
        {
          id: 'code-signing',
          name: 'Code signing certificates',
          buyLabel: 'Buy code signing',
          products: [
            { name: 'Code signing OV', type: 'USB', purchased: 6, used: 0, available: 6 },
            { name: 'Code signing OV', type: 'HSM', purchased: 6, used: 0, available: 6 },
            { name: 'Code signing EV', type: 'KeyLocker', purchased: 6, used: 0, available: 6 },
          ],
        },
        {
          id: 'document-signing',
          name: 'Document signing',
          buyLabel: 'Buy document signing',
          products: [
            { name: 'Individual', type: 'USB', purchased: 6, used: 0, available: 6 },
            { name: 'Organization', type: 'USB', purchased: 6, used: 0, available: 6 },
          ],
        },
        {
          id: 'smime',
          name: 'S/MIME certificates',
          buyLabel: 'Buy S/MIME',
          products: [],
        },
        {
          id: 'common-mark',
          name: 'Common mark certificates',
          buyLabel: 'Buy common mark',
          products: [],
        },
      ],
      receipts: [
        { id: 'INV-100245', date: 'Jun 1, 2026', amount: '$249.00', description: 'CertCentral monthly subscription' },
        { id: 'INV-100198', date: 'May 1, 2026', amount: '$249.00', description: 'CertCentral monthly subscription' },
        { id: 'INV-100142', date: 'Apr 1, 2026', amount: '$249.00', description: 'CertCentral monthly subscription' },
      ],
    },
  },
  {
    accountId: 'acme-marketing',
    displayAccountId: '2003891',
    accountName: 'ACME Marketing',
    enterpriseInstance: {
      instanceId: 'acme-marketing-enterprise',
      instanceLabel: 'Enterprise',
      subscriptionType: 'enterprise',
      contractType: 'negotiated-pricing',
      contractId: 'CTR-2024-CC-00089',
      contractTerm: 'Mar 15, 2025 – Mar 14, 2026',
      contractOwner: 'Marketing IT',
      renewalDate: 'Mar 14, 2026',
      environment: 'Production',
      status: 'healthy',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 34, total: 50 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 50, allocated: 50, consumed: 34, remaining: 16 },
        { name: 'Code signing certificates', purchased: 10, allocated: 10, consumed: 4, remaining: 6 },
        { name: 'S/MIME certificates', purchased: 100, allocated: 100, consumed: 62, remaining: 38 },
      ],
    },
    ecommerceInstance: {
      instanceId: 'acme-marketing-ecommerce',
      instanceLabel: 'Self-service',
      subscriptionType: 'ecommerce',
      renewalDate: 'Jul 15, 2026',
      environment: 'Production',
      status: 'approaching-limit',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 9, total: 10 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 10, allocated: 10, consumed: 9, remaining: 1 },
        { name: 'Code signing certificates', purchased: 2, allocated: 2, consumed: 1, remaining: 1 },
        { name: 'S/MIME certificates', purchased: 8, allocated: 8, consumed: 5, remaining: 3 },
      ],
      billing: {
        plan: 'Pay-as-you-go',
        price: '$179.00 / month',
        billingCycle: 'Monthly',
        nextChargeDate: 'Jul 15, 2026',
      },
      paymentMethod: { type: 'Mastercard', last4: '8371', expiry: '11/27' },
      productCategories: [
        {
          id: 'ssl-tls',
          name: 'SSL/TLS certificates',
          buyLabel: 'Buy SSL/TLS',
          products: [
            { name: 'Basic OV', type: 'Single domain', purchased: 6, used: 5, available: 1 },
            { name: 'Secure Site OV', type: 'Multi-domain', purchased: 4, used: 4, available: 0 },
          ],
        },
        {
          id: 'code-signing',
          name: 'Code signing certificates',
          buyLabel: 'Buy code signing',
          products: [
            { name: 'Code signing OV', type: 'USB', purchased: 2, used: 1, available: 1 },
          ],
        },
        {
          id: 'smime',
          name: 'S/MIME certificates',
          buyLabel: 'Buy S/MIME',
          products: [
            { name: 'S/MIME Mailbox', type: 'Individual', purchased: 8, used: 5, available: 3 },
          ],
        },
      ],
      receipts: [
        { id: 'INV-200112', date: 'Jun 15, 2026', amount: '$179.00', description: 'CertCentral monthly subscription' },
        { id: 'INV-200098', date: 'May 15, 2026', amount: '$179.00', description: 'CertCentral monthly subscription' },
      ],
    },
  },
  {
    accountId: 'acme-devops',
    displayAccountId: '3007234',
    accountName: 'ACME DevOps',
    enterpriseInstance: {
      instanceId: 'acme-devops-enterprise',
      instanceLabel: 'Enterprise',
      subscriptionType: 'enterprise',
      contractType: 'negotiated-pricing',
      contractId: 'CTR-2024-CC-00156',
      contractTerm: 'Jan 1, 2026 – Dec 31, 2026',
      contractOwner: 'DevOps Engineering',
      renewalDate: 'Dec 31, 2026',
      environment: 'Production',
      status: 'approaching-limit',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 72, total: 80 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 80, allocated: 80, consumed: 72, remaining: 8 },
        { name: 'Code signing certificates', purchased: 30, allocated: 30, consumed: 28, remaining: 2 },
        { name: 'Document signing certificates', purchased: 5, allocated: 5, consumed: 2, remaining: 3 },
      ],
    },
    ecommerceInstance: {
      instanceId: 'acme-devops-ecommerce',
      instanceLabel: 'Self-service',
      subscriptionType: 'ecommerce',
      renewalDate: 'Aug 1, 2026',
      environment: 'Production',
      status: 'healthy',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 3, total: 8 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 8, allocated: 8, consumed: 3, remaining: 5 },
        { name: 'Code signing certificates', purchased: 5, allocated: 5, consumed: 2, remaining: 3 },
      ],
      billing: {
        plan: 'Pay-as-you-go',
        price: '$299.00 / month',
        billingCycle: 'Monthly',
        nextChargeDate: 'Aug 1, 2026',
      },
      paymentMethod: { type: 'Amex', last4: '1005', expiry: '03/28' },
      productCategories: [
        {
          id: 'ssl-tls',
          name: 'SSL/TLS certificates',
          buyLabel: 'Buy SSL/TLS',
          products: [
            { name: 'Basic OV', type: 'Single domain', purchased: 3, used: 1, available: 2 },
            { name: 'Secure Site Pro OV', type: 'Multi-domain', purchased: 5, used: 2, available: 3 },
          ],
        },
        {
          id: 'code-signing',
          name: 'Code signing certificates',
          buyLabel: 'Buy code signing',
          products: [
            { name: 'Code signing EV', type: 'KeyLocker', purchased: 5, used: 2, available: 3 },
          ],
        },
      ],
      receipts: [
        { id: 'INV-300078', date: 'Jul 1, 2026', amount: '$299.00', description: 'CertCentral monthly subscription' },
        { id: 'INV-300065', date: 'Jun 1, 2026', amount: '$299.00', description: 'CertCentral monthly subscription' },
        { id: 'INV-300051', date: 'May 1, 2026', amount: '$299.00', description: 'CertCentral monthly subscription' },
      ],
    },
  },
  {
    accountId: 'acme-enterprise',
    displayAccountId: '5001298',
    accountName: 'ACME Enterprise',
    enterpriseInstance: {
      instanceId: 'acme-enterprise-enterprise',
      instanceLabel: 'Enterprise',
      subscriptionType: 'enterprise',
      contractType: 'drawdown',
      contractId: 'CTR-2024-CC-00214',
      contractTerm: 'Nov 1, 2025 – Oct 31, 2026',
      contractOwner: 'Enterprise IT',
      renewalDate: 'Oct 31, 2026',
      environment: 'Production',
      status: 'healthy',
      primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 55, total: 120 },
      entitlements: [
        { name: 'SSL/TLS certificates', purchased: 120, allocated: 120, consumed: 55, remaining: 65 },
        { name: 'Code signing certificates', purchased: 40, allocated: 40, consumed: 18, remaining: 22 },
        { name: 'S/MIME certificates', purchased: 300, allocated: 300, consumed: 210, remaining: 90 },
        { name: 'Document signing certificates', purchased: 20, allocated: 20, consumed: 7, remaining: 13 },
      ],
    },
  },
]

const statusPriority = ['over-entitlement', 'approaching-limit', 'no-data', 'healthy']

function pickStatus(statuses) {
  return statusPriority.find((s) => statuses.includes(s)) || 'healthy'
}

// Wraps a single-product Enterprise Contract as a one-instance subscription
// so cards and the details page can treat every subscription uniformly.
function wrapEnterpriseProduct(product) {
  const { id, name, iconType, ...rest } = product
  return {
    id,
    name,
    iconType,
    subscriptionTypes: ['enterprise'],
    renewalDate: rest.renewalDate,
    status: rest.status,
    primaryEntitlement: rest.primaryEntitlement,
    entitlements: rest.entitlements,
    plan: rest.plan,
    tier: rest.tier,
    autoRenewal: rest.autoRenewal,
    instances: [{ instanceId: id, instanceLabel: name, subscriptionType: 'enterprise', ...rest }],
  }
}

// Builds a subscription card for a single CertCentral account, including
// only the instance types requested (enterprise, ecommerce, or both).
function buildCertCentralCard(account, types) {
  const instances = []
  if (types.includes('enterprise') && account.enterpriseInstance) {
    instances.push(account.enterpriseInstance)
  }
  if (types.includes('ecommerce') && account.ecommerceInstance) {
    instances.push(account.ecommerceInstance)
  }

  const subscriptionTypes = [...new Set(instances.map((i) => i.subscriptionType))]
  const renewalDates = [...new Set(instances.map((i) => i.renewalDate))]

  return {
    id: `certcentral-${account.accountId}`,
    name: 'CertCentral',
    iconType: 'shield',
    accountId: account.displayAccountId,
    accountName: account.accountName,
    subscriptionTypes,
    renewalDate: renewalDates.length === 1 ? renewalDates[0] : 'Varies by instance',
    status: pickStatus(instances.map((i) => i.status)),
    primaryEntitlement: instances[0].primaryEntitlement,
    entitlements: instances[0].entitlements,
    instances,
  }
}

const enterpriseSubscriptions = enterpriseProducts.map(wrapEnterpriseProduct)

// Returns the subscription list for a given scenario. All scenarios share the
// same enterprise contract products; CertCentral now renders one card per
// linked account. The scenario controls which instance types appear:
// - 'enterprise': every account shows its Enterprise instance
// - 'ecommerce':  every account shows its E-commerce instance
// - 'mixed':      account 1 enterprise only, account 2 ecommerce only,
//                 account 3 both — to demonstrate the mixed layout
// Fixed subscription set used by MySubscriptions:
// all enterprise products + 3 CertCentral cards (fixed value, negotiated pricing, ecommerce).
const REMOVED_PRODUCT_IDS = new Set(['device-trust', 'dns', 'valimail', 'iot-trust'])

export function getFixedSubscriptions() {
  const certCentralCards = [
    buildCertCentralCard(certCentralAccounts[0], ['enterprise']),
    buildCertCentralCard(certCentralAccounts[1], ['enterprise']),
    buildCertCentralCard(certCentralAccounts[2], ['ecommerce']),
    buildCertCentralCard(certCentralAccounts[3], ['enterprise']),
  ]
  const before = enterpriseSubscriptions.slice(0, 3)   // trust-lifecycle, software-trust, private-ca
  const after = enterpriseSubscriptions.slice(3).filter(s => !REMOVED_PRODUCT_IDS.has(s.id))
  return [...before, ...certCentralCards, ...after]
}

export function getSubscriptions(scenario) {
  let certCentralCards
  if (scenario === 'enterprise') {
    certCentralCards = certCentralAccounts.map((account) =>
      buildCertCentralCard(account, ['enterprise'])
    )
  } else if (scenario === 'ecommerce') {
    certCentralCards = certCentralAccounts.map((account) =>
      buildCertCentralCard(account, ['ecommerce'])
    )
  } else {
    certCentralCards = [
      buildCertCentralCard(certCentralAccounts[0], ['enterprise']),
      buildCertCentralCard(certCentralAccounts[1], ['ecommerce']),
      buildCertCentralCard(certCentralAccounts[2], ['enterprise']),
    ]
  }
  return [...enterpriseSubscriptions, ...certCentralCards]
}

export function getSummary(subs) {
  const certCentralCount = subs.filter((s) => s.id.startsWith('certcentral-')).length
  const productCount = subs.length - certCentralCount
  const renewalDates = [...new Set(subs.map((s) => s.renewalDate))]
  const earliestRenewal = subs.length ? subs[0].renewalDate : '—'
  const approaching = subs.filter((s) => s.status === 'approaching-limit').length
  const over = subs.filter((s) => s.status === 'over-entitlement').length
  const needsAttention = approaching + over

  return {
    productCount,
    certCentralCount,
    earliestRenewal,
    renewalDatesCount: renewalDates.length,
    approaching,
    over,
    needsAttention,
  }
}

// Drives the "Billing type" summary card on the subscriptions page.
export function getBillingTypeSummary(subs) {
  const types = new Set()
  subs.forEach((s) => s.subscriptionTypes.forEach((t) => types.add(t)))

  if (types.has('enterprise') && types.has('ecommerce')) {
    return { label: 'Enterprise + E-commerce', sub: 'Mixed billing across subscriptions' }
  }
  if (types.has('ecommerce')) {
    return { label: 'E-commerce subscription', sub: 'Self-service billing' }
  }
  return { label: 'Enterprise contract', sub: 'Managed by your account team' }
}

// ── Multi-environment support ─────────────────────────────────────────────────

export const ENVIRONMENTS = [
  { id: 'us-prod',  name: 'Acme — US production' },
  { id: 'us-stage', name: 'Acme — US stage'       },
  { id: 'eu-prod',  name: 'Acme — EU production'  },
  { id: 'eu-stage', name: 'Acme — EU stage'       },
  { id: 'in-prod',  name: 'Acme — IN'             },
]

const ENV_PRODUCTS = {
  'us-prod':  ['trust-lifecycle', 'software-trust', 'private-ca', 'certcentral-acme-global-security', 'certcentral-acme-marketing', 'certcentral-acme-enterprise'],
  'us-stage': ['trust-lifecycle', 'software-trust', 'certcentral-acme-global-security', 'certcentral-acme-marketing'],
  'eu-prod':  ['trust-lifecycle', 'private-ca', 'certcentral-acme-global-security', 'certcentral-acme-enterprise'],
  'eu-stage': ['software-trust', 'certcentral-acme-marketing'],
  'in-prod':  ['software-trust', 'certcentral-acme-enterprise'],
}

const SCALE_FACTORS = {
  'us-prod':  1.00,
  'us-stage': 0.25,
  'eu-prod':  0.65,
  'eu-stage': 0.15,
  'in-prod':  0.40,
}

export function getMultiEnvSubscriptions() {
  const allBaseSubs = getFixedSubscriptions()
  const nonCertCentralCards = allBaseSubs.filter(s => !s.id.startsWith('certcentral-'))
  const certCentralCards = allBaseSubs.filter(s => s.id.startsWith('certcentral-'))
  const devOpsCard = certCentralCards.find(s => s.id === 'certcentral-acme-devops')
  const enterpriseCertCentralCards = certCentralCards.filter(s => s.id !== 'certcentral-acme-devops')
  const result = []

  if (devOpsCard) {
    result.push({
      ...devOpsCard,
      envIds: ENVIRONMENTS.map(e => e.id),
      envNames: ENVIRONMENTS.map(e => e.name),
    })
  }

  for (const env of ENVIRONMENTS) {
    const scale = SCALE_FACTORS[env.id]
    const productIds = ENV_PRODUCTS[env.id]

    for (const productId of productIds) {
      const base = [...nonCertCentralCards, ...enterpriseCertCentralCards].find(s => s.id === productId)
      if (!base) continue

      const scaleVal = (v) => Math.round(v * scale)

      const scaledEntitlements = base.entitlements.map(ent => ({
        ...ent,
        consumed: scaleVal(ent.consumed),
        remaining: ent.allocated - scaleVal(ent.consumed),
      }))

      const scaledPrimaryEntitlement = {
        ...base.primaryEntitlement,
        consumed: scaleVal(base.primaryEntitlement.consumed),
      }

      const scaledInstances = base.instances.map(inst => {
        const scaledInst = {
          ...inst,
          entitlements: inst.entitlements
            ? inst.entitlements.map(ent => ({
                ...ent,
                consumed: scaleVal(ent.consumed),
                remaining: ent.allocated - scaleVal(ent.consumed),
              }))
            : inst.entitlements,
          primaryEntitlement: inst.primaryEntitlement
            ? { ...inst.primaryEntitlement, consumed: scaleVal(inst.primaryEntitlement.consumed) }
            : inst.primaryEntitlement,
        }
        if (inst.purchasedControls) {
          scaledInst.purchasedControls = inst.purchasedControls.map(ctrl => ({
            ...ctrl,
            used: scaleVal(ctrl.used),
            remaining: ctrl.purchased - scaleVal(ctrl.used),
          }))
        }
        if (inst.includedResources) {
          scaledInst.includedResources = inst.includedResources.map(res => ({
            ...res,
            used: scaleVal(res.used),
            remaining: typeof res.available === 'number'
              ? res.available - scaleVal(res.used)
              : res.remaining,
          }))
        }
        return scaledInst
      })

      result.push({
        ...base,
        envId: env.id,
        envName: env.name,
        entitlements: scaledEntitlements,
        primaryEntitlement: scaledPrimaryEntitlement,
        instances: scaledInstances,
      })
    }
  }

  return result
}
