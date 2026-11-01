import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/layout/PageHeader';
import { puskesmasInfo } from '../data/puskesmasData';
import EmergencyModal from '../components/modals/EmergencyModal';
import Reveal from '../components/common/Reveal';

// ─── Warna ────────────────────────────────────────────────────────────────────
const Y = { fill:'#fef9c3', stroke:'#ca8a04', text:'#713f12' };
const G = { fill:'#d1fae5', stroke:'#059669', text:'#064e3b' };
const B = { fill:'#dbeafe', stroke:'#3b82f6', text:'#1e3a8a' };
const O = { fill:'#fee2e2', stroke:'#ef4444', text:'#7f1d1d' };

// ─── Primitif SVG ────────────────────────────────────────────────────────────
// Box: rect + teks multiline
function Box({ x, y, w, h=36, c=Y, text='' }) {
  const lines = text.split('|');
  const n = lines.length;
  const cy = y + h/2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3"
        fill={c.fill} stroke={c.stroke} strokeWidth="1.6"/>
      {lines.map((l,i) => (
        <text key={i}
          x={x+w/2} y={cy + (i-(n-1)/2)*14}
          textAnchor="middle" dominantBaseline="middle"
          fontSize="9.5" fontWeight="700" fill={c.text}>{l.trim()}</text>
      ))}
    </g>
  );
}

// Diamond keputusan
function Diam({ x, y, w=80, h=50, c=Y, text='' }) {
  const cx=x+w/2, cy=y+h/2;
  const pts=`${cx},${y} ${x+w},${cy} ${cx},${y+h} ${x},${cy}`;
  const lines = text.split('|');
  const n = lines.length;
  return (
    <g>
      <polygon points={pts} fill={c.fill} stroke={c.stroke} strokeWidth="1.6"/>
      {lines.map((l,i) => (
        <text key={i}
          x={cx} y={cy+(i-(n-1)/2)*13}
          textAnchor="middle" dominantBaseline="middle"
          fontSize="9.5" fontWeight="700" fill={c.text}>{l.trim()}</text>
      ))}
    </g>
  );
}

// Panah lurus dengan marker
function Arr({ x1,y1,x2,y2,lbl='',lx,ly }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#4b5563" strokeWidth="1.5" markerEnd="url(#mArrow)"/>
      {lbl && <text x={lx??(x1+x2)/2} y={ly??(y1+y2)/2-5}
        textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#374151">{lbl}</text>}
    </g>
  );
}

// Polyline dengan panah di ujung
function Poly({ pts, lbl='', lx, ly }) {
  const d = pts.map((p,i)=>(i===0?`M${p[0]},${p[1]}`:`L${p[0]},${p[1]}`)).join(' ');
  const last = pts[pts.length-1];
  return (
    <g>
      <path d={d} fill="none" stroke="#4b5563" strokeWidth="1.5" markerEnd="url(#mArrow)"/>
      {lbl && <text x={lx??last[0]} y={ly??last[1]-6}
        textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#374151">{lbl}</text>}
    </g>
  );
}

// Garis tanpa panah
function Ln({ x1,y1,x2,y2 }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4b5563" strokeWidth="1.5"/>;
}

// ─── Flowchart ───────────────────────────────────────────────────────────────
// Koordinat grid (center dari setiap kolom & baris)
// Kolom X (left edge of box):
const X = {
  poned:    10,   // Poned
  pasien:   10,   // Pasien Datang
  gawat:    120,  // Diamond Gawat / Infeksius / Kohorting / PollTB
  rekam:    240,  // Rekam Medik / Pendaftaran
  nurse:    370,  // Nurse Station
  poli:     490,  // Poli group
  farmasi:  630,  // Farmasi / USG / Konseling
  pulang:   760,  // Pulang / Rujukan
  ugd:      10,   // UGD (row atas kiri)
  kasir:    190,  // KASIR
  lab:      360,  // Lab
  rujukRS:  510,  // Rujuk RS
};

// ROW Y (top edge of box):
const R = {
  top:   75,   // UGD / KASIR / Lab / Rujuk RS
  r2:    160,  // Pasien Datang / Gawat?
  r3:    245,  // Infeksius? / Rekam Medik / Nurse / Poli1 / USG
  r4:    310,  // Pendaftaran / Poli2
  r5:    375,  // Kohorting / Poli3
  r6:    440,  // Poli4
  r7:    505,  // PollTB / Poli5
  r8:    570,  // Konseling / fork
  r9:    635,  // Mendapat Obat / Rujuk
  r10:   700,  // Pulang (dari obat)
};

function FlowChart() {
  // Lebar box
  const Wb = { s:70, m:90, l:110, xl:130 };

  return (
    <svg viewBox="0 0 900 780" width="100%"
      style={{ minWidth:700, background:'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
               border:'2px solid #6ee7b7' }}>
      <defs>
        <marker id="mArrow" viewBox="0 0 10 10" refX="8" refY="5"
          markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563"/>
        </marker>
      </defs>

      {/* HEADER */}
      <rect x="0" y="0" width="900" height="62" fill="#059669"/>
      <text x="450" y="20" textAnchor="middle" fontSize="14" fontWeight="800" fill="white">UPTD PUSKESMAS SUKAMULYA</text>
      <text x="450" y="36" textAnchor="middle" fontSize="9.5" fill="#a7f3d0" fontStyle="italic">Amanah · Setia · Ramah · Inovatif (ASRI)</text>
      <text x="450" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fef08a">Alur Pelayanan PUSKESMAS</text>

      {/* ═══ ROW ATAS: UGD ← KASIR → Lab → Rujuk RS ═══════════════════════ */}
      {/* UGD */}
      <Box x={20}  y={R.top} w={120} h={42} c={O} text="Ruang Tindakan /|Gawat Darurat"/>
      {/* KASIR */}
      <Box x={230} y={R.top} w={90}  h={36} c={Y} text="KASIR"/>
      <text x={275} y={R.top+44} textAnchor="middle" fontSize="8" fill="#713f12">Pasien Umum</text>
      {/* Lab */}
      <Box x={420} y={R.top} w={100} h={36} c={B} text="Laboratorium"/>
      {/* Rujuk RS */}
      <Box x={620} y={R.top} w={100} h={42} c={O} text="Rujuk|Rumah Sakit"/>

      {/* KASIR → UGD (kiri) */}
      <Arr x1={230} y1={R.top+18} x2={140} y2={R.top+18} lbl="Ya" lx={185} ly={R.top+12}/>
      {/* KASIR → Lab (kanan) */}
      <Arr x1={320} y1={R.top+18} x2={420} y2={R.top+18}/>
      {/* Lab → Rujuk RS */}
      <Arr x1={520} y1={R.top+18} x2={620} y2={R.top+18}/>

      {/* ═══ PASIEN DATANG ══════════════════════════════════════════════════ */}
      <Box x={20} y={R.r2} w={100} h={36} c={G} text="Pasien|Datang"/>
      {/* Pasien → Gawat? */}
      <Arr x1={120} y1={R.r2+18} x2={160} y2={R.r2+18}/>
      {/* Pasien → Inpartu → Poned */}
      <Arr x1={70} y1={R.r2+36} x2={70} y2={R.r2+80} lbl="Inpartu" lx={50} ly={R.r2+60}/>
      <Box x={20} y={R.r2+80} w={100} h={36} c={Y} text="Poned"/>

      {/* ═══ DIAMOND GAWAT? ════════════════════════════════════════════════ */}
      <Diam x={160} y={R.r2-2} w={88} h={56} text="Gawat?"/>
      {/* Gawat Ya → KASIR (ke atas) */}
      <Poly pts={[[204,R.r2-2],[204,R.top+18],[230,R.top+18]]} lbl="Ya" lx={210} ly={(R.r2-2+R.top)/2}/>
      {/* Gawat Tidak → Infeksius? */}
      <Arr x1={204} y1={R.r2+54} x2={204} y2={R.r3-2} lbl="Tidak" lx={186} ly={(R.r2+54+R.r3-2)/2}/>

      {/* ═══ DIAMOND INFEKSIUS? ════════════════════════════════════════════ */}
      <Diam x={160} y={R.r3-2} w={88} h={56} text="Infeksius?"/>
      {/* Infeksius Tidak → Pendaftaran */}
      <Arr x1={248} y1={R.r3+26} x2={295} y2={R.r3+26} lbl="Tidak" lx={270} ly={R.r3+19}/>
      {/* Infeksius Ya → Kohorting */}
      <Arr x1={204} y1={R.r3+54} x2={204} y2={R.r5} lbl="Ya" lx={186} ly={(R.r3+54+R.r5)/2}/>

      {/* ═══ REKAM MEDIK ═══════════════════════════════════════════════════ */}
      <Box x={295} y={R.r3} w={100} h={36} c={Y} text="Ruang|Rekam Medic"/>
      {/* KASIR → Rekam Medik (turun) */}
      <Poly pts={[[275,R.top+52],[275,R.r3+8],[295,R.r3+8]]}/>
      {/* Rekam Medik → kanan "Alur RM" */}
      <Arr x1={395} y1={R.r3+18} x2={415} y2={R.r3+18} lbl="Alur RM" lx={405} ly={R.r3+10}/>

      {/* ═══ PENDAFTARAN ════════════════════════════════════════════════════ */}
      <Box x={295} y={R.r4} w={100} h={40} c={Y} text="Pendaftaran"/>
      <text x={345} y={R.r4+50} textAnchor="middle" fontSize="8" fill="#713f12">(Alur Pasien)</text>
      {/* Pendaftaran → Nurse */}
      <Arr x1={395} y1={R.r4+20} x2={415} y2={R.r4+20}/>

      {/* ═══ NURSE STATION ══════════════════════════════════════════════════ */}
      <Box x={415} y={R.r4} w={100} h={40} c={Y} text="Nurse|Station"/>
      {/* Nurse → Poli (ke kanan) */}
      <Arr x1={515} y1={R.r4+20} x2={535} y2={R.r4+20}/>
      {/* Nurse → USG (ke atas kanan) */}
      <Poly pts={[[465,R.r4],[465,R.r3+18],[630,R.r3+18]]}/>

      {/* ═══ POLI GROUP ════════════════════════════════════════════════════ */}
      {/* Garis vertikal kiri poli */}
      <Ln x1={535} y1={R.r3+8} x2={535} y2={R.r7+28}/>
      {[
        {label:'Poli Umum',   y:R.r3},
        {label:'Poli Lansia', y:R.r4},
        {label:'Poli KIA/KB', y:R.r5},
        {label:'Poli MTBS',   y:R.r6},
        {label:'Poli Gigi',   y:R.r7},
      ].map(({label,y},i) => (
        <g key={label}>
          <Ln  x1={535} y1={y+14} x2={545} y2={y+14}/>
          <Arr x1={545} y1={y+14} x2={565} y2={y+14}/>
          <Box x={565} y={y} w={90} h={28} c={B} text={label}/>
          {/* Poli → Farmasi */}
          <Arr x1={655} y1={y+14} x2={680} y2={y+14}/>
        </g>
      ))}

      {/* ═══ R. KONSELING TERPADU ════════════════════════════════════════════ */}
      <rect x={540} y={R.r8} width={110} height={80} rx="3"
        fill={Y.fill} stroke={Y.stroke} strokeWidth="1.6"/>
      <text x={595} y={R.r8+14} textAnchor="middle" fontSize="9" fontWeight="700" fill={Y.text}>R. Konseling Terpadu</text>
      <line x1={544} y1={R.r8+20} x2={646} y2={R.r8+20} stroke={Y.stroke} strokeWidth="0.8" opacity="0.5"/>
      <text x={595} y={R.r8+33} textAnchor="middle" fontSize="7.5" fill={Y.text}>Pandu PTM / Gizi &amp; Farmasi</text>
      <text x={595} y={R.r8+46} textAnchor="middle" fontSize="7.5" fill={Y.text}>Kesehatan Lingkungan</text>
      <text x={595} y={R.r8+59} textAnchor="middle" fontSize="7.5" fill={Y.text}>PROMKES</text>
      <text x={595} y={R.r8+72} textAnchor="middle" fontSize="7.5" fill={Y.text}>PERKESMAS</text>

      {/* ═══ PELAYANAN USG ══════════════════════════════════════════════════ */}
      <Box x={680} y={R.r3} w={100} h={36} c={B} text="Pelayanan USG"/>

      {/* ═══ RUANG FARMASI ══════════════════════════════════════════════════ */}
      <Box x={680} y={R.r4} w={100} h={36} c={Y} text="Ruang|Farmasi"/>
      {/* Farmasi → Pulang */}
      <Arr x1={780} y1={R.r4+18} x2={800} y2={R.r4+18}/>
      <Box x={800} y={R.r4} w={80} h={36} c={G} text="Pulang"/>

      {/* ═══ RUANG RUJUKAN ══════════════════════════════════════════════════ */}
      <Box x={680} y={R.r6} w={100} h={36} c={O} text="Ruang|Rujukan"/>
      {/* Garis vertikal kanan poli → Ruang Rujukan */}
      <Ln x1={680} y1={R.r3+18} x2={680} y2={R.r7+14}/>

      {/* ═══ KOHORTING ══════════════════════════════════════════════════════ */}
      <Box x={160} y={R.r5} w={88} h={46} c={O} text="Kohorting"/>
      <text x={204} y={R.r5+58} textAnchor="middle" fontSize="7" fill={O.text}>Pasien Covid → R.Kohorting</text>
      <text x={204} y={R.r5+68} textAnchor="middle" fontSize="7" fill={O.text}>Proses Layanan dibantu petugas</text>
      {/* Kohorting → PollTB */}
      <Arr x1={204} y1={R.r5+46} x2={204} y2={R.r7} lbl="TB?" lx={186} ly={(R.r5+46+R.r7)/2}/>

      {/* ═══ POLL TB ════════════════════════════════════════════════════════ */}
      <Box x={160} y={R.r7} w={88} h={46} c={O} text="Poll TB"/>
      <text x={204} y={R.r7+58} textAnchor="middle" fontSize="7" fill={O.text}>Seluruh proses layanan</text>
      <text x={204} y={R.r7+68} textAnchor="middle" fontSize="7" fill={O.text}>dilayani petugas di Poli TB</text>

      {/* Poll TB → fork */}
      <Arr x1={204} y1={R.r7+46} x2={204} y2={R.r8+10}/>
      {/* fork horizontal */}
      <Ln x1={140} y1={R.r8+10} x2={268} y2={R.r8+10}/>
      <Arr x1={140} y1={R.r8+10} x2={140} y2={R.r9}/>
      <Arr x1={268} y1={R.r8+10} x2={268} y2={R.r9}/>
      {/* Mendapat Obat */}
      <Box x={100} y={R.r9} w={88} h={36} c={Y} text="Mendapat Obat"/>
      <Arr x1={144} y1={R.r9+36} x2={144} y2={R.r10}/>
      <Box x={110} y={R.r10} w={68} h={32} c={G} text="Pulang"/>
      {/* Rujuk */}
      <Box x={230} y={R.r9} w={76} h={36} c={O} text="Rujuk"/>

    </svg>
  );
}

export default function AlurPelayananPage({ onOpenEmergency }) {
  const [isEmOpen, setIsEmOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar onOpenEmergency={onOpenEmergency}/>
      <PageHeader
        title="Alur Pelayanan Puskesmas"
        bgImage="/puskesmas.png"
        breadcrumbs={[
          {label:'Beranda',href:'#'},
          {label:'Informasi',href:'#'},
          {label:'Alur Pelayanan',href:'#'},
        ]}
        meta={[{icon:<span>📋</span>, text:'UPTD Puskesmas Sukamulya'}]}
      />
      <main className="flex-1 py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-10">
          <Reveal dir="up">
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">Prosedur</p>
              <h2 className="text-2xl font-black text-gray-900">Alur Pelayanan Pasien</h2>
            </div>
          </Reveal>
          <Reveal dir="up" delay={100}>
            <div className="overflow-x-auto">
              <FlowChart/>
            </div>
          </Reveal>
          <Reveal dir="up" delay={150}>
            <div className="mt-5 flex flex-wrap gap-4 justify-center text-xs text-gray-500">
              {[
                {c:G, label:'Mulai / Selesai'},
                {c:Y, label:'Ruangan / Layanan'},
                {c:B, label:'Pemeriksaan'},
                {c:O, label:'Darurat / Rujukan'},
              ].map(l=>(
                <div key={l.label} className="flex items-center gap-1.5">
                  <div style={{width:18,height:12,background:l.c.fill,border:`1.5px solid ${l.c.stroke}`,borderRadius:2}}/>
                  {l.label}
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div style={{width:12,height:12,background:Y.fill,border:`1.5px solid ${Y.stroke}`,transform:'rotate(45deg)'}}/>
                Keputusan
              </div>
            </div>
          </Reveal>
          <Reveal dir="up" delay={200}>
            <div className="mt-6 border border-emerald-200 bg-emerald-50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black text-gray-900 mb-1">Butuh bantuan navigasi layanan?</p>
                <p className="text-xs text-gray-400">Petugas siap membantu mengarahkan Anda.</p>
              </div>
              <a href={puskesmasInfo.whatsappLink} target="_blank" rel="noreferrer"
                className="shrink-0 text-xs font-bold bg-emerald-600 text-white px-5 py-2.5 hover:bg-emerald-700 transition-colors">
                Hubungi via WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer onOpenEmergency={onOpenEmergency}/>
      <EmergencyModal isOpen={isEmOpen} onClose={()=>setIsEmOpen(false)}/>
    </div>
  );
}
