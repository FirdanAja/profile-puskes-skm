import React from 'react';
import { puskesmasInfo } from '../../data/puskesmasData';
import Reveal from '../common/Reveal';
import useCountUp from '../../hooks/useCountUp';

// Parse angka dari string seperti "48.500+", "98.7%", "36+"
function parseTarget(value) {
  const clean = value.replace(/[^0-9.]/g, '');
  return parseFloat(clean) || 0;
}

// Ambil suffix: "+", "%", dll
function getSuffix(value) {
  return value.replace(/[0-9.,]/g, '');
}

// Format angka dengan titik ribuan
function formatNumber(num, original) {
  if (original.includes('.') && !original.includes('%')) {
    // angka ribuan pakai titik: 48.500
    return num.toLocaleString('id-ID');
  }
  if (original.includes('%')) {
    // desimal: 98.7
    return num % 1 !== 0 ? num.toFixed(1) : num.toString();
  }
  return num.toString();
}

function StatCard({ stat }) {
  const target = parseTarget(stat.value);
  const suffix = getSuffix(stat.value);
  const [ref, count] = useCountUp(target, 2000);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden p-10 border border-emerald-400/30"
      style={{ background: 'rgba(5, 150, 105, 0.08)' }}
    >
      {/* decorative circle */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-emerald-400/10" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-emerald-400/10" />

      <div className="relative z-10">
        <div className="text-5xl font-black text-emerald-700 leading-none mb-3">
          {formatNumber(count, stat.value)}{suffix}
        </div>
        <div className="text-base font-bold text-gray-800 mb-1">{stat.label}</div>
        <div className="text-sm text-gray-500 leading-snug">{stat.description}</div>
      </div>
    </div>
  );
}

const tataValues = [
  { letter: "A", label: "Amanah", desc: "Seluruh pegawai Puskesmas Sukamulya, bertanggungjawab dalam menjalankan tugas, sesuai dengan tugas pokok dan fungsi masing-masing" },
  { letter: "S", label: "Setia", desc: "Seluruh pegawai Puskesmas Sukamulya, selalu memberi dukungan, dan menunjukn kepatuhan terhadap peraturan yang berlaku" },
  { letter: "R", label: "Ramah", desc: "Puskesmas Sukamulya melayani dengan sepenuh hati, ramah tamah dengan senyum, sapa dan salam" },
  { letter: "I", label: "Inovatif", desc: "Puskesmas Sukamulya selalu inginkan ada pembaharuan, atau perbaikan menuju perbaikan kinerja ke arah yang lebih baik" },
];

export default function AboutSection() {
  return (
    <section id="profil" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-20">

        {/* Header */}
        <Reveal dir="up">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Tentang Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-5">
              Puskesmas Sukamulya<br />
              <span className="text-emerald-600">untuk Masyarakat Sehat</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              UPTD Puskesmas Sukamulya adalah fasilitas pelayanan kesehatan tingkat pertama yang hadir untuk memberikan layanan bermutu, merata, dan berkesinambungan bagi seluruh masyarakat Kecamatan Sukamulya, Kabupaten Kuningan.
            </p>
          </div>
        </Reveal>

        {/* 2 Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

          {/* Card Visi & Misi */}
          <Reveal dir="left">
            <div className="bg-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col gap-8 h-full">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <p className="text-base font-black uppercase tracking-widest text-white/70 mb-3">Visi</p>
                <p className="text-sm leading-relaxed text-white/90 italic">
                  "{puskesmasInfo.vision}"
                </p>
              </div>

              <div className="relative z-10 h-px bg-white/20" />

              <div className="relative z-10">
                <p className="text-base font-black uppercase tracking-widest text-white/70 mb-4">Misi</p>
                <ul className="space-y-3">
                  {puskesmasInfo.mission.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/20 text-white font-black flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-white/85 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card Tata Nilai */}
          <Reveal dir="right" delay={200}>
            <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full">
              <p className="text-base font-black uppercase tracking-widest text-white/70 mb-6">Tata Nilai</p>
              <p className="text-base font-black tracking-widest text-white/100 mb-1">A-S-R-I</p>
              <ul className="space-y-4 flex-1">
                {tataValues.map((v) => (
                  <li key={v.label} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {v.letter}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">{v.label}</div>
                      <div className="text-xs text-white/40 leading-snug mt-0.5">{v.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>

        {/* Stats */}
        <Reveal dir="up" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {puskesmasInfo.stats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
