
// Mengambil data kelas dari localStorage
let daftarKelas = JSON.parse(localStorage.getItem("daftarKelas")) || [
    {
        id: 1,
        nama: "Belajar Desain Canva",
        kategori: "Desain",
        mentor: "Andi",
        tanggal: "10 November 2026",
        kuota: 15,
        deskripsi: "Belajar membuat desain menarik menggunakan Canva."
    },
    {
        id: 2,
        nama: "Dasar HTML dan CSS",
        kategori: "Teknologi",
        mentor: "Budi",
        tanggal: "12 November 2026",
        kuota: 20,
        deskripsi: "Mempelajari dasar pembuatan website."
    },
    {
        id: 3,
        nama: "Public Speaking Dasar",
        kategori: "Public Speaking",
        mentor: "Citra",
        tanggal: "15 November 2026",
        kuota: 10,
        deskripsi: "Belajar berbicara di depan umum dengan percaya diri."
    }
];

// Menyimpan data kelas
function simpanKelas() {
    localStorage.setItem("daftarKelas", JSON.stringify(daftarKelas));
}

// Menampilkan kelas di beranda
function tampilkanKelas() {
    let tempatKelas = document.getElementById("daftarKelas");

    if (!tempatKelas) return;

    tempatKelas.innerHTML = "";

    daftarKelas.slice(-3).reverse().forEach(function(kelas) {
        tempatKelas.innerHTML += `
            <div class="class-card">
                <h3>${kelas.nama}</h3>
                <p>Kategori: ${kelas.kategori}</p>
                <p>Mentor: ${kelas.mentor}</p>
                <p>Tanggal: ${kelas.tanggal}</p>
                <a href="detail.html?id=${kelas.id}">Lihat Detail</a>
            </div>
        `;
    });
}

// Menampilkan semua kelas
function tampilkanSemuaKelas(data = daftarKelas) {
    let tempatKelas = document.getElementById("daftarSemuaKelas");

    if (!tempatKelas) return;

    tempatKelas.innerHTML = "";

    if (data.length === 0) {
        tempatKelas.innerHTML = "<p>Kelas tidak ditemukan.</p>";
        return;
    }

    data.forEach(function(kelas) {
        tempatKelas.innerHTML += `
            <div class="class-card">
                <h3>${kelas.nama}</h3>
                <p>Kategori: ${kelas.kategori}</p>
                <p>Mentor: ${kelas.mentor}</p>
                <p>Tanggal: ${kelas.tanggal}</p>
                <p>Kuota: ${kelas.kuota} peserta</p>
                <a href="detail.html?id=${kelas.id}">Lihat Detail</a>
            </div>
        `;
    });
}

// Pencarian dan filter kelas
let kolomCari = document.getElementById("cariKelas");
let pilihanKategori = document.getElementById("filterKategori");

function cariDanFilter() {
    let kataKunci = kolomCari.value.toLowerCase();
    let kategori = pilihanKategori.value;

    let hasil = daftarKelas.filter(function(kelas) {
        let namaSesuai = kelas.nama.toLowerCase().includes(kataKunci);
        let kategoriSesuai = kategori === "" || kelas.kategori === kategori;

        return namaSesuai && kategoriSesuai;
    });

    tampilkanSemuaKelas(hasil);
}

if (kolomCari && pilihanKategori) {
    kolomCari.addEventListener("input", cariDanFilter);
    pilihanKategori.addEventListener("change", cariDanFilter);
}

// Menampilkan detail kelas
function tampilkanDetailKelas() {
    let tempatDetail = document.getElementById("detailKelas");

    if (!tempatDetail) return;

    let id = new URLSearchParams(window.location.search).get("id");

    let kelas = daftarKelas.find(function(item) {
        return item.id == id;
    });

    if (!kelas) {
        tempatDetail.innerHTML = "<h2>Kelas tidak ditemukan.</h2>";
        return;
    }

    tempatDetail.innerHTML = `
        <div class="class-card">
            <h2>${kelas.nama}</h2>
            <p><b>Kategori:</b> ${kelas.kategori}</p>
            <p><b>Mentor:</b> ${kelas.mentor}</p>
            <p><b>Tanggal:</b> ${kelas.tanggal}</p>
            <p><b>Kuota:</b> ${kelas.kuota} peserta</p>
            <p><b>Deskripsi:</b> ${kelas.deskripsi}</p>
        </div>
    `;
}

// Pendaftaran kelas
let formDaftar = document.getElementById("formDaftar");

if (formDaftar) {
    formDaftar.addEventListener("submit", function(event) {
        event.preventDefault();

        let nama = document.getElementById("namaPeserta").value;
        let npm = document.getElementById("npmPeserta").value;

        let pendaftaran = JSON.parse(
            localStorage.getItem("pendaftaran")
        ) || [];

        pendaftaran.push({
            nama: nama,
            npm: npm,
            idKelas: new URLSearchParams(window.location.search).get("id")
        });

        localStorage.setItem("pendaftaran", JSON.stringify(pendaftaran));

        alert("Pendaftaran kelas berhasil!");
        formDaftar.reset();
    });
}

// Menambahkan kelas baru
let formTambah = document.getElementById("formTambah");

if (formTambah) {
    formTambah.addEventListener("submit", function(event) {
        event.preventDefault();

        let kelasBaru = {
            id: Date.now(),
            nama: document.getElementById("namaKelas").value,
            kategori: document.getElementById("kategoriKelas").value,
            mentor: document.getElementById("namaMentor").value,
            tanggal: document.getElementById("tanggalKelas").value,
            kuota: document.getElementById("kuotaKelas").value,
            deskripsi: document.getElementById("deskripsiKelas").value
        };

        daftarKelas.push(kelasBaru);
        simpanKelas();

        alert("Kelas berhasil ditambahkan!");

        formTambah.reset();
        window.location.href = "kelas.html";
    });
}

// Menjalankan fungsi sesuai halaman
tampilkanKelas();
tampilkanSemuaKelas();
tampilkanDetailKelas();
