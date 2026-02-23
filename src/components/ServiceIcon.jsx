const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  scissors: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.5" y2="15.5" />
      <line x1="8.5" y1="8.5" x2="20" y2="20" />
    </svg>
  ),
  ruler: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path d="M21 5H3v14h18V5z" />
      <line x1="6" y1="9" x2="6" y2="15" />
      <line x1="10" y1="9" x2="10" y2="15" />
      <line x1="14" y1="9" x2="14" y2="15" />
      <line x1="18" y1="9" x2="18" y2="15" />
    </svg>
  ),
  bridal: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path d="M12 2v4M8 6h8" />
      <path d="M6 22V10l3-2 3 2 3-2 3 2v12" />
      <path d="M8 22v-5h8v5" />
      <path d="M8 14h8" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v2M12 16v2M6 12h2M16 12h2M8.93 8.93l1.41 1.41M13.66 13.66l1.41 1.41M8.93 15.07l1.41-1.41M13.66 10.34l1.41-1.41" />
    </svg>
  ),
  styling: (
    <svg viewBox="0 0 24 24" {...iconProps}>
      <path d="M6 2a2 2 0 00-2 2v2h16V4a2 2 0 00-2-2H6z" />
      <path d="M4 8v12a2 2 0 002 2h12a2 2 0 002-2V8H4z" />
      <path d="M9 12h6" />
    </svg>
  ),
};

const ServiceIcon = ({ name, className = 'w-6 h-6' }) => {
  const icon = icons[name] || icons.scissors;
  return (
    <span className={`inline-flex items-center justify-center text-primary-600 [&_svg]:w-full [&_svg]:h-full ${className}`}>
      {icon}
    </span>
  );
};

export default ServiceIcon;
