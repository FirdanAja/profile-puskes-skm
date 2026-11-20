import React, { useState } from 'react';
import { standarPelayananData } from '../../data/standarPelayananData';

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const warnaHeaderMap = {
  emerald: "bg-emerald-600",
  pink: "bg-pink-600",
  blue: "bg-blue-600",
  amber: "bg-amber-600",
  purple: "bg-purple-600"
};

function LayananItem({ layanan }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <h4 className="font-bold text-sm text-gray-900 mb-3">{layanan.nama}</h4>
      <p className="text-xs text-gray-600 leading-relaxed">{layanan.uraian}</p>
    </div>
  );
}

function KlasterCard({ klaster, isExpanded, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
      {/* Header */}
      <div className={`${warnaHeaderMap[klaster.warna]} text-white p-5`}>
        <button
          onClick={onToggle}
          className="w-full text-left flex items-start justify-between gap-3"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{klaster.icon}</span>
              <h3 className="font-bold text-lg">{klaster.nama}</h3>
            </div>
            <p className="text-sm opacity-90">{klaster.deskripsi}</p>
          </div>
          <ChevronDownIcon className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="p-5 space-y-4">
          {klaster.layanan.map((layanan, idx) => (
            <LayananItem key={idx} layanan={layanan} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function StandarPelayananSection() {
  const [expandedKlaster, setExpandedKlaster] = useState(1);

  return (
    <section id="standar-pelayanan" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-5">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            Standar Mutu
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Standar Pelayanan</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Standar pelayanan kesehatan di Puskesmas Sukamulya berdasarkan klaster dan lintas klaster
          </p>
        </div>

        {/* Klaster Cards */}
        <div className="space-y-6 mb-12">
          {standarPelayananData.map((klaster) => (
            <KlasterCard
              key={klaster.id}
              klaster={klaster}
              isExpanded={expandedKlaster === klaster.id}
              onToggle={() => setExpandedKlaster(expandedKlaster === klaster.id ? null : klaster.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
