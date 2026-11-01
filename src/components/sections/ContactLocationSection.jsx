import React, { useState } from 'react';
import { puskesmasInfo } from '../../data/puskesmasData';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon } from '../common/Icons';
import Reveal from '../common/Reveal';
import useCountUp from '../../hooks/useCountUp';

function CountStat({ stat }) {
  const [ref, count] = useCountUp(stat.value, 2000);
  return (
    <div ref={ref}>
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">{stat.label}</p>
      <p className="text-3xl font-black text-gray-900 leading-none mb-1">
        {count.toLocaleString('id-ID')}{stat.suffix}
      </p>
      <p className="text-xs text-gray-400">{stat.unit}</p>
    </div>
  );
}

const coverageStats = [
  { label: "Total Penduduk", value: 44941, suffix: "", unit: "Jiwa dalam binaan wilayah" },
  { label: "Posyandu Aktif", value: 58, suffix: " Unit", unit: "Posyandu Balita & Lansia" },
  { label: "Kader Terlatih", value: 210, suffix: "+", unit: "Relawan kesehatan terpadu" },
];

const desas = [
  "Desa Puncak", "Desa Cileuleuy", "Desa Gunung Keling", "Kel. Cigadung",
  "Desa BabakanMulya", "Desa Cisantana", "Kel. Cipari", "Kel. Cigugur",
  "Kel. Sukamulya", "Kel. Winduherang",
];

export default function ContactLocationSection({ onOpenEmergency }) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', category: 'Saran & Masukan', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFormData({ name: '', phone: '', category: 'Saran & Masukan', message: '' });
    }, 4000);
  };

  return (
    <section id="kontak" className="bg-white">

      {/* ── BAGIAN 1: Cakupan Wilayah + Map ── */}
      <div className="py-14 lg:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Kiri — info wilayah */}
            <div>
              <Reveal dir="up">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">Cakupan Wilayah Binaan</p>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                  Wilayah Kerja & Demografi Masyarakat
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-10">
                  Melayani dan mendampingi kesehatan keluarga di 8 desa binaan Kecamatan Sukamulya.
                </p>
              </Reveal>

              <Reveal dir="up" delay={100}>
                <div className="grid grid-cols-3 gap-8 pb-10 border-b border-gray-100 mb-10">
                  {coverageStats.map((s) => <CountStat key={s.label} stat={s} />)}
                </div>
              </Reveal>

              <Reveal dir="up" delay={150}>
                <p className="text-sm font-bold text-gray-800 mb-4">Daftar Desa Binaan Puskesmas:</p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                  {desas.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>

              </Reveal>
            </div>

            {/* Kanan — Map */}
            <Reveal dir="right" delay={100}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Lokasi Puskesmas Sukamulya</p>
                    <p className="text-xs text-gray-400 mt-0.5">Jl. Raya Sutan Shahrir No. 597, Kec. Cigugur, Kab. Kuningan</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/9dCjv26zFApw14BF8"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 shrink-0"
                  >
                    Buka Maps →
                  </a>
                </div>
                <div className="w-full overflow-hidden border border-gray-200" style={{ height: 380 }}>
                  <iframe
                    title="Lokasi Puskesmas Sukamulya"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d108.4614873!3d-6.979307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f15007cbd4e83%3A0x252da218d08fe547!2sUPTD%20PUSKESMAS%20SUKAMULYA!5e0!3m2!1sid!2sid!4v1697000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* ── BAGIAN 2: Kontak & Form Pengaduan ── */}
      <div className="py-14 lg:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-20">

          <Reveal dir="up">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Hubungi Kami</p>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Informasi Kontak & Pengaduan</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Kiri — kontak */}
            <Reveal dir="left" className="lg:col-span-5">
              <div className="space-y-4">
                {/* Alamat */}


                {/* Hotlines */}
                <div className="bg-white p-5 border border-gray-100 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Kontak Langsung</p>
                  <div className="flex items-center justify-between p-3 bg-rose-50 border border-rose-100">
                    <div className="flex items-center gap-2.5">
                      <PhoneIcon className="w-4 h-4 text-rose-600" />
                      <div>
                        <p className="text-xs font-bold text-rose-900">UGD & Ambulans 24 Jam</p>
                        <p className="text-[11px] text-rose-600">{puskesmasInfo.emergencyPhone}</p>
                      </div>
                    </div>
                    <button onClick={onOpenEmergency} className="px-3 py-1.5 bg-rose-600 text-white text-[11px] font-bold">Panggil</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100">
                    <div className="flex items-center gap-2.5">
                      <PhoneIcon className="w-4 h-4 text-emerald-600" />
                      <div>
                        <p className="text-xs font-bold text-emerald-900">WhatsApp Informasi</p>
                        <p className="text-[11px] text-emerald-600">{puskesmasInfo.whatsappNumber}</p>
                      </div>
                    </div>
                    <a href={puskesmasInfo.whatsappLink} target="_blank" rel="noreferrer" className="px-3 py-1.5 bg-emerald-600 text-white text-[11px] font-bold">Chat WA</a>
                  </div>
                 
                </div>

                {/* Jam */}
                <div className="bg-white p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <ClockIcon className="w-4 h-4 text-emerald-600" />
                    <p className="text-xs font-bold text-gray-800">Jadwal Loket Pendaftaran</p>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p><strong>Senin - Kamis:</strong> 07.30 - 12.00 WIB</p>
                    <p><strong>Jumat:</strong> 07.30 - 11.00 WIB</p>
                    <p><strong>Sabtu:</strong> 07.30 - 11.00 WIB</p>
                    <p className="text-rose-600 font-bold pt-1">UGD & Persalinan: 24 Jam Non-Stop</p>
                  </div>
                </div>

                            <div className="bg-white p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <ClockIcon className="w-4 h-4 text-emerald-600" />
                    <p className="text-xs font-bold text-gray-800">Jam Pelayanan</p>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p><strong>Senin - Kamis:</strong> 07.30 - 14.15 WIB</p>
                    <p><strong>Jumat:</strong> 07.30 - 12.45 WIB</p>
                    <p><strong>Sabtu:</strong> 07.30 - 12.30 WIB</p>
                    <p className="text-rose-600 font-bold pt-1">UGD & Persalinan: 24 Jam Non-Stop</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Kanan — form */}
            <Reveal dir="right" delay={150} className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 border border-gray-100">
                <h3 className="text-lg font-black text-gray-900 mb-11">Kotak Pengaduan & Aspirasi</h3>
                <p className="text-xs text-gray-400 mb-6">Sampaikan kritik, pengaduan, atau apresiasi untuk tenaga kesehatan kami.</p>

                {feedbackSubmitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-100 text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                      <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-emerald-900">Aspirasi Berhasil Terkirim!</h4>
                    <p className="text-xs text-emerald-700">Tim kami akan menindaklanjuti pesan Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Nama Lengkap <span className="text-rose-500">*</span></label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Nama Anda" className="w-full px-3.5 py-2.5 border border-gray-200 text-xs focus:outline-none focus:border-emerald-500" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">No. WhatsApp <span className="text-rose-500">*</span></label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="08123456xxxx" className="w-full px-3.5 py-2.5 border border-gray-200 text-xs focus:outline-none focus:border-emerald-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Kategori</label>
                      <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2.5 border border-gray-200 text-xs bg-white focus:outline-none focus:border-emerald-500">
                        <option>Saran & Masukan Pelayanan</option>
                        <option>Pengaduan Antrean / Loket</option>
                        <option>Pelayanan Dokter / Bidan / Perawat</option>
                        <option>Kebersihan Gedung & Fasilitas</option>
                        <option>Apresiasi Petugas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Pesan <span className="text-rose-500">*</span></label>
                      <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tuliskan pengalaman atau saran Anda..." className="w-full px-3.5 py-2.5 border border-gray-200 text-xs focus:outline-none focus:border-emerald-500" />
                    </div>
                    <button type="submit" className="w-full py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                      Kirimkan Aspirasi
                    </button>
                    <p className="text-[11px] text-gray-400 text-center">Laporan Anda dilindungi asas kerahasiaan identitas pelapor.</p>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </div>

    </section>
  );
}
