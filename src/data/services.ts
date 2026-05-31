export const SERVICES = [
  { slug: "home-visits", title: "Home Pet Visits", desc: "Routine check-ups and consultations in the comfort of your home — stress-free for your pet.", color: "blue", icon: "home" },
  { slug: "emergency", title: "Emergency Home Care", desc: "Rapid-response veterinary care when your pet needs urgent attention — any time of day.", color: "pink", icon: "siren" },
  { slug: "vaccination", title: "Vaccination at Home", desc: "Complete vaccination schedules for puppies, kittens and adults — done safely at home.", color: "green", icon: "syringe" },
  { slug: "deworming", title: "Deworming at Home", desc: "Safe deworming protocols tailored to your pet's age, weight and lifestyle.", color: "orange", icon: "shield" },
  { slug: "follow-up", title: "Follow-up Treatment", desc: "Continuous care and recovery monitoring after surgery or illness, right at home.", color: "blue", icon: "clipboard" },
  { slug: "post-op", title: "Post-Operative Care", desc: "Wound care, suture removal and recovery support after operative procedures.", color: "green", icon: "heart-pulse" },
  { slug: "checkups", title: "Regular Check-ups", desc: "Preventive wellness exams to catch health issues before they become serious.", color: "yellow", icon: "stethoscope" },
  { slug: "blood-work", title: "Blood Work & Diagnostics", desc: "Sample collection at home — fast, accurate lab reports without clinic visits.", color: "pink", icon: "test-tube" },
  { slug: "treatments", title: "Specialized Treatments", desc: "Tick fever, severe wounds, dressings, bandages, joint problems and more.", color: "orange", icon: "bandage" },
  { slug: "iv", title: "Home IV Services", desc: "Sterile fluid therapy and IV medications administered safely at your doorstep.", color: "blue", icon: "droplets" },
] as const;

export type ServiceColor = (typeof SERVICES)[number]["color"];

export const colorMap: Record<ServiceColor, { bg: string; text: string; ring: string }> = {
  blue:   { bg: "bg-brand-blue-soft",   text: "text-brand-blue",   ring: "ring-brand-blue/20" },
  green:  { bg: "bg-brand-green-soft",  text: "text-brand-green",  ring: "ring-brand-green/20" },
  orange: { bg: "bg-brand-orange-soft", text: "text-brand-orange", ring: "ring-brand-orange/20" },
  pink:   { bg: "bg-brand-pink-soft",   text: "text-brand-pink",   ring: "ring-brand-pink/20" },
  yellow: { bg: "bg-brand-yellow-soft", text: "text-brand-orange", ring: "ring-brand-yellow/30" },
};
