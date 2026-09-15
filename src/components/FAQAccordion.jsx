import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
export const FAQAccordion = ({
  items,
  defaultOpenIndex = 0
}) => {
  const [openIndexes, setOpenIndexes] = useState([defaultOpenIndex]);
  const toggleIndex = index => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return <div className="space-y-3">
      {items.map((item, index) => {
      const isOpen = openIndexes.includes(index);
      return <div key={index} className={`border rounded-xl transition-all duration-200 overflow-hidden ${isOpen ? "bg-white border-amber-400/50 shadow-xs ring-1 ring-amber-400/20" : "bg-white/80 border-stone-200/90 hover:border-amber-300"}`}>
            <button onClick={() => toggleIndex(index)} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden" aria-expanded={isOpen}>
              <div className="flex items-start gap-3">
                <HelpCircle className={`w-4 h-4 mt-1 flex-shrink-0 ${isOpen ? "text-[#6b1426]" : "text-stone-400"}`} />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-stone-900 leading-snug">
                    {item.questionTamil}
                  </h3>
                  <p className="text-xs text-stone-500 font-normal mt-0.5">
                    {item.questionEnglish}
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#6b1426]" : ""}`} />
            </button>

            {isOpen && <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-700 border-t border-stone-100 bg-stone-50/40 space-y-2">
                <p className="leading-relaxed text-stone-800">
                  {item.answerTamil}
                </p>
                <p className="leading-relaxed text-stone-600 text-xs italic">
                  {item.answerEnglish}
                </p>
              </div>}
          </div>;
    })}
    </div>;
};