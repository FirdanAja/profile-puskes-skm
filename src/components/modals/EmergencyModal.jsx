import React from 'react';
import { XIcon, AmbulanceIcon, PhoneIcon, AlertCircleIcon } from '../common/Icons';
import { puskesmasInfo } from '../../data/puskesmasData';

export default function EmergencyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-rose-100 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-red-700 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Tutup modal darurat"
          >
            <XIcon className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            Siaga 24 Jam Non-Stop
          </div>
          <h3 className="text-xl font-extrabold tracking-tight">Layanan Gawat Darurat (UGD)</h3>
          <p className="text-xs text-rose-100 mt-1">
            Prioritas penanganan darurat medis, persalinan darurat, dan armada ambulans siaga.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <AmbulanceIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-rose-700 font-semibold uppercase">Hotline Ambulans & UGD</p>
                <a
                  href={`tel:${puskesmasInfo.emergencyPhone.replace(/[^0-9]/g, '')}`}
                  className="text-2xl font-black text-rose-600 hover:text-rose-700 tracking-tight block"
                >
                  {puskesmasInfo.emergencyPhone}
                </a>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-rose-200 flex gap-2">
              <a
                href={`tel:${puskesmasInfo.emergencyPhone.replace(/[^0-9]/g, '')}`}
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold text-center transition-colors"
              >
                Panggil UGD Sekarang
              </a>
              <a
                href={puskesmasInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center transition-colors"
              >
                WhatsApp Siaga
              </a>
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-2">
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <AlertCircleIcon className="w-4 h-4 text-amber-500" />
              Segera ke UGD jika mengalami gejala darurat:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-500">
              <li>Nyeri dada hebat / sesak napas berat tiba-tiba</li>
              <li>Perdarahan aktif tidak berhenti atau luka robek terbuka</li>
              <li>Kejang berulang atau penurunan kesadaran</li>
              <li>Tanda persalinan aktif / ketuban pecah dini</li>
              <li>Keracunan atau reaksi alergi parah (anafilaksis)</li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
            <strong>Alamat UGD:</strong> {puskesmasInfo.address} (Pintu masuk UGD di sisi kiri gedung utama, akses 24 jam).
          </div>
        </div>

      </div>
    </div>
  );
}
