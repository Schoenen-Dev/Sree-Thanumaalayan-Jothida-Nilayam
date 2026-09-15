import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Compass, HeartHandshake, Clock, Briefcase, Globe, Users, CalendarDays, Sparkles, Phone, MessageCircle, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/services";
import { BUSINESS_CONFIG, createWhatsAppUrl } from "../data/config";
import { serviceImageMap } from "../data/images";
const iconMap = {
  Compass,
  HeartHandshake,
  Clock,
  Briefcase,
  Globe,
  Users,
  CalendarDays,
  Sparkles
};
export const ServiceDetailPage = ({
  forcedSlug
}) => {
  const {
    slug
  } = useParams();
  const activeSlug = forcedSlug || slug;
  const service = servicesData.find(s => s.slug === activeSlug);
  if (!service) {
    return <Navigate to="/services" replace />;
  }
  const IconComponent = iconMap[service.icon] || Sparkles;
  const imageInfo = serviceImageMap[service.slug];

  // Breadcrumbs
  const breadcrumbs = [{
    name: "Services",
    nameTamil: "சேவைகள்",
    url: "/services"
  }, {
    name: service.englishTitle,
    nameTamil: service.tamilTitle,
    url: `/services/${service.slug}`
  }];

  // Related services
  const relatedServices = servicesData.filter(s => service.relatedServiceSlugs.includes(s.slug));
  const directWhatsAppUrl = createWhatsAppUrl({
    service: `${service.englishTitle} / ${service.tamilTitle}`
  });
  return <>
      <SEO title={service.seoTitle} description={service.seoDescription} canonicalPath={`/services/${service.slug}`} keywords={service.keywords} />
      <Schema type="service" breadcrumbs={breadcrumbs} faqs={service.faqs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-10 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/90 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 text-[#6b1426] flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#6b1426] uppercase tracking-wider block">
                    ஜோதிட ஆலோசனை | Astrology Service
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-stone-900 leading-tight">
                    {service.tamilTitle} | {service.englishTitle}
                  </h1>
                </div>
              </div>

              {/* Quick Action */}
              <a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs flex-shrink-0">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp முன்பதிவு</span>
              </a>
            </div>

            {/* Split: Overview and Featured Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <p className="text-stone-800 font-medium sm:text-base leading-relaxed">
                  {service.overviewTamil}
                </p>
                <p className="text-stone-600 italic leading-relaxed">
                  {service.overviewEnglish}
                </p>
              </div>

              {imageInfo && <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden border border-amber-300/50 shadow-md group bg-stone-100">
                    <img id="service-detail-feature-image" src={imageInfo.image} alt={imageInfo.altTamil} referrerPolicy="no-referrer" className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <p className="text-[11px] font-semibold leading-tight text-amber-200">
                        {imageInfo.altTamil}
                      </p>
                      <p className="text-[10px] text-stone-300 italic line-clamp-1">
                        {imageInfo.altEnglish}
                      </p>
                    </div>
                  </div>
                </div>}
            </div>
          </div>


          {/* What This Consultation Covers (Section 17) */}
          <div className="bg-[#f8f4ee] rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-5">
            <div className="flex items-center gap-2 text-[#6b1426]">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
                இந்த ஆலோசனையில் விரிவாக ஆராயப்படும் அம்சங்கள் | What the Consultation Covers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whatItCovers.map((item, idx) => <div key={idx} className="bg-white rounded-xl p-4 border border-stone-200/80 shadow-2xs space-y-1.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-stone-900">
                        {item.tamil}
                      </p>
                      <p className="text-xs text-stone-500 italic mt-0.5">
                        {item.english}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Consultation Focus & Principles */}
          <div className="bg-amber-50/60 rounded-xl p-6 border border-amber-300/40 text-xs sm:text-sm space-y-2">
            <h3 className="font-serif font-bold text-amber-900 text-sm sm:text-base">
              ஆலோசனை அணுகுமுறை | Our Ethical Approach
            </h3>
            <p className="text-amber-950 leading-relaxed">
              {service.consultationFocusTamil}
            </p>
            <p className="text-amber-900/80 italic leading-relaxed">
              {service.consultationFocusEnglish}
            </p>
          </div>

          {/* FAQs related to this service */}
          {service.faqs && service.faqs.length > 0 && <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#6b1426]">
                <HelpCircle className="w-5 h-5" />
                <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
                  அடிக்கடி கேட்கப்படும் கேள்விகள் | Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion items={service.faqs} />
            </div>}

          {/* Direct WhatsApp & Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              

              {/* Internal Linking: Related Services (Section 53) */}
              {relatedServices.length > 0 && <div className="bg-[#f8f4ee] rounded-xl p-5 border border-stone-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    தொடர்புடைய சேவைகள் | Related Astrology Consultations
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map(rel => <Link key={rel.slug} to={`/services/${rel.slug}`} className="block p-3 rounded-lg bg-white border border-stone-200/80 hover:border-amber-400 text-xs hover:text-[#6b1426] transition-colors shadow-2xs">
                        <span className="font-bold block text-stone-900">{rel.tamilTitle}</span>
                        <span className="text-[11px] text-stone-500">{rel.englishTitle}</span>
                      </Link>)}
                  </div>
                </div>}
            </div>

            {/* Pre-filled Contact Form for this service */}
            
          </div>

          {/* Bottom CTA banner */}
          <CTASection titleTamil={`${service.tamilTitle} பாரம்பரிய ஆலோசனைக்கு அழைக்கவும்`} titleEnglish={`Consult Sree Thanumaalayan Jothida Nilayam for ${service.englishTitle}`} />
        </div>
      </div>
    </>;
};