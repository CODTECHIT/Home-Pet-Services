import {
  Home, Siren, Syringe, ShieldCheck, ClipboardCheck, HeartPulse,
  Stethoscope, TestTube, Bandage, Droplets,
  type LucideIcon
} from "lucide-react";

const map: Record<string, LucideIcon> = {
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

export const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const Icon = map[name] ?? Home;
  return <Icon className={className} />;
};
