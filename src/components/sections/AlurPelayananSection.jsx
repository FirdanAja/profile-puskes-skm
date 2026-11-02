import React, { useState } from 'react';
import { CheckCircleIcon } from '../common/Icons';
import { alurPelayananData, alurPelayananTips } from '../../data/alurPelayananData';

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

function AlurCard({ step, isLast, isExpanded, onToggle }) {
  return (
    <div className="relative">
      {/* Vertical line connector */}
      {!isLast && (
        <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-emerald-400 to-emerald-200 hidden sm:block"></div>
      )}

      <div className="flex gap-4 sm:gap-6">
        {/* Circle number */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
            {step.icon}
          </div>
        </div>

        {/* Card content */}
        <div className="flex-1 pb-8">
          <button
            onClick={onToggle}
            className="w-full text-left bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all p-4 sm:p-5 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                  {step.nama}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {step.deskripsi}
                </p>
              </div>
              <ChevronDownIcon className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </div>

            {/* Expanded content */}
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                {step.detail.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function TipsCard({ tip }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 sm:p-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-start justify-between gap-3 mb-4"
      >
        <h3 className="font-bold text-base sm:text-lg text-gray-900">
          {tip.title}
        </h3>
        <ChevronDownIcon className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <ul className="space-y-2">
          {tip.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
              <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AlurPelayananSection() {
  const [expandedStep, setExpandedStep] = useState(null);

  return (
    <section id="alur-pelayanan" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-5">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
            Panduan Pelayanan
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Alur Pelayanan</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Tahapan pelayanan kesehatan dari pendaftaran hingga follow-up di Puskesmas Sukamulya
          </p>
        </div>

        {/* Alur Steps */}
        <div className="mb-12">
          <div className="space-y-0">
            {alurPelayananData.map((step, idx) => (
              <AlurCard
                key={step.id}
                step={step}
                isLast={idx === alurPelayananData.length - 1}
                isExpanded={expandedStep === step.id}
                onToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
              />
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 pb-3 border-b-2 border-emerald-200 inline-block">
            Informasi Penting
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {alurPelayananTips.map((tip, idx) => (
              <TipsCard key={idx} tip={tip} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200 text-center">
          <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
            Pertanyaan Lebih Lanjut?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            Hubungi kami melalui telepon atau kunjungi langsung puskesmas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+622711234567"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors"
            >
              📞 Hubungi Kami
            </a>
            <a
              href="#kontak"
              className="px-6 py-2.5 bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold text-xs sm:text-sm rounded-lg transition-colors"
            >
              📍 Lokasi Puskesmas
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
