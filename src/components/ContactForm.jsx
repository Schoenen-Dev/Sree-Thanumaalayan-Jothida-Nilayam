import React, { useState } from "react";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { BUSINESS_CONFIG, createWhatsAppUrl } from "../data/config";
export const ContactForm = ({
  initialService = "Horoscope Reading / ஜாதகப் பலன்",
  className = ""
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const serviceOptions = ["Horoscope Reading / ஜாதகப் பலன்", "Marriage Matching / திருமணப் பொருத்தம்", "Marriage Obstacles / திருமணத் தடை", "Career / வேலை", "Business / தொழில்", "Foreign Travel / வெளிநாட்டு வாய்ப்பு", "Family Matters / குடும்பம்", "Dasha Bhukti / தசா புத்தி", "Astrological Remedies / பரிகார ஆலோசனை", "Other / மற்றவை"];
  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும் / Please enter your name";
    } else if (name.trim().length < 2) {
      newErrors.name = "பெயர் குறைந்தபட்சம் 2 எழுத்துக்கள் இருக்க வேண்டும் / Name must be at least 2 characters";
    }

    // Phone validation (digits, plus, spaces, minimum 7 digits for international numbers)
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone.trim()) {
      newErrors.phone = "தொலைபேசி எண் அவசியமாகும் / Phone number is required";
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phone = "சரியான தொலைபேசி எண்ணை உள்ளிடவும் / Please enter a valid phone number (7-15 digits)";
    }
    if (!message.trim()) {
      newErrors.message = "உங்கள் செய்தி அல்லது ஜோதிடத் தேவையை குறிப்பிடவும் / Please describe your consultation inquiry";
    } else if (message.trim().length < 5) {
      newErrors.message = "செய்தி குறைந்தபட்சம் 5 எழுத்துக்கள் இருக்க வேண்டும் / Message must be at least 5 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Build URL and launch WhatsApp
    const targetUrl = createWhatsAppUrl({
      name,
      phone,
      service,
      message
    });
    setIsSuccess(true);

    // Open WhatsApp in a new tab safely
    window.open(targetUrl, "_blank", "noopener,noreferrer");

    // Reset success banner after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 7000);
  };
  return <div className={`bg-white rounded-xl shadow-md border border-stone-200/80 p-6 sm:p-8 ${className}`}>
      <div className="mb-6 border-b border-stone-100 pb-4">
        <span className="text-xs font-semibold text-[#6b1426] tracking-wider uppercase">
          நேரடி தொடர்பு படிவம் | Direct Inquiry
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif mt-1">
          ஜோதிட ஆலோசனை முன்பதிவு
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          கீழே உள்ள விவரங்களை நிரப்பி WhatsApp வழியாக நேரடியாக ஆலோசனை பெறலாம்.
        </p>

        {/* Consultation Fee Notice */}
        <div className="mt-3 p-3 rounded-lg bg-amber-50/90 border border-amber-300/80 flex items-center justify-between text-xs text-stone-800">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#6b1426]">ஆலோசனை கட்டணம் / Consultation Fee:</span>
            <span className="font-bold text-stone-900 text-sm">₹1,500</span>
          </div>
          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-sm">
            Fixed & Transparent
          </span>
        </div>
      </div>

      {isSuccess && <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">வாட்ஸ்அப் திறக்கப்படுகிறது / WhatsApp is opening!</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              உங்கள் தகவல் தயார் செய்யப்பட்டுள்ளது. வாட்ஸ்அப்பில் "Send" பட்டனை அழுத்தி செய்தியை அனுப்பி வைக்கவும்.
            </p>
          </div>
        </div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 mb-1">
            பெயர் | Name <span className="text-rose-600">*</span>
          </label>
          <input id="contact-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="உங்கள் பெயர் / Your Full Name" className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#6b1426]/30 transition-all ${errors.name ? "border-rose-400 bg-rose-50/20" : "border-stone-300 bg-stone-50/30"}`} />
          {errors.name && <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-stone-700 mb-1">
            தொலைபேசி எண் | Phone Number (with Country Code) <span className="text-rose-600">*</span>
          </label>
          <input id="contact-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 94873 06953 / +1 ..." className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#6b1426]/30 transition-all ${errors.phone ? "border-rose-400 bg-rose-50/20" : "border-stone-300 bg-stone-50/30"}`} />
          {errors.phone && <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>}
        </div>

        {/* Service Dropdown */}
        <div>
          <label htmlFor="contact-service" className="block text-xs font-semibold text-stone-700 mb-1">
            தேவையான சேவை | Required Service
          </label>
          <select id="contact-service" value={service} onChange={e => setService(e.target.value)} className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-stone-50/30 text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#6b1426]/30 transition-all">
            {serviceOptions.map(opt => <option key={opt} value={opt}>
                {opt}
              </option>)}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700 mb-1">
            செய்தி | Message (பிறந்த தேதி, நேரம், ஊர் போன்ற விவரங்கள்) <span className="text-rose-600">*</span>
          </label>
          <textarea id="contact-message" rows={4} value={message} onChange={e => setMessage(e.target.value)} placeholder="உங்கள் பிறந்த தேதி, நேரம், பிறந்த ஊர் மற்றும் ஆலோசிக்க விரும்பும் விவரங்களை இங்கே குறிப்பிடவும்..." className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-[#6b1426]/30 transition-all resize-none ${errors.message ? "border-rose-400 bg-rose-50/20" : "border-stone-300 bg-stone-50/30"}`}></textarea>
          {errors.message && <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-3.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer">
          <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
          <span>WhatsApp மூலம் அனுப்பவும் | Send via WhatsApp</span>
        </button>

        <p className="text-[11px] text-stone-500 text-center mt-2 leading-normal">
          இந்தப் படிவத்தை அனுப்பியவுடன் உங்கள் தகவல்களுடன் கூடிய வாட்ஸ்அப் செய்தி அதிகாரப்பூர்வ எண்ணிற்கு (+91 {BUSINESS_CONFIG.phoneClean}) நேரடியாக தயார் செய்யப்படும்.
        </p>
      </form>
    </div>;
};