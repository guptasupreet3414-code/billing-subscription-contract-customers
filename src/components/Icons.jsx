export const DashboardIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="7" height="7" rx="1" fill={color} />
    <rect x="11" y="2" width="7" height="7" rx="1" fill={color} />
    <rect x="2" y="11" width="7" height="7" rx="1" fill={color} />
    <rect x="11" y="11" width="7" height="7" rx="1" fill={color} />
  </svg>
)

export const SettingsIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="2" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const ShieldIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L3 5v5c0 4.4 3 8.2 7 9 4-0.8 7-4.6 7-9V5L10 2z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const HierarchyIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="8" y="1" width="4" height="4" rx="1" fill={color} />
    <rect x="2" y="13" width="4" height="4" rx="1" fill={color} />
    <rect x="14" y="13" width="4" height="4" rx="1" fill={color} />
    <path d="M10 5v3M10 8H5v2M10 8h5v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const CycleIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10a6 6 0 0 1 6-6 6 6 0 0 1 4.24 1.76L16 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 4v4h-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 10a6 6 0 0 1-6 6 6 6 0 0 1-4.24-1.76L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M4 16v-4h4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CodeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const GlobeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="2" />
    <path d="M2 10h16M10 2c-2 3-3 5-3 8s1 5 3 8M10 2c2 3 3 5 3 8s-1 5-3 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const DocumentIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 2h7l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 2v4h4M7 9h6M7 12h6M7 15h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const MobileIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="5" y="1" width="10" height="18" rx="2" stroke={color} strokeWidth="2" />
    <circle cx="10" cy="16" r="1" fill={color} />
    <line x1="8" y1="4" x2="12" y2="4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const SparkleIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2l1.8 5.5H18l-4.9 3.5 1.9 5.5L10 13l-4.9 3.5 1.9-5.5L2 7.5h6.2L10 2z" fill={color} />
  </svg>
)

export const EnvelopeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke={color} strokeWidth="2" />
    <path d="M2 6l8 6 8-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const CartIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M1 1h3l2.5 9.5h8.5l2-6H5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="16.5" r="1.5" fill={color} />
    <circle cx="14" cy="16.5" r="1.5" fill={color} />
  </svg>
)

export const HelpIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="2" />
    <path d="M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="14.5" r="1" fill={color} />
  </svg>
)

export const GearIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="2" />
    <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const HamburgerIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <line x1="2" y1="5" x2="18" y2="5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="10" x2="18" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="15" x2="18" y2="15" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const ChevronLeftIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 3L5 8l5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronRightIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3l5 5-5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronDownIcon = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 5l4 4 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronUpIcon = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 9l4-4 4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CloseIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 2l12 12M14 2L2 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const KeyIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="6" cy="14" r="3.25" stroke={color} strokeWidth="2" />
    <path d="M8.3 11.7L16 4M16 4h-3.5M16 4v3.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CheckCircleIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.5" />
    <path d="M5 8.2l2 2 4-4.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const AlertTriangleIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 1.8l6.6 11.4a1 1 0 0 1-0.9 1.5H2.3a1 1 0 0 1-0.9-1.5L8 1.8z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="8" y1="6.2" x2="8" y2="9.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="11.8" r="0.9" fill={color} />
  </svg>
)

export const AlertCircleIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.5" />
    <line x1="8" y1="4.6" x2="8" y2="8.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="11.2" r="0.9" fill={color} />
  </svg>
)

export const MinusCircleIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.5" />
    <line x1="5" y1="8" x2="11" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const InfoCircleIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.5" />
    <line x1="10" y1="9" x2="10" y2="14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="6" r="1.1" fill={color} />
  </svg>
)

export const UserIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="6.5" r="3.5" stroke={color} strokeWidth="1.5" />
    <path d="M2.5 17.5c0-3.6 3.4-6.2 7.5-6.2s7.5 2.6 7.5 6.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const InboxIcon = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M4 16L8 5h16l4 11v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M4 16h7a1 1 0 0 1 1 1 4 4 0 0 0 8 0 1 1 0 0 1 1-1h7" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export const AtomIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="1.6" fill={color} />
    <ellipse cx="10" cy="10" rx="8" ry="3.2" stroke={color} strokeWidth="1.5" />
    <ellipse cx="10" cy="10" rx="8" ry="3.2" stroke={color} strokeWidth="1.5" transform="rotate(60 10 10)" />
    <ellipse cx="10" cy="10" rx="8" ry="3.2" stroke={color} strokeWidth="1.5" transform="rotate(120 10 10)" />
  </svg>
)

export const CreditCardIcon = ({ size = 32, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="26" height="18" rx="2" stroke={color} strokeWidth="1.5" />
    <line x1="3" y1="13" x2="29" y2="13" stroke={color} strokeWidth="1.5" />
    <line x1="7" y1="19" x2="13" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const PlusIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <line x1="8" y1="2" x2="8" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="2" y1="8" x2="14" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const DotsVerticalIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="3" r="1.5" fill={color} />
    <circle cx="8" cy="8" r="1.5" fill={color} />
    <circle cx="8" cy="13" r="1.5" fill={color} />
  </svg>
)

export const DownloadIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 2v8M5 7l3 3 3-3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12h12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const FilterIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 4h12M4 8h8M6 12h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const AlertCircleFillIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill={color} />
    <line x1="8" y1="5" x2="8" y2="8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="11" r="1" fill="white" />
  </svg>
)

export const CalendarIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="16" height="14" rx="2" stroke={color} strokeWidth="1.5" />
    <path d="M2 9h16" stroke={color} strokeWidth="1.5" />
    <path d="M6 2v4M14 2v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const LayersIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M2 6l8-4 8 4-8 4-8-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2 10l8 4 8-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 14l8 4 8-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CartOutlineIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M2 2h2l2.4 9.6a1 1 0 0 0 1 .8h6.8a1 1 0 0 0 1-.8L17 7H5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="17" r="1" stroke={color} strokeWidth="1.5" />
    <circle cx="14" cy="17" r="1" stroke={color} strokeWidth="1.5" />
  </svg>
)

export const CubeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2L3 6v8l7 4 7-4V6l-7-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 10L3 6M10 10l7-4M10 10v8" stroke={color} strokeWidth="1.5" />
  </svg>
)

export const DollarIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 3v14M13 6.5c0-1.4-1.3-2.5-3-2.5S7 5.1 7 6.5 8.3 9 10 9s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export function getIcon(iconType, size = 20, color = 'white') {
  const props = { size, color }
  switch (iconType) {
    case 'dashboard': return <DashboardIcon {...props} />
    case 'settings': return <SettingsIcon {...props} />
    case 'shield': return <ShieldIcon {...props} />
    case 'hierarchy': return <HierarchyIcon {...props} />
    case 'cycle': return <CycleIcon {...props} />
    case 'code': return <CodeIcon {...props} />
    case 'globe': return <GlobeIcon {...props} />
    case 'document': return <DocumentIcon {...props} />
    case 'mobile': return <MobileIcon {...props} />
    case 'sparkle': return <SparkleIcon {...props} />
    case 'envelope': return <EnvelopeIcon {...props} />
    case 'key': return <KeyIcon {...props} />
    case 'atom': return <AtomIcon {...props} />
    default: return <DashboardIcon {...props} />
  }
}
