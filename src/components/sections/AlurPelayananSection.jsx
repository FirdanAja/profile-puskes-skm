import React from 'react';
import { CheckCircleIcon } from '../common/Icons';
import { alurPelayananData, alurPelayananTips } from '../../data/alurPelayananData';

function AlurCard({ step }) {
  const warm = step.id >= 5;

  return (
    <article className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className={`h-1.5 ${warm ? 'bg-amber-500' : 'bg-emerald-600'}`} />
      <div className="p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg font-black text-white shadow-sm ${warm ? 'bg-amber-500' : 'bg-emerald-600'}`}>
            {step.id}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-black leading-tight text-gray-900 sm:text-base">{step.nama}</h3>
            <p className="mt-1 text-[10px] leading-relaxed text-gray-500 sm:text-xs">{step.deskripsi}</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
          {step.detail.map((item, index) => (
            <div key={index} className="flex items-start gap-1.5 text-[10px] leading-relaxed text-gray-600 sm:text-[11px]">
              <CheckCircleIcon className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FlowArrow({ direction = 'right' }) {
  return (
    <span className={`absolute z-10 hidden h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md md:flex ${
      direction === 'left'
        ? '-left-3 top-1/2 -translate-y-1/2'
        : '-right-3 top-1/2 -translate-y-1/2'
    }`}>
      {direction === 'left' ? '←' : '→'}
    </span>
  );
}

function TipsCard({ tip }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-sm font-black text-emerald-700">
          {tip.title.charAt(0)}
        </span>
        <h3 className="text-base font-black text-gray-900">{tip.title}</h3>
      </div>
      <ul className="space-y-2">
        {tip.items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-xs leading-relaxed text-gray-600">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AlurPelayananSection() {
  const flyerSteps = [
    ...alurPelayananData.slice(0, 4),
    ...alurPelayananData.slice(4).reverse(),
  ];

  return (
    <section id="alur-pelayanan" className="border-t border-gray-100 bg-[#f7f5ee] py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <div className="relative mb-7 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-500 px-5 py-7 text-center text-white shadow-lg sm:mb-10 sm:px-10 sm:py-10">
          <div className="absolute -left-8 -top-12 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -right-6 h-40 w-40 rounded-full bg-white/10" />
          <p className="relative text-[10px] font-black uppercase tracking-[0.25em] text-emerald-100">Panduan Pasien</p>
          <h2 className="relative mt-2 text-3xl font-black leading-tight sm:text-5xl">
            Alur Pelayanan<br className="sm:hidden" /> di Puskesmas
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-xs text-emerald-50 sm:text-sm">
            Melayani dengan ramah, cepat, tepat, dan tuntas
          </p>
          <div className="relative mx-auto mt-5 inline-flex rounded-full bg-white/20 px-5 py-2 text-xs font-bold backdrop-blur-sm">
            ♥ Kami siap melayani Anda dengan sepenuh hati
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white p-3 shadow-xl shadow-gray-900/5 sm:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-100 pb-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Prosedur kunjungan</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Ikuti alur dari kiri ke kanan, lalu kembali ke kiri</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">8 Tahap Pelayanan</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-3">
            {flyerSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <AlurCard step={step} />
                {index < 3 && <FlowArrow />}
                {index === 4 && <FlowArrow direction="left" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Sebelum berkunjung</p>
            <h3 className="mt-1 text-xl font-black text-gray-900">Informasi Penting</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {alurPelayananTips.map((tip) => <TipsCard key={tip.title} tip={tip} />)}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 p-6 text-center text-white shadow-lg shadow-emerald-900/10 sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100">Butuh bantuan?</p>
          <h3 className="mt-2 text-lg font-black sm:text-xl">Kami siap membantu Anda</h3>
          <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-emerald-50 sm:text-sm">
            Hubungi kami melalui telepon atau kunjungi langsung Puskesmas Sukamulya.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:+622711234567" className="w-full rounded-xl bg-white px-6 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-50 sm:w-auto">Hubungi Kami</a>
            <a href="#kontak" className="w-full rounded-xl border border-white/50 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-white/10 sm:w-auto">Lokasi Puskesmas</a>
          </div>
        </div>
      </div>
    </section>
  );
}
