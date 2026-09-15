import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Sparkles, Compass, Instagram, Facebook } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/config";
import { servicesData } from "../data/services";
export const Footer = () => {
  return <footer className="bg-[#1f0b14] text-stone-300 border-t-2 border-amber-600/30">
      {/* Top Banner with subtle mandala motif */}
      <div className="border-b border-white/10 py-8 px-4 bg-gradient-to-r from-[#2a0c1a] via-[#3d1024] to-[#2a0c1a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                பாரம்பரிய ஜோதிட ஆலோசனை | Traditional Astrology
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#fbf5eb] font-serif">
              {BUSINESS_CONFIG.tamilName}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              {BUSINESS_CONFIG.taglineTamil} • {BUSINESS_CONFIG.taglineEnglish}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${BUSINESS_CONFIG.phone}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-stone-800/80 hover:bg-stone-700 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-colors">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
            <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About & Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-400/40">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-amber-200 text-base">
                {BUSINESS_CONFIG.englishName}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-stone-300">
              பாரம்பரிய தமிழ் ஜோதிட விதிகளின்படி லக்னம், நவாம்சம், தசா புத்தி மற்றும் கிரக நிலைகளை ஆராய்ந்து வாழ்க்கைக்கான தெளிவான வழிகாட்டுதலை வழங்குகிறோம்.
            </p>
            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-amber-300 transition-colors">
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  WhatsApp: +91 9487306953
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-amber-200 border-b border-amber-500/20 pb-2 mb-3">
              பக்கங்கள் | Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors block py-0.5">
                  முகப்பு | Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors block py-0.5">
                  எங்களைப் பற்றி | About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors block py-0.5">
                  ஜோதிட சேவைகள் | All Services
                </Link>
              </li>
              <li>
                <Link to="/tamil-astrology" className="hover:text-amber-300 transition-colors block py-0.5">
                  தமிழ் ஜோதிடம் | Tamil Astrology
                </Link>
              </li>
              <li>
                <Link to="/astrology-for-tamils-abroad" className="hover:text-amber-300 transition-colors block py-0.5">
                  வெளிநாட்டு தமிழர்கள் | Tamils Abroad
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-300 transition-colors block py-0.5">
                  அடிக்கடி கேட்கப்படும் கேள்விகள் | FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors block py-0.5">
                  தொடர்புக்கு | Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Astrology Services */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-amber-200 border-b border-amber-500/20 pb-2 mb-3">
              சேவைகள் | Astrology Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 7).map(s => <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-amber-300 transition-colors block py-0.5">
                    {s.tamilTitle} <span className="text-stone-400 text-[11px]">({s.englishTitle})</span>
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Column 4: Consultation Coverage & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold text-amber-200 border-b border-amber-500/20 pb-2 mb-3">
              ஆலோசனை முறை | Consultation
            </h4>
            <div className="bg-white/5 rounded-lg p-3.5 border border-white/10 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-amber-300">
                  ஆலோசனை கட்டணம்:
                </span>
                <span className="font-bold text-amber-200 bg-amber-500/20 px-2 py-0.5 rounded-sm border border-amber-400/30">
                  ₹1,500
                </span>
              </div>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                ஈத்தாமொழி, நாகர்கோவில், தமிழ்நாடு மட்டுமின்றி சிங்கப்பூர், கனடா, மலேசியா, UAE, UK, USA, ஆஸ்திரேலியா, கத்தார் உள்ளிட்ட நாடுகளில் வாழும் தமிழர்கள் தொலைபேசி மற்றும் WhatsApp மூலம் ஆலோசனை பெறலாம்.
              </p>
              <div className="pt-1 text-[11px] text-amber-200/80 font-medium">
                நேரம்: காலை 9:00 - இரவு 8:00 (IST)
              </div>
            </div>

            {/* Social configuration (clean, no fake links) */}
            <div className="pt-1">
              <div className="text-[11px] text-stone-400 mb-2">நேரடி தொடர்பு (Direct Connect):</div>
              <div className="flex items-center gap-2">
                <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white flex items-center justify-center transition-colors border border-emerald-500/40" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-600 text-amber-300 hover:text-white flex items-center justify-center transition-colors border border-amber-500/40" aria-label="Phone">
                  <Phone className="w-4 h-4" />
                </a>
                <a href={BUSINESS_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-600 text-amber-300 hover:text-white flex items-center justify-center transition-colors border border-amber-500/40" aria-label="instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={BUSINESS_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-amber-500/20 hover:bg-amber-600 text-amber-300 hover:text-white flex items-center justify-center transition-colors border border-amber-500/40" aria-label="Facebook">
  <Facebook className="w-4 h-4" />
</a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Professional Ethics Note */}
        <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-stone-400 leading-relaxed text-center max-w-4xl mx-auto">
          <p>
            <strong>பொறுப்புத் துறப்பு (Disclaimer):</strong> பாரம்பரிய ஜோதிட விதிகளின்படி கணிக்கப்படும் ஜாதக பலன்கள் ஒரு மனிதனின் வாழ்க்கைத் திட்டமிடலுக்கும் வழிகாட்டலுக்கும் மட்டுமே. நாங்கள் எவ்வித மாய மந்திர உத்தரவாதங்களையோ அல்லது மூடநம்பிக்கை வாக்குறுதிகளையோ அளிப்பதில்லை.
          </p>
          <p className="mt-1">
            Horoscope-based guidance is provided in adherence to traditional Indian astrological principles for personal reflection and informed planning.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2026 {BUSINESS_CONFIG.englishName}. All Rights Reserved.
          </div>
          <div className="text-[11px] text-stone-400">
            {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.district}, {BUSINESS_CONFIG.address.state}, India
          </div>
        </div>
      </div>
    </footer>;
};