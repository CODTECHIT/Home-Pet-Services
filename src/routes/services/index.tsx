import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Amoeba } from "@/components/site/Amoeba";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { WhatsAppIcon } from "@/components/site/Header";
import { SERVICES, colorMap } from "@/data/services";
import heroPets from "@/assets/hero-pets.png";
import dogCta from "@/assets/dog-cta.png";
import { z } from "zod";

const servicesSearchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/services/")({
  validateSearch: (search) => servicesSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Services — Home Pet Services Hyderabad" },
      { name: "description", content: "Vaccinations, emergency care, deworming, IV therapy, post-op care, blood work and more — all delivered to your home in Hyderabad." },
      { property: "og:title", content: "Pet Care Services at Home — Hyderabad" },
      { property: "og:description", content: "Our complete menu of veterinary services delivered at your doorstep." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { service } = Route.useSearch();
  const selectedService = service
    ? SERVICES.find((s) => s.slug === service)
    : undefined;
  const displayedServices = selectedService ? [selectedService] : SERVICES;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-12 lg:py-16">
        <Amoeba variant={2} color="oklch(0.58 0.18 245 / 0.12)" className="absolute -top-20 -left-20 h-96 w-96 animate-spin-slow" />
        <Amoeba variant={3} color="oklch(0.72 0.17 55 / 0.15)" className="absolute -bottom-20 -right-20 h-96 w-96" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">Our services</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-balance">Complete veterinary care — <span className="italic text-brand-blue">delivered home</span></h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl text-balance">Ten core services covering every stage of your pet's health, from routine wellness to emergency intervention.</p>
          </div>
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 grid place-items-center">
              <Amoeba variant={1} color="oklch(0.58 0.18 245 / 0.2)" className="h-72 w-72 animate-float" />
            </div>
            <img src={heroPets} alt="Happy dog and cat" width={1024} height={1024} className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {selectedService && (
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between bg-brand-blue-soft border border-brand-blue/20 rounded-3xl p-4 sm:px-6 text-brand-blue font-semibold text-sm animate-fade-in shadow-sm gap-3">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-blue animate-pulse shrink-0" />
                <span>Showing only <strong>{selectedService.title}</strong> at-home service.</span>
              </span>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-full bg-white text-xs font-bold text-brand-blue hover:bg-brand-blue hover:text-white transition shadow-sm border border-brand-blue/10 shrink-0 self-start sm:self-auto"
              >
                View all 10 services
              </Link>
            </div>
          )}

          <div className={displayedServices.length === 1 ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}>
            {displayedServices.map((s) => {
              const c = colorMap[s.color];
              return (
                <article key={s.slug} className={`group relative rounded-[2rem] bg-card flex flex-col border border-border shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all duration-300 overflow-hidden ${displayedServices.length === 1 ? "w-full max-w-sm" : ""}`}>
                  {/* Image & Floating Icon Badge Container */}
                  <div className="relative w-full h-48 sm:h-52 bg-muted overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Floating Icon Badge overlapping the bottom-left of the image */}
                    <div className={`absolute bottom-4 left-4 h-12 w-12 rounded-full ${c.bg} grid place-items-center ring-4 ring-white shadow-md z-10`}>
                      <ServiceIcon name={s.icon} className={`h-5.5 w-5.5 ${c.text}`} />
                    </div>
                  </div>

                  {/* Title & Description Container */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className="font-display text-xl font-black text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">{s.desc}</p>
                    
                    {/* Button */}
                    <a
                      href={`https://wa.me/919985356507?text=${encodeURIComponent(`Hi, I want to book the ${s.title} service for my pet.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className={`mt-6 w-full rounded-full border border-current py-2.5 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 ${c.text} hover:bg-current/5`}
                    >
                      <WhatsAppIcon className="h-4.5 w-4.5 fill-current" />
                      <span>Contact</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 lg:mt-12 rounded-[2rem] gradient-cta text-white p-8 sm:p-10 grid lg:grid-cols-12 gap-6 items-center overflow-hidden relative">
            <Amoeba variant={4} color="rgba(255,255,255,0.1)" className="absolute -top-16 -right-16 h-64 w-64" />
            <Amoeba variant={1} color="rgba(255,255,255,0.06)" className="absolute -bottom-16 -left-16 h-64 w-64" />
            <div className="relative lg:col-span-3 flex justify-center">
              <img src={dogCta} alt="Happy puppy" width={1024} height={1024} className="w-36 drop-shadow-xl animate-float" />
            </div>
            <div className="relative lg:col-span-5 text-center lg:text-left">
              <h2 className="font-display text-3xl font-black">Not sure which service you need?</h2>
              <p className="mt-2 text-white/85 text-sm">Tell us about your pet — we'll recommend the right care.</p>
            </div>
            <div className="relative lg:col-span-4 flex flex-wrap gap-3 justify-center lg:justify-end">
              <a href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30 px-5 py-3 font-semibold hover:bg-white/25 transition"><WhatsAppIcon className="h-4 w-4" /> WhatsApp us</a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-5 py-3 font-semibold hover:scale-105 transition">Contact us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
