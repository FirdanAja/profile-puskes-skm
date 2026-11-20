import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { newsList } from '../data/newsData';
import EmergencyModal from '../components/modals/EmergencyModal';
import Reveal from '../components/common/Reveal';

const imgMap = ['/puskesmas.png', '/puskesmas2.png', '/skmview.png', '/bg-depan.jpeg'];
const categories = ['Semua', ...new Set(newsList.map((n) => n.category))];

export default function BeritaPage({ onOpenEmergency }) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? newsList
    : newsList.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Berita & Artikel"
        bgImage="/skmview.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Informasi', href: '#' },
          { label: 'Berita & Artikel', href: '#' },
        ]}
        meta={[{ icon: <span>📰</span>, text: `${newsList.length} Artikel Tersedia` }]}
      />

      <main className="flex-1 py-14 bg-white">
        <div className="max-w-7xl mx-auto px-20">

          <Reveal dir="up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Publikasi</p>
                <h2 className="text-2xl font-black text-gray-900">Berita & Artikel Kesehatan</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-bold border transition-colors ${
                      activeCategory === cat
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <Reveal key={item.id} dir="up" delay={(i % 3) * 100}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.location.hash = `#/news/${item.id}`; }}
                  className="group block border border-gray-200 hover:border-emerald-300 transition-colors overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={imgMap[i % imgMap.length]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.categoryColor}`}>
                        {item.category}
                      </span>
                      <span className="text-[10px] text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-black text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.summary}</p>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="text-gray-400">{item.author}</span>
                      <span className="font-bold text-emerald-600 group-hover:underline">Baca →</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

        </div>
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
      <EmergencyModal isOpen={isEmergencyOpen} onClose={() => setIsEmergencyOpen(false)} />
    </div>
  );
}
