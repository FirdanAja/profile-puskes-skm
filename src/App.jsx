import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageHeader from './components/layout/PageHeader';

import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import OrgSection from './components/sections/OrgSection';
import TupoksiSection from './components/sections/TupoksiSection';
import PegawaiSection from './components/sections/PegawaiSection';
import AlurPelayananSection from './components/sections/AlurPelayananSection';
import WilayahKerjaSection from './components/sections/WilayahKerjaSection';
import StandarPelayananSection from './components/sections/StandarPelayananSection';
import NewsSection from './components/sections/NewsSection';
import ContactLocationSection from './components/sections/ContactLocationSection';
import EmergencyModal from './components/modals/EmergencyModal';
import { PhoneIcon } from './components/common/Icons';
import { puskesmasInfo } from './data/puskesmasData';

const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const UserIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

// Baca hash saat ini → tentukan page
function getPage() {
  const hash = window.location.hash;
  if (hash === '#/org') return 'org';
  if (hash === '#tupoksi') return 'tupoksi';
  if (hash === '#pegawai') return 'pegawai';
  if (hash === '#alur-pelayanan') return 'alur-pelayanan';
  if (hash === '#wilayah-kerja') return 'wilayah-kerja';
  if (hash === '#standar-pelayanan') return 'standar-pelayanan';
  return 'landing';
}

// ── Halaman Struktur Organisasi ────────────────────────────────────────────────
function OrgPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Struktur Organisasi dan Tata Kerja"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Profil', href: '#' },
          { label: 'Struktur Organisasi', href: '#/org' },
        ]}
        meta={[
          { icon: <CalendarIcon />, text: 'UPTD Puskesmas Sukamulya' },
          { icon: <UserIcon />, text: 'Puskesmas Sukamulya' },
        ]}
      />

      <main className="flex-1">
        <OrgSection />
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Halaman Tugas Pokok dan Fungsi ─────────────────────────────────────────────
function TupoksiPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Tugas Pokok dan Fungsi"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Profil', href: '#' },
          { label: 'Tugas Pokok dan Fungsi', href: '#tupoksi' },
        ]}
        meta={[
          { icon: <CalendarIcon />, text: 'UPTD Puskesmas Sukamulya' },
          { icon: <UserIcon />, text: 'Puskesmas Sukamulya' },
        ]}
      />

      <main className="flex-1">
        <TupoksiSection />
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Halaman Pegawai ────────────────────────────────────────────────────────────
function PegawaiPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Tim Pegawai"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Profil', href: '#' },
          { label: 'Pegawai', href: '#pegawai' },
        ]}
        meta={[
          { icon: <CalendarIcon />, text: 'UPTD Puskesmas Sukamulya' },
          { icon: <UserIcon />, text: 'Puskesmas Sukamulya' },
        ]}
      />

      <main className="flex-1">
        <PegawaiSection />
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Halaman Alur Pelayanan ─────────────────────────────────────────────────────
function AlurPelayananPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Alur Pelayanan"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Informasi', href: '#' },
          { label: 'Alur Pelayanan', href: '#alur-pelayanan' },
        ]}
        meta={[
          { icon: <CalendarIcon />, text: 'UPTD Puskesmas Sukamulya' },
          { icon: <UserIcon />, text: 'Puskesmas Sukamulya' },
        ]}
      />

      <main className="flex-1">
        <AlurPelayananSection />
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Halaman Wilayah Kerja ──────────────────────────────────────────────────────
function WilayahKerjaPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Wilayah Kerja"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Informasi', href: '#' },
          { label: 'Wilayah Kerja', href: '#wilayah-kerja' },
        ]}
        meta={[
          { icon: <CalendarIcon />, text: 'UPTD Puskesmas Sukamulya' },
          { icon: <UserIcon />, text: 'Puskesmas Sukamulya' },
        ]}
      />

      <main className="flex-1">
        <WilayahKerjaSection />
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Halaman Standar Pelayanan ──────────────────────────────────────────────────
function StandarPelayananPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Standar Pelayanan"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Layanan', href: '#' },
          { label: 'Standar Pelayanan', href: '#standar-pelayanan' },
        ]}
        meta={[
          { icon: <CalendarIcon />, text: 'UPTD Puskesmas Sukamulya' },
          { icon: <UserIcon />, text: 'Puskesmas Sukamulya' },
        ]}
      />

      <main className="flex-1">
        <StandarPelayananSection />
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Halaman Landing ────────────────────────────────────────────────────────────
function LandingPage({ onOpenEmergency }) {
  return (
    <>
      <Navbar onOpenEmergency={onOpenEmergency} />
      <main className="flex-1">
        <HeroSection onOpenEmergency={onOpenEmergency} onSearchService={() => {}} />
        <AboutSection />
        <ServicesSection />
        <NewsSection />
        <ContactLocationSection onOpenEmergency={onOpenEmergency} />
      </main>
      <Footer onOpenEmergency={onOpenEmergency} />
    </>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHash = () => {
      setPage(getPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const openEmergency = () => setIsEmergencyModalOpen(true);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      {page === 'org'
        ? <OrgPage onOpenEmergency={openEmergency} />
        : page === 'tupoksi'
        ? <TupoksiPage onOpenEmergency={openEmergency} />
        : page === 'pegawai'
        ? <PegawaiPage onOpenEmergency={openEmergency} />
        : page === 'alur-pelayanan'
        ? <AlurPelayananPage onOpenEmergency={openEmergency} />
        : page === 'wilayah-kerja'
        ? <WilayahKerjaPage onOpenEmergency={openEmergency} />
        : page === 'standar-pelayanan'
        ? <StandarPelayananPage onOpenEmergency={openEmergency} />
        : <LandingPage onOpenEmergency={openEmergency} />
      }

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
