# Website Portofolio Nadhin Awwali Fari
*Front-End Developer | UI/UX Designer — Spesialisasi Antarmuka Web & Ekosistem IoT*

Website portofolio interaktif dan responsif yang dibangun dengan estetika **Monochrome Textured Dark** (hitam pekat bertekstur, rantai/chrome abstrak, kartu glassmorphism, dan tipografi modern elegan).

---

## 📁 Struktur Folder Proyek

```
portfolio/
├── index.html                  # File utama website portofolio
├── assets/
│   ├── css/
│   │   └── style.css          # Styling kustom (noise grain, glassmorphism, chrome effects)
│   ├── js/
│   │   ├── data.js            # Data profil, statistik, keahlian, dan seluruh proyek
│   │   └── main.js            # Logika filter proyek, modal studi kasus, navigasi, dan WhatsApp form
│   ├── img/
│   │   ├── profile.jpg        # Foto profil resmi HD Nadhin Awwali Fari
│   │   ├── chain-tl.png       # Ornamen rantai perak kiri atas
│   │   ├── chain-br.png       # Ornamen rantai perak kanan bawah
│   │   ├── project-iot.png    # Dokumentasi perangkat keras IoT UGM
│   │   ├── project-kafesco.jpg# Mockup UI/UX Mobile Apps KAFES.CO
│   │   └── project-kostkurnia.jpg # Mockup Web Platform KOST KURNIA
│   └── docs/
│       └── CV-Nadhin-Awwali-Fari-2026.pdf # File CV untuk tombol "Unduh CV"
└── README.md                  # Panduan penggunaan
```

---

## 🚀 Cara Menjalankan Website

### Opsi 1: Buka Langsung (Paling Mudah)
Cukup klik ganda (double-click) file `index.html` di File Explorer, atau klik kanan lalu pilih **Open with Google Chrome / Microsoft Edge**. Website langsung berjalan sempurna tanpa perlu instalasi apapun!

### Opsi 2: Menggunakan Local Server (Live Server / Node / Python)
Jika Anda menggunakan VS Code atau terminal:
```bash
# Menggunakan npx serve
npx serve .

# Atau menggunakan Python bawaan
python -m http.server 8000
```
Buka browser dan akses `http://localhost:8000`.

---

## ✏️ Cara Mengubah Data Portofolio

Semua data tersentralisasi di file **`assets/js/data.js`**.
Anda tidak perlu mengutak-atik kode HTML yang panjang:
1. Buka file `assets/js/data.js`.
2. Edit teks, biodata, persentase skill, atau tambahkan proyek baru pada array `projects`.
3. Simpan file, lalu refresh browser Anda.

---

## 🌐 Cara Deploy ke Internet (Gratis)

### GitHub Pages:
1. Buat repository baru di GitHub Anda: `https://github.com/namiaww/portfolio`.
2. Push semua file di dalam folder ini ke repository tersebut.
3. Buka tab **Settings** > **Pages** di repository GitHub Anda, pilih Branch `main`, lalu klik **Save**.
4. Website Anda akan aktif di: `https://namiaww.github.io/portfolio`.

### Vercel / Netlify:
- Cukup drag-and-drop folder `portfolio` ini ke dashboard **Netlify Drop** atau import repository GitHub ke **Vercel** untuk deploy instan.
