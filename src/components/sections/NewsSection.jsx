import React, { useState } from 'react';
import { newsList } from '../../data/newsData';
import { ArrowRightIcon, XIcon } from '../common/Icons';

// Gallery items - CSS art placeholders
const galleryItems = [
  { id: 1, label: "Gedung Puskesmas", color: "bg-emerald-200", textColor: "text-emerald-800" },
  { id: 2, label: "Ruang Pelayanan", color: "bg-sky-200", textColor: "text-sky-800" },
  { id: 3, label: "Tenaga Medis", color: "bg-rose-200", textColor: "text-rose-800" },
  { id: 4, label: "Ruang Tunggu", color: "bg-amber-200", textColor: "text-amber-800" },
  { id: 5, label: "Laboratorium", color: "bg-purple-200", textColor: "text-purple-800" },
  { id: 6, label: "Apotek", color: "bg-teal-200", textColor: "text-teal-800" },
];

function GalleryCard({ item, large = false }) {
  return (
    <div className={`gallery-img rounded-xl overflow-hidden ${large ? 'h-44' : 'h-20'} relative cursor-pointer group`}>
      <div className={`w-full h-full ${item.color} flex items-center justify-center transition-transform group-hover:scale-105`}>
        <div className="text-center p-2">
          <div className="text-2xl mb-1">🏥</div>
          <span className={`text-[10px] font-bold ${item.textColor}`}>{item.label}</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-all flex items-center justify-center">
        <span className="text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">Lihat</span>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);
  const displayNews = newsList.slice(0, 3);

  return (
    <section id="edukasi" className="py-16 lg:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ---- BERITA & INFORMASI ---- */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-5">
              <div>
                <div className="text-xs text-gray-500 font-semibold mb-1">Update Terbaru</div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">Berita & Informasi</h2>
              </div>
              <a href="#edukasi" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                Lihat Semua <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {displayNews.map((item) => (
                <div
                  key={item.id}
                  className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  {/* Image placeholder */}
                  <div className={`h-28 ${item.categoryColor?.includes('green') ? 'bg-emerald-100' : item.categoryColor?.includes('blue') ? 'bg-blue-100' : 'bg-amber-100'} flex items-center justify-center`}>
                    <div className="text-4xl">📰</div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block w-fit mb-2 ${item.categoryColor}`}>
                      {item.category}
                    </span>
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug flex-1">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                      <span>{item.date}</span>
                      <span className="text-emerald-600 font-bold group-hover:underline">Baca →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- GALERI ---- */}
          <div className="lg:col-span-5" id="galeri">
            <div className="flex items-end justify-between mb-5">
              <div>
                <div className="text-xs text-gray-500 font-semibold mb-1">Dokumentasi Kegiatan</div>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">Galeri</h2>
              </div>
              <a href="#galeri" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                Lihat Semua <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mosaic gallery grid */}
            <div className="grid grid-cols-3 gap-2">
              {/* Top row: 1 large + 2 small */}
              <div className="col-span-2">
                <GalleryCard item={galleryItems[0]} large />
              </div>
              <div className="flex flex-col gap-2">
                <GalleryCard item={galleryItems[1]} />
                <GalleryCard item={galleryItems[2]} />
              </div>
              {/* Bottom row: 3 equal */}
              <GalleryCard item={galleryItems[3]} />
              <GalleryCard item={galleryItems[4]} />
              <GalleryCard item={galleryItems[5]} />
            </div>
          </div>

        </div>
      </div>

      {/* News modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${selectedNews.categoryColor}`}>
              {selectedNews.category}
            </span>
            <h3 className="text-lg font-extrabold text-gray-900 leading-snug">{selectedNews.title}</h3>
            <div className="text-xs text-gray-400 my-3 pb-3 border-b border-gray-100">
              {selectedNews.date} • {selectedNews.author}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{selectedNews.summary}</p>
            <div className="mt-4 text-right">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
