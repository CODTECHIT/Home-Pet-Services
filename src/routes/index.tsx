import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Clock, ShieldCheck, Heart, Home as HomeIcon, Sparkles, Star, MapPin, CheckCircle2, Calendar, Stethoscope, Headset, User, Leaf, HeartHandshake } from "lucide-react";
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

const AREAS = ["Jubilee Hills", "Banjara Hills", "Gachibowli", "Financial District", "Kondapur", "Madhapur", "Manikonda", "Kokapet", "Nallagandla", "Tellapur", "Hitech City", "Kukatpally", "Miyapur", "Begumpet", "Secunderabad", "+ All over Hyderabad"];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <StatsHeroBar />
      <ValueBar />
      <Services />
      <WhyUs />
      <Testimonials />
      <Areas />
      <FinalCta />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero pb-12 sm:pb-16 lg:pb-20">
      {/* Decorative blobs – clipped so they don't overflow on mobile */}
      <Amoeba variant={1} color="oklch(0.85 0.14 90 / 0.35)" className="absolute -top-20 -left-24 h-72 w-72 sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] animate-spin-slow pointer-events-none" />
      <Amoeba variant={2} color="oklch(0.68 0.16 155 / 0.15)" className="absolute top-32 -right-24 h-64 w-64 sm:h-[360px] sm:w-[360px] lg:h-[460px] lg:w-[460px] pointer-events-none" />
      <PawPattern className="absolute top-8 right-1/3 h-8 w-8 text-brand-blue/20 rotate-12 pointer-events-none" />
      <PawPattern className="absolute bottom-16 left-1/4 h-6 w-6 text-brand-orange/30 -rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ── Left: text column ── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-brand-blue/15 shadow-sm">
              <PawPattern className="h-3.5 w-3.5 text-brand-blue fill-current animate-wiggle" />
              Trusted · Safe · Compassionate
            </span>

            {/* Main Headline */}
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] text-foreground text-balance">
              Professional <br />
              Pet Care <br />
              <span className="text-brand-green">at Your Doorstep</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed text-balance">
              Vaccinations, emergencies, deworming, IV therapy and post-operative care — delivered with love and expertise.
            </p>

            {/* Features Row */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Feature 1 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-border shadow-sm">
                <span className="h-7 w-7 rounded-full bg-brand-green-soft text-brand-green flex items-center justify-center shrink-0">
                  <Stethoscope className="h-4 w-4" />
                </span>
                <div className="text-left leading-none">
                  <div className="text-xs font-bold text-foreground">Vet Experts</div>
                  <div className="text-[9px] text-muted-foreground font-semibold mt-0.5">Certified Team</div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-border shadow-sm">
                <span className="h-7 w-7 rounded-full bg-brand-blue-soft text-brand-blue flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div className="text-left leading-none">
                  <div className="text-xs font-bold text-foreground">Safe & Trusted</div>
                  <div className="text-[9px] text-muted-foreground font-semibold mt-0.5">Hygienic Care</div>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-border shadow-sm">
                <span className="h-7 w-7 rounded-full bg-brand-pink-soft text-brand-pink flex items-center justify-center shrink-0">
                  <Heart className="h-4 w-4" />
                </span>
                <div className="text-left leading-none">
                  <div className="text-xs font-bold text-foreground">Loved by Pets</div>
                  <div className="text-[9px] text-muted-foreground font-semibold mt-0.5">Happy Families</div>
                </div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              {/* Book a visit button */}
              <Link
                to="/contact"
                className="group flex items-center gap-4 bg-brand-blue text-white rounded-2xl p-4 sm:px-6 sm:py-4 hover:scale-[1.02] active:scale-[0.98] transition shadow-md text-left"
              >
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Calendar className="h-5.5 w-5.5 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm sm:text-base font-bold">Book a Home Visit</div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-normal mt-0.5">It takes less than 1 minute</div>
                </div>
              </Link>

              {/* Chat on WhatsApp */}
              <a
                href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white border border-whatsapp/40 text-whatsapp hover:bg-whatsapp/5 rounded-2xl p-4 sm:px-6 sm:py-4 hover:scale-[1.02] active:scale-[0.98] transition shadow-md text-left"
              >
                <div className="h-10 w-10 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="h-5.5 w-5.5 text-whatsapp" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm sm:text-base font-bold text-foreground">Chat on WhatsApp</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-normal mt-0.5">Quick response</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right: image column ── */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Backdrop shape */}
              <div className="absolute inset-0 bg-brand-green-soft/40 rounded-full filter blur-2xl scale-95 opacity-90 animate-float pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] bg-brand-green/10 rounded-full pointer-events-none shadow-inner" />

              {/* Pet cutout image */}
              <img
                src={heroPets}
                alt="Happy golden retriever and tabby cat"
                width={1024}
                height={1024}
                className="relative z-10 w-full drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500"
              />

              {/* Floating Social Proof Badge */}
              <div className="absolute -bottom-2 -left-4 sm:bottom-4 sm:-left-6 z-20 flex items-center gap-3 rounded-full bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-pop border border-border/80 max-w-[240px] sm:max-w-[260px]">
                <div className="flex -space-x-3 shrink-0">
                  <img src={avatar1} className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover shadow-sm bg-brand-blue-soft" alt="User avatar" />
                  <img src={avatar2} className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover shadow-sm bg-brand-blue-soft" alt="User avatar" />
                  <img src={avatar3} className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-white object-cover shadow-sm bg-brand-blue-soft" alt="User avatar" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-xs sm:text-sm font-black text-foreground">1,000+</p>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground font-semibold">Happy Pet Parents</p>
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
            <span className="h-px w-8 sm:w-12 bg-border" /> <span>🐾</span> <span className="h-px w-8 sm:w-12 bg-border" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {SERVICES.slice(0, 5).map((s) => {
            const c = colorMap[s.color];
            return (
              <article key={s.slug} className="group relative rounded-[2rem] bg-card flex flex-col border border-border shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Image & Floating Icon Badge Container */}
                <div className="relative w-full h-40 sm:h-44 bg-muted overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Icon Badge overlapping the bottom-left of the image */}
                  <div className={`absolute bottom-3 left-3 h-10 w-10 rounded-full ${c.bg} grid place-items-center ring-4 ring-white shadow-md z-10`}>
                    <ServiceIcon name={s.icon} className={`h-5 w-5 ${c.text}`} />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="p-5 flex flex-col flex-grow text-left">
                  <h3 className="font-display text-lg font-black text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>

                  {/* Button */}
                  <a
                    href={`https://wa.me/919985356507?text=${encodeURIComponent(`Hi, I want to book the ${s.title} service for my pet.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`mt-4 w-full rounded-full border border-current py-2 flex items-center justify-center gap-2 text-xs font-bold transition-all duration-300 ${c.text} hover:bg-current/5`}
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-current" />
                    <span>Contact</span>
                  </a>
                </div>
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
    { Icon: User, title: "Experienced Vet Doctors", desc: "Qualified and compassionate professionals" },
    { Icon: HomeIcon, title: "At-Home Convenience", desc: "No travel stress for you or your pet" },
    { Icon: Leaf, title: "Hygienic & Safe Care", desc: "Sterile equipment and safe medical practices" },
    { Icon: HeartHandshake, title: "Personalized Attention", desc: "Care tailored to your pet's unique needs" },
  ] as const;

  return (
    <section className="relative py-10 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-[#E9F3EC] border border-brand-green/10 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Left Column: Vet and Dog Image Card */}
          <div className="w-full lg:w-[35%] shrink-0 flex justify-center relative z-10">
            <img
              src="/why choose us.png"
              alt="Veterinarian high-fiving a golden retriever"
              className="w-full max-w-[320px] lg:max-w-none rounded-[2rem] shadow-soft border border-white/50 object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Column: Title and Features */}
          <div className="w-full lg:w-[65%] text-left relative z-10 py-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green mb-6 text-center lg:text-left">
              Why Pet Parents Choose Us
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-5">
              {items.map(({ Icon, title, desc }) => (
                <div key={title} className="text-left flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-brand-green-soft text-brand-green flex items-center justify-center shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-foreground leading-tight">
                      {title}
                    </h4>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-10">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsHeroBar() {
  const stats = [
    { Icon: Headset, title: "24/7", sub: "Support", color: "blue" },
    { Icon: PawPattern, title: "1,200+", sub: "Pets Served", color: "orange" },
    { Icon: Star, title: "4.9", sub: "Rated by Pet Parents", color: "yellow", hasStar: true },
    { Icon: ShieldCheck, title: "Certified", sub: "Veterinarians", color: "green" },
  ] as const;

  return (
    <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-10 sm:mb-12">
      <div className="bg-white rounded-3xl border border-border shadow-soft p-5 sm:p-7 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((s, i) => {
          const c = colorMap[s.color];
          const isOdd = i % 2 !== 0;
          const isBottomRow = i >= 2;
          return (
            <div
              key={s.sub}
              className={[
                "flex items-center gap-3 sm:gap-4",
                isOdd ? "border-l border-border/80 pl-4 sm:pl-6" : "",
                isBottomRow ? "border-t border-border/80 pt-4 md:border-t-0 md:pt-0" : "",
                i > 0 && !isOdd ? "md:border-l md:border-border/80 md:pl-6" : "",
              ].join(" ")}
            >
              <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-2xl ${c.bg} grid place-items-center shrink-0`}>
                {s.hasStar ? (
                  <s.Icon className={`h-5 w-5 text-brand-orange fill-brand-orange shrink-0`} />
                ) : s.color === "orange" ? (
                  <s.Icon className={`h-5 w-5 ${c.text} fill-current shrink-0`} />
                ) : (
                  <s.Icon className={`h-5 w-5 ${c.text} shrink-0`} />
                )}
              </div>
              <div className="text-left">
                <div className="font-display text-lg sm:text-2xl font-black text-foreground leading-none flex items-center gap-1">
                  {s.title}
                  {s.hasStar && <span className="text-brand-orange text-sm sm:text-base">★</span>}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-semibold mt-1 leading-tight">{s.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
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
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />)}
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
                  <span className="truncate">{a.replace("+ ", "")}</span>
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
