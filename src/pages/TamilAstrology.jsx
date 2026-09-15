import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Compass, ShieldCheck, Star } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { FAQAccordion } from "../components/FAQAccordion";
import { ContactForm } from "../components/ContactForm";
export const TamilAstrology = () => {
  const breadcrumbs = [{
    name: "Tamil Astrology",
    nameTamil: "தமிழ் ஜோதிடம்",
    url: "/tamil-astrology"
  }];
  const tamilAstrologyFaqs = [{
    questionTamil: "தமிழ் ஜோதிட முறையின் தனிச்சிறப்பு என்ன?",
    questionEnglish: "What makes traditional Tamil astrology unique?",
    answerTamil: "தமிழ் ஜோதிட மரபானது சித்தர்கள் மற்றும் முன்னோர்களால் வகுக்கப்பட்ட பஞ்சாங்க விதிகள், நட்சத்திரப் பொருத்தம், நவாம்ச நிலைகள் மற்றும் குலதெய்வ வழிபாட்டை முதன்மையாகக் கொண்டு ஆழமாக கணிக்கப்படுகிறது.",
    answerEnglish: "Traditional Tamil astrology synthesizes classical Siddhic and Vedic astrological canons, emphasizing precise planetary transits, Nakshatra compatibility (Poruthams), and ancestral deity veneration."
  }, {
    questionTamil: "திருக்கணிதம் மற்றும் வாக்கிய பஞ்சாங்கம் ஆகியவற்றில் எது சிறந்தது?",
    questionEnglish: "Which calculation system is followed for horoscope interpretation?",
    answerTamil: "இரு முறைகளின் பாரம்பரியக் கணிதச் சிறப்புகளையும் உணர்ந்து, நவீன விண்வெளி கிரக சஞ்சார நிலைகளுடன் ஒப்பிட்டு தெளிவான முறையில் பலன்கள் கணிக்கப்படுகின்றன.",
    answerEnglish: "Both Vakya and Thiru-kanitha traditions have ancient lineages. We carefully evaluate planetary longitudes to ensure grounded and accurate astrological interpretations."
  }];
  return <>
      <SEO title="Tamil Astrology | தமிழ் ஜோதிடம் | Horoscope Consultation" description="Traditional Tamil astrology consultation, horoscope reading (ஜாதகப் பலன்), and marriage matching based on classical Tamil astrological heritage at Sree Thanumaalayan Jothida Nilayam." canonicalPath="/tamil-astrology" keywords={["Tamil astrology", "Tamil astrologer", "Tamil horoscope", "horoscope reading", "marriage matching", "ஜோதிட ஆலோசனை", "ஜாதகப் பலன்", "திருமணப் பொருத்தம்", "தமிழ் ஜோதிடம்"]} />
      <Schema type="service" breadcrumbs={breadcrumbs} faqs={tamilAstrologyFaqs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Title Section */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#6b1426] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>தொன்மை வாய்ந்த ஜோதிட மரபு</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              தமிழ் ஜோதிடம் | Tamil Astrology
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              Traditional Tamil Horoscope Reading, Marriage Matching & Vedic Guidance
            </p>
          </div>

          {/* Substantial Original Bilingual Content */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/90 shadow-2xs space-y-6">
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed">
                தமிழ் ஜோதிட முறையானது பல்லாயிரக்கணக்கான ஆண்டுகளாக தமிழர்களின் பண்பாட்டோடும் ஆன்மீக வாழ்வோடும் பின்னிப் பிணைந்த ஒரு உன்னதமான அறிவியல் ஞானமாகும்.
              </p>
              <p>
                ஒரு மனிதன் இந்த பூமியில் ஜனனம் எடுக்கும் துல்லியமான விநாடியில் வானமண்டலத்தில் உள்ள 12 ராசிகள், 27 நட்சத்திரங்கள், நவகிரகங்களின் சஞ்சாரம் மற்றும் லக்ன நிலைகளை அடிப்படையாகக் கொண்டு ஜன்ம ஜாதகம் வரையப்படுகிறது. இந்த பாரம்பரிய தமிழ் ஜோதிடக் கணிப்பின் மூலம் ஒருவரது குணநலன்கள், ஆரோக்கியம், கல்வி, தொழில்வாய்ப்புகள், திருமண பந்தம் மற்றும் ஆன்மீக நாட்டம் ஆகியவற்றை ஆழமாகப் புரிந்து கொள்ள முடிகிறது.
              </p>
              <p className="italic text-stone-600">
                Tamil astrology is deeply rooted in thousands of years of traditional wisdom, harmonizing the movements of celestial bodies with human life cycles. Calculated from the exact moment of birth, the Tamil horoscope chart charts the Ascendant (Lagna), the Moon sign (Rasi), and the nine planetary forces (Navagrahas) across the 12 houses to illuminate life paths with balance and self-awareness.
              </p>
            </div>
          </div>

          {/* Key Pillars of Tamil Astrology */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 text-center sm:text-left">
              தமிழ் ஜோதிடத்தின் முக்கிய அடிப்படைகள் | Core Pillars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f8f4ee] rounded-xl p-6 border border-stone-200/80 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white text-[#6b1426] flex items-center justify-center border border-amber-300">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  லக்னம் & ராசி கணிப்பு
                </h3>
                <p className="text-xs font-semibold text-amber-900/80">
                  Ascendant & Moon Chart
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  உடலமைப்பையும் எண்ணப் போக்கையும் குறிக்கும் லக்னம் மற்றும் மனதை ஆளும் சந்திரனின் நிலையை கொண்டு ஜாதக பலன் ஆழமாக ஆராயப்படுகிறது.
                </p>
              </div>

              <div className="bg-[#f8f4ee] rounded-xl p-6 border border-stone-200/80 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white text-[#6b1426] flex items-center justify-center border border-amber-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  பத்து பொருத்தம் & பாபசாம்யம்
                </h3>
                <p className="text-xs font-semibold text-amber-900/80">
                  10 Poruthams & Dosha Balance
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  திருமணப் பொருத்தத்தில் வெறும் நட்சத்திரம் மட்டும் பாராது, செவ்வாய் தோஷம் மற்றும் பாபசாம்ய சமநிலையை தமிழ் ஜோதிடம் உறுதி செய்கிறது.
                </p>
              </div>

              <div className="bg-[#f8f4ee] rounded-xl p-6 border border-stone-200/80 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-white text-[#6b1426] flex items-center justify-center border border-amber-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  குலதெய்வ வழிபாடு
                </h3>
                <p className="text-xs font-semibold text-amber-900/80">
                  Ancestral Deity Primacy
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  வீண் சடங்குகளை விட, முன்னோர்களின் குலதெய்வ வழிபாடே ஒரு குடும்பத்திற்கு சகல சுபங்களையும் நிலைநிறுத்தும் என்பது தமிழ் ஜோதிடத்தின் அசைக்க முடியாத நம்பிக்கை.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links to related services (Section 53) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
              தமிழ் ஜோதிட ஆலோசனைகள் | Explore Consultation Topics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link to="/services/horoscope-reading" className="p-4 rounded-xl bg-[#fdfbf7] border border-stone-200 hover:border-amber-400 transition-all group">
                <span className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#6b1426] block">
                  ஜாதகப் பலன் (Horoscope Reading) →
                </span>
                <span className="text-xs text-stone-500 mt-1 block">
                  லக்னம், ராசி மற்றும் தசா புத்தி ஆய்வு
                </span>
              </Link>

              <Link to="/services/marriage-matching" className="p-4 rounded-xl bg-[#fdfbf7] border border-stone-200 hover:border-amber-400 transition-all group">
                <span className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#6b1426] block">
                  திருமணப் பொருத்தம் (Marriage Matching) →
                </span>
                <span className="text-xs text-stone-500 mt-1 block">
                  பத்து பொருத்தம், செவ்வாய் மற்றும் ராகு-கேது ஆய்வு
                </span>
              </Link>

              <Link to="/services/career-business" className="p-4 rounded-xl bg-[#fdfbf7] border border-stone-200 hover:border-amber-400 transition-all group">
                <span className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#6b1426] block">
                  வேலை & தொழில் (Career & Business) →
                </span>
                <span className="text-xs text-stone-500 mt-1 block">
                  10-ஆம் பாவம் மற்றும் தொழில் மேன்மை வழிகாட்டல்
                </span>
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
              தமிழ் ஜோதிடம் - அடிக்கடி கேட்கப்படும் கேள்விகள்
            </h3>
            <FAQAccordion items={tamilAstrologyFaqs} />
          </div>

          

          {/* CTA */}
          <CTASection />
        </div>
      </div>
    </>;
};