import React from 'react';
import { ArrowRightIcon } from '../common/Icons';
import { doctorsList } from '../../data/doctorsData';

const avatarColors = [
  "bg-emerald-100 text-emerald-700",
  "bg-blue-100 text-blue-700",
  "bg-rose-100 text-rose-700",
  "bg-purple-100 text-purple-700",
];

// Badge component for specialization
function SpecBadge({ label }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-100">
      {label}
    </span>
  );
}

// Person silhouette SVG
function PersonSVG({ colorClass = "text-emerald-600" }) {
  return (
    <svg className={`w-14 h-14 ${colorClass}`} viewBox="0 0 80 80" fill="currentColor">
      <circle cx="40" cy="22" r="16" />
      <ellipse cx="40" cy="68" rx="28" ry="20" />
    </svg>
  );
}

export default function DoctorsSchedule() {
  const displayDoctors = doctorsList.slice(0, 4);

  return (
    <section id="jadwal-dokter" className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
              Tim Kami
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Tenaga Kesehatan</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-lg">
              Didukung oleh tenaga medis dan non medis yang profesional dan berpengalaman di bidangnya.
            </p>
          </div>
          <a
            href="#jadwal-dokter"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs hover:bg-emerald-100 transition-colors whitespace-nowrap"
          >
            Lihat Semua Tenaga Kesehatan →
          </a>
        </div>

        {/* Doctors row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayDoctors.map((doc, idx) => (
            <div
              key={doc.id}
              className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Avatar area */}
              <div className={`${avatarColors[idx % avatarColors.length].split(' ')[0]} flex items-end justify-center pt-6 pb-0 min-h-[130px] relative`}>
                {/* Simple person silhouette */}
                <div className={`${avatarColors[idx % avatarColors.length]}`}>
                  <PersonSVG colorClass={avatarColors[idx % avatarColors.length].split(' ')[1]} />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-sm text-gray-900 leading-snug">{doc.name}</h3>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">{doc.role}</p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed flex-1">{doc.specialty}</p>

                <a
                  href="#jadwal-dokter"
                  className="mt-3 block w-full text-center px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  Detail
                </a>
              </div>
            </div>
          ))}

          {/* "Bersama tim kami..." card */}
          <div className="card-hover bg-emerald-600 rounded-2xl p-5 flex flex-col justify-between text-white">
            <div>
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {[0,1,2,3].map(i => (
                  <div key={i} className="bg-white/20 rounded-xl p-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white/80" viewBox="0 0 80 80" fill="currentColor">
                      <circle cx="40" cy="22" r="14" />
                      <ellipse cx="40" cy="65" rx="24" ry="18" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold leading-snug">
                Bersama tim kami, Anda mendapatkan pelayanan terbaik
              </p>
            </div>
            <a href="#jadwal-dokter" className="mt-4 text-[11px] font-bold text-emerald-200 hover:text-white transition-colors flex items-center gap-1">
              Lihat semua <ArrowRightIcon className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
