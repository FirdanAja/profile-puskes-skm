import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '../common/Icons';
import { puskesmasInfo } from '../../data/puskesmasData';

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const MapIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

export default function Footer({ onOpenEmergency }) {
  const linkGroups = [
    {
      title: "Link Cepat",
      links: ["Beranda", "Berita", "Galeri", "Layanan", "Informasi", "Kontak"],
      hrefs: ["#beranda", "#edukasi", "#galeri", "#layanan", "#alur-pelayanan", "#kontak"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800">

          {/* Col 1: Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="Logo Puskesmas Sukamulya"
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-md"
              />
              <div>
                <div className="font-black text-white text-sm leading-tight">Puskesmas Sukamulya</div>
                <p className="text-xs text-emerald-600 leading-relaxed">
              {puskesmasInfo.subTagline}
            </p>
              </div>
            </div>
            
            {/* Social media */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/p/UPTD-Puskesmas-Sukamulya-Kuningan-100064967303605/" },
                { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/puskesmassukamulya1/" },
                { Icon: YouTubeIcon, label: "YouTube", href: "https://www.youtube.com/@Puskesmassukamulyakabkuningan" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-emerald-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Alamat & Kontak */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Alamat</h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{puskesmasInfo.address}</span>
              </div>
            </div>
            <h4 className="text-sm font-bold text-white pt-2">Kontak</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{puskesmasInfo.emergencyPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="break-all">{puskesmasInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Link Cepat */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Link Cepat</h4>
            <ul className="space-y-2 text-xs">
              {["Beranda", "Berita", "Galeri", "Layanan", "Informasi", "Kontak"].map((item, i) => (
                <li key={item}>
                  <a
                    href={["#beranda","#edukasi","#galeri","#layanan","#alur-pelayanan","#kontak"][i]}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Maps */}
          <div className="space-y-4" id="kontak">
            <h4 className="text-sm font-bold text-white">Lokasi Kami</h4>
            {/* Map placeholder */}
            <div className="w-full h-40 bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <iframe
                title="Lokasi Puskesmas Sukamulya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d106.5!3d-6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPuskesmas%20Sukamulya!5e0!3m2!1sen!2sid!4v1697000000000!5m2!1sen!2sid&q=Puskesmas+Sukamulya+Tangerang"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href={puskesmasInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
            >
              <MapIcon className="w-3.5 h-3.5" />
              Lihat Lokasi di Google Maps →
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2024 Puskesmas Sukamulya. All rights reserved.</p>
          <p className="text-gray-600">Sehat Bersama, Kuat Bersama</p>
        </div>

      </div>
    </footer>
  );
}
