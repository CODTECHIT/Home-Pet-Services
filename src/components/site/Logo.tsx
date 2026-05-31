import { Link } from "@tanstack/react-router";

export const Logo = ({ compact = false }: { compact?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <span className="relative grid h-11 w-11 place-items-center rounded-2xl gradient-cta shadow-soft transition-transform group-hover:scale-105">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" aria-hidden="true">
        <path d="M12 3.5c2.5 0 4 2.2 4 4.5h-2c0-1.4-.9-2.5-2-2.5s-2 1.1-2 2.5H8c0-2.3 1.5-4.5 4-4.5Z"/>
        <ellipse cx="6.5" cy="10" rx="2" ry="2.5"/>
        <ellipse cx="17.5" cy="10" rx="2" ry="2.5"/>
        <ellipse cx="9" cy="6" rx="1.6" ry="2"/>
        <ellipse cx="15" cy="6" rx="1.6" ry="2"/>
        <path d="M12 13c3 0 5.5 2.5 5.5 5 0 1.4-1.1 2.5-2.5 2.5-.9 0-1.7-.4-3-.4s-2.1.4-3 .4C7.6 20.5 6.5 19.4 6.5 18c0-2.5 2.5-5 5.5-5Z"/>
      </svg>
    </span>
    {!compact && (
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold text-foreground">Home Pet Services</span>
        <span className="block text-[10px] uppercase tracking-[0.18em] text-brand-blue font-semibold">Care at your doorstep</span>
      </span>
    )}
  </Link>
);
