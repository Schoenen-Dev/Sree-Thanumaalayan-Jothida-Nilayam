import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Phone, MessageCircle, ArrowRight, ShieldCheck, UserCheck, Compass, Headphones, CheckCircle2, Globe2, BookOpen, MapPin } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { ServiceCard } from "../components/ServiceCard";

import { FAQAccordion } from "../components/FAQAccordion";
import { BUSINESS_CONFIG } from "../data/config";
import { servicesData, generalFaqs } from "../data/services";
import PlanetarySystem from "../components/planetary/PlanetarySystem";

// import aboutImage from "../assets/images/about_astrology_center.jpg"; // Import the image

export const Home = () => {
  const faqPreview = generalFaqs.slice(0, 5);
  const whyChooseUs = [{
    titleTamil: "பாரம்பரிய அணுகுமுறை",
    titleEn: "Traditional Approach",
    descTamil: "பண்டைய வேத மற்றும் தமிழ் ஜோதிட மூல நூல்களின் கணித விதிகளுக்கு உட்பட்டு மட்டுமே கிரக நிலைகள் ஆராயப்படுகின்றன.",
    descEn: "Pure traditional horoscope calculations strictly following classical Vedic and Tamil astrological canons.",
    icon: Compass
  }, {
    titleTamil: "தனிப்பட்ட ஆலோசனை",
    titleEn: "Personalized Consultation",
    descTamil: "ஒவ்வொரு ஜாதகமும் பிரத்யேகமானது. உங்கள் லக்னம், நவாம்சம் மற்றும் தசா புத்திக்கு ஏற்ப தெளிவான விளக்கம்.",
    descEn: "Every chart is unique. In-depth, individual analysis tailored to your specific planetary placements.",
    icon: UserCheck
  }, {
    titleTamil: "பல்வேறு வாழ்க்கை அம்சங்கள்",
    titleEn: "Guidance for Different Life Matters",
    descTamil: "திருமணம், வேலை, தொழில் முதலீடுகள், வெளிநாட்டுப் பயணம், குடும்ப நலம் உள்ளிட்ட வாழ்வியல் முடிவுகளுக்கான வழிகாட்டுதல்.",
    descEn: "Comprehensive insight covering marriage, career, entrepreneurship, overseas prospects, and family harmony.",
    icon: ShieldCheck
  }, {
    titleTamil: "எளிதான தொடர்பு",
    titleEn: "Easy Phone & WhatsApp Contact",
    descTamil: "நேரில் வர இயலாதவர்கள் உலகின் எந்த நாட்டிலிருந்தும் தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக எளிதில் தொடர்பு கொள்ளலாம்.",
    descEn: "Seamless consultation via Phone and WhatsApp for clients in India and across the world.",
    icon: Headphones
  }];
  const howItWorks = [{
    step: "01",
    titleTamil: "தொடர்பு கொள்ளுங்கள்",
    titleEn: "Contact Us",
    descTamil: "தொலைபேசி (+91 9487306953) அல்லது WhatsApp வழியாக எங்களை நேரடியாக தொடர்பு கொள்ளுங்கள்.",
    descEn: "Connect with us directly via Phone or WhatsApp."
  }, {
    step: "02",
    titleTamil: "உங்கள் தேவையை தெரிவியுங்கள்",
    titleEn: "Share Your Requirement",
    descTamil: "பிறந்த தேதி, நேரம், ஊர் மற்றும் நீங்கள் ஆலோசிக்க விரும்பும் ஜோதிட விவரங்களை எங்களுடன் பகிர்ந்து கொள்ளுங்கள்.",
    descEn: "Share your birth details (date, exact time, place) and the specific matter you wish to consult on."
  }, {
    step: "03",
    titleTamil: "ஆலோசனை பெறுங்கள்",
    titleEn: "Get Your Consultation",
    descTamil: "பாரம்பரிய ஜாதகக் கணிப்பின்படி உங்கள் கேள்விகளுக்கான தெளிவான ஆலோசனையை அமைதியான முறையில் பெறுங்கள்.",
    descEn: "Receive traditional, horoscope-based astrological guidance with clarity and peace of mind."
  }];
  return <>
      <SEO title="Tamil Astrologer | ஜோதிட ஆலோசனை | Sree Thanumaalayan Jothida Nilayam" description="Traditional Tamil astrology consultation, horoscope reading (ஜாதகப் பலன்), marriage matching (திருமணப் பொருத்தம்), career, business, and overseas astrology. Ethamoly, Nagercoil, Tamil Nadu." canonicalPath="/" keywords={["Tamil astrologer", "Tamil astrology", "astrology consultation", "horoscope reading", "marriage matching", "career astrology", "Tamil Nadu astrologer", "Nagercoil astrologer", "Kanyakumari astrologer", "தமிழ் ஜோதிடம்", "ஜோதிட ஆலோசனை", "ஜாதகப் பலன்", "திருமணப் பொருத்தம்"]} />
      <Schema type="business" faqs={faqPreview} />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0f172a] to-[#080b12] text-[#e2e8f0] py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#d4af37]/30">
  
  {/* 1. Animated Planetary Background Layer */}
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center lg:justify-end">
    {/* On mobile: scaled down & centered; On desktop: aligned right */}
    <div className="w-full h-[600px] sm:h-[700px] lg:h-full lg:w-1/2 opacity-40 lg:opacity-100 transition-opacity duration-500">
      <PlanetarySystem scale={1.1} showZodiac={true} autoAnimate={true} className="w-full h-full bg-transparent" />
    </div>
  </div>

  {/* 2. Enhanced Vignette / Overlay Layer to improve text contrast on mobile */}
  <div className="absolute inset-0 bg-gradient-to-t sm:bg-[radial-gradient(ellipse_at_center,rgba(11,15,25,0.3)_0%,rgba(11,15,25,0.75)_70%,rgba(8,11,18,0.98)_100%)] from-[#080b12] via-[#0b0f19]/80 to-[#0b0f19]/90 pointer-events-none z-0" />

  {/* 3. Main Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
    
    {/* LEFT COLUMN: Text Content & Actions */}
    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 bg-[#0b0f19]/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-2xl border border-white/5 lg:border-none">
      
      {/* Tag Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-semibold tracking-wide backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#f3e5ab] shrink-0" />
        <span className="truncate">பாரம்பரிய ஜோதிட வழிகாட்டல் | Traditional Astrology</span>
      </div>

      {/* Names */}
      <div className="space-y-1">
        <h2 className="text-sm sm:text-base font-semibold text-[#f3e5ab] tracking-wider">
          {BUSINESS_CONFIG.tamilName}
        </h2>
        <p className="text-xs sm:text-sm text-[#94a3b8] tracking-widest uppercase font-sans">
          {BUSINESS_CONFIG.englishName}
        </p>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-gold-gradient tracking-tight leading-snug sm:leading-tight">
        ஜோதிட ஆலோசனை | ஜாதகப் பலன் | திருமணப் பொருத்தம்
      </h1>
      
      <p className="text-xs sm:text-base text-[#f3e5ab]/90 font-medium">
        Astrology Consultation | Horoscope Reading | Marriage Matching
      </p>

      {/* Description */}
      <div className="space-y-2 pt-2 text-[#e2e8f0]">
        <p className="text-sm sm:text-base leading-relaxed">
          "உங்கள் வாழ்க்கையின் முக்கிய விஷயங்களைப் புரிந்துகொள்ள பாரம்பரிய ஜோதிட முறையின் அடிப்படையில் ஆலோசனை பெறுங்கள்."
        </p>
        <p className="text-xs sm:text-sm text-[#94a3b8] italic">
          "Get traditional horoscope-based astrology guidance for important aspects of life."
        </p>
      </div>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
        <Link 
          to="/contact" 
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#d4af37] hover:bg-[#f3e5ab] text-[#0b0f19] font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4" />
          <span>Contact Us</span>
        </Link>

        <a 
          href={BUSINESS_CONFIG.whatsappBaseUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Consultation</span>
        </a>
      </div>
    </div>

    {/* RIGHT COLUMN: Spacer block for desktop view */}
    <div className="hidden lg:block w-1/2 h-[500px] pointer-events-none" />

  </div>
</section>

      {/* About Preview Section (Section 8) */}
      <section className="py-14 sm:py-20 px-4 ">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#f8f4ee] rounded-2xl p-6 sm:p-10 border border-stone-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-8 space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6b1426] tracking-wider uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>எங்களைப் பற்றி | About Us</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
          பாரம்பரிய ஜோதிட நெறிமுறைகளுடன் நேர்மையான ஆலோசனை
        </h2>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          <strong>ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம்</strong> வாழ்க்கையின் முக்கிய காலகட்டங்களில் சரியான முடிவுகளை எடுக்க பாரம்பரிய தமிழ் ஜோதிட முறைகளின் அடிப்படையில் வழிகாட்டி வருகிறது. எவ்வித மாய மந்திரங்களோ அல்லது தேவையற்ற அச்சமூட்டும் பேச்சுகளோ இன்றி, முன்னோர்கள் வகுத்த ஜோதிட விதிகளின்படி ஜாதகத்தை ஆழமாக ஆராய்ந்து உண்மையான பலன்களை விவரிப்பதே எங்களது அணுகுமுறையாகும்.
        </p>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
          Sree Thanumaalayan Jothida Nilayam provides traditional astrology consultation for important life matters including horoscope reading, marriage matching, marriage obstacles, career, business, overseas travel, family matters, Dasha-Bhukti analysis, and traditional remedies.
        </p>

        {/* Service tags */}
        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          {["ஜாதகப் பலன் (Horoscope)", "திருமணப் பொருத்தம் (Marriage)", "வேலை & தொழில் (Career)", "வெளிநாட்டு வாய்ப்பு (Overseas)", "தசா புத்தி (Dasha Bhukti)", "பரிகார வழிகாட்டல் (Remedies)"].map((tag, i) => <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-stone-200 text-stone-700 font-medium">
              {tag}
            </span>)}
        </div>

        <div className="pt-3">
          <Link to="/about" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#6b1426] hover:text-amber-800 transition-colors group">
            <span>முழு விவரங்கள் படிக்க | Read More</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image replaced side card */}
      <div className="lg:col-span-4 rounded-xl shadow-xs overflow-hidden">
        <img
          src="/assets/images/about_astrology_center.jpg"
          alt="About Sree Thanumaalayan Jothida Nilayam"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Services Section (Section 9) */}
      <section className="py-14 sm:py-20 px-4 bg-stone-100/60 border-y border-stone-200/80">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#6b1426] uppercase tracking-widest">
              ஜோதிட சேவைகள் | Astrology Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              பாரம்பரிய முறையில் வழங்கப்படும் ஆலோசனைகள்
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Traditional horoscope-based guidance for every critical sphere of life.
            </p>
          </div>

          {/* 8 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.map(service => <ServiceCard key={service.slug} service={service} />)}
          </div>

          <div className="text-center pt-2">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6b1426] hover:bg-[#4a0d1a] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs">
              <span>அனைத்து சேவைகள் பார்வை | View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tamil Astrology Section (Section 10) */}
      <section className="py-14 sm:py-18 px-4 bg-[#fcfaf7]">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-amber-50 via-stone-50 to-amber-50/60 p-6 sm:p-10 border border-amber-300/40 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-900 tracking-wider uppercase">
              தமிழ் ஜோதிடம் | Tamil Astrology
            </span>
            <h2 className="text-xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
              தொன்மை வாய்ந்த தமிழ் ஜோதிட மரபும் நவீன ஆலோசனையும்
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              "தமிழ் ஜோதிட முறையின் அடிப்படையில் ஜாதகப் பலன், திருமணப் பொருத்தம், வேலை, தொழில், குடும்பம், வெளிநாட்டு வாய்ப்புகள் மற்றும் தசா புத்தி தொடர்பான ஆலோசனைகளைப் பெறலாம்."
            </p>
            <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed">
              "Sree Thanumaalayan Jothida Nilayam provides traditional Tamil astrology consultation for horoscope reading, marriage matching, career, business, family matters, overseas opportunities and Dasha Bhukti."
            </p>

            <div className="pt-3">
              <Link to="/tamil-astrology" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs sm:text-sm font-semibold transition-colors">
                <span>Explore Tamil Astrology →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tamils Abroad Section (Section 11) */}
      <section className="py-14 sm:py-18 px-4 bg-stone-900 text-white border-y border-amber-600/30">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Globe2 className="w-4 h-4" />
            <span>உலகளாவிய தமிழர்களுக்கான ஆலோசனை | Global Tamil Consultation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#fdf8f0] leading-tight">
            வெளிநாட்டில் வசிக்கும் தமிழர்களுக்கான ஜோதிட ஆலோசனை
          </h2>
          <p className="text-sm sm:text-base text-amber-200/90 font-medium">
            Astrology Consultation for Tamils Living Abroad
          </p>

          <div className="space-y-2 text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
            <p>
              "இந்தியா மட்டுமின்றி வெளிநாடுகளில் வசிக்கும் தமிழர்களும் Phone மற்றும் WhatsApp மூலம் ஜோதிட ஆலோசனை பெற எங்களைத் தொடர்பு கொள்ளலாம்."
            </p>
            <p className="italic text-stone-400">
              "Tamil people living in India and abroad can contact Sree Thanumaalayan Jothida Nilayam for traditional astrology consultation."
            </p>
          </div>

          {/* Countries naturally highlighted */}
          <div className="pt-2 space-y-3">
            <p className="text-xs text-stone-400 font-medium">
              ஆலோசனை பெறும் முக்கிய நாடுகள் (Clients Regularly Connect From):
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {[{
              name: "Singapore",
              tamil: "சிங்கப்பூர்"
            }, {
              name: "Canada",
              tamil: "கனடா"
            }, {
              name: "Malaysia",
              tamil: "மலேசியா"
            }, {
              name: "UAE",
              tamil: "துபாய் / அமீரகம்"
            }, {
              name: "UK",
              tamil: "இங்கிலாந்து"
            }, {
              name: "USA",
              tamil: "அமெரிக்கா"
            }, {
              name: "Australia",
              tamil: "ஆஸ்திரேலியா"
            }, {
              name: "Qatar",
              tamil: "கத்தார்"
            }, {
              name: "Europe & Global",
              tamil: "பிற நாடுகள்"
            }].map((item, idx) => <span key={idx} className="px-3 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-stone-200 text-xs flex items-center gap-1.5">
                  <span className="text-amber-400 font-medium">{item.name}</span>
                  <span className="text-stone-400 text-[11px]">({item.tamil})</span>
                </span>)}
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-amber-400/30 text-xs text-amber-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>வெளிநாட்டு & உள்நாட்டு ஆலோசனை கட்டணம்: <strong>₹1,500 (INR 1,500)</strong> | வெளிப்படையான கட்டணம்</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <Link to="/astrology-for-tamils-abroad" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs sm:text-sm font-semibold transition-colors">
              <span>Explore Astrology for Tamils Abroad →</span>
            </Link>

            {/* <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Consultation (+91 9487306953)</span>
            </a> */}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Section 12) */}
      <section className="py-14 sm:py-20 px-4 bg-[#fdfbf7]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#6b1426] uppercase tracking-widest">
              நம்பிக்கையான பாரம்பரியம் | Pure Trust
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Why Choose Sree Thanumaalayan Jothida Nilayam?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return <div key={idx} className="bg-white rounded-xl p-6 border border-stone-200/90 shadow-2xs hover:border-amber-400/60 transition-all space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 text-[#6b1426] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">
                    {item.titleTamil}
                  </h3>
                  <p className="text-xs font-semibold text-amber-900/80">
                    {item.titleEn}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.descTamil}
                  </p>
                  <p className="text-[11px] text-stone-500 italic leading-relaxed">
                    {item.descEn}
                  </p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* How It Works (Section 13) */}
      <section className="py-14 sm:py-20 px-4 bg-[#f8f4ee] border-y border-stone-200/80">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#6b1426] uppercase tracking-widest">
              ஆலோசனை பெறும் எளிய வழிமுறைகள்
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              How It Works (3 எளிய படிகள்)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map(step => <div key={step.step} className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-xs relative">
                <span className="text-3xl font-bold text-amber-500/40 font-serif absolute top-4 right-5">
                  {step.step}
                </span>
                <div className="space-y-2.5">
                  <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-[#6b1426] text-xs font-bold">
                    படி {step.step}
                  </span>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    {step.titleTamil}
                  </h3>
                  <p className="text-xs font-semibold text-amber-900/80">
                    {step.titleEn}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.descTamil}
                  </p>
                  <p className="text-[11px] text-stone-500 italic leading-relaxed">
                    {step.descEn}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Preview (Section 14) */}
      <section className="py-14 sm:py-20 px-4 bg-[#fdfbf7]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#6b1426] uppercase tracking-widest">
              பொதுவான சந்தேகங்கள் | FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              அடிக்கடி கேட்கப்படும் கேள்விகள்
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Frequently Asked Questions regarding traditional astrology consultation.
            </p>
          </div>

          <FAQAccordion items={faqPreview} />

          <div className="text-center pt-2">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#6b1426] hover:text-amber-800 transition-colors">
              <span>அனைத்து கேள்விகளையும் பார்க்க | View All FAQs →</span>
            </Link>
          </div>
        </div>
      </section>

      
    </>;
};