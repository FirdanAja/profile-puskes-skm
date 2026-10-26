import React from 'react';
import { CheckCircleIcon } from '../common/Icons';

const tupoksiData = [
  {
    id: 1,
    title: "Pemberian Pelayanan Kesehatan Dasar",
    description: "Memberikan pelayanan kesehatan yang berkualitas dan terjangkau kepada masyarakat",
    items: [
      "Pelayanan Kesehatan Ibu dan Anak",
      "Pelayanan Kesehatan Usia Dewasa",
      "Pelayanan Kesehatan Lansia",
      "Pelayanan Kesehatan Gigi dan Mulut",
      "Pelayanan Laboratorium Kesehatan"
    ],
    color: "bg-blue-600",
    borderColor: "border-blue-600",
  },
  {
    id: 2,
    title: "Penyelenggaraan Upaya Kesehatan Masyarakat",
    description: "Melaksanakan upaya promotif dan preventif di tingkat masyarakat",
    items: [
      "Program Promosi Kesehatan",
      "Program Pencegahan Penyakit",
      "Program Kesehatan Lingkungan",
      "Program Pemberdayaan Masyarakat",
      "Surveilans Epidemiologi"
    ],
    color: "bg-green-600",
    borderColor: "border-green-600",
  },
  {
    id: 3,
    title: "Penyelenggaraan Manajemen Puskesmas",
    description: "Mengelola sumber daya dan administrasi puskesmas secara efisien",
    items: [
      "Manajemen Sumber Daya Manusia",
      "Manajemen Keuangan dan Aset",
      "Manajemen Sarana dan Prasarana",
      "Manajemen Perbekalan Farmasi",
      "Manajemen Sistem Informasi"
    ],
    color: "bg-amber-600",
    borderColor: "border-amber-600",
  },
  {
    id: 4,
    title: "Penyelenggaraan Penjaminan Mutu Layanan",
    description: "Memastikan standar kualitas pelayanan kesehatan yang konsisten",
    items: [
      "Pengendalian Mutu Pelayanan",
      "Akreditasi Puskesmas",
      "Audit Internal",
      "Evaluasi Kepuasan Pasien",
      "Peningkatan Berkelanjutan (Continuous Improvement)"
    ],
    color: "bg-purple-600",
    borderColor: "border-purple-600",
  },
];

const visiMisi = {
  visi: "Terwujudnya Masyarakat Kecamatan Sukamulya yang Sehat, Mandiri, dan Berkeadilan",
  misi: [
    "Meningkatkan akses dan mutu pelayanan kesehatan yang terjangkau",
    "Memberdayakan masyarakat untuk hidup sehat",
    "Melaksanakan manajemen puskesmas yang professional",
    "Membangun kemitraan dalam penyelenggaraan kesehatan"
  ]
};

const QuoteIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

function TupoksiCard({ tupoksi }) {
  return (
    <div className={`rounded-xl shadow-md border-l-4 ${tupoksi.borderColor} bg-white overflow-hidden hover:shadow-lg transition-shadow`}>
      {/* Header */}
      <div className={`${tupoksi.color} text-white p-4`}>
        <h3 className="font-bold text-sm leading-tight mb-1">{tupoksi.title}</h3>
        <p className="text-xs opacity-90">{tupoksi.description}</p>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <ul className="space-y-2">
          {tupoksi.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
              <CheckCircleIcon className={`w-4 h-4 ${tupoksi.color.replace('bg-', 'text-')} shrink-0 mt-0.5`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TupoksiSection() {
  return (
    <section id="tupoksi" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            Tugas Pokok dan Fungsi
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Tupoksi Puskesmas Sukamulya</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Tugas pokok dan fungsi Puskesmas Sukamulya dalam memberikan pelayanan kesehatan kepada masyarakat Kecamatan Sukamulya
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 max-w-3xl mx-auto">
          {/* Visi */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
            <h3 className="text-xs font-bold uppercase tracking-wide mb-3 opacity-90">Visi</h3>
            <p className="text-sm font-bold leading-relaxed">{visiMisi.visi}</p>
          </div>

          {/* Misi */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white">
            <h3 className="text-xs font-bold uppercase tracking-wide mb-3 opacity-90">Misi</h3>
            <ul className="space-y-2">
              {visiMisi.misi.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0 mt-1.5"></span>
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tupoksi Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {tupoksiData.map((tupoksi) => (
            <TupoksiCard key={tupoksi.id} tupoksi={tupoksi} />
          ))}
        </div>

        {/* Bottom: Komitmen Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-blue-200">
              <QuoteIcon className="w-12 h-12" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100/20 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Komitmen Kami</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Puskesmas Sukamulya berkomitmen untuk memberikan pelayanan kesehatan yang berkualitas, terjangkau, dan dapat diakses oleh seluruh masyarakat Kecamatan Sukamulya dengan tetap menjunjung tinggi nilai-nilai profesionalisme, humanis, integritas, inovatif, dan kolaboratif.
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold">
                <CheckCircleIcon className="w-4 h-4" />
                Kesehatan Anda, Tanggung Jawab Kami
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
