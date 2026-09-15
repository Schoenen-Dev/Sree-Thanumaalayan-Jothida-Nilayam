import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { ScrollToTop } from "./components/ScrollToTop";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetailPage } from "./pages/ServiceDetail";
import { TamilAstrology } from "./pages/TamilAstrology";
import { TamilsAbroad } from "./pages/TamilsAbroad";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
export default function App() {
  return <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#fcfaf7] text-stone-800 antialiased selection:bg-[#6b1426] selection:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* About */}
              <Route path="/about" element={<About />} />

              {/* Services Overview */}
              <Route path="/services" element={<Services />} />

              {/* Individual Service Pages (Explicit routes for strict SEO matching) */}
              <Route path="/services/horoscope-reading" element={<ServiceDetailPage forcedSlug="horoscope-reading" />} />
              <Route path="/services/marriage-matching" element={<ServiceDetailPage forcedSlug="marriage-matching" />} />
              <Route path="/services/marriage-obstacles" element={<ServiceDetailPage forcedSlug="marriage-obstacles" />} />
              <Route path="/services/career-business" element={<ServiceDetailPage forcedSlug="career-business" />} />
              <Route path="/services/foreign-travel" element={<ServiceDetailPage forcedSlug="foreign-travel" />} />
              <Route path="/services/family-astrology" element={<ServiceDetailPage forcedSlug="family-astrology" />} />
              <Route path="/services/dasha-bhukti" element={<ServiceDetailPage forcedSlug="dasha-bhukti" />} />
              <Route path="/services/astrological-remedies" element={<ServiceDetailPage forcedSlug="astrological-remedies" />} />

              {/* Dynamic slug route for services */}
              <Route path="/services/:slug" element={<ServiceDetailPage />} />

              {/* Dedicated Topical Pages */}
              <Route path="/tamil-astrology" element={<TamilAstrology />} />
              <Route path="/astrology-for-tamils-abroad" element={<TamilsAbroad />} />

              {/* FAQ */}
              <Route path="/faq" element={<FAQ />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />

              {/* 404 Route */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloatingButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>;
}