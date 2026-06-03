import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Amoeba } from "@/components/site/Amoeba";
import { WhatsAppIcon } from "@/components/site/Header";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Home Pet Services Hyderabad" },
      {
        name: "description",
        content:
          "Get in touch for home veterinary visits across Hyderabad. WhatsApp, phone, or contact form — we respond quickly.",
      },
      {
        name: "keywords",
        content: "contact, home pet services, book a visit, WhatsApp, Hyderabad vet",
      },
      { property: "og:image", content: "https://petshomeservices.com/image.png" },
      { property: "og:title", content: "Contact Home Pet Services" },
      {
        property: "og:description",
        content: "Call, WhatsApp, or send us a message — we'll get back fast.",
      },
      { name: "twitter:title", content: "Contact — Home Pet Services Hyderabad" },
      {
        name: "twitter:description",
        content:
          "Get in touch for home veterinary visits across Hyderabad. WhatsApp, phone, or contact form — we respond quickly.",
      },
      { name: "twitter:image", content: "https://petshomeservices.com/image.png" },
    ],
    links: [{ rel: "canonical", href: "https://petshomeservices.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const text = `Hi! I'm ${data.get("name")} (${data.get("phone")}). My pet needs help with: ${data.get("message")}`;
    const url = `https://wa.me/919985356507?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(url, "_blank");
      toast.success("Opening WhatsApp — we'll respond in minutes.");
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 300);
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-10 lg:py-12">
        <Amoeba
          variant={1}
          color="oklch(0.72 0.17 55 / 0.18)"
          className="absolute -top-20 -left-20 h-96 w-96 animate-spin-slow"
        />
        <Amoeba
          variant={4}
          color="oklch(0.58 0.18 245 / 0.12)"
          className="absolute -bottom-32 -right-32 h-[480px] w-[480px]"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">
            Get in touch
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-black">
            We're a <span className="italic text-brand-orange">message</span> away
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Available 24/7 for emergencies. Reach out — we love hearing from pet parents.
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                Icon: Phone,
                color: "blue",
                title: "Phone",
                lines: ["99853 56507", "84648 82959"],
                href: "tel:+919985356507",
              },
              {
                Icon: WhatsAppIcon,
                color: "green",
                title: "WhatsApp",
                lines: ["Tap to chat instantly"],
                href: "https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services",
              },
              {
                Icon: Mail,
                color: "orange",
                title: "Email",
                lines: ["info@homepetservices.com"],
                href: "mailto:info@homepetservices.com",
              },
              {
                Icon: MapPin,
                color: "pink",
                title: "Location",
                lines: ["Hyderabad, Telangana, India"],
              },
              {
                Icon: Clock,
                color: "blue",
                title: "Hours",
                lines: ["24/7 emergency response", "Mon–Sun: 7am – 10pm visits"],
              },
            ].map(({ Icon, color, title, lines, href }) => {
              const inner = (
                <div className="flex gap-4 items-start">
                  <div
                    className={`h-12 w-12 rounded-2xl bg-brand-${color}-soft text-brand-${color} grid place-items-center shrink-0`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                    {lines.map((l) => (
                      <div key={l} className="text-sm text-muted-foreground">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block rounded-2xl bg-card p-5 ring-1 ring-border hover:shadow-soft transition"
                >
                  {inner}
                </a>
              ) : (
                <div key={title} className="rounded-2xl bg-card p-5 ring-1 ring-border">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <div className="relative rounded-[2rem] bg-card p-8 ring-1 ring-border shadow-soft overflow-hidden">
              <Amoeba
                variant={2}
                color="oklch(0.58 0.18 245 / 0.07)"
                className="absolute -top-24 -right-24 h-72 w-72"
              />
              <div className="relative">
                <h2 className="font-display text-3xl font-black">Send us a message</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Fill the form — we'll connect over WhatsApp in minutes.
                </p>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" placeholder="Priya Sharma" required />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="99853 56507"
                      required
                    />
                  </div>
                  <Field
                    label="Email (optional)"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your pet and what you need help with…"
                      className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-cta text-white px-6 py-3.5 font-semibold shadow-pop hover:scale-[1.01] transition disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? "Sending…" : "Send message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-[2rem] overflow-hidden ring-1 ring-border shadow-soft">
            <iframe
              title="Hyderabad map"
              src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
        {label}
      </label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
      />
    </div>
  );
}
