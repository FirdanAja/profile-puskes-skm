import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { newsList } from '../data/newsData';
import { puskesmasInfo } from '../data/puskesmasData';
import EmergencyModal from '../components/modals/EmergencyModal';

const imgMap = ['/puskesmas.png', '/puskesmas2.png', '/skmview.png'];

export default function NewsDetailPage({ newsId, onOpenEmergency }) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const news = newsList.find((n) => n.id === newsId) || newsList[0];
  const others = newsList.filter((n) => n.id !== news.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsId]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title={news.title}
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Berita', href: '#edukasi' },
          { label: news.category, href: '#' },
        ]}
        meta={[
          {
            icon: (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ),
            text: news.date,
          },
          {
            icon: (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            ),
            text: news.author,
          },
        ]}
      />

      <main className="flex-1 py-14 bg-white">
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Konten Utama ── */}
            <article className="lg:col-span-2">
              <img
                src={imgMap[newsList.indexOf(news) % imgMap.length]}
                alt={news.title}
                className="w-full h-72 object-cover mb-8"
              />

              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${news.categoryColor}`}>
                {news.category}
              </span>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-4">
                {news.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-gray-400 pb-6 mb-6 border-b border-gray-100">
                <span>{news.date}</span>
                <span>·</span>
                <span>{news.author}</span>
                <span>·</span>
                <span>{news.readTime}</span>
              </div>

              <div className="text-gray-600 leading-relaxed space-y-4 text-sm">
                <p>{news.summary}</p>
                <p>
                  Puskesmas Sukamulya terus berkomitmen untuk memberikan pelayanan kesehatan terbaik bagi masyarakat Kecamatan Sukamulya dan sekitarnya. Dengan tenaga medis yang profesional dan fasilitas yang memadai, setiap warga berhak mendapatkan layanan kesehatan yang berkualitas.
                </p>
                <p>
                  Program ini merupakan bagian dari upaya peningkatan derajat kesehatan masyarakat secara menyeluruh, sesuai dengan visi dan misi UPTD Puskesmas Sukamulya yang berorientasi pada pelayanan prima.
                </p>
                <p>
                  Untuk informasi lebih lanjut mengenai program dan kegiatan Puskesmas Sukamulya, masyarakat dapat menghubungi langsung melalui nomor telepon atau WhatsApp yang tersedia, atau mengunjungi langsung gedung Puskesmas di Jl. Raya Sutan Shahrir No. 597, Kec. Cigugur, Kab. Kuningan.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  ← Kembali ke Berita
                </a>
              </div>
            </article>

            {/* ── Sidebar Sticky ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-4">

                <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest pb-3 border-b-2 border-emerald-500">
                  Berita Lainnya
                </h3>

                <div className="space-y-0 border border-gray-200">
                  {others.map((item, i) => (
                    <a
                      key={item.id}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = `#/news/${item.id}`;
                      }}
                      className="group block border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="w-full h-40 overflow-hidden">
                        <img
                          src={imgMap[i % imgMap.length]}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-2 ${item.categoryColor}`}>
                          {item.category}
                        </span>
                        <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-snug mb-1">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-gray-400">{item.date} · {item.readTime}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Informasi</p>
                  <p className="text-sm font-black text-gray-900 mb-3">Ada pertanyaan seputar layanan?</p>
                  <a
                    href={puskesmasInfo.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold bg-emerald-600 text-white px-4 py-2.5 hover:bg-emerald-700 transition-colors w-full justify-center"
                  >
                    Hubungi via WhatsApp →
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
    </div>
  );
}
