import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./Header";

export const Footer = () => (
  <footer className="relative mt-16 bg-foreground text-background overflow-hidden">
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-4 gap-10">
        <div>
          <div className="[&_a]:!text-background"><Logo /></div>
          <p className="mt-4 text-sm text-background/70 max-w-xs">Compassionate, reliable veterinary care delivered to your home across Hyderabad.</p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-background/10 hover:bg-background/20 transition"><Facebook className="h-4 w-4" /></a>
            <a href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services" aria-label="WhatsApp" className="h-9 w-9 grid place-items-center rounded-full bg-whatsapp hover:brightness-110 transition"><WhatsAppIcon className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-background/75">
            <li><Link to="/" className="hover:text-background">Home</Link></li>
            <li><Link to="/services" className="hover:text-background">Services</Link></li>
            <li><Link to="/about" className="hover:text-background">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-background">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm text-background/75">
            <li>Home Pet Visits</li>
            <li>Vaccinations at Home</li>
            <li>Emergency Care</li>
            <li>Post-Operative Care</li>
            <li>Home IV Services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-brand-orange" /><span>99853 56507<br/>84648 82959</span></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand-orange" />info@homepetservices.com</li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand-orange" />Hyderabad, Telangana, India</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-background/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/60">
        <p>© {new Date().getFullYear()} Home Pet Services. All rights reserved.</p>
        <p>Made with care in Hyderabad 🐾</p>
      </div>
    </div>
  </footer>
);
