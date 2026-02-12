"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-surface rounded-lg border border-surface-light/30 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-surface-light/20 transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
