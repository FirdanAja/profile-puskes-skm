import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import OrgSection from '../components/sections/OrgSection';
import { puskesmasInfo } from '../data/puskesmasData';
import { PhoneIcon } from '../components/common/Icons';
import EmergencyModal from '../components/modals/EmergencyModal';
import { useState } from 'react';

export default function OrgPage() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <Navbar onOpenEmergency={() => setIsEmergencyModalOpen(true)} />

      {/* Page Header */}
      <div className="bg-emerald-700 pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-2">
            <a href="/" className="hover:text-white transition-colors">Beranda</a>
            {' / '}
            <span>Profil</span>
            {' / '}
            <span className="text-white">Struktur Organisasi</span>
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Struktur Organisasi</h1>
          <p className="text-emerald-200 text-sm mt-1">UPTD Puskesmas Sukamulya</p>
        </div>
      </div>

      <main className="flex-1">
        <OrgSection />
      </main>

      <Footer onOpenEmergency={() => setIsEmergencyModalOpen(true)} />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      <a
        href={puskesmasInfo.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl hover:scale-105 transition-all"
        title="Chat WhatsApp"
      >
        <PhoneIcon className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
