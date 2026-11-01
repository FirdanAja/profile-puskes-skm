import React from 'react';
import { puskesmasInfo } from '../../data/puskesmasData';
import Reveal from '../common/Reveal';
import useCountUp from '../../hooks/useCountUp';

function parseTarget(value) {
  const clean = value.replace(/[^0-9.]/g, '');
  return parseFloat(clean) || 0;
}
function getSuffix(value) {
  return value.replace(/[0-9.,]/g, '');
}
function formatNumber(num, original) {
  if (original.includes('.') && !original.includes('%')) return num.toLocaleString('id-ID');
  if (original.includes('%')) return num % 1 !== 0 ? num.toFixed(1) : num.toString();
  return num.toString();
}

function StatCard({ stat }) {
  const target = parseTarget(stat.value);
  const suffix = getSuffix(stat.value);
  const [ref, count] = useCountUp(target, 2000);
  return (
    <div ref={ref} className="relative overflow-hidden p-10 border border-emerald-600/30" style={{ background: 'rgba(5, 150, 105, 0.08)' }}>
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-emerald-600/10" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-emerald-600/10" />
      <div className="relative z-10">
        <div className="text-5xl font-black text-emerald-700 leading-none mb-3">{formatNumber(count, stat.value)}{suffix}</div>
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

const misiItems = [
  { num: "01", title: "Percepatan Pelayanan Kesehatan", desc: "yang Berintergrasi dan Profesional." },
  { num: "02", title: "Membangun Daya Kreasi", desc: "Inovasi, dan Produktivitas pemberdayaan (Empowering)." },
  { num: "03", title: "Penerapan Nilai Agamis", desc: "dalam Kehidupan Berbudaya dan Masyarakat." },
];

export default function AboutSection() {
  return (
    <section id="profil" className="bg-white py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-20">

        {/* ── Top Header — center ── */}
        <Reveal dir="up">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-3">Arah Kebijakan Institusi</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Visi, Misi & Tata Nilai Organisasi</h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Prinsip fundamental yang membimbing seluruh tenaga medis dan staf dalam mewujudkan pelayanan kesehatan bermartabat.
            </p>
          </div>
        </Reveal>

        {/* ── 2 Kolom: Visi kiri | Misi kanan ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Kiri — Visi */}
          <Reveal dir="left">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-6">
                
                <p className="text-md font-bold uppercase tracking-widest text-emerald-600">Visi Puskesmas</p>
              </div>

              <blockquote className="text-xl sm:text-2xl font-black text-gray-900 leading-snug mb-6 border-l-4 border-emerald-500 pl-5">
                "{puskesmasInfo.vision}"
              </blockquote>

              <p className="text-sm text-gray-600 leading-relaxed mt-auto">
                Menjadi acuan jangka panjang seluruh program pembangunan kesehatan tingkat pertama di wilayah Sukamulya.
              </p>
            </div>
          </Reveal>

          {/* Kanan — Misi grid */}
          <Reveal dir="right" delay={150}>
            <div>
              <div className="mb-6">
                <p className="text-md font-bold uppercase tracking-widest text-emerald-600 mb-1">Misi Utama</p>
                <h3 className="text-lg font-black text-gray-900">Empat Pilar Pelaksanaan Misi</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {misiItems.map((m) => (
                  <div key={m.num}>
                    <p className="text-xs font-bold text-emerald-600 mb-1">{m.num}. {m.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gray-100 mb-20" />

        {/* ── Tata Nilai ASRI ── */}
        <Reveal dir="up">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-1">Budaya Kerja Kami</p>
            <h3 className="text-lg font-black text-gray-900">Tata Nilai Institusi <span className="text-emerald-600">"A-S-R-I"</span></h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-gray-100">
          {tataValues.map((v, i) => (
            <Reveal key={v.letter} dir="up" delay={i * 100}>
              <div className="p-8 text-center border-r border-gray-100 last:border-r-0 hover:bg-emerald-50/50 transition-colors duration-200">
                <div className="text-5xl font-black text-emerald-600 mb-3">{v.letter}</div>
                <div className="text-sm font-black text-gray-900 mb-3">{v.label}</div>
                <div className="text-xs text-gray-700 leading-relaxed">{v.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
