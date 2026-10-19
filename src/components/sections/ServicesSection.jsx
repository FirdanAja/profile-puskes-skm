import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '../common/Icons';
import Reveal from '../common/Reveal';

// Icon components for each service
const WalkInIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const MotherChildIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <circle cx="9" cy="7" r="3" /><circle cx="17" cy="9" r="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-3a6 6 0 018.268-5.558M20 21v-2a4 4 0 00-3-3.87" />
  </svg>
);
const ImmunIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
const DentalIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4c-2.5 0-4 2-4 5 0 3.5 1.5 5.5 2 8 .5 2 1.5 3 3 3s1.5-2 2-4c.5-2 1-2 2-2s1.5 0 2 2c.5 2 .5 4 2 4s2.5-1 3-3c.5-2.5 2-4.5 2-8 0-3-1.5-5-4-5-2 0-3 1.5-4 1.5S9 4 7 4z" />
  </svg>
);
const LabIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v10l-4 6h14l-4-6V3M9 3h6M8 7h8" />
  </svg>
);
const PreventionIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const BPJSIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20M6 15h4M14 15h4" />
  </svg>
);
const HomeCareIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const services = [
  {
    id: 1,
    icon: <WalkInIcon />,
    title: "Rawat Jalan",
    desc: "Pemeriksaan dan pengobatan umum",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    id: 2,
    icon: <MotherChildIcon />,
    title: "Kesehatan Ibu & Anak",
    desc: "Pelayanan KIA, imunisasi, KB",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    id: 3,
    icon: <ImmunIcon />,
    title: "Imunisasi",
    desc: "Imunisasi dasar dan penyakit bermacam-macam",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    id: 4,
    icon: <DentalIcon />,
    title: "Pelayanan Gigi & Mulut",
    desc: "Menjaga kesehatan gigi dan Mulut Anda",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    id: 5,
    icon: <LabIcon />,
    title: "Laboratorium",
    desc: "Pemeriksaan dan pengujian laboratorium lengkap",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    id: 6,
    icon: <PreventionIcon />,
    title: "Pencegahan Penyakit",
    desc: "Penyuluhan dan skrining penyakit tidak menular",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    id: 7,
    icon: <BPJSIcon />,
    title: "Layanan BPJS",
    desc: "Melayani peserta BPJS, JKN, dll",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    id: 8,
    icon: <HomeCareIcon />,
    title: "Home Care",
    desc: "Pelayanan kesehatan ke rumah",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export default function ServicesSection({ initialSearch = "" }) {
  return (
    <section id="layanan" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: heading */}
          <Reveal dir="left" className="lg:col-span-3">
            <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              Layanan Kami
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
              Layanan Unggulan
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Berbagai layanan kesehatan tersedia untuk Anda dan keluarga, dengan dukungan tenaga medis yang berpengalaman.
            </p>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 hover:border-emerald-600 text-emerald-700 hover:text-white font-bold text-sm transition-all group"
            >
              Lihat Semua Layanan
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            </div>
          </Reveal>

          {/* Right: service cards grid */}
          <Reveal dir="right" delay={200} className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className={`card-hover group p-5 rounded-2xl bg-white border ${svc.border} hover:border-emerald-300 hover:shadow-lg cursor-pointer flex flex-col items-center text-center gap-3`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${svc.bg} ${svc.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
