import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, Heart, ShieldCheck, Award, Users, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Amoeba } from "@/components/site/Amoeba";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Home Pet Services Hyderabad" },
      {
        name: "description",
        content:
          "Hyderabad's compassionate home veterinary care team. Our vision, mission and the values that drive every visit.",
      },
      {
        name: "keywords",
        content:
          "about us, home pet services Hyderabad, veterinary team, compassionate vet, home visits",
      },
      { property: "og:image", content: "https://www.petshomeservices.com/why%20choose%20us.png" },
      { property: "og:title", content: "About Home Pet Services" },
      {
        property: "og:description",
        content:
          "Learn about the team bringing safe, reliable, compassionate pet care to homes across Hyderabad.",
      },
      { name: "twitter:title", content: "About — Home Pet Services Hyderabad" },
      {
        name: "twitter:description",
        content:
          "Learn about the team bringing safe, reliable, compassionate pet care to homes across Hyderabad.",
      },
      { name: "twitter:image", content: "https://www.petshomeservices.com/why%20choose%20us.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.petshomeservices.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      Icon: ShieldCheck,
      title: "Pet safety",
      desc: "Every protocol designed around your pet's well-being.",
      color: "bg-brand-blue-soft text-brand-blue",
    },
    {
      Icon: Heart,
      title: "Compassion",
      desc: "We care for animals the way we'd care for our own.",
      color: "bg-brand-pink-soft text-brand-pink",
    },
    {
      Icon: Award,
      title: "Reliability",
      desc: "On time, every time — your pet's care can't wait.",
      color: "bg-brand-orange-soft text-brand-orange",
    },
    {
      Icon: Users,
      title: "Trust",
      desc: "Built one home visit at a time, with families across Hyderabad.",
      color: "bg-brand-green-soft text-brand-green",
    },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-12 lg:py-16">
        <Amoeba
          variant={1}
          color="oklch(0.68 0.16 155 / 0.18)"
          className="absolute -top-20 -right-32 h-[480px] w-[480px] animate-spin-slow"
        />
        <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-green">
              About us
            </p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-black leading-tight text-balance">
              A new kind of vet visit — <span className="italic text-brand-green">stress-free</span>
              , at home.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Home Pet Services launched in 2025 with one belief: pets deserve expert medical care
              without the anxiety of a clinic. We bring the clinic to you.
            </p>
          </div>
          <div className="relative">
            <Amoeba
              variant={2}
              color="oklch(0.58 0.18 245 / 0.18)"
              className="absolute -top-8 -left-8 h-72 w-72"
            />
            <img
              src="/why choose us.png"
              alt="Veterinarian high-fiving a golden retriever"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-[2rem] shadow-pop w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-6">
          {[
            {
              Icon: Eye,
              color: "blue",
              title: "Vision",
              body: "To become Hyderabad's most trusted home pet care service.",
            },
            {
              Icon: Target,
              color: "orange",
              title: "Mission",
              body: "To provide safe, reliable, and compassionate pet care at customers' homes.",
            },
            {
              Icon: Heart,
              color: "pink",
              title: "Promise",
              body: "Every visit treated like family — because that's how we'd want our own pets treated.",
            },
          ].map(({ Icon, color, title, body }) => (
            <div key={title} className="rounded-3xl bg-card p-8 ring-1 ring-border">
              <div
                className={`h-14 w-14 rounded-2xl bg-brand-${color}-soft text-brand-${color} grid place-items-center`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-yellow-soft/60 p-8 sm:p-12">
            <Amoeba
              variant={3}
              color="oklch(0.72 0.17 55 / 0.2)"
              className="absolute -bottom-20 -left-20 h-80 w-80"
            />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 relative">
                <Amoeba
                  variant={4}
                  color="oklch(0.58 0.18 245 / 0.2)"
                  className="absolute inset-0 h-72 w-72 mx-auto animate-float"
                />
                <img
                  src="/why choose us.png"
                  alt="Veterinarian high-fiving a golden retriever"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative mx-auto rounded-[2rem] shadow-pop w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
                  Our core values
                </p>
                <h2 className="mt-3 font-display text-4xl font-black">What we stand for</h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {values.map(({ Icon, title, desc, color }) => (
                    <div key={title} className="rounded-2xl bg-white p-5 ring-1 ring-border">
                      <div className={`h-10 w-10 rounded-xl grid place-items-center ${color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-3 font-bold">{title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-4xl font-black">Ready to meet us?</h2>
          <p className="mt-3 text-muted-foreground">
            Book a home visit today and see why families across Hyderabad trust us.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full gradient-cta text-white px-6 py-3.5 font-semibold shadow-pop"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
