import React from "react";
import { Link } from "react-router-dom";
import { Compass, HeartHandshake, Clock, Briefcase, Globe, Users, CalendarDays, Sparkles, ArrowRight } from "lucide-react";
import { serviceImageMap } from "../data/images";
const iconMap = {
  Compass,
  HeartHandshake,
  Clock,
  Briefcase,
  Globe,
  Users,
  CalendarDays,
  Sparkles
};
export const ServiceCard = ({
  service
}) => {
  const IconComponent = iconMap[service.icon] || Sparkles;
  const imageInfo = serviceImageMap[service.slug];
  return <div className="bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6 group hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-[#6b1426] to-amber-500 opacity-80"></div>

      <div>
        {/* Service Image Thumbnail */}
        {imageInfo && <div className="relative h-44 w-full overflow-hidden bg-stone-100">
            <img id={`service-card-img-${service.slug}`} src={imageInfo.image} alt={`${service.tamilTitle} - ${service.englishTitle}`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-stone-950 shadow-xs">
                {service.tamilTitle.split(" ")[0]}
              </span>
              <div className="w-8 h-8 rounded-full bg-stone-900/80 backdrop-blur-xs border border-amber-400/40 flex items-center justify-center text-amber-300">
                <IconComponent className="w-4 h-4" />
              </div>
            </div>
          </div>}

        <div className="p-5">
          {/* Titles */}
          <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#6b1426] transition-colors font-serif leading-snug">
            {service.tamilTitle}
          </h3>
          <p className="text-xs font-semibold text-amber-900/80 mb-2.5 tracking-wide">
            {service.englishTitle}
          </p>

          {/* Descriptions */}
          <p className="text-xs text-stone-600 line-clamp-2 mb-1.5 leading-relaxed">
            {service.shortDescriptionTamil}
          </p>
          <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
            {service.shortDescriptionEnglish}
          </p>
        </div>
      </div>

      {/* Button link */}
      <div className="px-5 pb-5 pt-2 border-t border-stone-100">
        <Link id={`service-card-link-${service.slug}`} to={`/services/${service.slug}`} className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#6b1426] group-hover:text-stone-950 transition-colors py-1">
          <span>மேலும் அறிய | View Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-amber-700" />
        </Link>
      </div>
    </div>;
};