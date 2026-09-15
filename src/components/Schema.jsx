import React from "react";
import { Helmet } from "react-helmet-async";
import { BUSINESS_CONFIG } from "../data/config";
export const Schema = ({
  breadcrumbs,
  faqs
}) => {
  // Business / ProfessionalService Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BUSINESS_CONFIG.domain}/#business`,
    "name": BUSINESS_CONFIG.englishName,
    "alternateName": BUSINESS_CONFIG.tamilName,
    "description": "Traditional Tamil astrology consultation, horoscope reading, marriage matching, career, business, and overseas astrology guidance.",
    "url": BUSINESS_CONFIG.domain,
    "telephone": BUSINESS_CONFIG.phone,
    "image": `${BUSINESS_CONFIG.domain}/og-image.jpg`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.address.street,
      "addressLocality": BUSINESS_CONFIG.address.locality,
      "addressRegion": BUSINESS_CONFIG.address.state,
      "postalCode": BUSINESS_CONFIG.address.pincode,
      "addressCountry": "IN"
    },
    "areaServed": BUSINESS_CONFIG.serviceAreas.map(area => ({
      "@type": "AdministrativeArea",
      "name": area
    })),
    "knowsLanguage": ["Tamil", "English"],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    }]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_CONFIG.domain}/#website`,
    "name": BUSINESS_CONFIG.englishName,
    "alternateName": BUSINESS_CONFIG.tamilName,
    "url": BUSINESS_CONFIG.domain,
    "inLanguage": ["ta", "en"]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith("http") ? crumb.url : `${BUSINESS_CONFIG.domain}${crumb.url}`
    }))
  } : null;

  // FAQPage Schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": `${faq.questionTamil} | ${faq.questionEnglish}`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${faq.answerTamil} ${faq.answerEnglish}`
      }
    }))
  } : null;
  return <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {breadcrumbSchema && <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>}
      {faqSchema && <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>}
    </Helmet>;
};