# Profil Puskesmas Sukamulya - Landing Page Modern

Landing page resmi dan modern untuk profil **Puskesmas Sukamulya**, dirancang dengan estetika bersih (*clean*), ramah pengguna (*user-friendly*), dan berstandar pelayanan kesehatan masyarakat Kementerian Kesehatan Republik Indonesia.

---

## 🏥 Fitur Utama

1. **TopBar & Header Informasi**
   - Jam operasional poliklinik terpadu & akreditasi Paripurna Kemenkes RI.
   - Panggilan darurat langsung UGD & Ambulans 24 Jam.

2. **Hero Section Interaktif**
   - Headline profesional dengan pencarian cepat (*Poli, Dokter, Lab, Imunisasi*).
   - Chip filter pencarian otomatis yang mengarahkan langsung ke layanan terkait.
   - Indikator status poliklinik real-time & rata-rata waktu tunggu antrean.

3. **Statistik Kinerja Faskes (Quick Stats)**
   - 48.500+ Pasien Terlayani / Tahun.
   - 36+ Tenaga Medis Ahli & Tersertifikasi.
   - 14+ Poliklinik & Layanan Spesifik.
   - 98.7% Indeks Kepuasan Masyarakat (IKM).

4. **Profil, Visi, Misi & Budaya Kerja "TERAPI"**
   - Visi & Misi resmi Kemenkes.
   - Tata Nilai Budaya Kerja: **T**erpercaya, **E**mpati, **R**amah, **A**kuntabel, **P**rofesional, **I**novatif.
   - Maklumat pelayanan publik resmi.

5. **Layanan & Poliklinik Lengkap (Filterable)**
   - Filter tab berdasarkan kategori: Rawat Jalan, Prioritas Ibu & Anak, UGD & Penunjang, Pencegahan & Konsultasi.
   - Fitur pencarian instan dan tombol langsung ke antrean poli.

6. **Jadwal Dokter & Tenaga Medis (Interactive Filter)**
   - Filter hari praktik (Senin s/d Sabtu).
   - Keterangan nomor SIP, peran, dan kutipan dedikasi pelayanan.

7. **Alur Pelayanan Pasien (4 Langkah Praktis)**
   - Pendaftaran & Antrean -> Skrining Vital -> Konsultasi Dokter -> Apotek/Laboratorium.

8. **Fasilitas & Sarana Puskesmas**
   - Ruang tunggu ber-AC, UGD 24 Jam, Ruang Bersalin PONED, Laboratorium Hematologi & TCM Digital, Pojok Laktasi & Arena Bermain Anak, Armada Ambulans Siaga.

9. **Edukasi & Berita Terkini**
   - Artikel kesehatan GERMAS, panduan e-Puskesmas, pencegahan DBD dengan modal baca pop-up.

10. **Testimoni Pasien & Warga**
    - Ulasan autentik masyarakat dengan rating bintang 5.

11. **FAQ (Pertanyaan Umum)**
    - Accordion interaktif seputar BPJS Kesehatan gratis, alur rujukan rumah sakit, surat keterangan sehat, dan jam layanan darurat.

12. **Kontak, Peta & Kotak Pengaduan Warga**
    - Alamat lengkap, peta Google Maps, hotline WhatsApp, serta formulir kritik/saran interaktif.

13. **E-Antrean & Booking Modal**
    - Formulir pendaftaran antrean online pasien (NIK/BPJS, WhatsApp, Poli, Dokter, Tanggal).
    - Penerbitan otomatis **Tiket Antrean Digital** dengan kode booking unik, estimasi jam, dan fitur salin tiket ke clipboard / WhatsApp.

14. **Modal Gawat Darurat (UGD 24 Jam)**
    - Panduan triase gejala darurat dan direct dialing ke armada ambulans.

---

## 📁 Struktur Folder yang Rapi & Modular

```
profile_puskes/
├── public/                     # Aset statis publik (favicon, icons)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                 # Aset grafis lokal
│   ├── components/
│   │   ├── common/             # Komponen UI dasar & Ikon reusable
│   │   │   ├── Badge.jsx
│   │   │   ├── Icons.jsx       # Koleksi ikon SVG lengkap & zero-dependency
│   │   │   └── SectionTitle.jsx
│   │   ├── layout/             # Komponen layout global
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── TopBar.jsx
│   │   ├── modals/             # Dialog interaktif
│   │   │   ├── BookingModal.jsx    # Generator e-Tiket antrean pasien
│   │   │   └── EmergencyModal.jsx  # Panggilan darurat & panduan UGD
│   │   └── sections/           # Bagian-bagian halaman landing page
│   │       ├── AboutSection.jsx
│   │       ├── ContactLocationSection.jsx
│   │       ├── DoctorsSchedule.jsx
│   │       ├── EmergencyCallout.jsx
│   │       ├── FacilitiesSection.jsx
│   │       ├── FlowSection.jsx
│   │       ├── HeroSection.jsx
│   │       ├── NewsSection.jsx
│   │       ├── QuickStats.jsx
│   │       ├── ServicesSection.jsx
│   │       └── TestimonialsSection.jsx
│   ├── data/                   # Data modular & terpisah dari UI
│   │   ├── doctorsData.js      # Profil, jadwal & spesialisasi dokter
│   │   ├── facilitiesData.js   # Daftar sarana & fasilitas puskesmas
│   │   ├── faqData.js          # Daftar pertanyaan umum pasien
│   │   ├── newsData.js         # Artikel edukasi & testimoni warga
│   │   ├── puskesmasData.js    # Profil, visi-misi, kontak, jam operasional
│   │   └── servicesData.js     # Data poliklinik & layanan medis
│   ├── App.jsx                 # Halaman utama aplikasi
│   ├── App.css                 # Custom CSS kelas pendukung
│   ├── index.css               # Konfigurasi Tailwind CSS v4 & animasi
│   └── main.jsx                # Entry point React
├── index.html                  # HTML template dengan Plus Jakarta Sans Font
├── package.json
└── vite.config.js
```

---

## 🚀 Cara Menjalankan Project

1. Pastikan dependensi telah terinstal:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
   Buka URL lokal yang muncul (biasanya `http://localhost:5173/`).

3. Lakukan build produksi:
   ```bash
   npm run build
   ```
# profile-puskes-skm
