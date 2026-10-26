import React from 'react';
import { CheckCircleIcon } from '../common/Icons';
import { wilayahKerjaData } from '../../data/wilayahKerjaData';

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapMarkerIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 7 10 13 10 13s10-6 10-13c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

function WilayahCard({ wilayah }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
          <MapMarkerIcon className="w-5 h-5 text-emerald-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm text-gray-900">{wilayah.nama}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{wilayah.kelurahan}</p>
        </div>
      </div>
      <div className="space-y-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700 min-w-fit">Populasi:</span>
          <span>{wilayah.populasi.toLocaleString('id-ID')} jiwa</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700 min-w-fit">Faskes:</span>
          <span className="inline-block px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
            {wilayah.faskes}
          </span>
        </div>
      </div>
    </div>
  );
}

function LayananCard({ layanan }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-2 mb-2">
        <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
        <h4 className="font-bold text-sm text-gray-900">{layanan.nama}</h4>
      </div>
      <p className="text-xs text-gray-600 mb-3">{layanan.deskripsi}</p>
      <div className="flex items-center gap-1 text-xs">
        <MapPinIcon className="w-4 h-4 text-emerald-600" />
        <span className="text-gray-600">{layanan.lokasi}</span>
      </div>
    </div>
  );
}

export default function WilayahKerjaSection() {
  return (
    <section id="wilayah-kerja" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            Jangkauan Layanan
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">Wilayah Kerja UPTD Sukamulya</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            {wilayahKerjaData.deskripsi}
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1">
              {wilayahKerjaData.statistik.totalPopulasi.toLocaleString('id-ID')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">Total Populasi</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
              {wilayahKerjaData.statistik.desa}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">Desa</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1">
              {wilayahKerjaData.statistik.faskes}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">Faskes</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-200">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
              {wilayahKerjaData.statistik.tenagaMedis}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-semibold">Tenaga Medis</div>
          </div>
        </div>

        {/* Map & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0000000000!2d${wilayahKerjaData.koordinat.lng}!3d${wilayahKerjaData.koordinat.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6b0000!2sPuskesmas%20Sukamulya!5e0!3m2!1sid!2sid!4v1628000000000`}
            ></iframe>
          </div>

          {/* Info Box */}
          <div className="space-y-4">
            {/* Alamat */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 border border-emerald-200">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-emerald-900 mb-1">Alamat</div>
                  <p className="text-xs text-emerald-800 leading-snug">{wilayahKerjaData.alamat}</p>
                </div>
              </div>
            </div>

            {/* Telepon */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
              <div className="flex items-start gap-2">
                <PhoneIcon className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-blue-900 mb-1">Telepon</div>
                  <a href={`tel:${wilayahKerjaData.telp}`} className="text-xs text-blue-800 hover:underline break-all">
                    {wilayahKerjaData.telp}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-5 border border-pink-200">
              <div className="flex items-start gap-2">
                <EmailIcon className="w-5 h-5 text-pink-600 shrink-0 mt-1" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-pink-900 mb-1">Email</div>
                  <a href={`mailto:${wilayahKerjaData.email}`} className="text-xs text-pink-800 hover:underline break-all">
                    {wilayahKerjaData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wilayah Kerja */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-200 inline-block">
            Cakupan Wilayah Kerja
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wilayahKerjaData.wilayahKerja.map((wilayah) => (
              <WilayahCard key={wilayah.id} wilayah={wilayah} />
            ))}
          </div>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-200 inline-block">
            Layanan di Wilayah Kerja
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wilayahKerjaData.layananWilayah.map((layanan, idx) => (
              <LayananCard key={idx} layanan={layanan} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
