import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

export const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppFloat />
    <Toaster position="bottom-center" />
  </div>
);
