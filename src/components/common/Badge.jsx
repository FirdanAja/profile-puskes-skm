import React from 'react';

export default function Badge({ children, variant = "emerald", className = "" }) {
  const variants = {
    teal: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    blue: "bg-blue-50 text-blue-700 border-blue-200/60",
    sky: "bg-sky-50 text-sky-700 border-sky-200/60",
    amber: "bg-amber-50 text-amber-700 border-amber-200/60",
    rose: "bg-rose-50 text-rose-700 border-rose-200/60",
    red: "bg-red-50 text-red-700 border-red-200/60",
    slate: "bg-slate-100 text-slate-700 border-slate-200"
  };

  const selectedVariant = variants[variant] || variants.teal;

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${selectedVariant} ${className}`}>
      {children}
    </span>
  );
}
