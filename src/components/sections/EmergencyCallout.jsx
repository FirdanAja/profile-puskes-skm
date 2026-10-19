import React from 'react';
import { AmbulanceIcon, PhoneIcon } from '../common/Icons';
import { puskesmasInfo } from '../../data/puskesmasData';

export default function EmergencyCallout({ onOpenEmergency }) {
  return (
    <section className="py-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-20">
        <div className="rounded-3xl bg-gradient-to-r from-rose-900 via-rose-800 to-red-950 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
              <AmbulanceIcon className="w-9 h-9 text-rose-300" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-500/40 text-xs font-bold uppercase tracking-wider text-rose-200">
                <span className="w-2 h-2 rounded-full bg-rose-300 animate-ping"></span>
                Gawat Darurat Medis & Ambulans 24 Jam
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Butuh Penanganan Cepat atau Penjemputan Ambulans?
              </h3>
              <p className="text-xs sm:text-sm text-rose-200">
                Dokter jaga dan tim paramedis kami bersiaga 24/7 untuk kondisi darurat, kecelakaan, dan persalinan.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenEmergency}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-rose-800 hover:bg-rose-50 font-black text-base shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <PhoneIcon className="w-5 h-5 text-rose-600" />
              <span>{puskesmasInfo.emergencyPhone}</span>
            </button>
            <a
              href={puskesmasInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-rose-700/60 hover:bg-rose-700 text-white font-bold text-sm border border-rose-400/40 transition-colors"
            >
              WhatsApp Darurat
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
