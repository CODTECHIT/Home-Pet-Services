import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Amoeba } from "@/components/site/Amoeba";
import { SERVICES } from "@/data/services";
import { colorMap } from "@/data/services";
import { WhatsAppIcon } from "@/components/site/Header";
import { ServiceIcon } from "@/components/site/ServiceIcon";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    const image = service?.image
      ? `https://petshomeservices.com${service.image}`
      : "https://petshomeservices.com/image.png";
    return {
      meta: [
        { title: `${service?.title ?? "Service"} — Home Pet Services Hyderabad` },
        { name: "description", content: service?.desc ?? "Pet care service" },
        {
          name: "keywords",
          content: `${service?.title ?? "Service"}, home pet services, Hyderabad, ${service?.slug ?? "service"}, veterinary`,
        },
        { property: "og:title", content: service?.title ?? "Pet Care Service" },
        { property: "og:description", content: service?.desc ?? "" },
        { property: "og:image", content: image },
        {
          name: "twitter:title",
          content: `${service?.title ?? "Service"} — Home Pet Services Hyderabad`,
        },
        { name: "twitter:description", content: service?.desc ?? "Pet care service" },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: `https://petshomeservices.com/services/${params.slug}` }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    throw notFound();
  }

  const c = colorMap[service.color];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-12 lg:py-16">
        <Amoeba
          variant={2}
          color="oklch(0.58 0.18 245 / 0.12)"
          className="absolute -top-20 -left-20 h-96 w-96 animate-spin-slow"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Link
              to="/services"
              className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue hover:underline"
            >
              All Services
            </Link>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-balance">
              {service.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              {service.desc}
            </p>
          </div>
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="h-44 w-44 sm:h-48 sm:w-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-muted">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                width={176}
                height={176}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className={`absolute -top-2 -left-2 h-12 w-12 rounded-full ${c.bg} grid place-items-center ring-4 ring-white shadow-md`}
            >
              <ServiceIcon name={service.icon} className={`h-5.5 w-5.5 ${c.text}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] gradient-cta text-white p-8 sm:p-10 grid lg:grid-cols-12 gap-6 items-center overflow-hidden relative">
            <div className="relative lg:col-span-3 flex justify-center">
              <Amoeba
                variant={4}
                color="rgba(255,255,255,0.1)"
                className="absolute -top-16 -right-16 h-64 w-64"
              />
            </div>
            <div className="relative lg:col-span-6 text-center lg:text-left">
              <h2 className="font-display text-3xl font-black">Need this service?</h2>
              <p className="mt-2 text-white/85 text-sm">
                Book your home visit in under a minute — we'll be there.
              </p>
            </div>
            <div className="relative lg:col-span-3 flex flex-wrap gap-3 justify-center lg:justify-end">
              <a
                href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/30 px-5 py-3 font-semibold hover:bg-white/25 transition"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-5 py-3 font-semibold hover:scale-105 transition"
              >
                Call now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
