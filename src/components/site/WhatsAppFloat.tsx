import { WhatsAppIcon } from "./Header";

export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919985356507?text=Hi,%20we%20need%20the%20services"
    target="_blank" rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-5 py-3.5 font-semibold shadow-pop hover:scale-105 transition animate-float"
  >
    <WhatsAppIcon className="h-5 w-5" />
    <span className="hidden sm:inline">Chat with us</span>
  </a>
);
