// Status tone drives badge color, progress bar color, and iconography.
// healthy | approaching-limit | over-entitlement | no-data
export const statusConfig = {
  healthy: { label: 'Healthy', tone: 'success' },
  'approaching-limit': { label: 'Approaching limit', tone: 'warning' },
  'over-entitlement': { label: 'Over entitlement', tone: 'error' },
  'no-data': { label: 'No usage data', tone: 'neutral' },
}

export const accountManager = {
  name: 'Sarah Mitchell',
  title: 'Enterprise Account Manager, DigiCert',
  email: 'sarah.mitchell@digicert.com',
  phone: '+1 (801) 555-0142',
}

export const subscriptions = [
  {
    id: 'document-trust',
    name: 'Document Trust',
    iconType: 'document',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-DT-00231',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'approaching-limit',
    primaryEntitlement: { label: 'Signatures', consumed: 8200, total: 10000 },
    entitlements: [
      { name: 'Signatures', purchased: 10000, allocated: 10000, consumed: 8200, remaining: 1800 },
      { name: 'Users', purchased: 500, allocated: 420, consumed: 390, remaining: 110 },
      { name: 'Identity verifications', purchased: 1000, allocated: 1000, consumed: 760, remaining: 240 },
    ],
  },
  {
    id: 'software-trust',
    name: 'Software Trust',
    iconType: 'code',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-ST-00187',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Code signing certificates', consumed: 42, total: 50 },
    entitlements: [
      { name: 'Code signing certificates', purchased: 50, allocated: 50, consumed: 42, remaining: 8 },
      { name: 'Signing keys', purchased: 20, allocated: 18, consumed: 15, remaining: 5 },
      { name: 'Signing events', purchased: 10000, allocated: 10000, consumed: 7400, remaining: 2600 },
    ],
  },
  {
    id: 'trust-lifecycle',
    name: 'Trust Lifecycle Manager',
    iconType: 'cycle',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-TL-00098',
    renewalDate: 'Sep 1, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Managed certificates', consumed: 1120, total: 2000 },
    entitlements: [
      { name: 'Managed certificates', purchased: 2000, allocated: 2000, consumed: 1120, remaining: 880 },
      { name: 'Seats', purchased: 75, allocated: 75, consumed: 25, remaining: 50 },
      { name: 'Discovery scans / month', purchased: 100, allocated: 100, consumed: 64, remaining: 36 },
    ],
  },
  {
    id: 'keylocker',
    name: 'KeyLocker',
    iconType: 'key',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-KL-00045',
    renewalDate: 'Sep 1, 2026',
    environment: 'Production',
    status: 'approaching-limit',
    primaryEntitlement: { label: 'Signing keys', consumed: 18, total: 20 },
    entitlements: [
      { name: 'Signing keys', purchased: 20, allocated: 20, consumed: 18, remaining: 2 },
      { name: 'HSM partitions', purchased: 4, allocated: 4, consumed: 3, remaining: 1 },
      { name: 'Signing events / month', purchased: 5000, allocated: 5000, consumed: 4100, remaining: 900 },
    ],
  },
  {
    id: 'certcentral',
    name: 'CertCentral',
    iconType: 'shield',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-CC-00012',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'over-entitlement',
    primaryEntitlement: { label: 'SSL/TLS certificates', consumed: 108, total: 100 },
    entitlements: [
      { name: 'SSL/TLS certificates', purchased: 100, allocated: 100, consumed: 108, remaining: -8 },
      { name: 'Code signing certificates', purchased: 24, allocated: 24, consumed: 16, remaining: 8 },
      { name: 'S/MIME certificates', purchased: 200, allocated: 200, consumed: 140, remaining: 60 },
    ],
  },
  {
    id: 'dns',
    name: 'DigiCert DNS',
    iconType: 'globe',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-DNS-00076',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'no-data',
    primaryEntitlement: null,
    entitlements: [],
  },
  {
    id: 'device-trust',
    name: 'Device Trust',
    iconType: 'mobile',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-DVT-00153',
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
    id: 'private-ca',
    name: 'Private CA',
    iconType: 'hierarchy',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-PCA-00071',
    renewalDate: 'Sep 1, 2026',
    environment: 'Production',
    status: 'approaching-limit',
    primaryEntitlement: { label: 'Private CA hierarchies', consumed: 9, total: 10 },
    entitlements: [
      { name: 'Private CA hierarchies', purchased: 10, allocated: 10, consumed: 9, remaining: 1 },
      { name: 'Issued certificates', purchased: 50000, allocated: 50000, consumed: 38500, remaining: 11500 },
      { name: 'Sub-CAs', purchased: 25, allocated: 25, consumed: 20, remaining: 5 },
    ],
  },
  {
    id: 'valimail',
    name: 'Valimail',
    iconType: 'envelope',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-VML-00038',
    renewalDate: 'Jul 15, 2026',
    environment: 'Production',
    status: 'healthy',
    primaryEntitlement: { label: 'Protected domains', consumed: 18, total: 25 },
    entitlements: [
      { name: 'Protected domains', purchased: 25, allocated: 25, consumed: 18, remaining: 7 },
      { name: 'Email senders monitored', purchased: 500, allocated: 500, consumed: 410, remaining: 90 },
      { name: 'DMARC reports / month', purchased: 100000, allocated: 100000, consumed: 72000, remaining: 28000 },
    ],
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    iconType: 'sparkle',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-AIA-00012',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'over-entitlement',
    primaryEntitlement: { label: 'Agent executions / month', consumed: 132000, total: 100000 },
    entitlements: [
      { name: 'Agent executions / month', purchased: 100000, allocated: 100000, consumed: 132000, remaining: -32000 },
      { name: 'Active agents', purchased: 10, allocated: 10, consumed: 8, remaining: 2 },
      { name: 'Workflow integrations', purchased: 15, allocated: 15, consumed: 11, remaining: 4 },
    ],
  },
  {
    id: 'quantum-central',
    name: 'Quantum Central',
    iconType: 'atom',
    billingType: 'Enterprise contract',
    contractId: 'CTR-2024-QC-00005',
    renewalDate: 'Jun 6, 2026',
    environment: 'Production',
    status: 'no-data',
    primaryEntitlement: null,
    entitlements: [],
  },
]

export function getSummary(subs) {
  const active = subs.length
  const renewalDates = [...new Set(subs.map((s) => s.renewalDate))]
  const earliestRenewal = subs.length ? subs[0].renewalDate : '—'
  const approaching = subs.filter((s) => s.status === 'approaching-limit').length
  const over = subs.filter((s) => s.status === 'over-entitlement').length
  const needsAttention = approaching + over

  return {
    active,
    earliestRenewal,
    renewalDatesCount: renewalDates.length,
    approaching,
    over,
    needsAttention,
  }
}
