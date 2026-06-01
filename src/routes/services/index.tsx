import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Amoeba } from "@/components/site/Amoeba";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { WhatsAppIcon } from "@/components/site/Header";
import { SERVICES, colorMap } from "@/data/services";

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
            {/* Video in hero */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] rounded-[1.5rem] overflow-hidden shadow-pop border border-white/40">
              <video
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] sm:h-[360px] object-cover"
                aria-label="Home Pet Services — veterinary care at home"
              />
              {/* Subtle brand overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/55 to-transparent flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse shrink-0" />
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.16em]">See us in action</span>
              </div>
            </div>
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
                <article key={s.slug} className={`group relative rounded-3xl bg-card p-7 sm:p-8 flex flex-col items-center text-center border border-border shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all duration-300 ${displayedServices.length === 1 ? "w-full max-w-sm" : ""}`}>
                  {/* Image & Floating Icon Badge Container */}
                  <div className="mb-5 flex justify-center">
                    <div className="relative">
                      <div className="h-44 w-44 sm:h-48 sm:w-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-muted">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Icon Badge overlapping the top-left of the image */}
                      <div className={`absolute top-0 left-0 h-12 w-12 rounded-full ${c.bg} grid place-items-center ring-4 ring-white shadow-md`}>
                        <ServiceIcon name={s.icon} className={`h-5.5 w-5.5 ${c.text}`} />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-black text-foreground mt-0">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed max-w-[260px]">{s.desc}</p>
                  
                  {/* Button */}
                  <a
                    href={`https://wa.me/919985356507?text=${encodeURIComponent(`Hi, I want to book the ${s.title} service for my pet.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-auto pt-6 w-full block"
                  >
                    <span className={`flex w-full items-center justify-center gap-2 rounded-full border border-current py-3 text-sm font-semibold transition-all duration-300 ${c.text} hover:bg-current/5`}>
                      <WhatsAppIcon className="h-4.5 w-4.5 fill-current" />
                      <span>Contact</span>
                    </span>
                  </a>
                </article>
              );
            })}
          </div>

          {/* ── CTA Banner ── */}
          <div className="mt-8 rounded-[2rem] gradient-cta text-white p-8 sm:p-10 grid lg:grid-cols-12 gap-6 items-center overflow-hidden relative">
            <Amoeba variant={4} color="rgba(255,255,255,0.1)" className="absolute -top-16 -right-16 h-64 w-64" />
            <Amoeba variant={1} color="rgba(255,255,255,0.06)" className="absolute -bottom-16 -left-16 h-64 w-64" />
            <div className="relative lg:col-span-8 text-center lg:text-left">
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
