import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/config";
export const WhatsAppFloatingButton = () => {
  return <aside aria-label="WhatsApp Contact">
      <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-400/40" aria-label="Chat with Sree Thanumaalayan Jothida Nilayam on WhatsApp">
        <span className="relative flex items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-40"></span>
          <MessageCircle className="w-6 h-6 fill-current relative z-10" />
        </span>
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          WhatsApp ஆலோசனை
        </span>
      </a>
    </aside>;
};