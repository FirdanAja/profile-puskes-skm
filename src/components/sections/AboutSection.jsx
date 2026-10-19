import React, { useState } from 'react';
import { CheckCircleIcon, ArrowRightIcon } from '../common/Icons';
import { puskesmasInfo } from '../../data/puskesmasData';

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const StarIcon2 = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const tabs = ['Visi & Misi', 'Tata Nilai'];

const tataValues = [
  { label: "Profesional", desc: "Tenaga medis tersertifikasi dengan standar prosedur baku" },
  { label: "Humanis", desc: "Pelayanan dengan hati, empati, dan kepedulian tulus" },
  { label: "Integritas", desc: "Tata kelola transparan, jujur, dan bertanggung jawab" },
  { label: "Inovatif", desc: "Integrasi teknologi digital dalam layanan kesehatan" },
  { label: "Kolaboratif", desc: "Sinergi antar unit untuk hasil pelayanan terbaik" },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="profil" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Mengenal Puskesmas<br />
              <span className="text-emerald-600">Sukamulya</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md lg:text-right">
            Fasilitas pelayanan kesehatan tingkat pertama yang berkomitmen memberikan layanan bermutu, merata, dan berkesinambungan untuk masyarakat Sukamulya.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Kiri — Foto + Stats */}
          <div className="space-y-5">
            {/* Foto */}
            <div className="relative rounded-3xl overflow-hidden h-80 group">
              <img
                src="/bg-depan.jpeg"
                alt="Puskesmas Sukamulya"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Badge akreditasi */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-3 py-2">
                <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="text-white text-[10px] font-semibold leading-tight">UPTD Puskesmas</div>
                  <div className="text-emerald-300 text-[10px] font-bold leading-tight">Sukamulya</div>
                </div>
              </div>

         

              {/* Bottom info */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm">Jl. Raya Sutan Shahrir No. 597</p>
                <p className="text-white/70 text-xs mt-0.5">Kec. Cigugur, Kab. Kuningan, Jawa Barat</p>
              </div>
            </div>

            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {puskesmasInfo.stats.map((s) => (
                <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                  <div className="text-2xl font-black text-emerald-600 leading-none">{s.value}</div>
                  <div className="text-xs font-semibold text-gray-700 mt-1">{s.label}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5 leading-snug">{s.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan — Tab Visi/Misi & Tata Nilai */}
          <div className="space-y-5">

            {/* Tab switcher */}
            <div className="flex bg-emerald-600 rounded-2xl p-1 gap-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-white text-emerald-600 shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab: Visi & Misi */}
            {activeTab === 0 && (
              <div className="space-y-4">
                {/* Visi */}
                <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-6 text-white overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                        <EyeIcon />
                      </div>
                      <span className="font-black text-base">Visi</span>
                    </div>
                    <p className="text-sm leading-relaxed text-emerald-50 italic">
                      "{puskesmasInfo.vision}"
                    </p>
                  </div>
                </div>

                {/* Misi */}
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <TargetIcon />
                    </div>
                    <span className="font-black text-base text-gray-900">Misi</span>
                  </div>
                  <ul className="space-y-3">
                    {puskesmasInfo.mission.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center shrink-0 text-[11px] mt-0.5">
                          {idx + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab: Tata Nilai */}
            {activeTab === 1 && (
              <div className="space-y-3">
                {tataValues.map((v, i) => (
                  <div
                    key={v.label}
                    className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white font-black text-sm flex items-center justify-center shrink-0 transition-all duration-200">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{v.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <a
              href="#layanan"
              className="flex items-center justify-between w-full px-5 py-4 bg-gray-900 hover:bg-emerald-600 text-white rounded-2xl font-bold text-sm transition-all duration-300 group"
            >
              <span>Lihat Semua Layanan Kami</span>
              <span className="w-8 h-8 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all">
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
