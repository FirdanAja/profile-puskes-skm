import React from 'react';

export default function PageHeader({
  title,
  breadcrumbs = [],
  bgImage = '/puskesmas2.png',
  meta = [],
}) {
  return (
    <div className="relative w-full overflow-hidden flex flex-col" style={{ minHeight: 520 }}>

      {/* Background foto */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="header bg"
          className="w-full h-full object-cover scale-105"
          style={{ filter: 'blur(2px)' }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Breadcrumb — mepet atas, setelah navbar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-20 pt-24">
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.label}>
                {i > 0 && <span className="text-white/40 text-xs">›</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold">
                    {crumb.label}
                  </span>
                ) : (
                  <a
                    href={crumb.href}
                    className="text-white/60 hover:text-white text-xs font-medium transition-colors"
                  >
                    {crumb.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

    
      <div className="relative z-10 mt-auto max-w-7xl mx-auto w-full px-20 pb-10">
        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-black text-white leading-tight max-w-2xl">
          {title}
        </h1>

        {meta.length > 0 && (
          <div className="flex flex-wrap items-center gap-5 mt-4">
            {meta.map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 text-white/60 text-xs font-medium">
                {m.icon}
                <span>{m.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
