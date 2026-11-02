import React, { useState, useMemo, useEffect } from 'react';
import { pegawaiData } from '../../data/pegawaiData';

const UserIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const XIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const EyeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CopyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const bidangStyles = {
  "Manajemen": {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    headerGrad: "from-emerald-600 via-teal-600 to-emerald-700",
    icon: "📋",
  },
  "Ibu dan Anak": {
    badge: "bg-pink-50 text-pink-700 border-pink-200",
    headerGrad: "from-pink-600 via-rose-500 to-pink-700",
    icon: "👶",
  },
  "Dewasa & Lansia": {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    headerGrad: "from-blue-600 via-indigo-600 to-blue-700",
    icon: "🩺",
  },
  "Penyakit Menular": {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    headerGrad: "from-amber-600 via-orange-500 to-amber-700",
    icon: "🛡️",
  },
  "Kefarmasian": {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    headerGrad: "from-purple-600 via-violet-600 to-purple-700",
    icon: "💊",
  },
  "Kesehatan Gigi": {
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
    headerGrad: "from-cyan-600 via-teal-600 to-cyan-700",
    icon: "🦷",
  },
  "Gawat Darurat": {
    badge: "bg-red-50 text-red-700 border-red-200",
    headerGrad: "from-red-600 via-rose-600 to-red-700",
    icon: "🚑",
  },
  "Laboratorium": {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    headerGrad: "from-indigo-600 via-blue-600 to-indigo-700",
    icon: "🔬",
  },
  "Gizi": {
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    headerGrad: "from-orange-600 via-amber-600 to-orange-700",
    icon: "🥗",
  },
  "Support": {
    badge: "bg-gray-100 text-gray-700 border-gray-200",
    headerGrad: "from-slate-700 via-gray-700 to-slate-800",
    icon: "🏢",
  },
};

const bidangOrder = [
  "Manajemen",
  "Ibu dan Anak",
  "Dewasa & Lansia",
  "Penyakit Menular",
  "Kefarmasian",
  "Kesehatan Gigi",
  "Gawat Darurat",
  "Laboratorium",
  "Gizi",
  "Support",
];

// ── Detail Modal Pegawai ────────────────────────────────────────────────────────
function PegawaiDetailModal({ pegawai, onClose }) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!pegawai) return null;

  const style = bidangStyles[pegawai.bidang] || bidangStyles["Support"];
  const hasPhoto = Boolean(pegawai.foto && !imgError);

  const handleCopy = () => {
    const text = `${pegawai.nama} - ${pegawai.jabatan} (${pegawai.bidang}) - UPTD Puskesmas Sukamulya`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-6 max-h-[90vh] flex flex-col animate-scaleUp">

        {/* Top Header Bar */}
        <div className={`relative bg-gradient-to-r ${style.headerGrad} px-6 py-4 text-white flex items-center justify-between shrink-0`}>
          <div className="flex items-center gap-2.5">
            <span className="text-xl">{style.icon}</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/90">Profil Pegawai</span>
              <p className="text-[11px] text-white/80">UPTD Puskesmas Sukamulya</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
            aria-label="Tutup modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content (Clean Flow, Zero Overlaps) */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* Main Profile Info: Photo Left + Info Right */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-gray-100">
            {/* Foto Frame */}
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl bg-white p-1 shadow-sm border border-gray-200 shrink-0 overflow-hidden flex items-center justify-center">
              {hasPhoto ? (
                <img
                  src={pegawai.foto}
                  alt={pegawai.nama}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-emerald-600 p-3 text-center">
                  <UserIcon className="w-12 h-12 mb-1 text-gray-400" />
                  <span className="text-[10px] text-gray-400 font-medium">Foto Pegawai</span>
                </div>
              )}
            </div>

            {/* Profile Info Right */}
            <div className="flex-1 text-center sm:text-left space-y-3 w-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                  {pegawai.nama}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-emerald-700 mt-1">
                  {pegawai.jabatan}
                </p>
              </div>

              {/* Badges Flow */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${style.badge}`}>
                  <span>{style.icon}</span>
                  Klaster {pegawai.bidang}
                </span>

                {pegawai.golongan && pegawai.golongan !== "-" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                    Golongan: {pegawai.golongan}
                  </span>
                )}

                {pegawai.eselon && pegawai.eselon !== "NON" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-2xs">
                    Eselon {pegawai.eselon}
                  </span>
                )}

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Aktif Melayani
                </span>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Jabatan Fungsional/Tugas</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">{pegawai.jabatan}</p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Klaster Pelayanan</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">Klaster {pegawai.bidang}</p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Unit Kerja</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">UPTD Puskesmas Sukamulya</p>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Pangkat / Golongan</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">
                {pegawai.golongan && pegawai.golongan !== "-" ? pegawai.golongan : "Pegawai Fungsional"}
              </p>
            </div>
          </div>

          {/* Friendly Note */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <UserIcon className="w-4 h-4" />
            </div>
            <p className="text-xs text-emerald-900/90 leading-relaxed">
              Tenaga kesehatan dan staf profesional UPTD Puskesmas Sukamulya yang berdedikasi melayani masyarakat dengan sepenuh hati, ramah, dan berintegritas.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50/90 border-t border-gray-100 flex items-center justify-end gap-2.5 shrink-0">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-white transition cursor-pointer"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Tersalin!</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4 text-gray-500" />
                <span>Salin Profil</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}

// ── Pegawai Card Component ──────────────────────────────────────────────────────
function PegawaiCard({ pegawai, onSelect, index = 0 }) {
  const [imgError, setImgError] = useState(false);
  const style = bidangStyles[pegawai.bidang] || bidangStyles["Support"];
  const hasPhoto = Boolean(pegawai.foto && !imgError);

  return (
    <div
      onClick={() => onSelect(pegawai)}
      style={{ animationDelay: `${(index % 8) * 70}ms` }}
      className="group relative bg-white rounded-2xl shadow-xs border border-gray-200/90 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/15 hover:border-emerald-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer animate-card-in"
    >
      {/* Top accent bar (klaster color) */}
      <div className={`h-1 w-full bg-gradient-to-r ${style.headerGrad}`} />

      <div>
        {/* Photo Container - adapts to ANY photo via object-cover + object-top
            (portrait frame keeps the face visible, fills cleanly, no whitespace) */}
        <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center overflow-hidden">
          {hasPhoto ? (
            <img
              src={pegawai.foto}
              alt={pegawai.nama}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <UserIcon className="w-8 h-8" />
              </div>
              <span className="text-xs font-medium text-gray-400">Puskesmas Sukamulya</span>
            </div>
          )}

          {/* Bottom gradient overlay for depth on hover */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-emerald-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-emerald-800 text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-xs transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <EyeIcon className="w-4 h-4 text-emerald-600" />
              Lihat Detail
            </span>
          </div>
        </div>

        {/* Info Section: All Badges Placed Neatly Below the Photo (Zero Overlap!) */}
        <div className="p-4 sm:p-5">
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${style.badge}`}>
              {pegawai.bidang}
            </span>
            {pegawai.eselon && pegawai.eselon !== "NON" && (
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white shadow-2xs">
                Eselon {pegawai.eselon}
              </span>
            )}
            {pegawai.golongan && pegawai.golongan !== "-" && (
              <span className="inline-block px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium text-[11px]">
                Gol: {pegawai.golongan}
              </span>
            )}
          </div>

          {/* Nama Pegawai */}
          <h3
            className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-emerald-700 transition-colors mb-1 leading-snug line-clamp-2"
            title={pegawai.nama}
          >
            {pegawai.nama}
          </h3>

          {/* Jabatan */}
          <p className="text-xs sm:text-sm text-emerald-700 font-medium line-clamp-2">
            {pegawai.jabatan}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 flex items-center justify-between text-xs border-t border-gray-50 mt-1 pt-3">
        <span className="text-[11px] text-gray-400">UPTD Sukamulya</span>

        <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all text-xs">
          Lihat Profil
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

// ── Search Input Component ──────────────────────────────────────────────────────
function SearchInput({ value, onChange, resultCount }) {
  return (
    <div className="max-w-xl mx-auto mb-6">
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
          placeholder="Cari nama pegawai, jabatan, golongan, atau bidang..."
          className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
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
        <p className="text-center text-xs text-gray-500 mt-2 font-medium">
          {resultCount > 0
            ? `${resultCount} pegawai ditemukan`
            : "Tidak ada pegawai yang cocok dengan pencarian Anda"}
        </p>
      )}
    </div>
  );
}

// ── Main Pegawai Section ────────────────────────────────────────────────────────
export default function PegawaiSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBidang, setSelectedBidang] = useState("Semua");
  const [viewMode, setViewMode] = useState("card"); // "card" | "table"
  const [selectedPegawai, setSelectedPegawai] = useState(null);

  const bidangList = [
    "Semua",
    "Manajemen",
    "Ibu dan Anak",
    "Dewasa & Lansia",
    "Penyakit Menular",
    "Kefarmasian",
    "Kesehatan Gigi",
    "Gawat Darurat",
    "Laboratorium",
    "Gizi",
    "Support",
  ];

  // Filter pegawai based on search query and category tab
  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return pegawaiData.filter((p) => {
      const matchBidang = selectedBidang === "Semua" || p.bidang === selectedBidang;
      if (!matchBidang) return false;
      if (!query) return true;

      return (
        p.nama.toLowerCase().includes(query) ||
        p.jabatan.toLowerCase().includes(query) ||
        p.bidang.toLowerCase().includes(query) ||
        (p.golongan && p.golongan.toLowerCase().includes(query)) ||
        (p.eselon && p.eselon.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedBidang]);

  // Group filtered pegawai by bidang for grouped view
  const groupedPegawai = useMemo(() => {
    return filteredData.reduce((acc, pegawai) => {
      if (!acc[pegawai.bidang]) {
        acc[pegawai.bidang] = [];
      }
      acc[pegawai.bidang].push(pegawai);
      return acc;
    }, {});
  }, [filteredData]);

  const sortedBidang = useMemo(() => {
    const definedOrder = bidangOrder.filter((b) => groupedPegawai[b]);
    const others = Object.keys(groupedPegawai).filter((b) => !bidangOrder.includes(b));
    return [...definedOrder, ...others];
  }, [groupedPegawai]);

  return (
    <section id="pegawai" className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <span>👥</span> Tenaga Kerja Puskesmas
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Daftar Pegawai & Tenaga Kesehatan
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-2xl mx-auto">
            Profil pegawai dan tenaga profesional yang mengabdi melayani masyarakat UPTD Puskesmas Sukamulya. Klik kartu untuk melihat detail profil.
          </p>
        </div>

        {/* Search bar */}
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          resultCount={filteredData.length}
        />

        {/* Filter Bidang & View Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Bidang Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
            {bidangList.map((bidang) => {
              const isActive = selectedBidang === bidang;
              const count = bidang === "Semua"
                ? pegawaiData.length
                : pegawaiData.filter((p) => p.bidang === bidang).length;

              if (count === 0 && bidang !== "Semua") return null;

              return (
                <button
                  key={bidang}
                  onClick={() => setSelectedBidang(bidang)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${isActive
                    ? "bg-emerald-600 text-white shadow-2xs"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                >
                  {bidang} <span className={`ml-1 text-[11px] ${isActive ? "text-emerald-100" : "text-gray-400"}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* View mode toggle */}
          <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200 text-xs shrink-0">
            <button
              onClick={() => setViewMode("card")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${viewMode === "card"
                ? "bg-white text-gray-900 shadow-2xs"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Kartu
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${viewMode === "table"
                ? "bg-white text-gray-900 shadow-2xs"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Tabel
            </button>
          </div>
        </div>

        {/* Pegawai List / Display */}
        {filteredData.length > 0 ? (
          viewMode === "card" ? (
            /* Card View grouped by bidang if "Semua" is active, or flat grid if specific bidang */
            selectedBidang === "Semua" && !searchQuery ? (
              <div className="space-y-12">
                {sortedBidang.map((bidang) => {
                  const style = bidangStyles[bidang] || bidangStyles["Support"];
                  return (
                    <div key={bidang} className="bg-white/70 p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-2xs">
                      <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{style.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">
                              Klaster {bidang}
                            </h3>
                            <p className="text-xs text-gray-400">Tenaga pengelola & pelayanan</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                          {groupedPegawai[bidang]?.length || 0} Pegawai
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {groupedPegawai[bidang]?.map((pegawai, idx) => (
                          <PegawaiCard
                            key={pegawai.id}
                            pegawai={pegawai}
                            onSelect={setSelectedPegawai}
                            index={idx}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredData.map((pegawai, idx) => (
                  <PegawaiCard
                    key={pegawai.id}
                    pegawai={pegawai}
                    onSelect={setSelectedPegawai}
                    index={idx}
                  />
                ))}
              </div>
            )
          ) : (
            /* Table View */
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
                  <thead className="bg-gray-50/80 text-gray-600 font-semibold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 text-center w-12">No</th>
                      <th className="py-3.5 px-4">Nama Pegawai</th>
                      <th className="py-3.5 px-4">Jabatan</th>
                      <th className="py-3.5 px-4">Bidang / Klaster</th>
                      <th className="py-3.5 px-4 text-center">Golongan</th>
                      <th className="py-3.5 px-4 text-center">Eselon</th>
                      <th className="py-3.5 px-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {filteredData.map((pegawai, index) => {
                      const style = bidangStyles[pegawai.bidang] || bidangStyles["Support"];
                      return (
                        <tr
                          key={pegawai.id}
                          onClick={() => setSelectedPegawai(pegawai)}
                          className="hover:bg-emerald-50/60 transition-colors cursor-pointer group"
                        >
                          <td className="py-3 px-4 text-center text-xs text-gray-400 font-mono">
                            {index + 1}
                          </td>
                          <td className="py-3 px-4 font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                            <div className="flex items-center gap-3">
                              {pegawai.foto ? (
                                <img
                                  src={pegawai.foto}
                                  alt={pegawai.nama}
                                  className="w-9 h-9 rounded-full object-cover object-top border border-emerald-300 shrink-0 shadow-2xs"
                                />
                              ) : (
                                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                  <UserIcon className="w-4 h-4" />
                                </div>
                              )}
                              <span>{pegawai.nama}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-700 text-xs sm:text-sm">
                            {pegawai.jabatan}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style.badge}`}>
                              {pegawai.bidang}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center text-xs font-medium text-gray-600">
                            {pegawai.golongan && pegawai.golongan !== "-" ? (
                              <span className="px-2 py-0.5 bg-gray-100 rounded font-medium">{pegawai.golongan}</span>
                            ) : (
                              <span className="text-gray-300">-</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center text-xs">
                            {pegawai.eselon && pegawai.eselon !== "NON" ? (
                              <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-semibold">
                                {pegawai.eselon}
                              </span>
                            ) : (
                              <span className="text-gray-300">NON</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPegawai(pegawai);
                              }}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition cursor-pointer"
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-3 text-gray-400">
              <UserIcon className="w-7 h-7" />
            </div>
            <p className="text-gray-700 font-semibold">Pegawai tidak ditemukan</p>
            <p className="text-xs text-gray-400 mt-1">Coba sesuaikan kata kunci pencarian atau kategori bidang</p>
          </div>
        )}

      </div>

      {/* Modal Popup Detail */}
      {selectedPegawai && (
        <PegawaiDetailModal
          pegawai={selectedPegawai}
          onClose={() => setSelectedPegawai(null)}
        />
      )}
    </section>
  );
}
