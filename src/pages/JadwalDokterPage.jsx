import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { doctorsList } from '../data/doctorsData';
import EmergencyModal from '../components/modals/EmergencyModal';
import Reveal from '../components/common/Reveal';
import { puskesmasInfo } from '../data/puskesmasData';

const avatarColors = [
  'bg-emerald-100 text-emerald-700',
  'bg-blue-100 text-blue-700',
  'bg-rose-100 text-rose-700',
  'bg-purple-100 text-purple-700',
  'bg-amber-100 text-amber-700',
  'bg-teal-100 text-teal-700',
];

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

export default function JadwalDokterPage({ onOpenEmergency }) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [filterDay, setFilterDay] = useState('Semua');

  const filtered = filterDay === 'Semua'
    ? doctorsList
    : doctorsList.filter((d) => d.days.includes(filterDay));

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Jadwal Dokter & Tenaga Medis"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Informasi', href: '#' },
          { label: 'Jadwal Dokter', href: '#' },
        ]}
        meta={[{ icon: <span>👨‍⚕️</span>, text: `${doctorsList.length} Tenaga Kesehatan` }]}
      />

      <main className="flex-1 py-14 bg-white">
        <div className="max-w-7xl mx-auto px-20">

          <Reveal dir="up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Tim Medis</p>
                <h2 className="text-2xl font-black text-gray-900">Jadwal Praktik</h2>
              </div>
              {/* Filter hari */}
              <div className="flex flex-wrap gap-2">
                {['Semua', ...days].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setFilterDay(d)}
                    className={`px-3 py-1.5 text-xs font-bold border transition-colors ${
                      filterDay === d
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((doc, i) => (
              <Reveal key={doc.id} dir="up" delay={(i % 3) * 100}>
                <div className="border border-gray-200 hover:border-emerald-300 transition-colors overflow-hidden">
                  {/* Avatar */}
                  <div className={`${avatarColors[i % avatarColors.length].split(' ')[0]} flex items-center justify-center py-8`}>
                    <div className={`w-20 h-20 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center`}>
                      <span className="text-3xl font-black">{doc.name.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 border-t border-gray-100">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-black text-gray-900 leading-snug">{doc.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 shrink-0 ${
                        doc.status === 'Praktik Hari Ini' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-600 font-semibold mb-1">{doc.role}</p>
                    <p className="text-xs text-gray-500 mb-4">{doc.specialty}</p>

                    <div className="space-y-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
                      <div className="flex gap-2">
                        <span className="font-bold text-gray-700 shrink-0">Hari:</span>
                        <span>{doc.days.join(', ')}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-gray-700 shrink-0">Jam:</span>
                        <span>{doc.hours}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-gray-700 shrink-0">SIP:</span>
                        <span>{doc.sip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal dir="up" delay={200}>
            <div className="mt-12 border border-gray-100 bg-gray-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black text-gray-900 mb-1">Jadwal dapat berubah sewaktu-waktu</p>
                <p className="text-xs text-gray-400">Konfirmasi jadwal terkini melalui WhatsApp atau telepon Puskesmas.</p>
              </div>
              <a href={puskesmasInfo.whatsappLink} target="_blank" rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-xs font-bold bg-emerald-600 text-white px-5 py-2.5 hover:bg-emerald-700 transition-colors">
                Konfirmasi Jadwal →
              </a>
            </div>
          </Reveal>

        </div>
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
      <EmergencyModal isOpen={isEmergencyOpen} onClose={() => setIsEmergencyOpen(false)} />
    </div>
  );
}
