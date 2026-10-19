import React from 'react';
import { puskesmasInfo } from '../../data/puskesmasData';
import { UsersIcon, AwardIcon, StethoscopeIcon, HeartPulseIcon } from '../common/Icons';

export default function QuickStats() {
  const icons = [
    <UsersIcon className="w-6 h-6 text-teal-600" />,
    <StethoscopeIcon className="w-6 h-6 text-emerald-600" />,
    <HeartPulseIcon className="w-6 h-6 text-blue-600" />,
    <AwardIcon className="w-6 h-6 text-amber-500" />
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-20">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {puskesmasInfo.stats.map((stat, idx) => (
            <div key={stat.label} className={`flex items-start gap-4 ${idx !== 0 ? 'sm:pl-6' : ''} pt-4 sm:pt-0`}>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-2xs">
                {icons[idx]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
