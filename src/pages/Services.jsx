import React from "react";
import { Sparkles, Compass, BookOpen, Heart, Flame } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ServiceCard } from "../components/ServiceCard";
import { CTASection } from "../components/CTASection";
import { servicesData } from "../data/services";
import { siteImages } from "../data/images";
export const Services = () => {
  const breadcrumbs = [{
    name: "Astrology Services",
    nameTamil: "ஜோதிட சேவைகள்",
    url: "/services"
  }];
  return <>
      <SEO title="Astrology Services | ஜோதிட சேவைகள் | Horoscope & Marriage Matching" description="Comprehensive traditional Tamil astrology services: Horoscope reading, marriage matching, career, business, overseas travel, and Dasha Bhukti analysis." canonicalPath="/services" keywords={["Tamil astrology services", "horoscope reading Tamil", "marriage matching Tamil Nadu", "career astrology", "overseas astrology consultation", "ஜோதிட சேவைகள்", "ஜாதகப் பலன்", "திருமணப் பொருத்தம்"]} />
      <Schema type="business" breadcrumbs={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#6b1426] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>பாரம்பரிய தமிழ் ஜோதிட சேவைகள்</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              ஜோதிட சேவைகள் | Traditional Astrology Services
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl mx-auto">
              ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையத்தில் லக்னம், நவாம்சம், பாவ நிலைகள் மற்றும் தசா புத்தி சுழற்சிகளை ஆராய்ந்து உங்கள் வாழ்வின் பல்வேறு அம்சங்களுக்கு தெளிவான வழிகாட்டுதல் வழங்கப்படுகிறது.
            </p>
            <p className="text-[11px] sm:text-xs text-stone-500 italic max-w-2xl mx-auto">
              Sree Thanumaalayan Jothida Nilayam offers objective, classical astrological analysis for marriage compatibility, career moves, business decisions, foreign opportunities, and spiritual well-being.
            </p>
          </div>

          {/* Featured Visual Pillars Banner */}
          <div id="services-visual-pillars" className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Pillar 1: Chart Analysis */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-300/40 shadow-sm group bg-stone-900">
              <div className="h-48 sm:h-52 w-full overflow-hidden">
                <img id="services-pillar-chart" src={siteImages.horoscopeChart} alt="ஜாதகக் கணிப்பு - Horoscope Reading and Natal Chart Analysis" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">ஜன்ம ஜாதகம்</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-100">
                  ஜாதகப் பலன் & நவாம்சம்
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1">
                  12 பாவங்கள், கிரக இணைப்புகள் மற்றும் தசா புத்தி காலங்களின் விரிவான ஆய்வு.
                </p>
              </div>
            </div>

            {/* Pillar 2: Marriage Compatibility */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-300/40 shadow-sm group bg-stone-900">
              <div className="h-48 sm:h-52 w-full overflow-hidden">
                <img id="services-pillar-marriage" src={siteImages.marriageMatching} alt="திருமணப் பொருத்தம் - Vedic Marriage Horoscope Compatibility" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">மங்கள யோகம்</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-100">
                  திருமணப் பொருத்தம் & தோஷ சமநிலை
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1">
                  10 பொருத்தங்கள், செவ்வாய் தோஷம், பாபசாம்யம் மற்றும் தசா சந்தி பரிசீலனை.
                </p>
              </div>
            </div>

            {/* Pillar 3: Spiritual Guidance */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-300/40 shadow-sm group bg-stone-900">
              <div className="h-48 sm:h-52 w-full overflow-hidden">
                <img id="services-pillar-remedy" src={siteImages.templeRemedy} alt="திருக்கோயில் வழிபாடு & சாத்வீக பரிகாரம் - Temple Remedies and Spiritual Guidance" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1.5 text-amber-400">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">சாத்வீக பரிகாரம்</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-100">
                  குலதெய்வம் & திருத்தல வழிபாடு
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1">
                  ஆடம்பர சடங்குகள் இன்றி மன அமைதி நல்கும் பாரம்பரிய சாத்வீக ஆன்மீக நெறிமுறைகள்.
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards Grid (8 Services) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map(service => <ServiceCard key={service.slug} service={service} />)}
          </div>

          {/* Consultation Process Summary */}
          <div className="bg-[#f8f4ee] rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#6b1426]" />
              <span>ஆலோசனைக்கு சமர்ப்பிக்க வேண்டிய விவரங்கள் | Details Required for Consultation</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700">
              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">1. பிறந்த தேதி & நேரம்:</span>
                <p className="text-xs text-stone-600">பிறந்த தேதி, துல்லியமான பிறந்த நேரம் (காலை/மாலை) மற்றும் பிறந்த ஊர்.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">2. பழைய ஜாதகக் குறிப்பு:</span>
                <p className="text-xs text-stone-600">ஏற்கனவே கணிக்கப்பட்ட ஜாதகக் குறிப்பு (Chart) இருப்பின் அதன் புகைப்படத்தை பகிரலாம்.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
                <span className="font-bold text-stone-900 block">3. முக்கிய கேள்வி / தேவை:</span>
                <p className="text-xs text-stone-600">நீங்கள் ஆலோசிக்க விரும்பும் குறிப்பிட்ட விஷயம் (திருமணம், வேலை, முதலீடு போன்றவை).</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <CTASection />
        </div>
      </div>
    </>;
};