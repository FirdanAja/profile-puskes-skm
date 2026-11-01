import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { klasterList } from '../data/klasterData';
import { puskesmasInfo } from '../data/puskesmasData';
import EmergencyModal from '../components/modals/EmergencyModal';
import { useState } from 'react';
import Reveal from '../components/common/Reveal';

const colorMap = {
  emerald: { badge: 'bg-emerald-100 text-emerald-700', accent: 'border-l-4 border-emerald-500', dot: 'bg-emerald-500', header: 'bg-emerald-600' },
  pink:    { badge: 'bg-pink-100 text-pink-700',       accent: 'border-l-4 border-pink-500',    dot: 'bg-pink-500',    header: 'bg-pink-600' },
  blue:    { badge: 'bg-blue-100 text-blue-700',       accent: 'border-l-4 border-blue-500',    dot: 'bg-blue-500',    header: 'bg-blue-600' },
  amber:   { badge: 'bg-amber-100 text-amber-700',     accent: 'border-l-4 border-amber-500',   dot: 'bg-amber-500',   header: 'bg-amber-600' },
  violet:  { badge: 'bg-violet-100 text-violet-700',   accent: 'border-l-4 border-violet-500',  dot: 'bg-violet-500',  header: 'bg-violet-600' },
};

export default function KlasterPage({ klasterId, onOpenEmergency }) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const klaster = klasterList.find((k) => k.slug === klasterId) || klasterList[0];
  const others = klasterList.filter((k) => k.slug !== klaster.slug);
  const color = colorMap[klaster.warna] || colorMap.emerald;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title={klaster.nama}
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Layanan', href: '#layanan' },
          { label: 'Standar Pelayanan', href: '#' },
          { label: klaster.nama, href: '#' },
        ]}
        meta={[
          {
            icon: (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            ),
            text: `PJ: ${klaster.pj}`,
          },
        ]}
      />

      <main className="flex-1 py-14 bg-white">
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Konten Utama ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Deskripsi */}
              <Reveal dir="up">
                <div className={`p-6 ${color.accent} bg-gray-50`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tentang Klaster</p>
                  <p className="text-base text-gray-700 leading-relaxed">{klaster.deskripsi}</p>
                </div>
              </Reveal>

              {/* Layanan */}
              <div>
                <Reveal dir="up">
                  <h2 className="text-xl font-black text-gray-900 mb-6 pb-3 border-b border-gray-100">
                    Layanan dalam {klaster.nama}
                  </h2>
                </Reveal>

              <div className="space-y-0">
                  {klaster.layanan.map((item, i) => (
                    <Reveal key={item.nama} dir="up" delay={i * 100}>
                      <div className="flex gap-6">
                        {/* Nomor + garis */}
                        <div className="flex flex-col items-center shrink-0">
                          <div className={`w-10 h-10 rounded-full ${color.header} text-white font-black text-xs flex items-center justify-center z-10 border-4 border-white shadow`}>
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          {i < klaster.layanan.length - 1 && (
                            <div className="w-px flex-1 bg-gray-200 my-1" />
                          )}
                        </div>

                        {/* Konten */}
                        <div className="flex-1 border border-gray-200 hover:border-gray-300 transition-colors p-5 mb-6">
                          <h3 className="text-sm font-black text-gray-900 mb-1">{item.nama}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                          <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <span className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
                            <span>Penanggung jawab: <strong className="text-gray-600">{item.penanggung}</strong></span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Tombol kembali */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  ← Kembali ke Beranda
                </a>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-5">

                {/* Klaster lainnya */}
                <div>
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest pb-3 border-b-2 border-emerald-500 mb-4">
                    Klaster Lainnya
                  </h3>
                  <div className="border border-gray-200">
                    {others.map((k) => {
                      const c = colorMap[k.warna] || colorMap.emerald;
                      return (
                        <a
                          key={k.slug}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.hash = `#/klaster/${k.slug}`;
                          }}
                          className="group flex items-start gap-3 p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                        >
                          <span className={`w-2 h-2 rounded-full ${c.dot} shrink-0 mt-1.5`} />
                          <div>
                            <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-snug">
                              {k.nama}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-0.5">PJ: {k.pj}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Kontak */}
                <div className="border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Informasi Layanan</p>
                  <p className="text-sm font-black text-gray-900 mb-1">{puskesmasInfo.hours.weekdays}</p>
                  <p className="text-xs text-gray-400 mb-4">Jam Pelayanan (Senin–Jumat)</p>
                  <a
                    href={puskesmasInfo.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-600 text-white px-4 py-2.5 hover:bg-emerald-700 transition-colors w-full justify-center"
                  >
                    Hubungi via WhatsApp →
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
      <EmergencyModal isOpen={isEmergencyOpen} onClose={() => setIsEmergencyOpen(false)} />
    </div>
  );
}
