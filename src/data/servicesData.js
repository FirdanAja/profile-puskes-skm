export const serviceCategories = [
  { id: "all", label: "Semua Layanan" },
  { id: "rawat-jalan", label: "Poli Rawat Jalan" },
  { id: "prioritas", label: "Ibu & Anak" },
  { id: "darurat", label: "UGD & Penunjang" },
  { id: "pencegahan", label: "Pencegahan & Konsultasi" }
];

export const servicesList = [
  {
    id: "poli-umum",
    title: "Poli Umum",
    category: "rawat-jalan",
    icon: "StethoscopeIcon",
    color: "teal",
    description: "Pemeriksaan kesehatan umum, diagnosis penyakit akut & kronis, serta rujukan medis terpadu oleh dokter umum berpengalaman.",
    badge: "BPJS & Umum",
    schedule: "Senin - Sabtu | 08.00 - 13.30",
    features: ["Pemeriksaan dokter umum", "Resep obat terstandar", "Skrining penyakit kronis", "Surat keterangan sehat"]
  },
  {
    id: "poli-gigi",
    title: "Poli Gigi & Mulut",
    category: "rawat-jalan",
    icon: "ToothIcon",
    color: "sky",
    description: "Pelayanan kesehatan gigi komprehensif, mulai dari penambalan, pencabutan gigi sulung & tetap, pembersihan karang gigi (scaling), hingga konsultasi ortodonti dasar.",
    badge: "BPJS & Umum",
    schedule: "Senin - Jumat | 08.30 - 13.00",
    features: ["Scaling & cabut gigi", "Tambal gigi komposit", "Pemeriksaan gigi anak", "Konsultasi kebersihan mulut"]
  },
  {
    id: "poli-kia",
    title: "Poli KIA & KB",
    category: "prioritas",
    icon: "BabyIcon",
    color: "rose",
    description: "Kesehatan Ibu dan Anak: pemeriksaan kehamilan rutin (ANC), deteksi risiko tinggi, USG dasar, KB suntik/IUD/implan, dan imunisasi TT calon pengantin.",
    badge: "Program Prioritas",
    schedule: "Senin - Sabtu | 08.00 - 13.30",
    features: ["Pemeriksaan kehamilan (ANC)", "Pelayanan KB terlengkap", "Pemeriksaan pasca salin (PNC)", "Edukasi ASI eksklusif"]
  },
  {
    id: "poli-mtbs",
    title: "Poli MTBS & Anak",
    category: "prioritas",
    icon: "HeartPulseIcon",
    color: "amber",
    description: "Manajemen Terpadu Balita Sakit (MTBS), pemantauan tumbuh kembang anak (SDIDTK), imunisasi dasar lengkap, serta penanganan stunting.",
    badge: "Ramah Anak",
    schedule: "Senin - Kamis | 08.00 - 12.30",
    features: ["Imunisasi wajib balita", "Deteksi dini stunting", "Timbang & ukur berkala", "Vitamin A & obat cacing"]
  },
  {
    id: "ugd-24-jam",
    title: "UGD 24 Jam & Ambulans",
    category: "darurat",
    icon: "AmbulanceIcon",
    color: "red",
    description: "Unit Gawat Darurat siap siaga 24 jam dengan tim dokter siaga, perawat trauma, oksigen sentral, bedah minor, dan armada ambulans darurat.",
    badge: "24 Jam Non-Stop",
    schedule: "Setiap Hari | 24 Jam Siaga",
    features: ["Penanganan trauma & luka", "Resusitasi & stabilisasi", "Nebulizer & terapi oksigen", "Ambulans rujukan cepat"]
  },
  {
    id: "laboratorium",
    title: "Laboratorium Digital",
    category: "darurat",
    icon: "MicroscopeIcon",
    color: "indigo",
    description: "Pemeriksaan darah lengkap, tes urin, gula darah, kolesterol, asam urat, tes dahak TB TCM, rapid test, dan skrining penyakit menular.",
    badge: "Hasil Cepat",
    schedule: "Senin - Sabtu | 08.00 - 13.00",
    features: ["Hematologi digital", "Tes kimia darah & urine", "Skrining diabetes & kolesterol", "Pemeriksaan dahak TCM TB"]
  },
  {
    id: "farmasi-apotek",
    title: "Farmasi & Apotek",
    category: "darurat",
    icon: "PillIcon",
    color: "emerald",
    description: "Penyediaan obat resep bermutu tinggi sesuai formularium nasional (FORNAS), konseling obat oleh Apoteker bersertifikat, dan edukasi minum obat teratur.",
    badge: "Gratis BPJS",
    schedule: "24 Jam (Menyesuaikan UGD)",
    features: ["Obat paten & generik berkualitas", "Konseling apoteker langsung", "Pengemasan rapi & higienis", "Pelayanan obat ramah lansia"]
  },
  {
    id: "konseling-gizi",
    title: "Konseling Gizi & Sanitasi",
    category: "pencegahan",
    icon: "ShieldCheckIcon",
    color: "lime",
    description: "Konsultasi diet sehat untuk penderita hipertensi, diabetes, asam urat, terapi gizi kurang/buruk pada balita, serta penyuluhan kesehatan lingkungan sanitasi.",
    badge: "Konsultasi Ahli",
    schedule: "Senin & Rabu | 08.30 - 12.00",
    features: ["Penghitungan indeks massa tubuh", "Menu diet personal medis", "Pemberian makanan tambahan (PMT)", "Inspeksi sanitasi air bersih"]
  }
];
