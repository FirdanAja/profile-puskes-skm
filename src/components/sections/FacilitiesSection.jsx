import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { facilitiesList } from '../../data/facilitiesData';
import { BuildingOfficeIcon, AmbulanceIcon, BabyIcon, MicroscopeIcon, HeartPulseIcon } from '../common/Icons';

export default function FacilitiesSection() {
  const getFacilityIcon = (iconName) => {
    const iconClass = "w-6 h-6 text-teal-600";
    switch (iconName) {
      case 'AmbulanceIcon': return <AmbulanceIcon className={iconClass} />;
      case 'BabyIcon': return <BabyIcon className={iconClass} />;
      case 'MicroscopeIcon': return <MicroscopeIcon className={iconClass} />;
      case 'HeartPulseIcon': return <HeartPulseIcon className={iconClass} />;
      default: return <BuildingOfficeIcon className={iconClass} />;
    }
  };

  return (
    <section id="fasilitas" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Fasilitas & Sarana"
          title="Fasilitas Medis yang Bersih, Modern & Ramah Pasien"
          subtitle="Kami terus berbenah dan meningkatkan standar higienitas ruang medis, kenyamanan ruang tunggu ber-AC, dan kesiapan peralatan diagnostik."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesList.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {getFacilityIcon(fac.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {fac.tag}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {fac.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {fac.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-teal-700 font-semibold">
                <span>Standar Mutu Paripurna</span>
                <span className="text-emerald-600 font-bold">Tersedia & Bersih</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
