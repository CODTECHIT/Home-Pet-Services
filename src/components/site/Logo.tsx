import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export const Logo = ({ compact = false }: { compact?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <img
      src={logoImg}
      alt="Home Pet Services Logo"
      className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
    />
    {!compact && (
      <span className="leading-tight hidden min-[375px]:block">
        <span className="block font-display text-base sm:text-lg font-bold text-foreground">Home Pet Services</span>
        <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-brand-blue font-semibold">Care at your doorstep</span>
      </span>
    )}
  </Link>
);
