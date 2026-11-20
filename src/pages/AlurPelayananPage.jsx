import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { CheckCircleIcon } from '../components/common/Icons';
import {
  alurPelayananData,
  alurPelayananTips,
} from '../data/alurPelayananData';

const stepIcons = [
  '🎫', '⚖️', '🩺', '📋',
  '👨‍⚕️', '🔬', '💊', '🏡',
];

const stepColors = [
  'bg-teal-50 text-teal-700',
  'bg-blue-50 text-blue-700',
  'bg-rose-50 text-rose-600',
  'bg-violet-50 text-violet-700',
  'bg-orange-50 text-orange-600',
  'bg-sky-50 text-sky-700',
  'bg-green-50 text-green-700',
  'bg-emerald-50 text-emerald-700',
];

function ServiceCard({ step, index }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
      <div className="absolute right-4 top-3 text-5xl font-black text-gray-50 transition-colors group-hover:text-emerald-50">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${stepColors[index]}`}>
            {stepIcons[index]}
          </div>

          <span className="rounded-full bg-gray-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Tahap {index + 1}
          </span>
        </div>

        <h3 className="mt-5 text-base font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700">
          {step.nama}
        </h3>

        <p className="mt-2 min-h-[60px] text-sm leading-relaxed text-gray-500">
          {step.deskripsi}
        </p>

        <div className="my-4 h-px bg-gray-100" />

        <details className="group/detail">
          <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold text-emerald-700">
            Lihat informasi
            <span className="transition-transform group-open/detail:rotate-180">↓</span>
          </summary>

          <div className="mt-4 space-y-3">
            {step.detail?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-gray-600">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}

function TipsCard({ tip }) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-lg font-black text-emerald-700">
          {tip.title.charAt(0)}
        </div>
        <h3 className="font-bold text-gray-900">{tip.title}</h3>
      </div>

      <ul className="mt-5 space-y-3">
        {tip.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-gray-500">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function AlurPelayananPage({ onOpenEmergency }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <Navbar onOpenEmergency={onOpenEmergency} />

      <PageHeader
        title="Alur Pelayanan Puskesmas"
        bgImage="/puskesmas2.png"
        breadcrumbs={[
          { label: 'Beranda', href: '#' },
          { label: 'Informasi', href: '#' },
          { label: 'Alur Pelayanan', href: '#/alur-pelayanan' },
        ]}
        meta={[{
          icon: (
            <img
              src="/puskesmas.png"
              alt=""
              className="h-5 w-5 rounded-full object-cover border border-white/30"
            />
          ),
          text: 'UPTD Puskesmas Sukamulya',
        }]}
      />

      <main className="flex-1">
        <section id="alur-pelayanan" className="overflow-hidden bg-[#f8faf9] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#075e50] via-[#087f69] to-[#119b80] p-7 text-white shadow-xl shadow-emerald-900/10 sm:p-10 lg:p-12">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
          <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-5 sm:gap-7 lg:grid-cols-[1.5fr_0.5fr]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-50">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                Panduan Pelayanan Pasien
              </span>

              <h2 className="mt-4 max-w-2xl text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Pelayanan Kesehatan
                <span className="mt-1 block text-emerald-200">Lebih Mudah dan Nyaman</span>
              </h2>

              <p className="mt-3 max-w-xl text-xs leading-relaxed text-emerald-50 sm:text-sm">
                Kenali tahapan pelayanan di Puskesmas Sukamulya agar kunjungan Anda berjalan lebih mudah, tertib, dan nyaman.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href="#tahapan-pelayanan" className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-emerald-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50">
                  Lihat Tahapan <span className="ml-2">↓</span>
                </a>
                <a href="#kontak" className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
                  Hubungi Kami
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 border-t border-white/15 pt-4">
                <div><p className="text-lg font-black">08</p><p className="mt-0.5 text-[10px] text-emerald-100">Tahapan pelayanan</p></div>
                <div><p className="text-lg font-black">4</p><p className="mt-0.5 text-[10px] text-emerald-100">Prinsip pelayanan</p></div>
                <div><p className="text-lg font-black">100%</p><p className="mt-0.5 text-[10px] text-emerald-100">Komitmen melayani</p></div>
              </div>
            </div>

            <div className="relative mx-auto flex h-64 w-full max-w-xs items-center justify-center sm:h-80 sm:max-w-sm">
              <div className="absolute h-56 w-56 rounded-full bg-emerald-300/20 blur-2xl sm:h-72 sm:w-72" />
              <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-72 sm:w-72">
                <div className="relative text-center">
                  <img
                    src="/puskesmas.png"
                    alt="Puskesmas Sukamulya"
                    className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white px-3 py-1.5 text-[10px] font-black tracking-wider text-emerald-800 shadow-lg sm:bottom-4 sm:px-5 sm:py-2 sm:text-xs sm:tracking-widest">PUSKESMAS SUKAMULYA</div>
                </div>
              </div>
              <div className="absolute -left-2 top-8 rounded-2xl bg-white p-3 text-2xl shadow-xl">🩺</div>
              <div className="absolute -right-2 bottom-8 rounded-2xl bg-white p-3 text-2xl shadow-xl">❤️</div>
            </div>
          </div>
        </div>

        <div id="tahapan-pelayanan" className="scroll-mt-24 pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Panduan Kunjungan</span>
              <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">Tahapan Pelayanan</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">Berikut delapan tahapan yang perlu diketahui sebelum dan selama mendapatkan pelayanan kesehatan.</p>
            </div>
            <span className="w-fit rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">8 Tahap tersedia</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {alurPelayananData.map((step, index) => <ServiceCard key={step.id} step={step} index={index} />)}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Komitmen Kami</span>
            <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">Kesehatan Anda, Prioritas Kami</h3>
            <p className="mt-2 text-sm text-gray-500">Kami berkomitmen memberikan pelayanan terbaik.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ['😊', 'Ramah', 'Melayani dengan sikap santun'],
              ['⏱️', 'Cepat', 'Proses pelayanan terarah'],
              ['🎯', 'Tepat', 'Sesuai kebutuhan pasien'],
              ['✓', 'Tuntas', 'Pelayanan sampai selesai'],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">{icon}</div>
                <h4 className="mt-4 font-black text-gray-900">{title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Informasi Pasien</span>
          <h3 className="mt-2 text-2xl font-black text-gray-900">Persiapan Sebelum Berkunjung</h3>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {alurPelayananTips.map((tip) => <TipsCard key={tip.title} tip={tip} />)}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">🏥</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Informasi</p>
              <h3 className="mt-1 text-xl font-black text-gray-900">Peserta JKN / BPJS Kesehatan</h3>
              <p className="mt-1 text-sm text-gray-500">Siapkan identitas dan kartu kepesertaan Anda.</p>
            </div>
          </div>
          <a href="https://www.bpjs-kesehatan.go.id/" target="_blank" rel="noreferrer" className="rounded-xl bg-blue-700 px-6 py-3 text-xs font-bold text-white transition hover:bg-blue-800">Informasi BPJS →</a>
        </div>

        <div id="kontak" className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-700 p-8 text-center text-white sm:p-12">
          <div className="text-4xl">💚</div>
          <h3 className="mt-4 text-2xl font-black sm:text-3xl">Kami Siap Membantu Anda</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-emerald-100">Jangan ragu untuk menghubungi kami jika membutuhkan informasi mengenai pelayanan kesehatan.</p>
          <a href="#kontak-utama" className="mt-6 inline-flex rounded-xl bg-white px-7 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">Informasi Kontak Puskesmas</a>
        </div>
          </div>
        </section>
      </main>

      <Footer onOpenEmergency={onOpenEmergency} />
    </div>
  );
}
