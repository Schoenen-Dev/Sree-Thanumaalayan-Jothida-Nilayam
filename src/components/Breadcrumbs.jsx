import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
export const Breadcrumbs = ({
  items
}) => {
  return <nav aria-label="Breadcrumb" className="py-3 px-4 bg-[#f8f4ee] border-b border-stone-200/60 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex items-center flex-wrap gap-1.5 text-stone-600">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-[#6b1426] transition-colors font-medium">
          <Home className="w-3.5 h-3.5" />
          <span>முகப்பு</span>
          <span className="text-stone-400 font-normal">/ Home</span>
        </Link>

        {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return <React.Fragment key={item.url}>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
              {isLast ? <span className="text-[#6b1426] font-semibold truncate max-w-[240px] sm:max-w-none">
                  {item.nameTamil ? `${item.nameTamil} | ` : ""}{item.name}
                </span> : <Link to={item.url} className="hover:text-[#6b1426] transition-colors font-medium">
                  {item.nameTamil ? `${item.nameTamil} | ` : ""}{item.name}
                </Link>}
            </React.Fragment>;
      })}
      </div>
    </nav>;
};