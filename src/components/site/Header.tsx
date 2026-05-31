import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground rounded-full transition-colors"
              activeProps={{ className: "text-brand-blue bg-brand-blue-soft" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+919985356507"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            <Phone className="h-4 w-4" /> 99853 56507
          </a>
          <a
            href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-2.5 text-sm font-semibold hover:brightness-110 transition shadow-soft"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to} to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-muted"
                activeProps={{ className: "text-brand-blue bg-brand-blue-soft" }}
              >{n.label}</Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <a href="tel:+919985356507" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-4 py-3 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-4 py-3 text-sm font-semibold">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-1-.5-1.7-.9-2.4-2-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.1-.3.2-.5s0-.4 0-.5c-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4S7 9.3 7 10.7s1 2.8 1.1 3 2 3.1 4.9 4.3c.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/>
    <path d="M20.5 3.5C18.3 1.2 15.3 0 12.1 0 5.5 0 .2 5.4.2 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 11.9-5.4 11.9-12 0-3.2-1.2-6.2-3.4-8.3ZM12.1 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 15.8 2 13.9 2 12 2 6.5 6.5 2 12.1 2c2.7 0 5.2 1.1 7.1 3s2.9 4.5 2.9 7.1c0 5.5-4.5 9.9-10 9.9Z"/>
  </svg>
);
