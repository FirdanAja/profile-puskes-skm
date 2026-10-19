import React, { useState, useEffect, useRef } from 'react';

const slides = [
  { src: '/puskesmas.png',  alt: 'Puskesmas Sukamulya' },
  { src: '/puskesmas2.png', alt: 'Puskesmas Sukamulya 2' },
  { src: '/skmview.png',    alt: 'Sukamulya View' },
];

const INTERVAL = 6000;
const FADE_MS  = 2000;

export default function HeroSection({ onOpenEmergency, onSearchService }) {
  const [current, setCurrent] = useState(0);
  const imgRefs = useRef([]);

  const restartZoom = (idx) => {
    const el = imgRefs.current[idx];
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        restartZoom(next);
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Slideshow Background */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 z-0"
          style={{
            opacity   : i === current ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            willChange: 'opacity',
          }}
        >
          <img
            ref={(el) => { imgRefs.current[i] = el; }}
            src={slide.src}
            alt={slide.alt}
            className="hero-zoom-img w-full h-full object-cover origin-center"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6">

          <h3 className="text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
            Puskesmas Sukamulya
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white/95 leading-relaxed max-w-2xl mx-auto">
            Amanah, Setia, Ramah, Inovatif
          </p>

          {/* Single CTA Button */}
          <div className="pt-2">
            <a
              href="#layanan"
              className="group relative inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-emerald-700 font-bold text-sm overflow-hidden shadow-xl shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Layanan Kami
              </span>
              <span className="relative z-10 w-7 h-7 rounded-full bg-emerald-100 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <a href="#profil" className="group flex flex-col items-center gap-1">
          <span className="w-px h-8 bg-gradient-to-b from-white/0 to-white/40 group-hover:to-white/80 transition-all duration-300" />
          <span className="w-8 h-8 rounded-full border border-white/30 group-hover:border-white/60 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 animate-bounce">
            <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </a>
      </div>

    </section>
  );
}

