import React from "react";
import { Globe2, MessageCircle, Clock, Sparkles, MapPin } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTASection } from "../components/CTASection";
import { BUSINESS_CONFIG } from "../data/config";
export const TamilsAbroad = () => {
  const breadcrumbs = [{
    name: "Tamils Abroad",
    nameTamil: "வெளிநாட்டு தமிழர்கள்",
    url: "/astrology-for-tamils-abroad"
  }];
  const abroadFaqs = [{
    questionTamil: "வெளிநாட்டு தமிழர்களுக்கான ஜோதிட ஆலோசனை கட்டணம் எவ்வளவு?",
    questionEnglish: "What is the consultation fee for Tamils living abroad?",
    answerTamil: "வெளிநாட்டில் வாழும் தமிழர்களுக்கும் மற்றும் இந்தியாவில் உள்ளவர்களுக்கும் ஒரே நிலையான நியாயமான கட்டணமே நிர்ணயிக்கப்பட்டுள்ளது: ₹1,500 (INR 1,500). மறைமுக கட்டணங்கள் எதுவும் இல்லை. UPI, GPay, PhonePe அல்லது Bank Transfer மூலம் எளிதாக செலுத்தலாம்.",
    answerEnglish: "We maintain fixed, completely transparent pricing for both domestic and international consultations: ₹1,500 (INR 1,500). There are no hidden fees. Overseas clients can easily transfer via UPI, GPay, PhonePe, or direct Bank Transfer."
  }, {
    questionTamil: "வெளிநாட்டிலிருந்து ஆலோசனை பெறுவது எப்படி?",
    questionEnglish: "How can Tamil people living abroad consult with you?",
    answerTamil: "எங்களது வாட்ஸ்அப் (+91 9487306953) வழியாக உங்கள் பிறந்த தேதி, நேரம், பிறந்த ஊர் மற்றும் ஆலோசிக்க வேண்டிய விஷயங்களை அனுப்பி வசதியான தொலைபேசி அல்லது வாட்ஸ்அப் அழைப்பு நேரத்தை உறுதி செய்து கொள்ளலாம்.",
    answerEnglish: "You can message us on WhatsApp (+91 9487306953) with your birth date, time, birth city, and consultation topic to schedule a convenient Phone or WhatsApp consultation."
  }, {
    questionTamil: "நேர மண்டல வித்தியாசம் (Time Zone Difference) எவ்வாறு கையாளப்படுகிறது?",
    questionEnglish: "How are time zone differences handled for overseas consultations?",
    answerTamil: "நீங்கள் வசிக்கும் நாட்டின் (சிங்கப்பூர், கனடா, மலேசியா, UAE, UK, USA, ஆஸ்திரேலியா, கத்தார்) நேரத்திற்கு ஏற்ப இரு தரப்பிற்கும் பொருத்தமான இந்திய நேரத்தை (IST) முன்கூட்டியே திட்டமிட்டு ஆலோசனை வழங்கப்படுகிறது.",
    answerEnglish: "We schedule consultations accommodating local time zones across Singapore, Canada, Malaysia, UAE, UK, USA, Australia, and Qatar to ensure convenient discussion."
  }, {
    questionTamil: "வெளிநாட்டில் உள்ள உங்கள் அலுவலக முகவரி என்ன?",
    questionEnglish: "Do you have physical branches in foreign countries?",
    answerTamil: "இல்லை. எங்கள் ஒரே நேரடி தலைமை நிலையம் தமிழ்நாட்டின் கன்னியாகுமரி மாவட்டம், ஈத்தாமொழியில் மட்டுமே அமைந்துள்ளது. வெளிநாடுகளில் உள்ளவர்களுக்கு தொலைபேசி மற்றும் வாட்ஸ்அப் வழியாக மட்டுமே நேரடி ஆலோசனை வழங்கப்படுகிறது.",
    answerEnglish: "No. Our sole physical center is located in Ethamoly, Kanyakumari District, Tamil Nadu, India. For clients abroad, all consultations are conducted via Phone and WhatsApp."
  }];
  const countriesList = [{
    name: "Singapore",
    tamil: "சிங்கப்பூர்",
    timing: "SGT (UTC+8) time coordination",
    flag: "🇸🇬"
  }, {
    name: "Canada",
    tamil: "கனடா",
    timing: "Toronto / Vancouver time coordination",
    flag: "🇨🇦"
  }, {
    name: "Malaysia",
    tamil: "மலேசியா",
    timing: "MYT (UTC+8) time coordination",
    flag: "🇲🇾"
  }, {
    name: "United Arab Emirates (UAE)",
    tamil: "துபாய் / அபுதாபி / UAE",
    timing: "GST (UTC+4) Gulf time coordination",
    flag: "🇦🇪"
  }, {
    name: "United Kingdom (UK)",
    tamil: "இங்கிலாந்து / லண்டன்",
    timing: "GMT / BST European timing",
    flag: "🇬🇧"
  }, {
    name: "United States (USA)",
    tamil: "அமெரிக்கா",
    timing: "EST / CST / MST / PST friendly slots",
    flag: "🇺🇸"
  }, {
    name: "Australia",
    tamil: "ஆஸ்திரேலியா",
    timing: "Sydney / Melbourne / Perth time coordination",
    flag: "🇦🇺"
  }, {
    name: "Qatar",
    tamil: "கத்தார் (தோஹா)",
    timing: "AST (UTC+3) Gulf time coordination",
    flag: "🇶🇦"
  }];
  return <>
      <SEO title="Tamil Astrology for Tamils Abroad | Singapore, Canada, Malaysia, UAE, UK, USA, Australia, Qatar" description="Traditional Tamil astrology consultation for Tamils living abroad in Singapore, Canada, Malaysia, UAE, UK, USA, Australia, and Qatar. Fixed consultation fee ₹1,500. Connect via Phone & WhatsApp." canonicalPath="/astrology-for-tamils-abroad" keywords={["Tamil astrology for Tamils abroad", "astrology consultation for Tamils abroad", "Tamil horoscope Singapore", "Tamil horoscope Canada", "Tamil horoscope Malaysia", "Tamil horoscope UAE Dubai", "Tamil horoscope UK London", "Tamil horoscope USA", "Tamil horoscope Australia", "Tamil horoscope Qatar Doha", "consultation fee 1500", "வெளிநாட்டு தமிழர்கள் ஜோதிடம்"]} />
      <Schema type="service" breadcrumbs={breadcrumbs} faqs={abroadFaqs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold">
              <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>உலகளாவிய தமிழர்களுக்கான பாரம்பரிய ஜோதிடம்</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              வெளிநாட்டில் வசிக்கும் தமிழர்களுக்கான ஜோதிட ஆலோசனை
            </h1>
            <p className="text-sm sm:text-base text-amber-900 font-medium">
              Tamil Astrology Consultation for Tamils Living Abroad
            </p>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
              "இந்தியா மட்டுமின்றி வெளிநாடுகளில் வசிக்கும் தமிழர்களும் Phone மற்றும் WhatsApp மூலம் ஜோதிட ஆலோசனை பெற எங்களைத் தொடர்பு கொள்ளலாம்."
            </p>
          </div>

          {/* Core Overview Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200/90 shadow-2xs space-y-5">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#6b1426]" />
              <span>தாய்மண்ணின் பாரம்பரிய வழிகாட்டுதல் | Connecting You with Authentic Roots</span>
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                வெளிநாடுகளில் பணிபுரிந்து குடும்பத்துடன் வசிக்கும் பல தமிழ் மக்கள், தங்களின் பிள்ளைகளின் திருமணப் பொருத்தம், மேற்படிப்பு, வேலைவாய்ப்பு மாற்றங்கள், புதிய இல்லம் அமைத்தல் மற்றும் குடும்ப அமைதி ஆகிய விவகாரங்களில் தகுந்த பாரம்பரிய தமிழ் ஜோதிட ஆலோசனையை பெற விரும்புகின்றனர்.
              </p>
              <p>
                ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம் (Ethamoly, Tamil Nadu), வெளிநாடுகளில் வசிக்கும் தமிழர்களுக்கு தூரத்தின் தடையின்றி தொலைபேசி (Phone Call) மற்றும் வாட்ஸ்அப் (WhatsApp) வழியாக நேர்த்தியான மற்றும் விரிவான ஜாதக ஆலோசனையை வழங்கி வருகிறது.
              </p>
              <p className="italic text-stone-600">
                Tamil people living in India and abroad can contact Sree Thanumaalayan Jothida Nilayam for traditional astrology consultation. Whether you are living in North America, Europe, the Middle East, or the Asia-Pacific region, we ensure personalized, unhurried horoscope reviews.
              </p>
            </div>
          </div>

          {/* Regions Covered */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl font-bold font-serif text-stone-900">
                ஆலோசனை பெறும் முக்கிய நாடுகள் | Countries We Frequently Serve
              </h2>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full w-fit">
                8 முக்கிய நாடுகள் & உலகளாவிய தமிழர்கள்
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {countriesList.map((c, i) => <div key={i} className="bg-[#f8f4ee] rounded-xl p-4 border border-stone-200/80 shadow-2xs space-y-1.5 hover:border-amber-400 transition-colors group">
                  <div className="flex items-center justify-between">
                    <span className="text-xl" role="img" aria-label={c.name}>{c.flag}</span>
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider bg-white/80 px-2 py-0.5 rounded-sm border border-stone-200">
                      Online
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 font-serif group-hover:text-[#6b1426] transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-[#6b1426] font-medium">
                    {c.tamil}
                  </p>
                  <p className="text-[11px] text-stone-500 pt-0.5">
                    {c.timing}
                  </p>
                </div>)}
            </div>

            <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-300/40 text-xs text-amber-950 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <p>
                <strong>குறிப்பு (Authenticity Note):</strong> எங்கள் ஒரே உடல்சார்ந்த நேரடி அலுவலகம் தமிழ்நாட்டின் ஈத்தாமொழி, கன்னியாகுமரி மாவட்டத்தில் மட்டுமே உள்ளது. வெளிநாடுகளில் எந்தப் போலி கிளைகளோ முகவரிகளோ கிடையாது. அனைத்தும் தமிழ்நாடு மையத்திலிருந்து மட்டுமே நேரடியாக வழங்கப்படுகிறது.
              </p>
            </div>
          </div>

          {/* Transparent Consultation Fee Card */}
          <div className="bg-gradient-to-br from-[#4a0d1b] to-[#2e0710] text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-5 border border-amber-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
                  வெளிப்படையான கட்டணம் | Transparent Pricing
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                  ஜோதிட ஆலோசனை கட்டணம்: ₹1,500 (INR 1,500)
                </h3>
              </div>
              <div className="bg-amber-400 text-stone-950 px-4 py-2 rounded-xl font-bold text-lg sm:text-xl text-center self-start sm:self-auto shadow-sm">
                ₹1,500 <span className="text-xs font-medium block text-stone-800">Fixed Fee</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-200">
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-1">
                <span className="font-bold text-amber-300 block">முழுமையான ஆய்வு:</span>
                <p className="text-xs text-stone-300">
                  லக்னம், ராசி, 12 பாவங்கள், தசா புத்தி மற்றும் நவாம்ச நிலைகளின் விரிவான பாரம்பரிய கணிப்பு.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-1">
                <span className="font-bold text-amber-300 block">அனைத்து நாடுகளுக்கும் ஒரே கட்டணம்:</span>
                <p className="text-xs text-stone-300">
                  சிங்கப்பூர், கனடா, மலேசியா, UAE, UK, USA, ஆஸ்திரேலியா, கத்தார் என எங்கு வாழ்ந்தாலும் ஒரே கட்டணம் ₹1,500 மட்டுமே.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-1">
                <span className="font-bold text-amber-300 block">எளிய கட்டண முறை:</span>
                <p className="text-xs text-stone-300">
                  GPay, PhonePe, UPI மற்றும் நேரடி வங்கி பரிவர்த்தனை (Bank Transfer) மூலம் கட்டணத்தை எளிதாக செலுத்தலாம்.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-200/90 border-t border-white/10">
              <span>நேரடி வாட்ஸ்அப் வழியாக கட்டண விவரங்கள் மற்றும் வங்கி கணக்கு தகவலைப் பெறலாம்.</span>
              <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp முன்பதிவு (+91 9487306953)</span>
              </a>
            </div>
          </div>

          {/* Consultation Process for Overseas Clients */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-5">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>வெளிநாட்டு தமிழர்கள் ஆலோசனை பெறும் முறை | Simple 3-Step Process</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="w-6 h-6 rounded-full bg-[#6b1426] text-white flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <h4 className="font-bold text-stone-900">WhatsApp மெசேஜ்</h4>
                <p className="text-xs text-stone-600">
                  வாட்ஸ்அப் எண் <strong>+91 9487306953</strong>-க்கு உங்கள் பெயர், நாடு மற்றும் பிறந்த விவரங்களை அனுப்பவும்.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="w-6 h-6 rounded-full bg-[#6b1426] text-white flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <h4 className="font-bold text-stone-900">நேரத்தை உறுதி செய்தல்</h4>
                <p className="text-xs text-stone-600">
                  உங்கள் நாட்டு நேர மண்டலத்திற்கு (Timezone) ஏற்ப வசதியான ஆலோசனை நேரம் திட்டமிடப்படும்.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="w-6 h-6 rounded-full bg-[#6b1426] text-white flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <h4 className="font-bold text-stone-900">நேரடி குரல் / வாட்ஸ்அப் கலந்துரையாடல்</h4>
                <p className="text-xs text-stone-600">
                  நிதானமாக உங்கள் ஜாதகத்தை பாரம்பரிய முறைப்படி விளக்கி தெளிவான வழிகாட்டுதல் வழங்கப்படும்.
                </p>
              </div>
            </div>
          </div>

          {/* Overseas FAQs */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
              வெளிநாட்டு தமிழர்களுக்கான சந்தேகங்கள் | Overseas FAQs
            </h3>
            <FAQAccordion items={abroadFaqs} />
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm initialService="Foreign Travel / வெளிநாட்டு வாய்ப்பு" />
          </div>

          {/* CTA */}
          <CTASection titleTamil="வெளிநாட்டில் இருந்தவாறே எளிய WhatsApp ஆலோசனை" titleEnglish="Connect from Overseas via WhatsApp: +91 9487306953" />
        </div>
      </div>
    </>;
};