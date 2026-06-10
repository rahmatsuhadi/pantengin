# Pantengin - Movie Search App

<p align="center">
    <img src="public/images/logo.png" width="80" alt="Pantengin Logo">
</p>

<h1 align="center">Pantengin - Movie Search App</h1>

<p align="center">
    <strong>Aplikasi web pencarian film responsif, modern, dan efisien dengan integrasi TMDB API</strong>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=nextdotjs" alt="Next.js">
    <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?style=flat-square&logo=tailwindcss" alt="TailwindCSS">
    <img src="https://img.shields.io/badge/Zustand-Latest-orange?style=flat-square&logo=react" alt="Zustand">
    <img src="https://img.shields.io/badge/React_Query-5.x-ff4154?style=flat-square&logo=reactquery" alt="React Query">
</p>

---
Sebuah aplikasi web pencarian film yang dibangun untuk memberikan pengalaman pengguna yang responsif, modern, dan efisien. Aplikasi ini memanfaatkan API dari TMDB untuk menampilkan daftar film populer, detail film, serta fitur pencarian yang dinamis.


##  Screenshots

### Desktop 
<table width="100%">
  <tr>
    <td width="50%" align="center" valign="top">
      <small>Homepage / Search</small><br/><br/>
      <img src="public/screenshots/desktop-home.png" alt="Desktop Homepage" width="100%">
    </td>
    <td width="50%" align="center" valign="top">
      <small>Movie Detail & Trailer</small><br/><br/>
      <img src="public/screenshots/desktop-detail.png" alt="Desktop Detail" width="100%">
    </td>
  </tr>
</table>

###  Mobile 
<table width="">
  <tr>
    <td width="50%" align="center" valign="top">
      <small>Responsive Homepage</small><br/><br/>
      <img src="public/screenshots/mobile-home.png" alt="Mobile Homepage" width="50%">
    </td>
    <td width="50%" align="center" valign="top">
      <small>My Favorites List</small><br/><br/>
      <img src="public/screenshots/mobile-favorites.png" alt="Mobile Favorites" width="50%">
    </td>
  </tr>
</table>


## Fitur Utama (Berdasarkan Persyaratan)
1. **Search with Debouncing:** Fitur pencarian film yang dioptimasi menggunakan custom hook debounce (500ms) untuk mencegah pemanggilan API berlebihan saat user sedang mengetik.
2. **Infinite Scroll:** Fitur navigasi data mulus tanpa tombol pagination, dibangun secara manual menggunakan `IntersectionObserver` API bawaan browser.
3. **Detail Movie Page:** Halaman khusus yang menampilkan informasi lengkap film (Sinopsis, Pemeran/Cast, Rating, Genre, dan Trailer Youtube).
4. **My Favorites (Persistence):** Fitur untuk menambah dan menghapus film ke daftar favorit yang state-nya tersimpan secara otomatis di `LocalStorage` (tidak hilang meski browser di-refresh).
5. **Empty & Error States:** Tampilan khusus (beserta *Skeleton Loading* dan Error Boundary halaman 404) yang dirancang elegan jika film tidak ditemukan atau terjadi masalah koneksi ke server.

## Cara Menjalankan Project (How to Run)

Pastikan Node.js sudah terinstal di sistem Anda (direkomendasikan menggunakan versi Node terbaru atau melalui `nvm`).

1. **Clone repository dan masuk ke folder project:**
   ```bash
   git clone <repo-url>
   cd test-movie
   ```

2. **Install dependensi:**
   ```bash
   pnpm install
   ```

3. **Setup Environment Variables:**
   Buat file `.env.local` di *root directory* dan masukkan konfigurasi API TMDB Anda:
   ```env
   TMDB_API_KEY=api_key_anda_disini
   TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Jalankan local development server:**
   ```bash
   pnpm run dev
   ```

5. **Buka aplikasi:** Akses [http://localhost:3000](http://localhost:3000) di browser Anda.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **State Management (Server/Data):** TanStack Query (React Query)
- **State Management (Client/Global):** Zustand (dengan middleware Persist)
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion
- **Data Source:** TMDB API

## Keputusan Arsitektur (Architectural Decisions)

1. **Pemilihan Next.js (Framework Utama)**: Memilih Next.js karena merupakan framework modern standar industri yang menawarkan developer experience (DX) yang luar biasa dengan fitur App Router berbasis folder. Next.js mempermudah penulisan hybrid application dengan menggabungkan keunggulan Server Components (untuk efisiensi render) dan Client Components (untuk interaktivitas tinggi), serta memiliki optimasi performa *build* bawaan yang sangat baik.
2. **Server-Side Rendering (SSR) untuk Halaman Detail Film**: Pengambilan data detail film (`/movies/[id]`) dilakukan di server menggunakan SSR. Keputusan ini didasari oleh:
   - **Dynamic Metadata & SEO**: Memungkinkan pembuatan meta tag secara dinamis (seperti judul film, deskripsi, dan gambar poster OpenGraph) sebelum HTML dikirim ke browser. Ini sangat penting agar setiap tautan film yang dibagikan ke media sosial dapat menampilkan preview yang menarik dan mempermudah pengindeksan oleh search engine crawlers.
   - **Zero Client-Side Spinner**: Semua data inti film dimuat langsung di server, sehingga halaman tersaji secara utuh saat dibuka pertama kali. Pengguna tidak perlu menghadapi jeda skeleton loader atau spinner tambahan untuk konten utamanya, yang secara signifikan mengoptimalkan First Contentful Paint (FCP).
3. **React Query (TanStack Query) untuk Data Fetching & Caching**: Digunakan di halaman utama untuk mengelola status pengambilan data API. Keunggulannya adalah manajemen *cache* otomatis dan fitur `useInfiniteQuery` yang mempermudah implementasi *Infinite Scroll* tanpa membebani browser dengan pemanggilan API berulang untuk kata kunci yang sama.
4. **Zustand untuk State Management Client-Side**: Dipilih untuk mengelola data film favorit karena sintaksnya yang jauh lebih sederhana, ringan, dan ringkas dibandingkan Redux. Dengan middleware `persist` bawaan, data favorit pengguna otomatis tersimpan di `LocalStorage` secara aman tanpa perlu menulis logic penyimpanan manual.
5. **Halaman Detail Terpisah (Bukan Popup/Modal)**: Diputuskan untuk membuat halaman detail tersendiri agar setiap film memiliki URL yang unik dan statis (*shareable*). Hal ini juga membantu mengurangi beban memori di halaman utama yang bisa terjadi jika merender terlalu banyak komponen modal secara bersamaan.
6. **Infinite Scroll (Tanpa Tombol Pagination)**: Digunakan untuk memberikan pengalaman navigasi data yang mulus (*seamless*). Pengguna tidak perlu menekan tombol halaman berikutnya berulang kali, yang terbukti meningkatkan retensi pengguna pada aplikasi pencarian berbasis visual.
7. **Struktur Kode Terpisah (Separation of Concerns)**: Memisahkan komponen UI (presentational) dengan hooks logika (behavioral) di dalam folder `src/components`, `src/hooks`, dan `src/services` agar kode lebih mudah dibaca, diuji, dan dikembangkan secara modular.
8. **Tailwind CSS & Framer Motion (Styling & Animasi)**:
   - **Tailwind CSS**: Menyediakan pendekatan *utility-first* yang mempercepat penulisan gaya yang responsif dan konsisten. Tailwind juga melakukan optimasi ukuran file CSS produksi hanya untuk kelas yang digunakan (*tree-shaking*).
   - **Framer Motion**: Digunakan untuk menyuntikkan mikro-animasi (seperti transisi halus pada poster dan efek *stagger* pada daftar cast) agar aplikasi terasa lebih hidup, interaktif, dan memberikan kesan premium.
9. **Pemilihan TMDB API (Bukan OMDb API atau API Lainnya)**: TMDB dipilih sebagai sumber data utama karena:
   - **Kekayaan Media Aset**: Menyediakan gambar latar berkualitas tinggi (*backdrop*), foto profil aktor (*avatar cast*), data kru (sutradara), hingga tautan video trailer resmi YouTube. OMDb API cenderung berbasis teks dan membatasi data gambar berkualitas tinggi di versi gratis.
   - **Endpoint & Filter Lanjutan**: Memiliki arsitektur endpoint pencarian dan kategori genre yang terstruktur dengan baik, mempermudah pengembangan fitur filter dan pengurutan di masa depan.

## Bonus & Kemungkinan Pengembangan (Improvements)

Jika terdapat waktu alokasi pengembangan lebih, berikut fitur yang ingin saya tambahkan di masa depan:
- **Filterisasi Lanjutan (Advanced Filtering):** Menambahkan sistem filter agar pengguna tidak hanya bisa mencari berdasarkan kata kunci judul, tetapi juga dapat menyaring film secara spesifik berdasarkan Genre, Tahun Rilis, atau kategori lainnya.
- **Pengurutan Data (Sorting):** Menyediakan fitur untuk mengurutkan hasil pencarian atau daftar film (misalnya: dari rating yang paling tinggi, atau dari film yang paling baru dirilis).
- **Proteksi API & Server-Side Rate Limiting**: Menerapkan sistem pembatasan request (*rate limiting*) di sisi server Next.js  pada route `/api/movies/*` demi melindungi endpoint dari eksploitasi pihak luar dan mencegah lonjakan limit TMDB API key.
- **JSON-LD Structured Data untuk SEO**: Menyematkan kode JSON-LD dengan skema data terstruktur (Schema.org/Movie) di halaman detail film (`/movies/[id]`) yang dirender di server. Hal ini akan mempermudah bot perayap (crawler) mengenali isi halaman secara semantik dan memicu tampilan *rich snippets* di hasil pencarian mesin pencari.
- **Offline-First Capabilities (PWA)**: Mengintegrasikan Service Worker  untuk mendownload dan menyimpan poster film serta informasi detail film yang dimasukkan pengguna ke daftar favorit. Pengguna tetap dapat mengakses halaman favorit mereka secara lengkap dengan poster filmnya walaupun dalam keadaan offline.
- **Automated Testing:** Menambahkan pengujian kode otomatis (Unit Testing / E2E Testing) untuk memastikan fitur-fitur krusial seperti pencarian dan daftar favorit selalu berjalan normal tanpa error saat ada penambahan fitur baru.
