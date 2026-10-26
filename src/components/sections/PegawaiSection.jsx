import React, { useState, useMemo } from 'react';
import { CheckCircleIcon } from '../common/Icons';
import { pegawaiData } from '../../data/pegawaiData';

const UserIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const bidangColors = {
  "Manajemen": "bg-emerald-100 text-emerald-800",
  "Ibu dan Anak": "bg-pink-100 text-pink-800",
  "Dewasa & Lansia": "bg-blue-100 text-blue-800",
  "Penyakit Menular": "bg-amber-100 text-amber-800",
  "Kefarmasian": "bg-purple-100 text-purple-800",
  "Kesehatan Gigi": "bg-red-100 text-red-800",
  "Gawat Darurat": "bg-red-100 text-red-800",
  "Support": "bg-gray-100 text-gray-800",
};

function PegawaiCard({ pegawai }) {
  const bidangColor = bidangColors[pegawai.bidang] || "bg-gray-100 text-gray-800";

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Foto Section */}
      <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        {pegawai.foto ? (
          <img
            src={pegawai.foto}
            alt={pegawai.nama}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <UserIcon className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-xs font-semibold text-gray-500">Tidak ada foto</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-5">
        <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">{pegawai.nama}</h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{pegawai.jabatan}</p>

        {/* Badge Bidang */}
        <div className="mb-4">
          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${bidangColor}`}>
            {pegawai.bidang}
          </span>
        </div>
      </div>
    </div>
  );
}

// Search input with icon
function SearchInput({ value, onChange, resultCount }) {
  return (
    <div className="max-w-xl mx-auto mb-10">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari nama, jabatan, atau bidang..."
          className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Hapus pencarian"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {value.trim() && (
        <p className="text-center text-xs text-gray-400 mt-3">
          {resultCount > 0
            ? `${resultCount} pegawai ditemukan`
            : "Tidak ada pegawai yang cocok"}
        </p>
      )}
    </div>
  );
}

export default function PegawaiSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter pegawai based on search query (nama, jabatan, bidang)
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return pegawaiData;
    return pegawaiData.filter(
      (p) =>
        p.nama.toLowerCase().includes(query) ||
        p.jabatan.toLowerCase().includes(query) ||
        p.bidang.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group filtered pegawai by bidang
  const groupedPegawai = useMemo(() => {
    return filteredData.reduce((acc, pegawai) => {
      if (!acc[pegawai.bidang]) {
        acc[pegawai.bidang] = [];
      }
      acc[pegawai.bidang].push(pegawai);
      return acc;
    }, {});
  }, [filteredData]);

  const bidangOrder = ["Manajemen", "Ibu dan Anak", "Dewasa & Lansia", "Penyakit Menular", "Kefarmasian", "Kesehatan Gigi", "Gawat Darurat", "Support"];
  const sortedBidang = bidangOrder.filter(b => groupedPegawai[b]);

  return (
    <section id="pegawai" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            Tim Profesional
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Tim Pegawai Puskesmas</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Tenaga profesional yang berdedikasi melayani kesehatan masyarakat Kecamatan Sukamulya
          </p>
        </div>

        {/* Search bar */}
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          resultCount={filteredData.length}
        />

        {/* Pegawai by Bidang */}
        {sortedBidang.length > 0 ? (
          <div className="space-y-12">
            {sortedBidang.map((bidang) => (
              <div key={bidang}>
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-200 inline-block">
                  {bidang}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupedPegawai[bidang].map((pegawai) => (
                    <PegawaiCard
                      key={pegawai.id}
                      pegawai={pegawai}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">Pegawai tidak ditemukan</p>
            <p className="text-sm text-gray-400 mt-1">Coba kata kunci lain</p>
          </div>
        )}

      </div>
    </section>
  );
}
