import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { puskesmasInfo } from '../../data/puskesmasData';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon, SendIcon } from '../common/Icons';

export default function ContactLocationSection({ onOpenEmergency }) {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Saran & Masukan',
    message: ''
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
    <section id="kontak" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Hubungi & Kunjungi"
          title="Lokasi Puskesmas & Layanan Pengaduan Warga"
          subtitle="Kami selalu terbuka mendengarkan aspirasi, kritik, dan masukan masyarakat demi pelayanan yang semakin prima."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Alamat Gedung Puskesmas</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {puskesmasInfo.address}
                  </p>
                  <a
                    href={puskesmasInfo.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 mt-2"
                  >
                    <span>Buka Petunjuk Arah di Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Hotlines Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Kontak Langsung Petugas
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-50 border border-rose-100">
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="w-4 h-4 text-rose-600" />
                    <div>
                      <p className="font-bold text-rose-900">UGD & Ambulans 24 Jam</p>
                      <p className="text-[11px] text-rose-700">{puskesmasInfo.emergencyPhone}</p>
                    </div>
                  </div>
                  <button
                    onClick={onOpenEmergency}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 text-white font-bold text-[11px]"
                  >
                    Panggil
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="font-bold text-emerald-900">WhatsApp Informasi</p>
                      <p className="text-[11px] text-emerald-700">{puskesmasInfo.whatsappNumber}</p>
                    </div>
                  </div>
                  <a
                    href={puskesmasInfo.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-[11px]"
                  >
                    Chat WA
                  </a>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700">
                  <MailIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <div>
                    <p className="font-bold">Email Resmi Faskes</p>
                    <p className="text-[11px] text-slate-500">{puskesmasInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-800">
                <ClockIcon className="w-4 h-4 text-teal-600" />
                <span>Jadwal Buka Loket Pendaftaran</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <p><strong>Senin - Kamis:</strong> 07.30 - 13.00 WIB (Poli s/d 14.30)</p>
                <p><strong>Jumat:</strong> 07.30 - 10.30 WIB (Poli s/d 11.30)</p>
                <p><strong>Sabtu:</strong> 08.00 - 11.30 WIB (Poli s/d 12.30)</p>
                <p className="text-rose-600 font-bold pt-1">UGD & Persalinan: 24 Jam Non-Stop</p>
              </div>
            </div>

          </div>

          {/* Right Column: Citizen Feedback & Complaint Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Kotak Pengaduan & Aspirasi Pasien
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Sampaikan kritik yang membangun, pengaduan kendala pelayanan, atau apresiasi untuk tenaga kesehatan kami.
              </p>
            </div>

            {feedbackSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">Aspirasi Berhasil Terkirim!</h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Terima kasih atas kepedulian Anda. Tim Mutu dan Pengaduan Puskesmas Sukamulya akan menindaklanjuti pesan ini dengan seksama.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nama Lengkap Anda <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      No. WhatsApp / HP <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08123456xxxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Kategori Aspirasi
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-hidden focus:border-teal-500"
                  >
                    <option value="Saran & Masukan">Saran & Masukan Pelayanan</option>
                    <option value="Pengaduan Kendala Loket">Pengaduan Antrean / Loket</option>
                    <option value="Pelayanan Medis Dokter/Perawat">Pelayanan Dokter / Bidan / Perawat</option>
                    <option value="Kebersihan & Fasilitas">Kebersihan Gedung & Fasilitas</option>
                    <option value="Apresiasi & Ucapan Terima Kasih">Apresiasi Petugas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Isi Pesan / Pengaduan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pengalaman atau saran Anda dengan detail..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-teal-500"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Kirimkan Aspirasi ke Tim Pengaduan
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Laporan Anda dilindungi asas kerahasiaan identitas pelapor.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
