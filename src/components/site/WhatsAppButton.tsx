import { MessageCircle } from "lucide-react";

const PHONE = "5585940790069";
const MESSAGE = encodeURIComponent(
  "Olá! Gostaria de agendar uma avaliação com o Dr. João Wirlon."
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-elegant hover:scale-105 transition-transform"
    >
      <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
        <MessageCircle className="w-5 h-5" fill="currentColor" />
        <span className="absolute inset-0 rounded-full animate-ping bg-white/30" />
      </span>
      <span className="text-xs tracking-[0.18em] uppercase font-medium hidden sm:inline">
        Fale Conosco
      </span>
    </a>
  );
}
