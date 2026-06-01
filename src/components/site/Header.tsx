import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Sparkles, Headset, ChevronDown, Home, Siren, Syringe, ShieldCheck, ClipboardCheck, HeartPulse, Stethoscope, TestTube, Bandage, Droplets, User, Calendar } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES } from "@/data/services";

const serviceIcons: Record<string, typeof Home> = {
  home: Home,
  siren: Siren,
  syringe: Syringe,
  shield: ShieldCheck,
  clipboard: ClipboardCheck,
  "heart-pulse": HeartPulse,
  stethoscope: Stethoscope,
  "test-tube": TestTube,
  bandage: Bandage,
  droplets: Droplets,
};

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Stethoscope, hasDropdown: true },
  { to: "/about", label: "About Us", icon: User },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* ── Top Bar ── */}
      <div className="hidden sm:flex border-b border-[#D8ECE0]/40 bg-gradient-to-r from-[#E6F1EB]/50 via-white/80 to-[#E9F3EC]/50 text-xs text-muted-foreground py-2.5 px-4 sm:px-6 lg:px-8 justify-between items-center backdrop-blur-md">
        <span className="flex items-center gap-1.5 font-bold text-foreground">
          <Sparkles className="h-3.5 w-3.5 text-brand-green fill-current animate-wiggle" />
          Premium home pet care in Hyderabad
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-semibold">
            <Headset className="h-3.5 w-3.5 text-brand-blue" />
            24/7 Support
          </span>
          <span className="h-3 w-px bg-border/60" />
          <a href="tel:+919985356507" className="flex items-center gap-1.5 font-bold text-foreground hover:text-brand-blue transition-colors">
            <Phone className="h-3.5 w-3.5 text-brand-blue" />
            99853 56507
          </a>
        </div>
      </div>

      {/* ── Navigation Header ── */}
      <header className="w-full backdrop-blur-md bg-white/80 border-b border-border/50 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 sm:py-3.5">
          <Logo />
          
          <nav className="hidden lg:flex items-center gap-1.5 shrink-0">
            {NAV.map((n) =>
              n.hasDropdown ? (
                <div
                  key={n.label}
                  className="relative py-2"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    className="px-4.5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-full transition-all duration-300 flex items-center group/nav border border-transparent whitespace-nowrap"
                    activeProps={{ className: "text-brand-blue bg-brand-blue-soft border border-brand-blue/10 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)]" }}
                  >
                    <span>{n.label}</span>
                    <ChevronDown className="h-4 w-4 ml-1 inline text-muted-foreground/75 group-hover/nav:translate-y-0.5 transition-transform duration-300" />
                  </Link>

                  {isServicesHovered && (
                    <div className="absolute top-full left-0 mt-1 min-w-[290px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-border/50 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-3.5 py-2 mb-1.5 border-b border-border/40">
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue/80">Available Services</span>
                      </div>
                      <div className="grid gap-0.5">
                        {SERVICES.map((s) => {
                          const Icon = serviceIcons[s.icon] ?? Home;
                          return (
                            <Link
                              key={s.slug}
                              to="/services"
                              search={{ service: s.slug }}
                              onClick={() => setIsServicesHovered(false)}
                              className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-brand-blue-soft hover:text-brand-blue rounded-xl cursor-pointer transition-all duration-200 group/item"
                            >
                              <div className="h-8 w-8 rounded-lg bg-muted/65 flex items-center justify-center text-muted-foreground group-hover/item:bg-white group-hover/item:text-brand-blue transition-all duration-250 shrink-0 shadow-sm">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="truncate">{s.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={n.label + n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="px-4.5 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-full transition-all duration-300 flex items-center group border border-transparent whitespace-nowrap"
                  activeProps={{ className: "text-brand-blue bg-brand-blue-soft border border-brand-blue/10 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)]" }}
                >
                  <span>{n.label}</span>
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-whatsapp/25 text-whatsapp bg-whatsapp/5 hover:bg-whatsapp/10 px-5.5 py-2.5 text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 fill-current" /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white px-5.5 py-2.5 text-sm font-bold transition-all duration-300 shadow-md hover:shadow-pop hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Calendar className="h-4.5 w-4.5" /> Book a Visit
            </Link>
          </div>

          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-white hover:bg-muted/40 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Mobile Menu Drawer ── */}
        {open && (
          <div className="lg:hidden border-t border-border/80 bg-white/95 backdrop-blur-md shadow-inner animate-fade-in duration-300">
            <nav className="px-4 py-5 flex flex-col gap-1.5">
              {NAV.map((n) => {
                const ItemIcon = n.icon;
                return (
                  <Link
                    key={n.label + n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-2xl text-sm font-bold text-foreground hover:bg-muted/50 transition-all flex items-center gap-3 border border-transparent"
                    activeProps={{ className: "text-brand-blue bg-brand-blue-soft border border-brand-blue/10 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.02)]" }}
                  >
                    <ItemIcon className="h-4.5 w-4.5 text-muted-foreground/80 shrink-0" />
                    <span>{n.label}</span>
                  </Link>
                );
              })}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/40 mt-2">
                <a
                  href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-whatsapp/25 text-whatsapp bg-whatsapp/5 px-4 py-3 text-sm font-bold shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current" /> WhatsApp
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white px-4 py-3 text-sm font-bold shadow-md"
                >
                  <Calendar className="h-4 w-4" /> Book a Visit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-1-.5-1.7-.9-2.4-2-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.1-.3.2-.5s0-.4 0-.5c-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4S7 9.3 7 10.7s1 2.8 1.1 3 2 3.1 4.9 4.3c.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/>
    <path d="M20.5 3.5C18.3 1.2 15.3 0 12.1 0 5.5 0 .2 5.4.2 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 11.9-5.4 11.9-12 0-3.2-1.2-6.2-3.4-8.3ZM12.1 22c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 15.8 2 13.9 2 12 2 6.5 6.5 2 12.1 2c2.7 0 5.2 1.1 7.1 3s2.9 4.5 2.9 7.1c0 5.5-4.5 9.9-10 9.9Z"/>
  </svg>
);
