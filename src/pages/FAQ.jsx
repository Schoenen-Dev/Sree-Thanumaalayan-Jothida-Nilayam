import React from "react";
import { Sparkles, MessageCircle, Phone } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { generalFaqs } from "../data/services";
import { BUSINESS_CONFIG } from "../data/config";
export const FAQ = () => {
  const breadcrumbs = [{
    name: "FAQ",
    nameTamil: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    url: "/faq"
  }];
  return <>
      <SEO title="Astrology FAQ | ஜோதிட கேள்விகள் | Sree Thanumaalayan Jothida Nilayam" description="Frequently asked questions about traditional Tamil astrology consultation, horoscope reading, marriage matching, career guidance, and overseas consultations." canonicalPath="/faq" keywords={["Astrology FAQ", "Tamil astrology questions", "horoscope reading FAQ", "marriage matching questions", "ஜோதிட கேள்விகள்", "ஜாதக சந்தேகங்கள்"]} />
      <Schema type="service" breadcrumbs={breadcrumbs} faqs={generalFaqs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#6b1426] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>பொதுவான சந்தேகங்கள் & விளக்கங்கள்</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              அடிக்கடி கேட்கப்படும் கேள்விகள் | Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
              பாரம்பரிய ஜோதிட ஆலோசனை, ஜாதகக் கணிப்பு, திருமணப் பொருத்தம் மற்றும் தொடர்பு கொள்ளும் வழிமுறைகள் குறித்த முக்கிய வினாக்களும் விடைகளும்.
            </p>
          </div>

          {/* FAQ Accordion Component */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs">
            <FAQAccordion items={generalFaqs} defaultOpenIndex={0} />
          </div>

          {/* Quick Help Card */}
          <div className="bg-[#f8f4ee] rounded-xl p-6 border border-stone-200 text-center space-y-3">
            <h3 className="font-serif font-bold text-base text-stone-900">
              உங்கள் கேள்வி இங்கே விடைபெறவில்லையா? | Still Have a Question?
            </h3>
            <p className="text-xs text-stone-600 max-w-lg mx-auto leading-relaxed">
              எந்தவொரு கூடுதல் சந்தேகம் அல்லது குறிப்பிட்ட ஜோதிடத் தேவைக்கும் எங்கள் வாட்ஸ்அப் அல்லது தொலைபேசி எண்ணில் நேரடியாகத் தொடர்பு கொள்ளலாம்.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: {BUSINESS_CONFIG.phone}</span>
              </a>
              <a href={`tel:${BUSINESS_CONFIG.phone}`} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 text-amber-300 text-xs font-semibold hover:bg-stone-800 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </>;
};