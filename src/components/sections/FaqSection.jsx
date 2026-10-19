import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { faqList } from '../../data/faqData';
import { ChevronDownIcon } from '../common/Icons';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Pertanyaan Pasien"
          title="Tanya Jawab Seputar Pelayanan (FAQ)"
          subtitle="Jawaban ringkas dan jelas untuk pertanyaan yang paling sering ditanyakan oleh pasien dan keluarga."
        />

        <div className="space-y-3.5">
          {faqList.map((faq, idx) => (
            <div
              key={faq.id}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-colors hover:border-emerald-300"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base text-slate-800">
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${openIndex === idx ? 'rotate-180 bg-teal-50 text-teal-600' : ''}`}>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
