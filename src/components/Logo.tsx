interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'dark' | 'light' | 'forest';
}

/**
 * CAG brand mark — a geometric monogram in a rounded square.
 */
export default function Logo({ className = '', showText = true, variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' || variant === 'forest' ? 'text-white' : 'text-navy-800';
  const accentColor = 'text-gold-300';
  const markBg = variant === 'forest' ? 'fill-forest-800' : 'fill-navy-800';
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="10" className={markBg} />
        <path
          d="M12 13h16v14H12z"
          className="fill-none stroke-gold-300"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 18h16M12 23h10"
          className="stroke-gold-300"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="29" cy="26" r="4.5" className="fill-gold-300" />
        <text
          x="29"
          y="28.5"
          fontFamily="Sora, Inter, sans-serif"
          fontSize="6"
          fontWeight="700"
          className="fill-navy-800"
          textAnchor="middle"
        >
          $
        </text>
      </svg>
      {showText && (
        <span className={`font-display text-[15px] font-bold leading-none tracking-tight ${textColor}`}>
          CASH&nbsp;ANY
          <span className={`ml-1 ${accentColor}`}>GADGET</span>
        </span>
      )}
    </span>
  );
}
