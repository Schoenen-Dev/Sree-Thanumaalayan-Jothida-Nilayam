import React from "react";
import { Link } from "react-router-dom";
import { Compass, Home } from "lucide-react";
import { SEO } from "../components/SEO";
import { BUSINESS_CONFIG } from "../data/config";
export const NotFound = () => {
  return <>
      <SEO title="404 - பக்கம் கிடைக்கவில்லை | Page Not Found | Sree Thanumaalayan Jothida Nilayam" description="மன்னிக்கவும், நீங்கள் தேடிய பக்கம் கிடைக்கவில்லை. முகப்புப் பக்கத்திற்கு சென்று மற்ற ஜோதிட சேவைகளைப் பார்வையிடலாம்." canonicalPath="/404" />

      <div className="py-20 px-4 bg-[#fdfbf7] flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md mx-auto text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200/90 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-[#6b1426] flex items-center justify-center mx-auto">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <span className="text-4xl font-bold font-serif text-[#6b1426] block">
              404
            </span>
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              பக்கம் கிடைக்கவில்லை | Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              மன்னிக்கவும், நீங்கள் தேடிய பக்கம் மாற்றப்பட்டிருக்கலாம் அல்லது கிடைக்கவில்லை.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link to="/" className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#6b1426] hover:bg-[#4a0d1a] text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs">
              <Home className="w-4 h-4" />
              <span>Go to Home | முகப்பு பக்கம் செல்ல</span>
            </Link>

            <Link to="/services" className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs transition-colors">
              <span>ஜோதிட சேவைகள் பார்க்க (View Services)</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-stone-100 text-xs text-stone-500">
            உதவிக்கு:{" "}
            <a href={`tel:${BUSINESS_CONFIG.phone}`} className="text-[#6b1426] font-bold">
              {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </>;
};