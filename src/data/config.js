export const BUSINESS_CONFIG = {
  tamilName: "ஸ்ரீ தாணுமாலயன் ஜோதிட நிலையம்",
  englishName: "Sree Thanumaalayan Jothida Nilayam",
  taglineTamil: "ஜோதிட ஆலோசனை | ஜாதகப் பலன் | திருமணப் பொருத்தம்",
  taglineEnglish: "Astrology Consultation | Horoscope Reading | Marriage Matching",
  phone: "+91 9487306953",
  phoneClean: "9487306953",
  whatsappNumber: "919487306953",
  whatsappBaseUrl: "https://wa.me/919487306953",
  domain: "https://sreethanumaalayanastrology.com/",
  address: {
    street: "7/44, Dharmapuram",
    locality: "Ethamoly",
    city: "Nagercoil / Ethamoly",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    pincode: "629501",
    country: "India",
    formatted: "7/44, Dharmapuram, Ethamoly – 629501, Tamil Nadu, India",
    formattedTamil: "7/44, தர்மபுரம், ஈத்தாமொழி – 629501, கன்னியாகுமரி மாவட்டம், தமிழ்நாடு, இந்தியா"
  },
  consultationFee: 1500,
  consultationFeeDisplay: "₹1,500",
  consultationFeeTamil: "ரூ. 1,500",
  socialLinks: {
    facebook: "https://www.facebook.com/people/%E0%AE%B8%E0%AF%8D%E0%AE%B0%E0%AF%80-%E0%AE%A4%E0%AE%BE%E0%AE%A3%E0%AF%81%E0%AE%AE%E0%AE%BE%E0%AE%B2%E0%AE%AF%E0%AE%A9%E0%AF%8D-%E0%AE%9C%E0%AF%8B%E0%AE%A4%E0%AE%BF%E0%AE%9F-%E0%AE%A8%E0%AE%BF%E0%AE%B2%E0%AF%88%E0%AE%AF%E0%AE%AE%E0%AF%8D/61593851537568/",
    instagram: "https://www.instagram.com/sreethanumaalayan_jothidam/",
    youtube: "",
    whatsapp: "https://wa.me/919487306953"
  },
  countriesServed: [{
    code: "SG",
    name: "Singapore",
    tamil: "சிங்கப்பூர்",
    timezone: "SGT (UTC+8)"
  }, {
    code: "CA",
    name: "Canada",
    tamil: "கனடா",
    timezone: "EST / CST / PST"
  }, {
    code: "MY",
    name: "Malaysia",
    tamil: "மலேசியா",
    timezone: "MYT (UTC+8)"
  }, {
    code: "AE",
    name: "UAE",
    tamil: "ஐக்கிய அரபு அமீரகம் (துபாய் / அபுதாபி)",
    timezone: "GST (UTC+4)"
  }, {
    code: "GB",
    name: "UK",
    tamil: "இங்கிலாந்து / லண்டன்",
    timezone: "GMT / BST"
  }, {
    code: "US",
    name: "USA",
    tamil: "அமெரிக்கா",
    timezone: "EST / CST / MST / PST"
  }, {
    code: "AU",
    name: "Australia",
    tamil: "ஆஸ்திரேலியா",
    timezone: "AEST / AWST"
  }, {
    code: "QA",
    name: "Qatar",
    tamil: "கத்தார் (தோஹா)",
    timezone: "AST (UTC+3)"
  }],
  serviceAreas: ["Ethamoly", "Nagercoil", "Kanyakumari", "Tamil Nadu", "India", "Singapore", "Canada", "Malaysia", "UAE", "UK", "USA", "Australia", "Qatar", "Europe"]
};
export function createWhatsAppUrl(params) {
  if (!params || !params.name && !params.service && !params.message) {
    return BUSINESS_CONFIG.whatsappBaseUrl;
  }
  const parts = [`வணக்கம் / Hello Sree Thanumaalayan Jothida Nilayam,`];
  if (params.name?.trim()) {
    parts.push(`Name / பெயர்: ${params.name.trim()}`);
  }
  if (params.phone?.trim()) {
    parts.push(`Phone / தொலைபேசி: ${params.phone.trim()}`);
  }
  if (params.service?.trim()) {
    parts.push(`Service / சேவை: ${params.service.trim()}`);
  }
  if (params.message?.trim()) {
    parts.push(`Message / செய்தி: ${params.message.trim()}`);
  }
  const text = parts.join("\n\n");
  return `${BUSINESS_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}