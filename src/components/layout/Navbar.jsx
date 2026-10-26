import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon, MenuIcon, XIcon } from '../common/Icons';

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

/* Arrow dropdown — ikon chevron tipis tanpa background */
const DropArrow = ({ open, scrolled }) => (
  <svg
    className={`w-3.5 h-3.5 transition-all duration-300 ${open ? 'rotate-180' : ''}
      ${scrolled
        ? open ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-500'
        : open ? 'text-white' : 'text-white/60 group-hover:text-white'
      }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

/* Arrow nested — chevron kanan tipis */
const SubArrow = ({ open }) => (
  <svg
    className={`w-3.5 h-3.5 transition-all duration-300 ${open ? 'translate-x-0.5 text-emerald-600' : 'text-emerald-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// ── Data menu ──────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Beranda", href: "#beranda", active: true },
  {
    label: "Profil",
    href: "#profil",
    dropdown: [
      { label: "Tugas Pokok dan Fungsi", href: "#tupoksi" },
      { label: "Visi Misi", href: "#profil" },
      {
        label: "Struktur Organisasi",
        href: "#/org",
      },
      { label: "Pegawai", href: "#pegawai" },
      { label: "Maklumat Pelayanan", href: "#profil" },
    ],
  },
  {
    label: "Layanan",
    href: "#layanan",
    dropdown: [
      { label: "Jenis Pelayanan", href: "#layanan" },
      {
        label: "Standar Pelayanan",
        href: "#standar-pelayanan",
        sub: [
          { label: "Klaster 1 - Manajemen", href: "#standar-pelayanan" },
          { label: "Klaster 2 - Ibu dan Anak", href: "#standar-pelayanan" },
          { label: "Klaster 3 - Dewasa & Lansia", href: "#standar-pelayanan" },
          { label: "Klaster 4 - Penyakit Menular", href: "#standar-pelayanan" },
          { label: "Lintas Klaster", href: "#standar-pelayanan" },
        ],
      },
    ],
  },
  {
    label: "Informasi",
    href: "#alur-pelayanan",
    dropdown: [
      { label: "Alur Pelayanan", href: "#alur-pelayanan" },
      { label: "Wilayah Kerja", href: "#wilayah-kerja" },
      { label: "Jadwal Dokter", href: "#jadwal-dokter" },
      { label: "Berita & Artikel", href: "#edukasi" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  { label: "Berita", href: "#edukasi" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

// ── Dropdown Item (dengan dukungan nested) ─────────────────────────────────────
function DropdownItem({ item, scrolled, closeAll }) {
  const [subOpen, setSubOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setSubOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (item.sub) {
    return (
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setSubOpen(true)}
        onMouseLeave={() => setSubOpen(false)}
      >
        <button
          type="button"
          onClick={() => setSubOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 border-b border-gray-100 last:border-0 first:rounded-t-xl last:rounded-b-xl transition-colors"
        >
          {item.label}
          <SubArrow open={subOpen} />
        </button>

        {subOpen && (
          <div className="absolute left-full top-0 w-56 pl-1.5 z-50">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-1">
              {item.sub.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={(e) => {
                    e.preventDefault();
                    closeAll();
                    window.location.hash = s.href.replace(/^#/, '');
                  }}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 border-b border-gray-100 last:border-0 first:rounded-t-xl last:rounded-b-xl transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      onClick={(e) => {
        if (item.href.startsWith('#/')) {
          e.preventDefault();
          window.location.hash = item.href.replace(/^#/, '');
        }
        closeAll();
      }}
      className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 border-b border-gray-100 last:border-0 first:rounded-t-xl last:rounded-b-xl transition-colors"
    >
      {item.label}
    </a>
  );
}

// ── Nav item desktop ───────────────────────────────────────────────────────────
function NavItem({ link, scrolled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const baseClass = `flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-md`;
  const colorClass = scrolled
    ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
    : 'text-white hover:text-white hover:bg-white/15';

  if (!link.dropdown) {
    return (
      <a href={link.href} className={`${baseClass} ${colorClass}`}>
        {link.label}
      </a>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`group ${baseClass} ${colorClass}`}
        aria-expanded={open}
      >
        {link.label}
        <DropArrow open={open} scrolled={scrolled} />
      </button>

      {open && (
        /* pt-2 = jembatan invisible supaya mouse bisa turun ke panel tanpa gap */
        <div className="absolute top-full left-0 w-56 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-1">
            {link.dropdown.map((item) => (
              <DropdownItem
                key={item.label}
                item={item}
                scrolled={scrolled}
                closeAll={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Mobile accordion item ──────────────────────────────────────────────────────
function MobileNavItem({ link, closeMobile }) {
  const [open, setOpen] = useState(false);

  if (!link.dropdown) {
    return (
      <a
        href={link.href}
        onClick={closeMobile}
        className={`flex items-center justify-between px-3 py-2.5 text-base font-semibold rounded-xl transition-colors ${
          link.active
            ? 'bg-emerald-50 text-emerald-700'
            : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
        }`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-base font-semibold rounded-xl text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
        aria-expanded={open}
      >
        {link.label}
        <span
          className={`inline-flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300
            ${open ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400'}`}
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="ml-4 mt-1 border-l-2 border-emerald-100 pl-3 space-y-0.5">
          {link.dropdown.map((item) =>
            item.sub ? (
              <MobileSubItem key={item.label} item={item} closeMobile={closeMobile} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="block py-2 px-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

function MobileSubItem({ item, closeMobile }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-2 px-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
        aria-expanded={open}
      >
        {item.label}
        <span
          className={`inline-flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300
            ${open ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-400'}`}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="ml-3 border-l-2 border-emerald-50 pl-2 space-y-0.5">
          {item.sub.map((s) => (
            <a
              key={s.label}
              href={s.href}
              onClick={closeMobile}
              className="block py-1.5 px-2 text-sm text-gray-600 hover:text-emerald-600 rounded-lg transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ────────────────────────────────────────────────────────────────
export default function Navbar({ onOpenEmergency, forceScrolled = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lang, setLang] = useState('ID');

  useEffect(() => {
    if (forceScrolled) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-white/40 shadow-sm'
          : 'bg-white/5 backdrop-blur-sm border-b border-white/10 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/logo.jpg"
              alt="Logo Puskesmas Sukamulya"
              className="w-11 h-11 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
            />
            <div>
              <div className={`font-extrabold text-base leading-tight transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
                Puskesmas Sukamulya
              </div>
              <div className={`text-[10px] font-semibold leading-none transition-colors duration-300 ${scrolled ? 'text-emerald-600' : 'text-white'}`}>
                Amanah, Setia, Ramah, Inovatif
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 ml-6">
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} scrolled={scrolled} />
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            {/* Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className={`hidden sm:flex w-9 h-9 items-center justify-center rounded-full transition-all duration-300 ${
                scrolled
                  ? 'text-black hover:text-emerald-600 hover:bg-emerald-50'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label="Cari"
              aria-expanded={searchOpen}
            >
              <SearchIcon className="w-[18px] h-[18px]" />
            </button>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={() => setLang((l) => l === 'ID' ? 'EN' : 'ID')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-sm transition-all ${
                scrolled
                  ? 'border-gray-200 text-gray-700 hover:border-emerald-500 hover:text-emerald-600'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              <span className="text-base leading-none">{lang === 'ID' ? '🇮🇩' : '🇬🇧'}</span>
              {lang}
            </button>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/15'
              }`}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-100">
            <form
              className="relative max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const query = e.currentTarget.elements.search.value.trim();
                if (query) window.location.href = `/search?q=${encodeURIComponent(query)}`;
              }}
            >
              <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                autoFocus
                type="search"
                name="search"
                placeholder="Cari layanan, dokter, informasi..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10"
              />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <MobileNavItem
                key={link.label}
                link={link}
                closeMobile={() => setMobileOpen(false)}
              />
            ))}

            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2">
                {['ID', 'EN'].map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => { setLang(l); setMobileOpen(false); }}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      lang === l
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {l === 'ID' ? '🇮🇩 Indonesia' : 'EN English'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
