/* =====================================================================
   js/data.js  -  SATU-SATUNYA FILE JAVASCRIPT BERSAMA
   Pemilik: Anggota 1 (Ketua).
   Dipakai oleh SEMUA halaman HTML. Isinya:
     1. Data awal (kelas, pendaftaran, review, akun)
     2. Fungsi untuk menyimpan dan membaca data (LocalStorage)
     3. Fungsi bantu tampilan (pesan kecil, pesan error form, ikon, bintang)
   Jangan ubah nama fungsi tanpa kabar ke grup, karena semua halaman memakainya.
   ===================================================================== */

/* ---------- Nama kunci LocalStorage ----------
   Awalan "sscv2_" dipakai supaya data versi lama di browser tidak tercampur. */
const KUNCI = {
  KELAS: 'sscv2_kelas',
  DAFTAR: 'sscv2_pendaftaran',
  AKUN: 'sscv2_akun',
  REVIEW: 'sscv2_review',
  TANYA: 'sscv2_tanya',
  SESI: 'sscv2_sesi',
  PESAN: 'sscv2_pesan'
};

/* ---------- Kategori (hanya 3) ---------- */
const KATEGORI = [
  { nama: 'Musik',      deskripsi: 'Gitar, Piano, dan alat musik lain', ikon: 'musik' },
  { nama: 'Komputer',   deskripsi: 'HTML, Excel, dan skill digital',    ikon: 'komputer' },
  { nama: 'Komunikasi', deskripsi: 'Public Speaking dan Presentasi',    ikon: 'komunikasi' }
];

/* ---------- Lokasi di kampus (dipakai halaman Peta) ----------
   GANTI koordinat ini dengan kampus kalian:
   Google Maps -> klik kanan di titik gedung -> klik angka koordinat -> tempel di sini.
   Format: [latitude, longitude]
   Nama lokasi di sini harus sama dengan pilihan "Lokasi" di tambah.html. */
const PUSAT_KAMPUS = [-6.2088, 106.8456];
const LOKASI_KAMPUS = {
  'Perpustakaan': [-6.2084, 106.8450],
  'Gedung A':     [-6.938221045846528, 107.60669943767205],
  'Gedung B':     [-6.2093, 106.8462],
  'Aula':         [-6.93788652826951, 107.60721320201763],
  'Kantin':       [-6.2089, 106.8456],
  'Taman Kampus': [-6.938190495585895, 107.6070774422317]
};

/* ---------- Data awal (muncul saat web pertama kali dibuka) ----------
   Kalau mengubah data di bawah ini, buka Console browser (F12), ketik resetData()
   lalu Enter, kemudian muat ulang halaman. */
const KELAS_AWAL = [
  { id: 1, nama: 'Belajar Gitar 1 Jam',       kategori: 'Musik',      pengajar: 'Raka Pratama',  jadwal: 'Sabtu, 14 Nov 2026 - 10.00',  lokasi: 'Taman Kampus', kuota: 10, deskripsi: 'Kenalan dengan gitar akustik: cara memegang, kunci dasar C, G, Am, dan Em, lalu langsung main satu lagu sederhana.' },
  { id: 2, nama: 'HTML dan CSS untuk Pemula', kategori: 'Komputer',   pengajar: 'Nadia Rahma',   jadwal: 'Jumat, 20 Nov 2026 - 14.00',  lokasi: 'Gedung A',     kuota: 18, deskripsi: 'Membuat halaman web pertama: judul, paragraf, gambar, tautan, dan warna.' },
  { id: 3, nama: 'Workshop Public Speaking',  kategori: 'Komunikasi', pengajar: 'Dinda Lestari', jadwal: 'Senin, 16 Nov 2026 - 15.30',  lokasi: 'Aula',         kuota: 20, deskripsi: 'Latihan berbicara di depan umum: mengatur napas, intonasi, dan cara mengurangi gugup saat presentasi.' }
];

const DAFTAR_AWAL = [
  { id: 1,  idKelas: 1, username: 'budi',  tanggal: '2026-11-02' },
  { id: 2,  idKelas: 1, username: 'citra', tanggal: '2026-11-02' },
  { id: 3,  idKelas: 1, username: 'dewi',  tanggal: '2026-11-03' },
  { id: 4,  idKelas: 2, username: 'hadi',  tanggal: '2026-11-04' },
  { id: 5,  idKelas: 2, username: 'indah', tanggal: '2026-11-04' },
  { id: 6,  idKelas: 2, username: 'budi',  tanggal: '2026-11-04' },
  { id: 7,  idKelas: 2, username: 'citra', tanggal: '2026-11-05' },
  { id: 8,  idKelas: 3, username: 'eko',   tanggal: '2026-11-03' },
  { id: 9,  idKelas: 3, username: 'fani',  tanggal: '2026-11-03' },
  { id: 10, idKelas: 3, username: 'gita',  tanggal: '2026-11-04' },
  { id: 11, idKelas: 3, username: 'dewi',  tanggal: '2026-11-05' }
];

const REVIEW_AWAL = [
  { id: 1, idKelas: 1, username: 'Bella Stone', rating: 2, komentar: 'The course is fine, but the expert support was really poor :))', tanggal: '2026-10-05' },
  { id: 2, idKelas: 1, username: 'Nick Moore',  rating: 5, komentar: 'An awesome course!',                                            tanggal: '2026-10-05' },
  { id: 3, idKelas: 2, username: 'hadi',        rating: 5, komentar: 'Penjelasannya runtut, cocok untuk pemula yang belum pernah membuat web.', tanggal: '2026-11-05' },
  { id: 4, idKelas: 3, username: 'fani',        rating: 4, komentar: 'Latihannya seru dan bikin lebih percaya diri bicara di depan kelas.',      tanggal: '2026-11-05' }
];

const TANYA_AWAL = [
  { id: 1, idKelas: 1, username: 'budi', teks: 'Apakah harus membawa gitar sendiri?', tanggal: '2026-11-03' }
];

/* Akun contoh supaya bisa langsung login: nama pengguna "mahasiswa", kata sandi "123456" */
const AKUN_AWAL = [
  { nama: 'mahasiswa', email: 'mahasiswa@kampus.ac.id', sandi: '123456' }
];

/* ---------- Dasar: baca dan tulis LocalStorage ---------- */
function bacaLS(kunci, nilaiAwal) {
  try {
    const teks = localStorage.getItem(kunci);
    return teks ? JSON.parse(teks) : nilaiAwal;
  } catch (e) {
    return nilaiAwal;
  }
}

function tulisLS(kunci, nilai) {
  localStorage.setItem(kunci, JSON.stringify(nilai));
}

/* Isi data awal hanya jika LocalStorage masih kosong */
function siapkanDataAwal() {
  if (!localStorage.getItem(KUNCI.KELAS))  tulisLS(KUNCI.KELAS, KELAS_AWAL);
  if (!localStorage.getItem(KUNCI.DAFTAR)) tulisLS(KUNCI.DAFTAR, DAFTAR_AWAL);
  if (!localStorage.getItem(KUNCI.REVIEW)) tulisLS(KUNCI.REVIEW, REVIEW_AWAL);
  if (!localStorage.getItem(KUNCI.TANYA))  tulisLS(KUNCI.TANYA, TANYA_AWAL);
  if (!localStorage.getItem(KUNCI.AKUN))   tulisLS(KUNCI.AKUN, AKUN_AWAL);
}

/* Hapus semua data lalu isi ulang dari data awal (dipakai untuk mengulang demo) */
function resetData() {
  Object.values(KUNCI).forEach(function (k) {
    localStorage.removeItem(k);
    sessionStorage.removeItem(k);
  });
  siapkanDataAwal();
}

/* ---------- Alat bantu kecil ---------- */
function el(id) {
  return document.getElementById(id);
}

/* Mengamankan teks dari pengguna sebelum dimasukkan ke innerHTML */
function esc(teks) {
  return String(teks)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* Tanggal hari ini (jam lokal) dalam bentuk '2026-11-06' */
function hariIni() {
  const d = new Date();
  const bulan = String(d.getMonth() + 1).padStart(2, '0');
  const tanggal = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + bulan + '-' + tanggal;
}

/* '2026-11-05' -> '5 Nov 2026' */
function formatTanggal(iso) {
  const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const bagian = String(iso).split('-');
  if (bagian.length !== 3) return iso;
  return Number(bagian[2]) + ' ' + bulan[Number(bagian[1]) - 1] + ' ' + bagian[0];
}

/* 'Raka Pratama' -> 'RP' */
function inisial(nama) {
  const kata = String(nama).trim().split(/\s+/);
  const dua = kata.length > 1 ? kata[0][0] + kata[1][0] : String(nama).trim().slice(0, 2);
  return dua.toUpperCase();
}

function idBerikutnya(daftar) {
  let terbesar = 0;
  daftar.forEach(function (item) {
    if (item.id > terbesar) terbesar = item.id;
  });
  return terbesar + 1;
}

/* ---------- KELAS ---------- */
function ambilSemuaKelas() {
  return bacaLS(KUNCI.KELAS, []);
}

/* Mengembalikan data kelas, atau null kalau id tidak ada */
function ambilKelasById(id) {
  return ambilSemuaKelas().find(function (k) { return k.id === Number(id); }) || null;
}

/* kelasBaru = {nama, kategori, pengajar, jadwal, lokasi, kuota, deskripsi}. Mengembalikan kelas lengkap dengan id. */
function simpanKelas(kelasBaru) {
  const semua = ambilSemuaKelas();
  const kelas = {
    id: idBerikutnya(semua),
    nama: kelasBaru.nama,
    kategori: kelasBaru.kategori,
    pengajar: kelasBaru.pengajar,
    jadwal: kelasBaru.jadwal,
    lokasi: kelasBaru.lokasi,
    kuota: Number(kelasBaru.kuota),
    deskripsi: kelasBaru.deskripsi
  };
  semua.push(kelas);
  tulisLS(KUNCI.KELAS, semua);
  return kelas;
}

/* ---------- PENDAFTARAN ---------- */
function ambilSemuaPendaftaran() {
  return bacaLS(KUNCI.DAFTAR, []);
}

function ambilPendaftaranKelas(idKelas) {
  return ambilSemuaPendaftaran().filter(function (p) { return p.idKelas === Number(idKelas); });
}

function hitungPendaftar(idKelas) {
  return ambilPendaftaranKelas(idKelas).length;
}

function sisaKuota(kelas) {
  return Math.max(0, kelas.kuota - hitungPendaftar(kelas.id));
}

function sudahDaftar(idKelas, username) {
  return ambilPendaftaranKelas(idKelas).some(function (p) { return p.username === username; });
}

/* Mengembalikan { berhasil: true/false, pesan: '...' } */
function daftarKelas(idKelas, username) {
  const kelas = ambilKelasById(idKelas);
  if (!kelas) return { berhasil: false, pesan: 'Kelas tidak ditemukan.' };
  if (sudahDaftar(kelas.id, username)) return { berhasil: false, pesan: 'Kamu sudah terdaftar di kelas ini.' };
  if (sisaKuota(kelas) <= 0) return { berhasil: false, pesan: 'Maaf, kuota kelas ini sudah penuh.' };
  const semua = ambilSemuaPendaftaran();
  semua.push({ id: idBerikutnya(semua), idKelas: kelas.id, username: username, tanggal: hariIni() });
  tulisLS(KUNCI.DAFTAR, semua);
  return { berhasil: true, pesan: 'Berhasil mendaftar ke ' + kelas.nama + '.' };
}

/* ---------- REVIEW dan TANYA JAWAB ---------- */
function ambilReview(idKelas) {
  return bacaLS(KUNCI.REVIEW, []).filter(function (r) { return r.idKelas === Number(idKelas); });
}

function tambahReview(idKelas, username, rating, komentar) {
  const semua = bacaLS(KUNCI.REVIEW, []);
  semua.push({ id: idBerikutnya(semua), idKelas: Number(idKelas), username: username, rating: Number(rating), komentar: komentar, tanggal: hariIni() });
  tulisLS(KUNCI.REVIEW, semua);
}

/* Rata-rata rating satu kelas, satu angka desimal. 0 jika belum ada review. */
function rataRataRating(idKelas) {
  const daftar = ambilReview(idKelas);
  if (daftar.length === 0) return 0;
  let total = 0;
  daftar.forEach(function (r) { total += r.rating; });
  return Math.round((total / daftar.length) * 10) / 10;
}

function ambilTanya(idKelas) {
  return bacaLS(KUNCI.TANYA, []).filter(function (t) { return t.idKelas === Number(idKelas); });
}

function tambahTanya(idKelas, username, teks) {
  const semua = bacaLS(KUNCI.TANYA, []);
  semua.push({ id: idBerikutnya(semua), idKelas: Number(idKelas), username: username, teks: teks, tanggal: hariIni() });
  tulisLS(KUNCI.TANYA, semua);
}

/* ---------- AKUN dan SESI LOGIN ---------- */
function ambilAkun() {
  return bacaLS(KUNCI.AKUN, []);
}

/* akunBaru = {nama, email, sandi}. Mengembalikan { berhasil, pesan } */
function daftarAkun(akunBaru) {
  const semua = ambilAkun();
  const kembar = semua.some(function (a) { return a.nama.toLowerCase() === akunBaru.nama.toLowerCase(); });
  if (kembar) return { berhasil: false, pesan: 'Nama pengguna sudah dipakai.' };
  semua.push({ nama: akunBaru.nama, email: akunBaru.email, sandi: akunBaru.sandi });
  tulisLS(KUNCI.AKUN, semua);
  return { berhasil: true, pesan: 'Akun berhasil dibuat. Silakan login.' };
}

/* Mengembalikan objek akun jika cocok, atau null jika salah */
function cekLogin(nama, sandi) {
  return ambilAkun().find(function (a) {
    return a.nama.toLowerCase() === nama.toLowerCase() && a.sandi === sandi;
  }) || null;
}

/* ingat = true -> tetap login setelah browser ditutup (localStorage).
   ingat = false -> hanya selama tab terbuka (sessionStorage). */
function simpanSesi(nama, ingat) {
  hapusSesi();
  (ingat ? localStorage : sessionStorage).setItem(KUNCI.SESI, nama);
}

/* Mengembalikan nama pengguna yang sedang login, atau null */
function ambilUser() {
  return sessionStorage.getItem(KUNCI.SESI) || localStorage.getItem(KUNCI.SESI) || null;
}

function hapusSesi() {
  sessionStorage.removeItem(KUNCI.SESI);
  localStorage.removeItem(KUNCI.SESI);
}

/* Dipanggil di <head> halaman yang butuh login: kalau belum login, kirim ke Login */
function wajibLogin() {
  if (!ambilUser()) {
    document.documentElement.style.display = 'none';
    window.location.replace('index.html');
  }
  // Kalau halaman muncul lagi lewat tombol Back setelah logout
  window.addEventListener('pageshow', function (e) {
    if (e.persisted && !ambilUser()) window.location.replace('index.html');
  });
}

/* ---------- PESAN KECIL (toast) ---------- */
let timerToast = null;

/* Tampilkan pesan kecil di bawah layar selama 3 detik */
function toast(pesan) {
  const t = el('toast');
  if (!t) return;
  t.textContent = pesan;
  t.classList.remove('opacity-0');
  t.classList.add('opacity-100');
  clearTimeout(timerToast);
  timerToast = setTimeout(function () {
    t.classList.remove('opacity-100');
    t.classList.add('opacity-0');
  }, 3000);
}

/* Simpan pesan untuk ditampilkan di halaman BERIKUTNYA (karena pindah halaman menghapus pesan lama) */
function pesanBerikutnya(teks) {
  sessionStorage.setItem(KUNCI.PESAN, teks);
}

function tampilkanPesanTertunda() {
  const teks = sessionStorage.getItem(KUNCI.PESAN);
  if (teks) {
    sessionStorage.removeItem(KUNCI.PESAN);
    toast(teks);
  }
}

/* ---------- ERROR FORM ----------
   Setiap kolom form punya <p id="err-ID_INPUT"></p> untuk pesan error-nya. */
function setError(idInput, pesan) {
  const p = el('err-' + idInput);
  const input = el(idInput);
  if (p) p.textContent = pesan;
  if (input) input.setAttribute('aria-invalid', 'true');
}

function bersihkanError(form) {
  form.querySelectorAll('[id^="err-"]').forEach(function (p) { p.textContent = ''; });
  form.querySelectorAll('[aria-invalid]').forEach(function (i) { i.removeAttribute('aria-invalid'); });
}

/* ---------- IKON dan BINTANG (dipakai kartu kelas, detail, review) ---------- */
const IKON_ISI = {
  musik:      '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  komputer:   '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
  komunikasi: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
  lainnya:    '<circle cx="12" cy="12" r="10"/><circle cx="7.5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="16.5" cy="12" r="1" fill="currentColor"/>'
};

function ikon(nama, ukuran) {
  const px = ukuran || 24;
  return '<svg width="' + px + '" height="' + px + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (IKON_ISI[nama] || IKON_ISI.lainnya) + '</svg>';
}

/* Ikon sesuai nama kategori, misalnya ikonKategori('Musik', 40) */
function ikonKategori(namaKategori, ukuran) {
  const k = KATEGORI.find(function (item) { return item.nama === namaKategori; });
  return ikon(k ? k.ikon : 'lainnya', ukuran);
}

/* Bintang rating (hanya tampilan). Nilai dibulatkan ke bintang penuh terdekat. */
function bintang(nilai, ukuran) {
  const px = ukuran || 16;
  const bulat = Math.round(nilai);
  let hasil = '';
  for (let i = 1; i <= 5; i++) {
    const warna = i <= bulat ? '#2563EB' : '#BFDBFE';
    hasil += '<svg width="' + px + '" height="' + px + '" viewBox="0 0 24 24" fill="' + warna + '" aria-hidden="true">' +
      '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>';
  }
  return '<span class="inline-flex gap-0.5" role="img" aria-label="Rating ' + nilai + ' dari 5">' + hasil + '</span>';
}

/* ---------- OTOMATIS: dijalankan di setiap halaman setelah HTML selesai dimuat ---------- */

/* Navbar: nama pengguna, tombol menu (layar kecil), dan tombol Keluar.
   Halaman tanpa navbar (Login, Daftar) otomatis dilewati. */
function siapkanNavbar() {
  const tombolMenu = el('btn-menu');
  if (!tombolMenu) return;

  el('nama-user').textContent = ambilUser() || '';

  tombolMenu.addEventListener('click', function () {
    const menu = el('menu-utama');
    const sedangTertutup = menu.classList.contains('hidden');
    menu.classList.toggle('hidden', !sedangTertutup);
    menu.classList.toggle('flex', sedangTertutup);
    tombolMenu.setAttribute('aria-expanded', String(sedangTertutup));
  });

  el('btn-logout').addEventListener('click', function () {
    hapusSesi();
    pesanBerikutnya('Kamu sudah keluar.');
    window.location.href = 'index.html';
  });
}

/* Tombol mata: tampilkan / sembunyikan kata sandi (Login dan Daftar) */
function siapkanTombolMata() {
  document.querySelectorAll('[data-lihat-sandi]').forEach(function (tombol) {
    tombol.addEventListener('click', function () {
      const input = el(tombol.getAttribute('data-lihat-sandi'));
      const tampil = input.type === 'password';
      input.type = tampil ? 'text' : 'password';
      tombol.setAttribute('aria-label', tampil ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  siapkanNavbar();
  siapkanTombolMata();
  tampilkanPesanTertunda();
});

siapkanDataAwal();
