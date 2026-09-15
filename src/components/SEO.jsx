import React from "react";
import { Helmet } from "react-helmet-async";
import { BUSINESS_CONFIG } from "../data/config";
export const SEO = ({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  keywords = [],
  ogImage = `${BUSINESS_CONFIG.domain}/og-image.jpg`
}) => {
  // Normalize canonical URL without trailing slash (except root)
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = cleanPath === "/" ? `${BUSINESS_CONFIG.domain}/` : `${BUSINESS_CONFIG.domain}${cleanPath}`;
  const defaultKeywords = ["Tamil astrologer", "Tamil astrology", "astrology consultation", "horoscope reading", "marriage horoscope matching", "career astrology", "Nagercoil astrologer", "Kanyakumari astrologer", "தமிழ் ஜோதிடம்", "ஜோதிட ஆலோசனை", "ஜாதகப் பலன்", "திருமணப் பொருத்தம்"];
  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords])).join(", ");
  return <Helmet>
      <html lang="ta" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={BUSINESS_CONFIG.englishName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ta_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>;
};