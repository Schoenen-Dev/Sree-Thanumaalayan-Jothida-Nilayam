import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Sparkles, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/config";
import StarField from "./planetary/StarField";
export const CTASection = ({
  titleTamil = "பாரம்பரிய ஜோதிட ஆலோசனைக்கு தொடர்பு கொள்ளுங்கள்",
  titleEnglish = "Connect for Traditional Horoscope-Based Guidance",
  descriptionTamil = "உங்கள் வாழ்க்கையின் முக்கிய முடிவுகளை விவேகத்துடன் எடுக்க லக்னம் மற்றும் கிரக அமைப்புகளின் வழிகாட்டுதலைப் பெறுங்கள்.",
  descriptionEnglish = "Gain balanced astrological insight for marriage, career, business, and personal planning through Phone or WhatsApp."
}) => {
  return <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#450b18] via-[#5c1022] to-[#2b0b18] text-white p-8 sm:p-12 shadow-xl border border-amber-500/30 my-8">
      {/* Background Starfield Animation */}
      <StarField count={50} className="opacity-35 pointer-events-none" />

      {/* Decorative cosmic stars/circles */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 rounded-full bg-rose-500/10 blur-2xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold border border-amber-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம்</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#fdf8f0] leading-tight">
          {titleTamil}
        </h2>
        <p className="text-xs sm:text-sm font-medium text-amber-200/90 tracking-wide">
          {titleEnglish}
        </p>

        <p className="text-xs sm:text-sm text-stone-200/90 max-w-2xl mx-auto leading-relaxed pt-1">
          {descriptionTamil}
        </p>
        <p className="text-[11px] sm:text-xs text-stone-300 italic max-w-2xl mx-auto leading-relaxed">
          {descriptionEnglish}
        </p>

        {/* Location tag */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-amber-200/80 pt-2">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>ஈத்தாமொழி, நாகர்கோவில் / கன்னியாகுமரி மாவட்டம், தமிழ்நாடு</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95">
            <MessageCircle className="w-4 h-4 fill-current" />
            <span> WhatsApp ஆலோசனை</span>
          </a>

          <a href={`tel:${BUSINESS_CONFIG.phone}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95">
            <Phone className="w-4 h-4" />
            <span> Call: {BUSINESS_CONFIG.phone}</span>
          </a>

          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-colors">
            <span>தொடர்பு முகவரி & படிவம்</span>
          </Link>
        </div>
      </div>
    </section>;
};