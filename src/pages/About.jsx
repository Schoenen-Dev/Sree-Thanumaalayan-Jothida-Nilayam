import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, MapPin, Phone, MessageCircle, Compass, CheckCircle2, Globe2, ShieldAlert, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { BUSINESS_CONFIG } from "../data/config";
import { servicesData } from "../data/services";
import { siteImages } from "../data/images";
export const About = () => {
  const breadcrumbs = [{
    name: "About",
    nameTamil: "எங்களைப் பற்றி",
    url: "/about"
  }];
  return <>
      <SEO title="About Sree Thanumaalayan Jothida Nilayam | தமிழ் ஜோதிடம்" description="Learn about Sree Thanumaalayan Jothida Nilayam, offering traditional Tamil astrology consultation, horoscope reading, and marriage matching in Ethamoly, Kanyakumari." canonicalPath="/about" keywords={["About Sree Thanumaalayan Jothida Nilayam", "Tamil astrologer Ethamoly", "traditional Tamil astrology", "Kanyakumari astrologer", "Nagercoil astrology consultation", "ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம்"]} />
      <Schema type="business" breadcrumbs={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="space-y-3 text-center sm:text-left border-b border-stone-200 pb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#6b1426] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம்</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              எங்களைப் பற்றி | About Sree Thanumaalayan Jothida Nilayam
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              Traditional Horoscope-Based Astrology Consultation in Tamil Nadu & for Tamils Worldwide
            </p>
          </div>

          {/* Hero Sanctum Image Banner */}
          <div id="about-hero-image-card" className="relative rounded-2xl overflow-hidden border border-amber-300/60 shadow-md bg-stone-900 group">
            <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img id="about-center-feature-img" src={siteImages.aboutCenter} alt="ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம் - பாரம்பரிய ஜோதிட ஆலோசனை அறை" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-[11px] uppercase tracking-widest font-bold text-amber-400 mb-1">
                பாரம்பரிய நெறிமுறை • ஈத்தாமொழி, கன்னியாகுமரி
              </span>
              <h2 className="text-lg sm:text-2xl font-bold font-serif text-white">
                பழமை வாய்ந்த கணித முறைப்படி ஜாதகக் கணிப்பு
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mt-1 leading-relaxed">
                குத்துவிளக்கு ஒளியில், ஏடுகள் மற்றும் சுவடிகளின் துணை கொண்டு முறைப்படி லக்னம், ராசி மற்றும் நவாம்சங்களை ஆராய்ந்து அமைதியான முறையில் ஆலோசனை வழங்கப்படுகிறது.
              </p>
            </div>
          </div>


          {/* Section 1: Business Overview */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#6b1426]" />
              <span>பாரம்பரிய ஜோதிட நெறிமுறை | Our Astrological Philosophy</span>
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                <strong>ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம்</strong> (Sree Thanumaalayan Jothida Nilayam) என்பது தமிழ்நாட்டின் கன்னியாகுமரி மாவட்டம், ஈத்தாமொழியில் அமைந்துள்ள பாரம்பரிய ஜோதிட ஆலோசனை நிலையமாகும். பண்டைய வேத மற்றும் தமிழ் ஜோதிட விதிகளுக்கு மதிப்பளித்து, ஒரு மனிதனின் பிறந்த ஜாதகத்தில் உள்ள லக்னம், ராசி, கிரக சேர்க்கைகள், நவாம்சம் மற்றும் தசா புத்தி அமைப்புகளை முறையாக கணித்து ஆலோசனைகள் வழங்கப்படுகின்றன.
              </p>
              <p className="italic text-stone-600">
                Sree Thanumaalayan Jothida Nilayam is rooted in classical Indian and Tamil astrological principles. Located at Ethamoly in Kanyakumari District, Tamil Nadu, we provide sincere horoscope-based consultation to help individuals and families make thoughtful, well-grounded life choices.
              </p>
            </div>
          </div>

          {/* Section 2: Core Focus Areas */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
              நாங்கள் வழங்கும் முக்கிய ஆலோசனைகள் | Main Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesData.map(service => <div key={service.slug} className="bg-white rounded-xl p-5 border border-stone-200/80 shadow-2xs hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                      {service.tamilTitle}
                    </h3>
                    <Link to={`/services/${service.slug}`} className="text-xs text-[#6b1426] font-semibold hover:underline flex items-center gap-0.5">
                      <span>விவரம்</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <p className="text-xs font-semibold text-amber-900/80 mb-1.5">
                    {service.englishTitle}
                  </p>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {service.shortDescriptionTamil}
                  </p>
                </div>)}
            </div>
          </div>

          {/* Section 3: Professional Consultation Policy & Ethics */}
          <div className="bg-[#f8f4ee] rounded-2xl p-6 sm:p-8 border border-amber-300/40 space-y-4">
            <div className="flex items-center gap-2 text-[#6b1426]">
              <ShieldAlert className="w-5 h-5" />
              <h2 className="font-serif font-bold text-lg text-stone-900">
                எங்கள் நெறிமுறைகள் | Principles & Professional Conduct
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>உண்மையான கணிப்பு:</strong> மாய மந்திரங்கள், மூடநம்பிக்கை அச்சங்கள் அல்லது வீண் விளம்பரங்களை தவிர்த்து பாரம்பரிய கணித விதிகளுக்கு உட்பட்டு மட்டுமே பலன்கள் கூறப்படுகின்றன.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>எவ்வித போலி வாக்குறுதிகளும் இல்லை:</strong> 100% உத்தரவாதம் அல்லது மாயக் கவர்ச்சி வார்த்தைகளை நாங்கள் பயன்படுத்துவதில்லை. ஜோதிடம் என்பது காலத்தை உணர்ந்து நேர்மறையாக செயல்படுவதற்கான கருவியே.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>எளிய வழிபாட்டு நெறிமுறைகள்:</strong> ஆடம்பரமான செலவுகள் இன்றி குலதெய்வ வழிபாடு, எளிய திருக்கோயில் தரிசனம் மற்றும் தர்ம காரியங்களே முதன்மையாக வழிகாட்டப்படுகின்றன.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Physical Location & Global Tamils Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-[#6b1426]">
                <MapPin className="w-5 h-5" />
                <h3 className="font-serif font-bold text-base text-stone-900">
                  நேரடி முகவரி | Physical Location
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <strong>{BUSINESS_CONFIG.tamilName}</strong>
                <br />
                {BUSINESS_CONFIG.address.formattedTamil}
              </p>
              <p className="text-xs text-stone-500 italic">
                {BUSINESS_CONFIG.address.formatted}
              </p>
              <div className="pt-2 text-xs text-stone-600">
                நேரில் வர விரும்புவோர் தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக நேரத்தை முன்கூட்டியே பதிவு செய்து கொள்ளவும்.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-700">
                <Globe2 className="w-5 h-5" />
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Phone & WhatsApp Consultation
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                தமிழ்நாடு, இந்தியா மற்றும் வெளிநாடுகளில் (USA, Canada, UK, Australia, Singapore, Malaysia, UAE, Europe) வசிக்கும் தமிழர்கள் எளிதாக தொலைபேசி மற்றும் வாட்ஸ்அப் வழியாக ஆலோசனை பெறலாம்.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="inline-flex items-center gap-2 text-xs font-bold text-stone-900 hover:text-[#6b1426]">
                  <Phone className="w-3.5 h-3.5 text-[#6b1426]" />
                  <span>Call: {BUSINESS_CONFIG.phone}</span>
                </a>
                <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp: +91 9487306953</span>
                </a>
              </div>
            </div>
          </div>

          {/* Reusable CTA */}
          <CTASection />
        </div>
      </div>
    </>;
};