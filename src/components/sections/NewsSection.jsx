import React, { useState } from 'react';
import { newsList } from '../../data/newsData';
import { XIcon } from '../common/Icons';
import Reveal from '../common/Reveal';

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section id="edukasi" className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-20">

        {/* Header */}
        <Reveal dir="up">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">Update Terbaru</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Berita & Informasi</h2>
            </div>
            <a href="#edukasi" className="text-sm font-bold text-gray-900 hover:text-emerald-600 transition-colors">
              Lihat Semua →
            </a>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {newsList.map((item, i) => (
            <Reveal key={item.id} dir="up" delay={i * 100}>
              <div
                className="group cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                {/* Image area */}
                <div className={`h-48 rounded-2xl mb-4 overflow-hidden ${
                  item.categoryColor?.includes('teal') ? 'bg-emerald-50' :
                  item.categoryColor?.includes('blue') ? 'bg-blue-50' : 'bg-amber-50'
                } flex items-center justify-center relative`}>
                  <span className="text-6xl opacity-20">📰</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-2xl" />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="text-[10px] text-gray-400">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.summary}</p>

                <div className="mt-3 text-xs font-bold text-emerald-600">
                  Baca selengkapnya →
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-7 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
            <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${selectedNews.categoryColor}`}>
              {selectedNews.category}
            </span>
            <h3 className="text-xl font-black text-gray-900 leading-snug mb-3">{selectedNews.title}</h3>
            <div className="text-xs text-gray-400 pb-4 mb-4 border-b border-gray-100">
              {selectedNews.date} · {selectedNews.author}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{selectedNews.summary}</p>
          </div>
        </div>
      )}
    </section>
  );
}
