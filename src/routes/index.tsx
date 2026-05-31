import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Clock, ShieldCheck, Heart, Home as HomeIcon, Sparkles, Star, MapPin, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Amoeba, PawPattern } from "@/components/site/Amoeba";
import { WhatsAppIcon } from "@/components/site/Header";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SERVICES, colorMap } from "@/data/services";

import heroPets from "@/assets/hero-pets.png";
import dogPortrait from "@/assets/dog-portrait.png";
import dogCta from "@/assets/dog-cta.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Pet Services — Trusted Veterinary Care at Home in Hyderabad" },
      { name: "description", content: "Compassionate home veterinary care in Hyderabad: vaccinations, emergency visits, deworming, IV therapy and post-op care delivered to your doorstep." },
      { property: "og:title", content: "Home Pet Services — Veterinary Care at Home in Hyderabad" },
      { property: "og:description", content: "Trusted pet home services across Hyderabad. Vaccinations, emergencies, IV therapy and more — by caring professionals." },
    ],
  }),
  component: HomePage,
});

const AREAS = ["Jubilee Hills","Banjara Hills","Gachibowli","Financial District","Kondapur","Madhapur","Manikonda","Kokapet","Nallagandla","Tellapur","Hitech City","Kukatpally","Miyapur","Begumpet","Secunderabad","+ All over Hyderabad"];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ValueBar />
      <Services />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Areas />
      <FinalCta />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative blobs – clipped so they don't overflow on mobile */}
      <Amoeba variant={1} color="oklch(0.85 0.14 90 / 0.35)" className="absolute -top-20 -left-24 h-72 w-72 sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] animate-spin-slow pointer-events-none" />
      <Amoeba variant={2} color="oklch(0.68 0.16 155 / 0.15)" className="absolute top-32 -right-24 h-64 w-64 sm:h-[360px] sm:w-[360px] lg:h-[460px] lg:w-[460px] pointer-events-none" />
      <PawPattern className="absolute top-8 right-1/3 h-8 w-8 text-brand-blue/20 rotate-12 pointer-events-none" />
      <PawPattern className="absolute bottom-16 left-1/4 h-6 w-6 text-brand-orange/30 -rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
        {/* Two-column on large screens, stacked on mobile */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* ── Left: text column ── */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-blue ring-1 ring-brand-blue/15">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" /> Premium home pet care · Hyderabad
            </span>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-balance text-foreground">
              Your pet. <br />
              <span className="text-brand-blue italic">Our priority.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-balance">
              Vaccinations, emergencies, deworming, IV therapy and post-operative care — delivered with compassion to your doorstep.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
                className="group inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold shadow-pop hover:scale-[1.02] transition"
              >
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="flex flex-col items-start leading-tight">
                  <span>Chat on WhatsApp</span>
                  <span className="text-[10px] sm:text-[11px] font-normal opacity-90">99853 56507</span>
                </span>
              </a>
              <a
                href="tel:+919985356507"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold text-foreground shadow-soft ring-1 ring-border hover:scale-[1.02] transition"
              >
                <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-brand-blue text-white shrink-0">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="flex flex-col items-start leading-tight">
                  <span>Call now</span>
                  <span className="text-[10px] sm:text-[11px] font-normal text-muted-foreground">99853 56507</span>
                </span>
              </a>
            </div>

            {/* Trust icons */}
            <div className="mt-8 grid grid-cols-4 gap-3 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {[
                { Icon: Clock, label: "24/7", sub: "Support" },
                { Icon: HomeIcon, label: "Home", sub: "Visits" },
                { Icon: ShieldCheck, label: "Safe &", sub: "Trusted" },
                { Icon: Heart, label: "Pet First", sub: "Approach" },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12 grid place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-border">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-brand-blue" />
                  </div>
                  <div className="mt-1.5 text-[11px] sm:text-sm font-semibold text-foreground">{label}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image column ── */}
          <div className="relative flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <Amoeba variant={3} color="oklch(0.58 0.18 245 / 0.12)" className="absolute inset-0 h-full w-full scale-110 pointer-events-none" />
              <Amoeba variant={4} color="oklch(0.72 0.17 55 / 0.18)" className="absolute -bottom-8 -right-8 h-52 w-52 pointer-events-none" />
              <img
                src={heroPets}
                alt="Happy golden retriever and tabby cat"
                width={1024}
                height={1024}
                className="relative z-10 w-full drop-shadow-2xl"
              />
              {/* Floating badge – shown only on sm+ to avoid overlap on tiny screens */}
              <div className="hidden sm:flex absolute bottom-4 left-0 lg:-left-6 z-20 items-center gap-3 rounded-3xl bg-white px-4 py-3 shadow-pop ring-1 ring-border max-w-[220px] lg:max-w-[260px]">
                <div className="h-9 w-9 lg:h-11 lg:w-11 shrink-0 grid place-items-center rounded-2xl bg-brand-blue-soft">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6 text-brand-blue" fill="currentColor">
                    <circle cx="12" cy="14" r="3.5"/><circle cx="6" cy="9" r="2"/><circle cx="18" cy="9" r="2"/>
                    <circle cx="9" cy="5" r="1.6"/><circle cx="15" cy="5" r="1.6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Care that feels like family.</p>
                  <p className="text-[11px] text-muted-foreground">Right at your doorstep.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ValueBar() {
  const items = [
    "Licensed Vet Team",
    "No-Stress Home Visits",
    "Same-Day Emergency",
    "Transparent Pricing",
    "WhatsApp Bookings",
    "24 / 7 Support",
    "Home Visits",
    "Pet First Approach",
  ];
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border bg-foreground text-background overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3 sm:py-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-6 text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-background/80 shrink-0"
          >
            <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-orange shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">What we offer</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-balance">Complete care for your companion</h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-muted-foreground">
            <span className="h-px w-8 sm:w-12 bg-border"/> <span>🐾</span> <span className="h-px w-8 sm:w-12 bg-border"/>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {SERVICES.slice(0, 5).map((s) => {
            const c = colorMap[s.color];
            return (
              <article key={s.slug} className="group relative rounded-3xl bg-card p-5 sm:p-6 ring-1 ring-border hover:shadow-pop hover:-translate-y-1 transition-all duration-300">
                <div className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl ${c.bg} grid place-items-center ring-4 ${c.ring} group-hover:scale-110 transition`}>
                  <ServiceIcon name={s.icon} className={`h-7 w-7 sm:h-8 sm:w-8 ${c.text}`} />
                </div>
                <h3 className="mt-4 font-display text-lg sm:text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className={`mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full ${c.bg} ${c.text} group-hover:translate-x-1 transition`}>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-brand-blue-soft hover:text-brand-blue transition">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { Icon: Heart, color: "blue", title: "Loving & Caring", desc: "We treat every pet with love and compassion." },
    { Icon: ShieldCheck, color: "green", title: "Safe & Trusted", desc: "Your pet's safety and well-being always come first." },
    { Icon: Clock, color: "orange", title: "Fast Response", desc: "We're ready whenever your pet needs us, day or night." },
    { Icon: Sparkles, color: "pink", title: "Affordable Plans", desc: "Quality care at prices that are fair and transparent." },
  ] as const;

  return (
    <section className="relative py-10 lg:py-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-brand-blue-soft/60 px-5 sm:px-10 lg:px-14 py-10 sm:py-14 overflow-hidden">
          <Amoeba variant={1} color="oklch(0.58 0.18 245 / 0.12)" className="absolute -top-20 -left-20 h-80 w-80 pointer-events-none" />
          <Amoeba variant={4} color="oklch(0.68 0.16 155 / 0.18)" className="absolute -bottom-20 -right-20 h-80 w-80 pointer-events-none" />

          <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Text */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Why choose us</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black leading-tight">
                More than just care, <span className="italic text-brand-blue">it's a bond.</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto lg:mx-0">
                We treat every pet with love, patience and dedication. Your pet's happiness and safety is our top priority.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cta text-white px-5 py-3 text-sm font-semibold shadow-soft">
                About us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Dog image – centered, visible on all screens */}
            <div className="lg:col-span-4 relative flex justify-center order-first lg:order-none">
              <div className="relative">
                <Amoeba variant={3} color="oklch(0.58 0.18 245 / 0.25)" className="absolute inset-0 h-full w-full scale-110 animate-float pointer-events-none" />
                <img
                  src={dogPortrait}
                  alt="Happy puppy"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative w-44 sm:w-56 lg:w-64 drop-shadow-xl"
                />
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4 w-full">
              {items.map(({ Icon, color, title, desc }) => {
                const c = colorMap[color];
                return (
                  <div key={title} className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-border">
                    <div className={`h-10 w-10 sm:h-11 sm:w-11 rounded-xl ${c.bg} grid place-items-center`}>
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${c.text}`} />
                    </div>
                    <h4 className="mt-3 font-bold text-xs sm:text-sm">{title}</h4>
                    <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "500+", label: "Happy pet parents", color: "blue" },
    { num: "1200+", label: "Pets served", color: "green" },
    { num: "25+", label: "Areas covered", color: "orange" },
    { num: "10+", label: "Services offered", color: "pink" },
  ] as const;

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white ring-1 ring-border shadow-soft grid grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {stats.map((s, i) => {
            const c = colorMap[s.color];
            const isOdd = i % 2 !== 0;
            const isBottomRow = i >= 2;
            return (
              <div
                key={s.label}
                className={[
                  "p-5 sm:p-6 flex items-center gap-3 sm:gap-4",
                  isOdd ? "border-l border-border" : "",
                  isBottomRow ? "border-t border-border lg:border-t-0" : "",
                  i > 0 && !isOdd ? "lg:border-l lg:border-border" : "",
                ].join(" ")}
              >
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-2xl ${c.bg} grid place-items-center shrink-0`}>
                  <Star className={`h-4 w-4 sm:h-5 sm:w-5 ${c.text}`} />
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-foreground">{s.num}</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Anjali R.", area: "Madhapur", avatar: avatar1, quote: "Excellent service! My dog is always happy and well cared for. Their team showed up on time and made the whole vaccination process stress-free." },
    { name: "Rohit S.", area: "Gachibowli", avatar: avatar2, quote: "Very professional and reliable team. They treat pets like family. I called them in the middle of the night for an emergency and they were here within the hour." },
    { name: "Sneha K.", area: "Kondapur", avatar: avatar3, quote: "Home IV therapy was a lifesaver. My senior dog hates the clinic. Getting expert care at home made all the difference in his recovery." },
  ];

  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">What pet parents say</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black">
            Real stories, <span className="italic text-brand-orange">real happiness</span>
          </h2>
        </div>
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((t) => (
            <figure key={t.name} className="relative rounded-3xl bg-white p-5 sm:p-7 ring-1 ring-border shadow-soft">
              <div className="flex gap-0.5 text-brand-yellow">
                {Array.from({length:5}).map((_,i) => <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <img src={t.avatar} alt={t.name} loading="lazy" width={64} height={64} className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover bg-brand-blue-soft shrink-0" />
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.area}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-brand-green-soft/60 overflow-hidden p-6 sm:p-10 lg:p-12">
          <Amoeba variant={2} color="oklch(0.68 0.16 155 / 0.18)" className="absolute -top-16 -right-16 h-64 w-64 pointer-events-none" />
          <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green">Serving pet parents across</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black">Hyderabad</h2>
              <p className="mt-3 sm:mt-4 text-sm text-muted-foreground">
                We proudly serve pet families across the city's most prominent locations — and everywhere in between.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {AREAS.map((a) => (
                <div
                  key={a}
                  className={`rounded-full px-3 py-2 text-xs font-medium flex items-center gap-1.5 ${a.startsWith("+") ? "gradient-cta text-white" : "bg-white text-foreground ring-1 ring-border"}`}
                >
                  <MapPin className="h-3.5 w-3.5 text-brand-green shrink-0" />
                  <span className="truncate">{a.replace("+ ","")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative pt-4 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] gradient-cta text-white px-5 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12">
          <Amoeba variant={1} color="rgba(255,255,255,0.08)" className="absolute -top-20 -left-20 h-72 w-72 pointer-events-none" />
          <Amoeba variant={3} color="rgba(255,255,255,0.06)" className="absolute -bottom-20 -right-20 h-80 w-80 pointer-events-none" />

          {/* Mobile: stacked. Desktop: side-by-side grid */}
          <div className="relative flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:gap-6 lg:items-center lg:text-left">
            {/* Dog image */}
            <img
              src={dogCta}
              alt="Happy puppy"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative w-32 sm:w-40 lg:col-span-3 lg:w-44 lg:mx-0 drop-shadow-xl animate-float mb-4 lg:mb-0"
            />

            {/* Heading */}
            <div className="relative lg:col-span-5">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                Ready to give your pet the <span className="italic text-brand-yellow">best care?</span>
              </h2>
              <p className="mt-2 text-sm text-white/85">Book your home visit in under a minute — we'll be there.</p>
            </div>

            {/* Buttons */}
            <div className="relative lg:col-span-4 mt-6 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm lg:max-w-none">
              <a
                href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
                className="rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/20 p-4 hover:bg-white/25 transition"
              >
                <WhatsAppIcon className="h-5 w-5 mb-2" />
                <div className="text-xs uppercase tracking-widest opacity-80">Chat on WhatsApp</div>
                <div className="font-display text-lg sm:text-xl font-bold">99853 56507</div>
              </a>
              <a
                href="tel:+919985356507"
                className="rounded-2xl bg-white text-foreground p-4 hover:scale-[1.02] transition shadow-pop"
              >
                <Phone className="h-5 w-5 mb-2 text-brand-blue" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call now</div>
                <div className="font-display text-lg sm:text-xl font-bold">99853 56507</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
