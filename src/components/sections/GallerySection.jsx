import React, { useState } from 'react';
import Reveal from '../common/Reveal';

const galleryItems = [
  { id: 1, src: '/puskesmas.png',  label: 'Gedung Puskesmas Sukamulya' },
  { id: 2, src: '/puskesmas2.png', label: 'Tampak Depan' },
  { id: 3, src: '/skmview.png',    label: 'Lingkungan Sekitar' },
  { id: 4, src: '/bg-depan.jpeg',  label: 'Area Pelayanan' },
  { id: 5, src: '/puskesmas.png',  label: 'Fasilitas Dalam Gedung' },
  { id: 6, src: '/skmview.png',    label: 'Suasana Pagi' },
  { id: 7, src: '/puskesmas2.png', label: 'Ruang Tunggu' },
  { id: 8, src: '/bg-depan.jpeg',  label: 'Kegiatan Posyandu' },
  { id: 9, src: '/puskesmas.png',  label: 'Tim Medis' },
];

// Layout grid asimetris 3 baris
// Baris 1: [lebar 2] [normal] [normal]  → 4 kolom total
// Baris 2: [normal] [normal] [lebar 2]  → 4 kolom total  
// Baris 3: [normal] [lebar 2] [normal]  → 4 kolom total
const layout = [
  { id: 1, colSpan: 2, rowSpan: 1 },
  { id: 2, colSpan: 1, rowSpan: 1 },
  { id: 3, colSpan: 1, rowSpan: 1 },
  { id: 4, colSpan: 1, rowSpan: 1 },
  { id: 5, colSpan: 1, rowSpan: 1 },
  { id: 6, colSpan: 2, rowSpan: 1 },
  { id: 7, colSpan: 1, rowSpan: 1 },
  { id: 8, colSpan: 2, rowSpan: 1 },
  { id: 9, colSpan: 1, rowSpan: 1 },
];

export default function GallerySection() {
  const [active, setActive] = useState(null);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-20">

        {/* Header */}
        <Reveal dir="up">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">Dokumentasi</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Galeri</h2>
            </div>
            <p className="text-sm text-gray-400">{galleryItems.length} foto</p>
          </div>
        </Reveal>

        {/* Masonry-style grid 4 kolom */}
        <Reveal dir="up" delay={100}>
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {layout.map((l, i) => {
              const item = galleryItems[i];
              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{
                    gridColumn: `span ${l.colSpan}`,
                    height: '220px',
                  }}
                  onClick={() => setActive(item)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.label}
              className="w-full rounded-2xl shadow-2xl"
            />
            <p className="text-white/60 text-sm text-center mt-4">{active.label}</p>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white text-gray-800 flex items-center justify-center font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
