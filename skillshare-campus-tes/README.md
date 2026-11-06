# SkillShare Campus

Website tugas UTS Pemrograman Web: tema **SkillShare Mahasiswa** (tempat mahasiswa menawarkan dan mencari sesi belajar singkat).

Kategori kelas ada 3: **Musik**, **Komputer**, dan **Komunikasi**.

## Teknologi (sesuai modul UTS)
- HTML5 semantik (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Tailwind CSS (lewat CDN)
- Highcharts (grafik), Leaflet (peta), Simple-DataTables (tabel interaktif)
- JavaScript biasa + LocalStorage (data di sisi klien)
- Satu halaman = satu file HTML. Perpindahan halaman diatur JavaScript saat login, logout, dan simpan data.

## Cara menjalankan
1. Buka folder ini di VS Code.
2. Klik kanan `index.html` -> **Open with Live Server** (disarankan). Klik dua kali `index.html` juga bisa, tapi pakai **Chrome atau Edge**.
3. Butuh internet (untuk CDN, font, dan peta).
4. Login dengan akun contoh: nama pengguna `mahasiswa`, kata sandi `123456`.
5. Mau mengulang data dari awal? Buka Console browser (F12) lalu ketik `resetData()` dan Enter, lalu muat ulang.

## Peta file dan pemiliknya
Hanya ada **1 file JavaScript** (`js/data.js`). Kode JavaScript tiap halaman ada di bagian paling bawah file HTML-nya (di dalam tag `<script>`).

| File | Isi | Pemilik |
| --- | --- | --- |
| `index.html` | Halaman Login | Anggota 1 |
| `daftar.html` | Halaman Daftar Akun | Anggota 1 |
| `js/data.js`, `css/style.css` | Data bersama, fungsi bantu, CSS | Anggota 1 |
| `beranda.html` | Beranda | Anggota 2 |
| `kelas.html` | Daftar Kelas | Anggota 3 |
| `detail.html` | Detail Kelas, tombol Daftar, Review, Tanya Jawab | Anggota 4 |
| `tambah.html`, `tabel.html` | Tambah Kelas dan Data Pendaftaran | Anggota 5 |
| `statistik.html`, `peta.html` | Statistik (Highcharts) dan Peta (Leaflet) | Anggota 6 |

## Cara kerja singkat
- **Login**: `index.html` memeriksa akun di LocalStorage. Kalau benar, pindah ke `beranda.html`. Halaman lain otomatis mengembalikan ke Login kalau belum login (`wajibLogin()`).
- **Data kelas** disimpan di LocalStorage. Data awal ada di `js/data.js` (`KELAS_AWAL`).
- **Halaman Detail** dibuka dengan nomor kelas di alamat, contoh `detail.html?id=2`.
- **Mengubah data awal** (misalnya nama kelas): ubah di `js/data.js`, lalu buka Console (F12), ketik `resetData()`, dan muat ulang. Tanpa langkah ini data lama di browser tetap dipakai.
- **Koordinat peta** masih contoh. Ganti `PUSAT_KAMPUS` dan `LOKASI_KAMPUS` di `js/data.js` dengan koordinat kampus kalian.
- **Menambah menu/halaman baru**: salin satu file HTML yang mirip, lalu tambahkan link-nya di bagian NAVBAR di **semua** file HTML (navbar disalin di setiap halaman, jadi minta Anggota 1 yang mengerjakan).

## Aturan main
- Jangan mengubah file milik orang lain. Kalau butuh perubahan, bilang ke pemiliknya di grup.
- Bagian `<style type="text/tailwindcss">` di `<head>` sama persis di semua file HTML. Jangan diubah sendiri.
- Matikan **Format on Save** di VS Code supaya tidak mengubah seluruh isi file.
- Selalu `git pull origin main` sebelum mulai dan sebelum push.
- Jangan ubah urutan tag `<script>`: `js/data.js` harus dimuat lebih dulu (sudah ada di `<head>`).
