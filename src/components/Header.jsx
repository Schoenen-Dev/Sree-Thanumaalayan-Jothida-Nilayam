import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MessageCircle, Menu, X, ChevronDown, Sparkles, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../data/config";
import { servicesData } from "../data/services";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services", hasDropdown: true },
    { label: "Tamil Astrology", to: "/tamil-astrology" },
    { label: "Tamils Abroad", to: "/astrology-for-tamils-abroad" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" }
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcfaf7]/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm">
      {/* Top Bar for Contact & Location */}
      <div className="bg-[#420a16] text-[#fbf5eb] text-xs py-1.5 px-4 hidden sm:block border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-200/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span> Ethamoly, Kanyakumari</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${BUSINESS_CONFIG.phone}`} className="flex items-center gap-1 text-[#fbf5eb] hover:text-amber-300 transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
            <a href={BUSINESS_CONFIG.whatsappBaseUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#fbf5eb] hover:text-emerald-300 transition-colors">
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 py-2.5 flex items-center gap-6">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-2.5 group min-w-0 shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#6b1426] to-[#3a0914] flex items-center justify-center text-amber-300 shadow-sm border border-amber-400/30 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="block font-bold text-sm sm:text-base text-[#540d1c] font-serif leading-tight truncate">
              {BUSINESS_CONFIG.englishName}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center justify-center gap-1 flex-1">
          {navLinks.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.to}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                      isActive(item.to)
                        ? "text-[#6b1426] bg-amber-500/10 font-semibold"
                        : "text-stone-700 hover:text-[#6b1426] hover:bg-stone-100/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-stone-200/80 py-2 z-50">
                      <div className="px-3 py-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                        All Services
                      </div>
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-xs font-semibold text-[#6b1426] hover:bg-amber-50"
                      >
                        All Services Overview →
                      </Link>
                      <div className="divide-y divide-stone-100">
                        {servicesData.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="block px-4 py-2 text-xs text-stone-700 hover:bg-amber-50/70 hover:text-[#6b1426] transition-colors"
                          >
                            <div className="font-medium text-stone-900">{s.englishTitle}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  isActive(item.to)
                    ? "text-[#6b1426] bg-amber-500/10 font-semibold"
                    : "text-stone-700 hover:text-[#6b1426] hover:bg-stone-100/60"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors border border-stone-300/80 shadow-2xs"
            aria-label="Call Sree Thanumaalayan Jothida Nilayam"
          >
            <Phone className="w-3.5 h-3.5 text-[#6b1426]" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto xl:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md text-[#540d1c] bg-amber-500/10 hover:bg-amber-500/20 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wide">Menu</span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fcfaf7] border-t border-stone-200 px-4 sm:px-6 py-4 space-y-2 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-200">
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-md bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#6b1426]" />
              <span>Call: {BUSINESS_CONFIG.phoneClean}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-md bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="py-2 space-y-1">
            {navLinks.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive(item.to)
                      ? "text-[#6b1426] bg-amber-500/10 font-semibold"
                      : "text-stone-800 hover:bg-stone-100"
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </Link>

                {item.hasDropdown && (
                  <div className="ml-4 pl-2 border-l border-stone-200 mt-1 space-y-1">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="block px-2 py-1.5 text-xs text-stone-600 hover:text-[#6b1426]"
                      >
                        {s.englishTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 text-center space-y-1">
            <p className="font-semibold text-stone-800">
              {BUSINESS_CONFIG.address.locality}, {BUSINESS_CONFIG.address.district},{" "}
              {BUSINESS_CONFIG.address.state}
            </p>
            <p className="text-[11px] text-stone-500">In-person or Phone / WhatsApp Consultation</p>
          </div>
        </div>
      )}
    </header>
  );
};