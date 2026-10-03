# PT AMANI - Website Company Profile

Website profil perusahaan resmi **PT AMANI** (PT Amani Teknokrat Nusantara), perusahaan penyedia solusi teknologi informasi, infrastruktur jaringan terstruktur, software kustom, dan audit keamanan siber.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Design System Tokens

- **Burgundy (Brand Utama / Section Gelap)**: `#4a1722`
- **Wine (Hover & Aksen Sekunder)**: `#7a2433`
- **Stone (Background Terang)**: `#f3f0ec`
- **Sand (Permukaan Kartu & Node Jaringan)**: `#d8cfc4`
- **Charcoal (Teks Utama)**: `#1e1a1b`
- **Brass (CTA & Highlight Interaktif)**: `#c99a3d`
- **Dark Mode Background**: `#170b0e`
- **Dark Mode Surface**: `#251216`
- **Dark Mode Text**: `#efe8e2`

### Tipografi
- **Headings**: Bricolage Grotesque
- **Body**: Plus Jakarta Sans

---

## 🚀 Fitur & Komponen Utama

- **Hero Canvas Network**: Interaktif dengan partikel node jaringan (Sand `#d8cfc4`, pendaran Brass `#c99a3d` di sekitar kursor/touch, chip mode: Jaringan / Keamanan / Data).
- **Navbar Sticky**: Dropdown desktop keyboard-accessible, accordion mobile, blur background saat scroll, toggle dark mode, & CTA Konsultasi.
- **ServiceExplorer**: Layout Master-Detail interaktif untuk 9 layanan TI.
- **SolutionCards**: Kartu expand sektoral (Pendidikan, Perusahaan, Pemerintahan, UMKM).
- **PortfolioGrid**: Filter portofolio per bidang industri.
- **ConsultModal**: Modal global "Konsultasi Gratis" dengan validasi formulir dan auto-fill topik berdasarkan halaman/tombol pemicu.
- **WhatsApp Button**: Tombol melayang di pojok kanan bawah.
- **Aksesibilitas & SEO**: High contrast (WCAG AA), focus visible, prefers-reduced-motion, semantic HTML, dynamic metadata & OpenGraph.

---

## 🛠️ Cara Jalankan Proyek

### 1. Prasyarat
Pastikan Node.js (v18.0.0+) dan npm sudah terpasang.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Dev Server
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 4. Build Produksi
```bash
npm run build
npm run start
```

---

## 📁 Struktur Direktori

```text
/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── tentang-kami/
│   │   ├── produk/
│   │   ├── layanan/
│   │   ├── solusi/
│   │   ├── portofolio/
│   │   ├── insight/
│   │   └── kontak/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroNetworkCanvas.tsx
│   │   ├── ServiceExplorer.tsx
│   │   ├── SolutionCards.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── ConsultModal.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── Breadcrumb.tsx
│   │   ├── ImageSlot.tsx
│   │   ├── Footer.tsx
│   │   └── Providers.tsx
│   └── data/
│       └── companyData.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
