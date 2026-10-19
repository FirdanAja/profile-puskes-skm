import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { UsersIcon, HeartPulseIcon, StethoscopeIcon, PillIcon, ArrowRightIcon } from '../common/Icons';
import { puskesmasInfo } from '../../data/puskesmasData';

export default function FlowSection() {
  const steps = [
    {
      num: "01",
      title: "Kedatangan & Loket Pendaftaran",
      desc: "Pasien hadir di loket pendaftaran Puskesmas dengan membawa KTP/KK dan kartu BPJS Kesehatan yang masih aktif.",
      icon: <UsersIcon className="w-6 h-6 text-teal-600" />,
      tag: "Tertib & Mudah"
    },
    {
      num: "02",
      title: "Pemeriksaan Vital Awal",
      desc: "Perawat melakukan penimbangan berat badan, ukur tinggi, tensi darah, suhu tubuh, dan identifikasi keluhan awal.",
      icon: <HeartPulseIcon className="w-6 h-6 text-emerald-600" />,
      tag: "Skrining Pasien"
    },
    {
      num: "03",
      title: "Konsultasi Dokter Poli",
      desc: "Pemeriksaan medis mendalam oleh dokter atau bidan sesuai poli tujuan, penegakan diagnosis & rencana terapi.",
      icon: <StethoscopeIcon className="w-6 h-6 text-blue-600" />,
      tag: "Penanganan Ahli"
    },
    {
      num: "04",
      title: "Apotek / Laboratorium",
      desc: "Pengambilan obat resep gratis untuk peserta BPJS di loket Farmasi, atau uji sampel darah/urin di Laboratorium jika diperlukan.",
      icon: <PillIcon className="w-6 h-6 text-purple-600" />,
      tag: "Tuntas & Lengkap"
    }
  ];

  return (
    <section id="alur-pelayanan" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-20 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            Alur Berobat Pasien
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Alur Pelayanan Pasien yang Tertib & Transparan
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-300">
            Panduan 4 tahapan alur berobat di Puskesmas Sukamulya agar kunjungan Anda nyaman, tepat waktu, dan terarah.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-teal-400 hover:bg-slate-800 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-600 group-hover:text-teal-400 transition-colors">
                    {step.num}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  {step.tag}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-teal-500/60">
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Information Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-800 border border-teal-600/40 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
          <div className="text-center md:text-left space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-300"></span>
              Informasi Pendaftaran Pasien
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">Pendaftaran Berobat Dilayani di Loket Puskesmas & Mobile JKN BPJS</h4>
            <p className="text-xs sm:text-sm text-teal-100 max-w-2xl leading-relaxed">
              Pendaftaran pasien dilaksanakan langsung di loket faskes maupun lewat aplikasi resmi Mobile JKN. Pastikan membawa berkas identitas KTP dan kartu BPJS aktif.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="#kontak"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Lihat Kontak & Lokasi
            </a>
            <a
              href={puskesmasInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-teal-900/60 hover:bg-teal-900 text-white border border-teal-400/40 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Tanya Petugas WA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
