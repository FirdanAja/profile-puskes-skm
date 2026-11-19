import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { doctorServiceSchedule } from '../data/doctorsData';
import { pegawaiData } from '../data/pegawaiData';
import EmergencyModal from '../components/modals/EmergencyModal';
import Reveal from '../components/common/Reveal';
import { puskesmasInfo } from '../data/puskesmasData';

const UserIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z" />
  </svg>
);

function DoctorPhoto({ src, name, className = "", iconClassName = "w-12 h-12" }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(src && !imgError);

  if (!hasPhoto) {
    return (
      <div className={`bg-gray-50 flex items-center justify-center text-gray-300 ${className}`}>
        <UserIcon className={iconClassName} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setImgError(true)}
      className={className}
    />
  );
}

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

function findStaffPhoto(name) {
  const searchName = name.split(',')[0].toLowerCase().replace(/\./g, '').trim();
  const staff = pegawaiData.find((pegawai) => (
    pegawai.nama.toLowerCase().replace(/\./g, '').includes(searchName)
    && pegawai.foto
    && pegawai.foto !== '/pegawai/'
  ));
  return staff?.foto || '';
}

const scheduleEntries = doctorServiceSchedule.flatMap((service) =>
  service.petugas.map((officer, index) => ({
    id: `${service.poli}-${officer.nama}-${index}`,
    name: officer.nama,
    poli: service.poli,
    days: officer.hari,
    foto: findStaffPhoto(officer.nama),
  }))
);

function isAvailableOnDay(schedule, day) {
  if (schedule.includes('Senin-Minggu') || schedule.includes('Senin-Sabtu')) return true;
  if (schedule.includes('Senin dan Rabu-Sabtu')) return ['Senin', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].includes(day);
  return schedule.includes(day);
}

export default function JadwalDokterPage({ onOpenEmergency }) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [filterDay, setFilterDay] = useState('Semua');
  const [viewMode, setViewMode] = useState('card');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = scheduleEntries.filter((entry) => {
    const matchesDay = filterDay === 'Semua' || isAvailableOnDay(entry.days, filterDay);
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || [
      entry.name,
      entry.poli,
      entry.days,
    ].some((value) => value.toLowerCase().includes(query));

    return matchesDay && matchesSearch;
  });

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
        meta={[{ icon: <span>👨‍⚕️</span>, text: 'Jadwal Layanan Praktik' }]}
      />

      <main className="flex-1 py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <Reveal dir="up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">UPTD Puskesmas Sukamulya</p>
                <h2 className="text-2xl font-black text-gray-900">Jadwal Layanan Praktik</h2>
                <p className="text-sm text-gray-500 mt-1">Jadwal petugas pemeriksa berdasarkan hari pelayanan</p>
              </div>
            </div>
          </Reveal>

          <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-2xl bg-emerald-600 p-5 sm:p-6 text-white shadow-lg shadow-emerald-100">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-12 right-16 h-28 w-28 rounded-full border border-white/10" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100">Informasi Layanan</p>
                    <h3 className="text-lg font-black">Jadwal Loket Pendaftaran</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    ['Senin - Kamis', '07.30 - 12.00 WIB'],
                    ['Jumat', '07.30 - 11.00 WIB'],
                    ['Sabtu', '07.30 - 11.00 WIB'],
                  ].map(([day, time]) => (
                    <div key={day} className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-sm">
                      <p className="text-[10px] font-bold text-emerald-100">{day}</p>
                      <p className="mt-1 text-sm font-black">{time}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-950/25 px-3 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-200 animate-pulse" />
                  <p className="text-xs font-bold">UGD &amp; Persalinan: <span className="text-emerald-100">24 Jam Non-Stop</span></p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-6 shadow-sm">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-emerald-100/70" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-200">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">Jam Operasional</p>
                    <h3 className="text-lg font-black text-gray-900">Jam Pelayanan</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    ['Senin - Kamis', '07.30 - 14.15 WIB'],
                    ['Jumat', '07.30 - 12.45 WIB'],
                    ['Sabtu', '07.30 - 12.30 WIB'],
                  ].map(([day, time]) => (
                    <div key={day} className="rounded-xl border border-emerald-100 bg-white px-3 py-3 shadow-sm">
                      <p className="text-[10px] font-bold text-emerald-600">{day}</p>
                      <p className="mt-1 text-sm font-black text-gray-900">{time}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-3 py-2.5 shadow-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-xs font-bold text-gray-700">UGD &amp; Persalinan: <span className="text-emerald-700">24 Jam Non-Stop</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Filter Jadwal Petugas</p>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
                {[
                  { value: 'card', label: '▦ Card' },
                  { value: 'list', label: '☷ List' },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    type="button"
                    onClick={() => setViewMode(mode.value)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                      viewMode === mode.value
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-emerald-50'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
              {['Semua', ...days].map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setFilterDay(day)}
                  className={`px-3 py-1.5 text-xs font-bold border rounded-lg transition-colors ${
                    filterDay === day
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="doctor-search" className="sr-only">Cari dokter atau tenaga medis</label>
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
              </svg>
              <input
                id="doctor-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Cari nama dokter, poli, atau hari pelayanan..."
                className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-10 py-3 text-sm text-gray-800 outline-none transition-shadow placeholder:text-gray-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                  aria-label="Hapus pencarian"
                >
                  ×
                </button>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              {filtered.length} petugas ditemukan
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-12 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <UserIcon className="w-6 h-6" />
              </div>
              <h3 className="font-black text-gray-900">Petugas tidak ditemukan</h3>
              <p className="mt-1 text-sm text-gray-500">Coba kata kunci atau filter hari yang lain.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setFilterDay('Semua');
                }}
                className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
              >
                Tampilkan Semua
              </button>
            </div>
          ) : viewMode === 'list' ? (
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                  <thead className="bg-gray-50/80 text-gray-600 font-semibold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-3 sm:px-4 text-center w-12">No</th>
                      <th className="py-3 px-3 sm:px-4">Petugas Pemeriksa</th>
                      <th className="py-3 px-3 sm:px-4">Poli</th>
                      <th className="py-3 px-3 sm:px-4">Hari Pelayanan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {filtered.map((doctor, index) => (
                      <tr
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor)}
                        className="hover:bg-emerald-50/60 transition-colors cursor-pointer"
                      >
                        <td className="py-3 px-3 sm:px-4 text-center text-xs text-gray-400 font-mono">{index + 1}</td>
                        <td className="py-3 px-3 sm:px-4 font-semibold text-gray-900">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-52">
                            {doctor.foto ? (
                              <DoctorPhoto
                                src={doctor.foto}
                                name={doctor.name}
                                className="w-9 h-9 rounded-full object-cover object-top border border-emerald-300 shrink-0"
                                iconClassName="w-4 h-4"
                              />
                            ) : (
                              <div className="w-9 h-11 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                <UserIcon className="w-5 h-5 text-gray-300" />
                              </div>
                            )}
                            <span>{doctor.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {doctor.poli}
                          </span>
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-gray-600 text-xs sm:text-sm min-w-48">{doctor.days}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {filtered.map((doctor, index) => (
                <Reveal key={doctor.id} dir="up" delay={(index % 3) * 100}>
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(doctor)}
                    className="group relative w-full text-left min-h-[120px] border border-gray-200 bg-white hover:border-emerald-400 hover:-translate-y-1 hover:shadow-[0_14px_35px_-18px_rgba(5,150,105,0.48)] transition-all duration-300 overflow-hidden flex flex-row rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  >
                    <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-emerald-500 scale-y-75 group-hover:scale-y-100 transition-transform duration-300" />
                    <div className="relative w-[72px] sm:w-[84px] min-h-[120px] shrink-0 bg-emerald-50 border-r border-emerald-100 overflow-hidden shadow-[8px_0_18px_-14px_rgba(15,23,42,0.55)]">
                      <DoctorPhoto
                        src={doctor.foto}
                        name={doctor.name}
                        className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
                        iconClassName="w-10 h-10"
                      />
                    </div>
                    <div className="p-2.5 sm:p-3 flex-1 min-w-0 flex flex-col justify-center bg-gradient-to-r from-emerald-50/70 via-white to-white">
                      <div className="mb-1.5 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Terjadwal
                        </span>
                        <svg className="w-4 h-4 text-emerald-500 translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                      <h3 className="text-[11px] sm:text-sm font-black text-gray-900 leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="mt-1 inline-flex w-fit rounded-md bg-emerald-600 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-white">
                        {doctor.poli}
                      </p>
                      <div className="flex items-start gap-1 text-[9px] sm:text-[11px] text-gray-500 border-t border-gray-100 mt-2 pt-2">
                        <span className="font-bold text-gray-700 shrink-0">Hari:</span>
                        <span className="line-clamp-2">{doctor.days}</span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}

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

      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Jadwal ${selectedDoctor.name}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedDoctor(null);
          }}
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleUp">
            <div className="flex items-center gap-4 p-5 border-b border-gray-100">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                <DoctorPhoto
                  src={selectedDoctor.foto}
                  name={selectedDoctor.name}
                  className="w-full h-full object-cover object-[center_25%]"
                  iconClassName="w-9 h-9"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Jadwal Petugas</p>
                <h3 className="text-base font-black text-gray-900 leading-snug mt-1">{selectedDoctor.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="w-9 h-9 shrink-0 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors flex items-center justify-center"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">Layanan</p>
                <p className="font-black text-gray-900">{selectedDoctor.poli}</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Hari Pelayanan</p>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">{selectedDoctor.days}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-sm font-bold transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onOpenEmergency={onOpenEmergency} />
      <EmergencyModal isOpen={isEmergencyOpen} onClose={() => setIsEmergencyOpen(false)} />
    </div>
  );
}
