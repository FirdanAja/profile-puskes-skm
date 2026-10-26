import React from 'react';
import { CheckCircleIcon } from '../common/Icons';
import { tataKelolaKlasterData } from '../../data/tataKelolaKlasterData';

const warnaHeaderMap = {
  emerald: "bg-emerald-600",
  pink: "bg-pink-600",
  blue: "bg-blue-600",
  amber: "bg-amber-600",
  purple: "bg-purple-600"
};

const warnaBadgeMap = {
  emerald: "bg-emerald-100 text-emerald-800",
  pink: "bg-pink-100 text-pink-800",
  blue: "bg-blue-100 text-blue-800",
  amber: "bg-amber-100 text-amber-800",
  purple: "bg-purple-100 text-purple-800"
};

function AspekTataKelolaItem({ aspek }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0 font-bold text-sm text-gray-700">
          {aspek.no}
        </div>
        <h3 className="font-bold text-sm sm:text-base text-gray-900 pt-0.5">{aspek.aspek}</h3>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed ml-11">
        {aspek.uraian}
      </p>
    </div>
  );
}

export default function TataKelolaKlasterSection({ klasterId }) {
  const klasterData = tataKelolaKlasterData[klasterId];

  if (!klasterData) {
    return <div className="text-center py-12">Klaster tidak ditemukan</div>;
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className={`${warnaHeaderMap[klasterData.warna]} text-white rounded-2xl p-8 sm:p-10 mb-12 shadow-lg`}>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{klasterData.icon}</span>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-4xl font-black leading-tight mb-2">{klasterData.nama}</h1>
              <p className="text-sm sm:text-base opacity-95">{klasterData.deskripsi}</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="text-xs sm:text-sm opacity-90">
              <span className="font-semibold">Dasar Hukum:</span>
              <p className="mt-1 leading-relaxed">{klasterData.dasarHukum}</p>
            </div>
          </div>
        </div>

        {/* Pendahuluan */}
        <div className="mb-12 p-6 sm:p-8 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {klasterData.pendahuluan}
          </p>
        </div>

        {/* Content */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 pb-4 border-b-2 border-gray-200">
            Aspek Tata Kelola
          </h2>
          <div className="space-y-5">
            {klasterData.aspekTataKelola.map((aspek, idx) => (
              <AspekTataKelolaItem key={idx} aspek={aspek} />
            ))}
          </div>
        </div>

        {/* Summary Box */}
        <div className={`${warnaBadgeMap[klasterData.warna]} rounded-2xl p-6 sm:p-8 border-2`}>
          <h3 className="font-bold text-base sm:text-lg mb-4">Ringkasan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className={`w-5 h-5 shrink-0 ${klasterData.warna === 'emerald' ? 'text-emerald-600' : klasterData.warna === 'pink' ? 'text-pink-600' : klasterData.warna === 'blue' ? 'text-blue-600' : klasterData.warna === 'amber' ? 'text-amber-600' : 'text-purple-600'}`} />
              <span className="font-semibold">{klasterData.aspekTataKelola.length} Aspek Tata Kelola</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className={`w-5 h-5 shrink-0 ${klasterData.warna === 'emerald' ? 'text-emerald-600' : klasterData.warna === 'pink' ? 'text-pink-600' : klasterData.warna === 'blue' ? 'text-blue-600' : klasterData.warna === 'amber' ? 'text-amber-600' : 'text-purple-600'}`} />
              <span className="font-semibold">Terintegrasi dalam Sistem Klaster</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
