import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Sparkles, ExternalLink, CheckCircle2 } from "lucide-react";
import { SEO } from "../components/SEO";
import { Schema } from "../components/Schema";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactForm } from "../components/ContactForm";
import { BUSINESS_CONFIG } from "../data/config";
export const Contact = () => {
  const breadcrumbs = [{
    name: "Contact",
    nameTamil: "தொடர்புக்கு",
    url: "/contact"
  }];

  // Official Google Maps Search link for the physical address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("7/44 Dharmapuram, Ethamoly 629501, Kanyakumari, Tamil Nadu, India")}`;
  return <>
      <SEO title="Contact Tamil Astrologer | தொடர்புக்கு | Sree Thanumaalayan Jothida Nilayam" description="Contact Sree Thanumaalayan Jothida Nilayam for traditional astrology consultation, horoscope reading, and marriage matching. Ethamoly, Kanyakumari, Tamil Nadu." canonicalPath="/contact" keywords={["Contact Tamil Astrologer", "Ethamoly astrologer contact", "Nagercoil astrology consultation phone", "Kanyakumari astrologer WhatsApp", "தொடர்புக்கு", "ஜோதிட ஆலோசனை எண்"]} />
      <Schema type="business" breadcrumbs={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="py-12 sm:py-16 px-4 bg-[#fdfbf7]">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#6b1426] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>நேரடி & தொலைபேசி ஆலோசனை</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              தொடர்புக்கு | Contact Sree Thanumaalayan Jothida Nilayam
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
              பாரம்பரிய ஜாதகக் கணிப்பு, திருமணப் பொருத்தம் மற்றும் வாழ்வியல் ஆலோசனைகளுக்கு எங்களை தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக எளிதாக தொடர்பு கொள்ளலாம்.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Information & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Contact Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-2xs space-y-6">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900">
                    {BUSINESS_CONFIG.tamilName}
                  </h2>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                    {BUSINESS_CONFIG.englishName}
                  </p>
                </div>

                {/* Consultation Fee Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-xl p-4 border border-amber-300 shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#6b1426] uppercase tracking-wider">
                      ஆலோசனை கட்டணம் | Consultation Fee
                    </span>
                    <span className="text-base sm:text-lg font-bold font-serif text-[#6b1426] bg-white px-3 py-1 rounded-md border border-amber-200 shadow-2xs">
                      ₹1,500
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    ஜாதகப் பலன், திருமணப் பொருத்தம், தசா புத்தி மற்றும் உங்கள் குறிப்பிட்ட கேள்விகளுக்கான ஒரு முழுமையான ஆலோசனைக்கான கட்டணம் <strong>₹1,500 (INR 1,500)</strong> மட்டுமே.
                  </p>
                  <div className="text-[11px] text-stone-600 pt-1 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-1">
                    <span>பரிவர்த்தனை: GPay, PhonePe, UPI, Bank Transfer</span>
                    <span className="font-semibold text-emerald-800">மறைமுக கட்டணம் இல்லை</span>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp CTA Buttons */}
                <div className="space-y-3">
                  <a href={`tel:${BUSINESS_CONFIG.phone}`} className="w-full flex items-center justify-between p-4 rounded-xl bg-amber-50/80 border border-amber-300 hover:bg-amber-100/70 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#6b1426] text-white flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                          நேரடி அழைப்பு | Phone Call
                        </span>
                        <span className="text-sm sm:text-base font-bold text-stone-900">
                          {BUSINESS_CONFIG.phone}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#6b1426] group-hover:underline">
                      Call Now →
                    </span>
                  </a>

                  <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 hover:bg-emerald-100/70 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                          வாட்ஸ்அப் | WhatsApp
                        </span>
                        <span className="text-sm sm:text-base font-bold text-stone-900">
                          +91 9487306953
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 group-hover:underline">
                      Chat Now →
                    </span>
                  </a>
                </div>

                {/* Physical Address */}
                <div className="pt-2 border-t border-stone-100 space-y-3 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#6b1426] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900">நேரடி அலுவலக முகவரி (Address):</p>
                      <p className="mt-1 leading-relaxed">
                        {BUSINESS_CONFIG.address.street},
                        <br />
                        {BUSINESS_CONFIG.address.locality} – {BUSINESS_CONFIG.address.pincode},
                        <br />
                        கன்னியாகுமரி மாவட்டம், தமிழ்நாடு, இந்தியா.
                      </p>
                      <p className="text-xs text-stone-500 italic mt-1">
                        {BUSINESS_CONFIG.address.formatted}
                      </p>

                      {/* Google Maps link */}
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6b1426] hover:underline mt-2">
                        <span>Google Maps-ல் இருப்பிடம் பார்க்க | View on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900">ஆலோசனை நேரம் (Consultation Hours):</p>
                      <p className="text-xs text-stone-600 mt-0.5">
                        திங்கள் முதல் ஞாயிறு வரை: காலை 9:00 - இரவு 8:00 (IST)
                      </p>
                      <p className="text-[11px] text-stone-500">
                        நேரில் வருகை தர விரும்புவோர் முன்கூட்டியே நேரத்தை உறுதிப்படுத்திக் கொள்ளவும்.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Modes summary */}
              <div className="bg-[#f8f4ee] rounded-xl p-5 border border-stone-200 space-y-3 text-xs text-stone-700">
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  ஆலோசனை பெறும் வழிகள் | How You Can Consult
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>நேரில் வருகை தந்து ஆலோசனை (In-person Visit)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>தொலைபேசி அழைப்பு வழி ஆலோசனை (Phone Consultation)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>WhatsApp வழி ஜாதக ஆய்வு மற்றும் விவரப் பகிர்வு</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200/80">
                  <span className="font-semibold text-stone-800 block mb-1.5 text-[11px] uppercase tracking-wider">
                    சேவை வழங்கப்படும் நாடுகள் (Frequently Consulted From):
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {["Singapore", "Canada", "Malaysia", "UAE", "UK", "USA", "Australia", "Qatar", "India"].map(country => <span key={country} className="px-2 py-0.5 rounded-sm bg-white border border-stone-200 font-medium text-stone-800">
                        {country}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bilingual WhatsApp Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>;
};