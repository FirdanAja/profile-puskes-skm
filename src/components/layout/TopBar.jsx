import React from 'react';
import { PhoneIcon, ClockIcon, MapPinIcon, ShieldCheckIcon } from '../common/Icons';
import { puskesmasInfo } from '../../data/puskesmasData';

export default function TopBar({ onOpenEmergency }) {
  return (
    <div className="bg-transparent text-slate-200 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Hours & Location */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <ClockIcon className="w-3.5 h-3.5 text-teal-400" />
            <span>Poli: {puskesmasInfo.hours.weekdays}</span>
          </div>
          <span className="hidden md:inline text-slate-600">|</span>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPinIcon className="w-3.5 h-3.5 text-teal-400" />
            <span className="truncate max-w-xs">Kota Sukabumi, Jawa Barat</span>
          </div>
          <span className="hidden lg:inline text-slate-600">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span>{puskesmasInfo.accreditation}</span>
          </div>
        </div>

        {/* Right: Emergency hotline quick dial */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEmergency}
            className="group flex items-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white px-2.5 py-0.5 rounded-full font-semibold transition-all shadow-xs cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            <PhoneIcon className="w-3 h-3" />
            <span>UGD 24 Jam: {puskesmasInfo.emergencyPhone}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
