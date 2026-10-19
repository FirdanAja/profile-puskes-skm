import React from 'react';
import { CheckCircleIcon } from '../common/Icons';

const tataValues = [
  "Profesional",
  "Humanis", 
  "Integritas",
  "Inovatif",
  "Kolaboratif",
];

const QuoteIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

// Org chart data
const orgData = {
  kepala: {
    nama: "dr. Hj. Yati Rochdiyawati Hadiyat. MKM",
    jabatan: "Kepala UPTD Puskesmas",
  },
  klaster: [
    {
      id: 1,
      nama: "Klaster (I)\nManajemen",
      pj: "Yanti Heryanti, SE.MAP.",
      color: "bg-emerald-600",
      borderColor: "border-emerald-600",
      koordinator: [
        { tim: "Manajemen Mutu Pelayanan", nama: "Apt. Ika Sriwantika, M.Farm." },
        { tim: "Manajemen Pemberdayaan Masyarakat", nama: "Winda Nurrochmah, S.KM" },
        { tim: "Manajemen Arsip", nama: "Atin, S.KM" },
        { tim: "Manajemen Inti Puskesmas", nama: "Ida Farida Ariyanti, A.Md.Keb" },
        { tim: "Manajemen SDM", nama: "Siti Mardiyah, SE" },
        { tim: "Manajemen Sarpras & Perbekalan", nama: "Imam Ramadhan, S.Kom" },
        { tim: "Manajemen Keuangan & Aset/BMD", nama: "Fifi Nurfitriani, A.Md." },
        { tim: "Manajemen Jejaring", nama: "Hendrayani, Am.keb" },
        { tim: "Manajemen Sistem Informasi Digital", nama: "Nani Warni, S.Kep., Ners" },
      ],
    },
    {
      id: 2,
      nama: "Klaster (II)\nIbu dan Anak",
      pj: "Elis Setiawati, S.Keb",
      color: "bg-pink-600",
      borderColor: "border-pink-600",
      koordinator: [
        { tim: "Kesehatan Ibu Hamil, Persalinan & Nifas", nama: "Devy Yulianingsih, S.ST" },
        { tim: "Kesehatan Bayi & Balita", nama: "Dwi Rahmawatisari, A.Md.Keb" },
        { tim: "Kesehatan Anak Usia Prasekolah", nama: "Shari Nuraeni, A.Md.Keb" },
        { tim: "Kesehatan Anak Usia Remaja", nama: "Luthfi Hermayanti, A.Md.Keb" },
         { tim: "Pelayanan Anak Usia Sekolah", nama: "Luthfi Hermayanti, A.Md.Keb" },
      ],
    },
    {
      id: 3,
      nama: "Klaster (III)\nDewasa & Lansia",
      pj: "dr. Hj. Rina Sufriani",
      color: "bg-blue-600",
      borderColor: "border-blue-600",
      koordinator: [
        { tim: "Kesehatan Usia Dewasa", nama: "Yeni Yunita Risnawati, S.Kep., Ners" },
        { tim: "Kesehatan Lansia", nama: "Fifit Fitriani, A.Md.Kep" },
      ],
    },
    {
      id: 4,
      nama: "Lintas Klaster\nPenyakit Menular",
      pj: "Billy Juantika, S.Kep",
      color: "bg-amber-600",
      borderColor: "border-amber-600",
      koordinator: [
        { tim: "Surveilans", nama: "Titi Supriati, S.KM / Deni Marta Dinangsah, S.Kep., Ners" },
        { tim: "Kesehatan Lingkungan", nama: "Lina Herliawati, S.KM" },
      ],
    },
    {
      id: 5,
      nama: "PJ Lintas\nKlaster",
      pj: "Apt. Novi Angga Permana, S.Farm",
      color: "bg-violet-600",
      borderColor: "border-violet-600",
      koordinator: [
        { tim: "Kesehatan Gigi & Mulut", nama: "drg. Ono Sumarno" },
        { tim: "Laboratorium Kes. Masyarakat", nama: "Novi Sri Rahayu, A.Md.AK" },
        { tim: "Kefarmasian", nama: "Rike Budiasih, S.Farm" },
        { tim: "Pelayanan Gawat Darurat", nama: "Billy Juantika, S.Kep., Ners" },
      ],
    },
  ],
};

// Box node for the org chart
function OrgBox({ title, subtitle, className = "", colorClass = "bg-emerald-700 text-white", small = false }) {
  return (
    <div className={`rounded-lg shadow-md border-2 ${className} ${colorClass} text-center px-3 py-2 ${small ? 'min-w-[140px]' : 'min-w-[160px]'}`}>
      <div className={`font-bold leading-tight whitespace-pre-line ${small ? 'text-[10px]' : 'text-xs'}`}>{title}</div>
      {subtitle && <div className={`opacity-80 mt-0.5 leading-tight ${small ? 'text-[8px]' : 'text-[10px]'}`}>{subtitle}</div>}
    </div>
  );
}

// Vertical line connector
function VLine({ height = 'h-6' }) {
  return <div className={`w-0.5 ${height} bg-gray-300 mx-auto`}></div>;
}

export default function OrgSection() {
  return (
    <section id="struktur" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-3">
            Tata Kelola
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Struktur Organisasi</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Bagan struktur organisasi Puskesmas Sukamulya Kecamatan Sukamulya Kabupaten Kuningan
          </p>
        </div>

        {/* Org Chart - scrollable */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[900px] flex flex-col items-center">

            {/* Level 1: Kepala Puskesmas */}
            <OrgBox
              title={orgData.kepala.jabatan}
              subtitle={orgData.kepala.nama}
              colorClass="bg-emerald-800 text-white border-emerald-900"
              className="px-6 py-3 min-w-[260px] shadow-lg"
            />

            {/* Connector down from Kepala */}
            <VLine height="h-8" />

            {/* Horizontal bar across all klasters */}
            <div className="relative w-full" style={{ maxWidth: '85%' }}>
              <div className="h-0.5 bg-gray-300 w-full"></div>
            </div>

            {/* Level 2: Klaster PJ boxes */}
            <div className="flex justify-center w-full" style={{ maxWidth: '95%' }}>
              {orgData.klaster.map((klaster, idx) => (
                <div key={klaster.id} className="flex flex-col items-center flex-1">
                  {/* Vertical connector from horizontal bar */}
                  <VLine height="h-6" />

                  {/* PJ Box */}
                  <div className={`rounded-lg shadow-md border-2 ${klaster.borderColor} ${klaster.color} text-white text-center px-2 py-2.5 min-w-[130px] max-w-[160px]`}>
                    <div className="font-bold text-[10px] leading-tight whitespace-pre-line">{klaster.nama}</div>
                    <div className="w-full h-px bg-white/30 my-1.5"></div>
                    <div className="text-[9px] opacity-90 font-semibold">PJ:</div>
                    <div className="text-[9px] opacity-80 leading-tight">{klaster.pj}</div>
                  </div>

                  {/* Connector down to koordinator */}
                  <VLine height="h-5" />

                  {/* Koordinator list */}
                  <div className="space-y-1.5 w-full px-1">
                    {klaster.koordinator.map((k, i) => (
                      <div
                        key={i}
                        className={`relative rounded-md border ${klaster.borderColor} bg-white shadow-sm text-center px-2 py-1.5 mx-auto max-w-[155px]`}
                      >
                        {/* Small connector line on top */}
                        {i > 0 && (
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-gray-200"></div>
                        )}
                        <div className="text-[9px] font-bold text-gray-700 leading-tight">{k.tim}</div>
                        <div className="text-[8px] text-gray-500 mt-0.5 leading-tight">{k.nama}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom: Tata Nilai + Quote */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Tata Nilai */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h4 className="text-xs font-bold text-gray-800 mb-3">Tata Nilai</h4>
            <ul className="space-y-2">
              {tataValues.map((v) => (
                <li key={v} className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* Quote card */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-5 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-2 right-2 text-white/10">
              <QuoteIcon className="w-10 h-10" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white/5 rounded-full"></div>
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-sm font-bold">Kesehatan Anda Prioritas Kami</p>
              <p className="text-xs text-emerald-100 mt-1">Pelayanan terbaik untuk masyarakat Kecamatan Sukamulya</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
