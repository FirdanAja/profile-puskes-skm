import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { patientTestimonials } from '../../data/newsData';
import { StarIcon } from '../common/Icons';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-20">
        
        <SectionTitle
          badge="Suara Masyarakat"
          title="Pengalaman Nyata Warga Berobat Bersama Kami"
          subtitle="Kepuasan dan kesembuhan pasien adalah kebanggaan terbesar seluruh tenaga kesehatan di Puskesmas Sukamulya."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patientTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
