const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
  category = document.querySelector("#category"),
  difficulty = document.querySelector("#difficulty"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let allQuestions = [
  // Matematika (easy)
  {
    numb: 1,
    question:
      "Berapa banyak apel yang dimiliki jika dari 7 apel, 3 apel diberikan kepada teman?",
    answer: "4",
    difficulty: "easy",
    category: "Matematika",
    options: ["7", "10", "14", "4"],
  },
  {
    numb: 2,
    question: "Berapakah hasil dari 5 + 8?",
    answer: "13",
    difficulty: "easy",
    category: "Matematika",
    options: ["10", "11", "12", "13"],
  },
  {
    numb: 3,
    question:
      "Jika sebuah buku berharga Rp 5000 dan Anda memberikan Rp 2000 kepada penjual, berapa uang yang harus Anda tambahkan?",
    answer: "Rp 3000",
    difficulty: "easy",
    category: "Matematika",
    options: ["Rp 5000", "Rp 5000", "Rp 3000", "Rp 8000"],
  },
  {
    numb: 4,
    question:
      "Apa total panjang ketiga sisi dari sebuah segitiga dengan panjang sisi masing-masing 5 cm, 7 cm, dan 4 cm?",
    answer: "16 cm",
    difficulty: "easy",
    category: "Matematika",
    options: ["12 cm", "16 cm", "18 cm", "18 cm"],
  },
  {
    numb: 5,
    question: "Jika hari ini adalah hari Rabu, hari apa 5 hari lagi?",
    answer: "Senin",
    difficulty: "easy",
    category: "Matematika",
    options: ["Selasa", "Selasa", "Senin", "Kamis"],
  },
  {
    numb: 6,
    question:
      "Berapa total buku yang dimiliki oleh sebuah toko buku yang memiliki 30 buku matematika dan 25 buku sains?",
    answer: "55",
    difficulty: "easy",
    category: "Matematika",
    options: ["40", "45", "50 ", "55"],
  },
  {
    numb: 7,
    question: "Berapa jumlah pensil dalam 4 dus jika 1 dus berisi 12 pensil?",
    answer: "48",
    difficulty: "easy",
    category: "Matematika",
    options: ["20", "24", "16", "48"],
  },
  {
    numb: 8,
    question: "Berapakah hasil dari 6 x 4?",
    answer: "24",
    difficulty: "easy",
    category: "Matematika",
    options: ["24", "20", "44", "34"],
  },
  {
    numb: 9,
    question:
      "Jika sebuah kelas memiliki 18 siswa laki-laki dan 15 siswi perempuan, berapa jumlah siswa secara keseluruhan?",
    answer: "33",
    difficulty: "easy",
    category: "Matematika",
    options: ["24", "33", "44", "34"],
  },
  {
    numb: 10,
    question:
      "Jika sebuah kue dibagi menjadi 4 bagian yang sama, berapa bagian yang akan diperoleh setiap orang jika ada 8 orang di ruangan itu?",
    answer: "13",
    difficulty: "easy",
    category: "Matematika",
    options: ["10", "11", "12", "13"],
  },

  //Matematika (medium)
  {
    numb: 11,
    question:
      "Berapa banyak telur yang dijual oleh petani jika dia memiliki 24 telur dan menjual separuh dari jumlah tersebut?",
    answer: "12 telur",
    difficulty: "medium",
    category: "Matematika",
    options: ["6 telur", "12 telur", "18 telur", "24 telur"],
  },
  {
    numb: 12,
    question:
      "Berapa harga dari 3 liter susu jika 1 liter susu berharga Rp 6000?",
    answer: "Rp 18000",
    difficulty: "medium",
    category: "Matematika",
    options: ["Rp 2000", "Rp 4000", "Rp 6000", "Rp 18000"],
  },
  {
    numb: 13,
    question:
      "Berapakah luas segitiga jika panjang alasnya 8 cm dan tingginya 6 cm?",
    answer: "24 cm²",
    difficulty: "medium",
    category: "Matematika",
    options: ["24 cm²", "28 cm²", "32 cm²", "36 cm²"],
  },
  {
    numb: 14,
    question:
      "Berapa banyak ikan yang dipindahkan dari kolam jika awalnya terdapat 35 ikan dan tersisa 18 ikan setelah pemindahan?",
    answer: "17 ikan",
    difficulty: "medium",
    category: "Matematika",
    options: ["10 ikan", "12 ikan", "14 ikan", "17 ikan"],
  },
  {
    numb: 15,
    question:
      "Berapa jumlah anak perempuan di kelas jika dari 25 siswa, 60% adalah anak laki-laki?",
    answer: "10",
    difficulty: "medium",
    category: "Matematika",
    options: ["5", "7", "10", "15"],
  },
  {
    numb: 16,
    question:
      "Berapa banyak pensil yang tersisa di toko jika dari 48 pensil, 2/3 dijual?",
    answer: "16 pensil",
    difficulty: "medium",
    category: "Matematika",
    options: ["12 pensil", "16 pensil", "24 pensil", "32 pensil"],
  },
  {
    numb: 17,
    question:
      "Berapa berat total dari 5 buah apel jika masing-masing apel memiliki berat 150 gram?",
    answer: "750 gram",
    difficulty: "medium",
    category: "Matematika",
    options: ["300 gram", "450 gram", "600 gram", "750 gram"],
  },
  {
    numb: 18,
    question:
      "Berapa banyak kelereng biru dalam kotak yang berisi 64 kelereng jika 1/4 dari kelereng tersebut adalah warna biru?",
    answer: "16 kelereng",
    difficulty: "medium",
    category: "Matematika",
    options: ["8 kelereng", "12 kelereng", "16 kelereng", "24 kelereng"],
  },
  {
    numb: 19,
    question:
      "Berapa jumlah murid yang membawa bekal jika 3/5 dari 50 murid di kelas membawa bekal?",
    answer: "30 murid",
    difficulty: "medium",
    category: "Matematika",
    options: ["20 murid", "25 murid", "30 murid", "35 murid"],
  },
  {
    numb: 20,
    question:
      "Berapa selisih jumlah karyawan pria dan wanita di perusahaan jika perusahaan tersebut mempekerjakan 28 karyawan pria dan 35 karyawan wanita?",
    answer: "7",
    difficulty: "medium",
    category: "Matematika",
    options: ["7", "15", "28", "63"],
  },

  //Matematika (Hard)
  {
    numb: 21,
    question:
      "Berapa bagian kue yang tersisa jika sebuah kue dibagi oleh 4 orang dan setiap orang mendapatkan 2/3 bagian dari kue?",
    answer: "1/3 bagian kue",
    difficulty: "hard",
    category: "Matematika",
    options: [
      "1/3 bagian kue",
      "1/4 bagian kue",
      "1/6 bagian kue",
      "1/8 bagian kue",
    ],
  },
  {
    numb: 22,
    question:
      "Berapa banyak apel yang telah dijual oleh seorang pedagang jika dia memiliki 240 apel dan menjual 3/5 bagian dari apel tersebut?",
    answer: "144 apel",
    difficulty: "hard",
    category: "Matematika",
    options: ["100 apel", "120 apel", "144 apel", "160 apel"],
  },
  {
    numb: 23,
    question:
      "Berapa banyak siswa yang membeli makan siang di kantin jika 2/3 dari 150 siswa di sekolah membawa bekal?",
    answer: "50 siswa",
    difficulty: "hard",
    category: "Matematika",
    options: ["30 siswa", "40 siswa", "50 siswa", "60 siswa"],
  },
  {
    numb: 24,
    question:
      "Berapa banyak ayam betina di peternakan jika dari 180 ekor ayam, 25% adalah ayam betina?",
    answer: "45 ayam betina",
    difficulty: "hard",
    category: "Matematika",
    options: [
      "36 ayam betina",
      "45 ayam betina",
      "54 ayam betina",
      "72 ayam betina",
    ],
  },
  {
    numb: 25,
    question:
      "Berapa sisa uang yang dimiliki Budi jika awalnya dia memiliki Rp 85000 dan membeli mainan seharga Rp 37500 serta sebuah buku seharga Rp 21500?",
    answer: "Rp 26000",
    difficulty: "hard",
    category: "Matematika",
    options: ["Rp 26000", "Rp 26000", "Rp 35000", "Rp 39000"],
  },
  {
    numb: 26,
    question:
      "Berapa banyak pohon mangga di taman tersebut jika dari 45 pohon, 3/5 adalah pohon-pohon mangga?",
    answer: "27 pohon mangga",
    difficulty: "hard",
    category: "Matematika",
    options: [
      "15 pohon mangga",
      "18 pohon mangga",
      "27 pohon mangga",
      "36 pohon mangga",
    ],
  },
  {
    numb: 27,
    question:
      "Berapa banyak permen yang diberikan oleh seorang anak kepada temannya jika awalnya dia memiliki 64 permen dan memberikan 3/8 dari jumlah permen tersebut?",
    answer: "24 permen",
    difficulty: "hard",
    category: "Matematika",
    options: ["16 permen", "18 permen", "20 permen", "24 permen"],
  },
  {
    numb: 28,
    question:
      "Berapa banyak kelereng merah dalam kotak tersebut jika dari 120 kelereng, 40% adalah kelereng merah?",
    answer: "48 kelereng merah",
    difficulty: "hard",
    category: "Matematika",
    options: [
      "24 kelereng merah",
      "36 kelereng merah",
      "48 kelereng merah",
      "60 kelereng merah",
    ],
  },
  {
    numb: 29,
    question:
      "Berapa panjang total pagar yang dibutuhkan jika sebuah lapangan memiliki panjang 60 meter dan lebar 40 meter dan dikelilingi oleh pagar?",
    answer: "200 meter",
    difficulty: "hard",
    category: "Matematika",
    options: ["160 meter", "200 meter", "240 meter", "280 meter"],
  },
  {
    numb: 30,
    question:
      "Berapa banyak murid perempuan di sekolah tersebut jika dari 180 murid, 4/9 adalah murid perempuan?",
    answer: "80 murid perempuan",
    difficulty: "hard",
    category: "Matematika",
    options: [
      "60 murid perempuan",
      "70 murid perempuan",
      "80 murid perempuan",
      "90 murid perempuan",
    ],
  },

  //Bahasa Indonesia (easy)
  {
    numb: 31,
    question: "Apa yang dimaksud dengan kata 'meja'?",
    answer: "Perabotan untuk meletakkan barang",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Alat untuk menulis",
      "Tempat untuk tidur",
      "Perabotan untuk meletakkan barang",
      "Alat untuk memasak",
    ],
  },
  {
    numb: 32,
    question: "Sebutkan 5 benda yang biasa ditemukan di dapur!",
    answer: "Pisau, garpu, piring, kompor, panci",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Meja, kursi, sofa, lemari, tempat tidur",
      "Pisau, garpu, piring, kompor, panci",
      "Buku, pensil, kertas, penghapus, papan tulis",
      "Televisi, radio, komputer, printer, kamera",
    ],
  },
  {
    numb: 33,
    question: "Jelaskan apa yang dimaksud dengan 'pohon'.",
    answer: "Tumbuhan besar yang memiliki batang, cabang, dan daun",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Hewan yang hidup di hutan",
      "Tumbuhan besar yang memiliki batang, cabang, dan daun",
      "Tempat tinggal manusia",
      "Alat transportasi",
    ],
  },
  {
    numb: 34,
    question: "Buatlah kalimat menggunakan kata 'buku'!",
    answer: "Buku itu sangat menarik untuk dibaca.",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Saya suka menonton televisi.",
      "Buku itu sangat menarik untuk dibaca.",
      "Dia berlari dengan cepat.",
      "Kami pergi ke pasar kemarin.",
    ],
  },
  {
    numb: 35,
    question: "Apa arti dari kata 'makan'?",
    answer: "Mengkonsumsi makanan",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Proses minum air",
      "Kegiatan tidur di malam hari",
      "Mengkonsumsi makanan",
      "Kegiatan berolahraga",
    ],
  },
  {
    numb: 36,
    question: "Sebutkan 3 jenis buah-buahan yang sering kita makan!",
    answer: "Pisang, apel, jeruk",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Meja, kursi, lemari",
      "Pisang, apel, jeruk",
      "Kertas, buku, pensil",
      "Mobil, motor, sepeda",
    ],
  },
  {
    numb: 37,
    question: "Buatlah kalimat menggunakan kata 'rumah'!",
    answer: "Kami tinggal di rumah yang nyaman.",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Dia bermain bola di lapangan.",
      "Kami tinggal di rumah yang nyaman.",
      "Mereka pergi ke pantai.",
      "Ayah membaca koran di pagi hari.",
    ],
  },
  {
    numb: 38,
    question: "Apakah yang dimaksud dengan 'mobil'?",
    answer: "Kendaraan beroda empat",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Alat untuk menulis",
      "Kendaraan beroda empat",
      "Peralatan dapur",
      "Alat untuk memasak",
    ],
  },
  {
    numb: 39,
    question: "Sebutkan 3 warna yang sering kita lihat!",
    answer: "Merah, biru, kuning",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Merah, biru, kuning",
      "Hijau, ungu, oranye",
      "Hitam, putih, abu-abu",
      "Merah muda, coklat, perak",
    ],
  },
  {
    numb: 40,
    question: " Manakah kalimat yang menggunakan kata 'sekolah'!",
    answer: "Kami pergi ke sekolah setiap hari Senin sampai Jumat.",
    difficulty: "easy",
    category: "Bahasa",
    options: [
      "Saya menyiram tanaman di halaman.",
      "Kami pergi ke sekolah setiap hari Senin sampai Jumat.",
      "Mereka berenang di kolam renang.",
      "Dia menyapu lantai setiap pagi.",
    ],

    //Bahasa Indonesia (medium)
  },
  {
    numb: 41,
    question:
      "Bacalah kalimat berikut ini: 'Ibu pergi ke pasar untuk membeli sayuran.' Apa kata kerja dalam kalimat tersebut?",
    answer: "pergi",
    difficulty: "medium",
    category: "Bahasa",
    options: ["Ibu", "pergi", "pasar", "membeli"],
  },
  {
    numb: 42,
    question: "Manakah kalimat yang menggunakan kata depan dengan benar?",
    answer: "Adik bermain di taman.",
    difficulty: "medium",
    category: "Bahasa",
    options: [
      "Buku itu milik dari Andi.",
      "Adik bermain di taman.",
      "Ayah bekerja ke kantor.",
      "Kami datang pada malam hari.",
    ],
  },
  {
    numb: 43,
    question: "Apa sinonim dari kata 'besar'?",
    answer: "Gede",
    difficulty: "medium",
    category: "Bahasa",
    options: ["Kecil", "Tinggi", "Luas", "Gede"],
  },
  {
    numb: 44,
    question:
      "Bacalah paragraf berikut: 'Rina sangat senang bermain di taman. Setiap sore, ia bermain bersama teman-temannya. Mereka sering bermain bola dan ayunan.' Apa kegiatan yang dilakukan Rina di taman?",
    answer: "Bermain bola dan ayunan",
    difficulty: "medium",
    category: "Bahasa",
    options: [
      "Membaca buku",
      "Bermain bola dan ayunan",
      "Menyapu taman",
      "Membeli jajanan",
    ],
  },
  {
    numb: 45,
    question: "Manakah kata yang merupakan kata sifat?",
    answer: "Cepat",
    difficulty: "medium",
    category: "Bahasa",
    options: ["Rumah", "Cepat", "Lari", "Mereka"],
  },
  {
    numb: 46,
    question: "Apa makna dari peribahasa 'Seperti air di daun talas'?",
    answer: "Orang yang tidak tetap pendiriannya",
    difficulty: "medium",
    category: "Bahasa",
    options: [
      "Orang yang pandai berbohong",
      "Orang yang sulit diatur",
      "Orang yang tidak tetap pendiriannya",
      "Orang yang sangat rajin",
    ],
  },
  {
    numb: 47,
    question: "Pilihlah kalimat tanya yang tepat untuk menanyakan waktu:",
    answer: "Kapan kita akan berangkat ke sekolah?",
    difficulty: "medium",
    category: "Bahasa",
    options: [
      "Siapa yang datang ke rumahmu?",
      "Kapan kita akan berangkat ke sekolah?",
      "Di mana kamu tinggal?",
      "Mengapa kamu sedih?",
    ],
  },
  {
    numb: 48,
    question: "Manakah kalimat yang benar menurut ejaan bahasa Indonesia?",
    answer: "Ibu membeli buah-buahan di pasar.",
    difficulty: "medium",
    category: "Bahasa",
    options: [
      "Saya sedang belajar bahasa indonesia.",
      "Ibu membeli buah-buahan di pasar.",
      "Kucing itu berwarna hitam Putih.",
      "Buku ini milik adik saya.",
    ],
  },
  {
    numb: 49,
    question:
      "Bacalah kalimat berikut: 'Adi berangkat ke sekolah pukul 07.00 pagi.' Manakah kata keterangan dalam kalimat tersebut?",
    answer: "Pukul 07.00 pagi",
    difficulty: "medium",
    category: "Bahasa",
    options: ["Adi", "Berangkat", "Ke sekolah", "Pukul 07.00 pagi"],
  },
  {
    numb: 50,
    question:
      "Pilihlah kata yang tepat untuk melengkapi kalimat berikut: 'Ayah sedang ... mobil di garasi.'",
    answer: "Memperbaiki",
    difficulty: "medium",
    category: "Bahasa",
    options: ["Memperbaiki", "Membaca", "Menyiram", "Mencuci"],
  },

  //Bahasa Indnesia (Hard)
  {
    numb: 51,
    question:
      "Cerita fantasi tentang seorang anak yang menemukan pintu ke dunia lain:",
    answer:
      "Seorang anak menemukan pintu ajaib di kamarnya yang membawanya ke dunia penuh makhluk mitologi.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Seorang anak menemukan buku tua yang membawanya ke masa lalu.",
      "Seorang anak menemukan pintu ajaib di kamarnya yang membawanya ke dunia penuh makhluk mitologi.",
      "Seorang anak menemukan tongkat sihir yang memberinya kekuatan super.",
      "Seorang anak menemukan peta harta karun dan pergi berpetualang.",
    ],
  },
  {
    numb: 52,
    question: "Perbedaan antara pengertian denotatif dan konotatif:",
    answer:
      "Denotatif adalah makna asli dari sebuah kata, sementara konotatif adalah makna tambahan yang bersifat subjektif.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Denotatif adalah makna asli dari sebuah kata, sementara konotatif adalah makna tambahan yang bersifat subjektif.",
      "Denotatif adalah makna tambahan dari sebuah kata, sementara konotatif adalah makna asli dan objektif.",
      "Denotatif dan konotatif memiliki makna yang sama dalam semua konteks.",
      "Denotatif dan konotatif tidak ada hubungannya dengan makna kata.",
    ],
  },
  {
    numb: 53,
    question: "Kalimat kompleks menggunakan konjungsi sementara:",
    answer:
      "Dia belajar di perpustakaan sementara teman-temannya bermain di luar.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Aku makan siang di taman sambil membaca buku.",
      "Dia belajar di perpustakaan sementara teman-temannya bermain di luar.",
      "Kami pergi berlibur ke pantai karena cuaca sangat cerah.",
      "Mereka menonton film setelah makan malam bersama.",
    ],
  },
  {
    numb: 54,
    question: "Kejadian menarik di desa dalam bentuk teks deskriptif:",
    answer:
      "Di desa kami, ada sebuah festival tahunan yang penuh warna dan meriah.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Setiap pagi, burung-burung berkicau di atas pohon.",
      "Di desa kami, ada sebuah festival tahunan yang penuh warna dan meriah.",
      "Di desa, kami sering melihat kucing berkeliaran di jalan.",
      "Kebun di belakang rumah selalu penuh dengan bunga-bunga indah.",
    ],
  },
  {
    numb: 55,
    question: "Majas dan contoh penggunaan majas personifikasi:",
    answer:
      "Majas adalah ungkapan yang tidak memiliki makna harfiah; Contoh: Matahari tersenyum ramah kepada kami.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Majas adalah gaya bahasa dalam puisi; Contoh: Bulan bersinar terang di langit.",
      "Majas adalah ungkapan yang tidak memiliki makna harfiah; Contoh: Matahari tersenyum ramah kepada kami.",
      "Majas adalah kata-kata yang digunakan dalam percakapan sehari-hari; Contoh: Bintang-bintang bernyanyi di malam hari.",
      "Majas adalah bahasa yang digunakan dalam teks ilmiah; Contoh: Laut berteriak dengan keras.",
    ],
  },
  {
    numb: 56,
    question: "Perbedaan antara kalimat aktif dan kalimat pasif:",
    answer:
      "Kalimat aktif: Siswa membaca buku; Kalimat pasif: Buku dibaca oleh siswa.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Kalimat aktif: Siswa membaca buku; Kalimat pasif: Buku dibaca oleh siswa.",
      "Kalimat aktif: Buku dibaca oleh siswa; Kalimat pasif: Siswa membaca buku.",
      "Kalimat aktif dan pasif memiliki struktur yang sama.",
      "Kalimat aktif selalu menggunakan kata kerja pasif.",
    ],
  },
  {
    numb: 57,
    question:
      "Karangan naratif tentang pengalaman tak terlupakan di tempat wisata:",
    answer:
      "Kami mengunjungi sebuah gunung dan melihat pemandangan yang menakjubkan.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Aku pergi ke pantai dan berenang di laut.",
      "Kami mengunjungi sebuah gunung dan melihat pemandangan yang menakjubkan.",
      "Aku membeli oleh-oleh di toko suvenir.",
      "Kami duduk di taman dan menikmati pemandangan.",
    ],
  },
  {
    numb: 58,
    question: "Penggunaan tanda seru dalam kalimat naratif:",
    answer: "Tanda seru digunakan untuk menunjukkan ekspresi kuat.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Tanda seru digunakan untuk menunjukkan perasaan marah.",
      "Tanda seru digunakan untuk menyatakan perintah.",
      "Tanda seru digunakan untuk menunjukkan ekspresi kuat.",
      "Tanda seru digunakan untuk menandai akhir kalimat.",
    ],
  },
  {
    numb: 59,
    question: "Tokoh sejarah yang dikagumi dan pengaruhnya:",
    answer: "Marie Curie; penelitiannya membuka jalan bagi ilmu kedokteran.",
    difficulty: "hard",
    category: "Bahasa",
    options: [
      "Leonardo da Vinci; penemuannya mengubah dunia seni.",
      "Albert Einstein; teorinya mengubah dunia fisika.",
      "Mahatma Gandhi; perjuangannya menginspirasi gerakan perdamaian.",
      "Marie Curie; penelitiannya membuka jalan bagi ilmu kedokteran.",
    ],
  },
  //IPA (easy)
  {
    numb: 61,
    question: "Apa yang dimaksud dengan alat pernapasan pada manusia?",
    answer:
      "Sistem yang terdiri dari organ-organ yang berfungsi untuk bernapas dan menghirup oksigen.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Organ tubuh yang berfungsi untuk mencerna makanan.",
      "Sistem yang terdiri dari organ-organ yang berfungsi untuk bernapas dan menghirup oksigen.",
      "Jaringan yang berfungsi mengirimkan sinyal listrik ke otak.",
      "Bagian tubuh yang berfungsi untuk mengatur suhu tubuh.",
    ],
  },
  {
    numb: 62,
    question: "Sebutkan 3 jenis makanan yang mengandung protein!",
    answer: "Ayam, ikan, kacang-kacangan",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Apel, wortel, brokoli",
      "Ayam, ikan, kacang-kacangan",
      "Roti, pasta, nasi",
      "Kentang, ubi, jagung",
    ],
  },
  {
    numb: 63,
    question: "Apa fungsi mata dalam tubuh manusia?",
    answer: "Mengolah dan mengirimkan informasi visual ke otak.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Mengatur keseimbangan tubuh.",
      "Mengolah dan mengirimkan informasi visual ke otak.",
      "Mencerna makanan yang masuk ke dalam tubuh.",
      "Memompa darah ke seluruh tubuh.",
    ],
  },
  {
    numb: 64,
    question: "Sebutkan 5 jenis hewan yang hidup di darat!",
    answer: "Kucing, anjing, gajah, singa, harimau",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Ikan, paus, lumba-lumba, gurita, ubur-ubur",
      "Kucing, anjing, gajah, singa, harimau",
      "Burung, kelelawar, lebah, kupu-kupu, capung",
      "Kuda laut, bintang laut, kepiting, kerang, teripang",
    ],
  },
  {
    numb: 65,
    question: "Apa yang dimaksud dengan fotosintesis?",
    answer:
      "Proses di mana tumbuhan mengubah cahaya matahari menjadi energi kimia.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Proses di mana tumbuhan mengambil oksigen dari udara.",
      "Proses di mana tumbuhan menghasilkan energi melalui respirasi.",
      "Proses di mana tumbuhan mengubah cahaya matahari menjadi energi kimia.",
      "Proses di mana tumbuhan memproduksi bunga dan buah.",
    ],
  },
  {
    numb: 66,
    question: "Bagaimana cara kita merawat gigi agar tetap sehat?",
    answer: "Menggosok gigi dua kali sehari dan menghindari makanan manis.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Mengonsumsi banyak permen dan makanan manis.",
      "Menggosok gigi dua kali sehari dan menghindari makanan manis.",
      "Hanya mengunjungi dokter gigi saat gigi sakit.",
      "Tidak perlu menggosok gigi secara teratur.",
    ],
  },
  {
    numb: 67,
    question: "Apa yang dimaksud dengan polusi udara?",
    answer: "Udara yang terkontaminasi oleh zat-zat berbahaya bagi kesehatan.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Udara yang bersih dan sehat untuk dihirup.",
      "Udara yang terkontaminasi oleh zat-zat berbahaya bagi kesehatan.",
      "Proses alami di mana udara bergerak dari satu tempat ke tempat lain.",
      "Udara yang dihasilkan dari proses fotosintesis tumbuhan.",
    ],
  },
  {
    numb: 68,
    question: "Sebutkan 3 contoh benda yang dapat mengapung di air!",
    answer: "Kayu, bola plastik, gabus",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Batu, besi, karet",
      "Kayu, bola plastik, gabus",
      "Kaca, keramik, logam",
      "Pasir, kerikil, bata",
    ],
  },
  {
    numb: 69,
    question:
      "Bagaimana cara kita menjaga kebersihan lingkungan di sekitar kita?",
    answer: "Menanam pohon dan tidak membuang sampah ke sungai.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Membuang sampah sembarangan.",
      "Menanam pohon dan tidak membuang sampah ke sungai.",
      "Menggunakan plastik sekali pakai sebanyak mungkin.",
      "Membakar sampah di halaman rumah.",
    ],
  },
  {
    numb: 70,
    question: "Apa yang dimaksud dengan daur hidup serangga?",
    answer: "Proses pertumbuhan serangga dari telur hingga dewasa.",
    difficulty: "easy",
    category: "IPA",
    options: [
      "Proses pertumbuhan serangga dari telur hingga dewasa.",
      "Pergerakan serangga dari satu tempat ke tempat lain.",
      "Cara serangga mencari makanan di alam liar.",
      "Proses serangga berkomunikasi satu sama lain.",
    ],
  },

  //IPA (Medium)
  {
    numb: 71,
    question: "Apa yang dimaksud dengan fotosintesis?",
    answer: "Proses di mana tumbuhan mengubah cahaya matahari menjadi energi.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Proses di mana tumbuhan mengambil oksigen dari udara.",
      "Proses di mana tumbuhan mengubah cahaya matahari menjadi energi.",
      "Proses di mana tumbuhan menghasilkan bunga dan buah.",
      "Proses di mana tumbuhan beristirahat di malam hari.",
    ],
  },
  {
    numb: 72,
    question: "Bagaimana cara kerja jantung dalam tubuh manusia?",
    answer: "Jantung memompa darah ke seluruh tubuh.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Jantung menyaring darah untuk menghilangkan kotoran.",
      "Jantung memompa darah ke seluruh tubuh.",
      "Jantung mengubah oksigen menjadi karbon dioksida.",
      "Jantung memproduksi sel darah merah.",
    ],
  },
  {
    numb: 73,
    question: "Apa yang terjadi pada es saat dipanaskan?",
    answer: "Es mencair menjadi air.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Es mencair menjadi air.",
      "Es menguap menjadi gas.",
      "Es berubah menjadi salju.",
      "Es tetap dalam bentuk padat.",
    ],
  },
  {
    numb: 74,
    question: "Apa yang dimaksud dengan daur hidup kupu-kupu?",
    answer:
      "Proses perubahan dari telur menjadi ulat, kepompong, dan akhirnya kupu-kupu.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Proses perubahan dari telur menjadi ulat, kepompong, dan akhirnya kupu-kupu.",
      "Proses di mana kupu-kupu berubah warna setiap musim.",
      "Proses di mana kupu-kupu mencari makan setiap hari.",
      "Proses di mana kupu-kupu berpindah tempat untuk bertelur.",
    ],
  },
  {
    numb: 75,
    question: "Apa fungsi akar pada tumbuhan?",
    answer: "Menyerap air dan nutrisi dari tanah.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Menyerap air dan nutrisi dari tanah.",
      "Menghasilkan makanan bagi tumbuhan.",
      "Mengubah cahaya matahari menjadi energi.",
      "Melindungi tumbuhan dari hama.",
    ],
  },
  {
    numb: 76,
    question: "Mengapa langit berwarna biru pada siang hari?",
    answer: "Karena cahaya matahari dihamburkan oleh molekul udara.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Karena cahaya matahari dihamburkan oleh molekul udara.",
      "Karena lautan memantulkan warna biru.",
      "Karena langit terbuat dari materi biru.",
      "Karena cahaya matahari berubah warna di siang hari.",
    ],
  },
  {
    numb: 77,
    question: "Apa yang dimaksud dengan gaya gravitasi?",
    answer: "Gaya yang menarik benda ke arah pusat bumi.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Gaya yang menarik benda ke arah pusat bumi.",
      "Gaya yang mendorong benda menjauh dari bumi.",
      "Gaya yang membuat benda mengapung di udara.",
      "Gaya yang hanya bekerja di luar angkasa.",
    ],
  },
  {
    numb: 78,
    question: "Bagaimana cara menghemat energi listrik di rumah?",
    answer: "Mematikan lampu dan peralatan listrik saat tidak digunakan.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Mematikan lampu dan peralatan listrik saat tidak digunakan.",
      "Membiarkan lampu menyala sepanjang hari.",
      "Menggunakan lebih banyak peralatan listrik.",
      "Membeli peralatan listrik baru setiap bulan.",
    ],
  },
  {
    numb: 79,
    question: "Apa yang dimaksud dengan ekosistem?",
    answer:
      "Interaksi antara makhluk hidup dan lingkungan tempat mereka tinggal.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Interaksi antara makhluk hidup dan lingkungan tempat mereka tinggal.",
      "Hanya kumpulan tumbuhan di suatu area.",
      "Tempat tinggal hewan-hewan buas.",
      "Kumpulan batu dan mineral di alam.",
    ],
  },
  {
    numb: 80,
    question: "Apa yang dimaksud dengan perubahan kimia?",
    answer: "Perubahan yang menghasilkan zat baru dengan sifat yang berbeda.",
    difficulty: "medium",
    category: "IPA",
    options: [
      "Perubahan yang menghasilkan zat baru dengan sifat yang berbeda.",
      "Perubahan yang hanya mengubah bentuk zat.",
      "Perubahan yang tidak mengubah sifat zat.",
      "Perubahan warna suatu zat.",
    ],
  },

  //IPA (Hard)
  {
    numb: 81,
    question: "Apa yang dimaksud dengan siklus air?",
    answer:
      "Proses terus-menerus di mana air bergerak dari permukaan bumi ke atmosfer dan kembali lagi.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Proses air menguap dan menghilang dari bumi.",
      "Proses air bergerak di dalam tanah.",
      "Proses terus-menerus di mana air bergerak dari permukaan bumi ke atmosfer dan kembali lagi.",
      "Proses di mana air berubah menjadi es.",
    ],
  },
  {
    numb: 82,
    question: "Apa yang terjadi selama proses fotosintesis?",
    answer:
      "Tumbuhan menggunakan sinar matahari, air, dan karbon dioksida untuk menghasilkan glukosa dan oksigen.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Tumbuhan menggunakan sinar matahari, air, dan karbon dioksida untuk menghasilkan glukosa dan oksigen.",
      "Tumbuhan mengubah oksigen menjadi karbon dioksida.",
      "Tumbuhan menyerap nutrisi dari tanah dan mengubahnya menjadi energi.",
      "Tumbuhan beristirahat dan menyimpan energi.",
    ],
  },
  {
    numb: 83,
    question: "Apa peran utama klorofil dalam tumbuhan?",
    answer: "Menangkap energi cahaya matahari untuk fotosintesis.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Mengubah air menjadi oksigen.",
      "Menangkap energi cahaya matahari untuk fotosintesis.",
      "Menyerap karbon dioksida dari udara.",
      "Menghasilkan bunga dan buah.",
    ],
  },
  {
    numb: 84,
    question: "Mengapa tulang kita sangat kuat?",
    answer:
      "Tulang terdiri dari jaringan yang kuat dan mineral seperti kalsium.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Tulang terdiri dari jaringan yang kuat dan mineral seperti kalsium.",
      "Tulang dibuat dari bahan fleksibel.",
      "Tulang memiliki banyak air di dalamnya.",
      "Tulang terbuat dari jaringan otot.",
    ],
  },
  {
    numb: 85,
    question: "Bagaimana proses respirasi pada manusia berlangsung?",
    answer:
      "Manusia menghirup oksigen dan menghembuskan karbon dioksida melalui paru-paru.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Manusia menghirup karbon dioksida dan menghembuskan oksigen.",
      "Manusia menghirup oksigen dan menghembuskan karbon dioksida melalui paru-paru.",
      "Manusia mengubah air menjadi oksigen di paru-paru.",
      "Manusia hanya menghirup udara tanpa mengeluarkan apa pun.",
    ],
  },
  {
    numb: 86,
    question: "Apa yang dimaksud dengan gaya gesek?",
    answer: "Gaya yang menahan gerakan antara dua permukaan yang bersentuhan.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Gaya yang menarik benda ke bawah.",
      "Gaya yang menahan gerakan antara dua permukaan yang bersentuhan.",
      "Gaya yang membuat benda melayang di udara.",
      "Gaya yang menggerakkan benda ke depan.",
    ],
  },
  {
    numb: 87,
    question: "Apa yang terjadi pada batuan dalam siklus batuan?",
    answer:
      "Batuan dapat mengalami perubahan bentuk dan komposisi melalui proses pelapukan, erosi, dan metamorfosis.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Batuan hanya bisa berubah menjadi debu.",
      "Batuan dapat mengalami perubahan bentuk dan komposisi melalui proses pelapukan, erosi, dan metamorfosis.",
      "Batuan tetap tidak berubah selamanya.",
      "Batuan hanya bisa menguap.",
    ],
  },
  {
    numb: 88,
    question:
      "Bagaimana gerak planet di tata surya dijelaskan oleh hukum gravitasi Newton?",
    answer:
      "Planet bergerak mengelilingi matahari karena adanya gaya tarik-menarik gravitasi antara planet dan matahari.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Planet bergerak mengelilingi matahari karena adanya gaya dorong dari matahari.",
      "Planet bergerak mengelilingi matahari karena adanya gaya tarik-menarik gravitasi antara planet dan matahari.",
      "Planet bergerak mengelilingi matahari karena adanya tekanan dari bintang lain.",
      "Planet bergerak mengelilingi matahari karena mereka memiliki sayap.",
    ],
  },
  {
    numb: 89,
    question: "Apa yang dimaksud dengan habitat alami?",
    answer:
      "Tempat di mana makhluk hidup tinggal dan berkembang biak secara alami.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Tempat di mana makhluk hidup tinggal dan berkembang biak secara alami.",
      "Tempat buatan manusia untuk hewan peliharaan.",
      "Tempat di mana hanya tumbuhan dapat hidup.",
      "Tempat yang tidak dihuni oleh makhluk hidup.",
    ],
  },
  {
    numb: 90,
    question: "Apa yang dimaksud dengan perubahan kimia?",
    answer: "Perubahan yang menghasilkan zat baru dengan sifat yang berbeda.",
    difficulty: "hard",
    category: "IPA",
    options: [
      "Perubahan yang menghasilkan zat baru dengan sifat yang berbeda.",
      "Perubahan yang hanya mengubah bentuk zat tanpa mengubah komposisi kimianya.",
      "Perubahan warna suatu zat tanpa mempengaruhi sifat kimianya.",
      "Perubahan yang dapat kembali ke bentuk aslinya dengan mudah.",
    ],
  },
];

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;

const startQuiz = () => {
  const numQues = parseInt(numQuestions.value);
  const selectedDifficulty = difficulty.value;
  const selectedCategory = category.value;

  questions = allQuestions
    .filter(
      (question) =>
        question.difficulty === selectedDifficulty &&
        question.category === selectedCategory
    )
    .slice(0, numQues);

  if (questions.length === 0) {
    alert("No questions available for the selected category and difficulty.");
    return;
  }

  startScreen.classList.add("hide");
  quiz.classList.remove("hide");
  currentQuestion = 1;
  showQuestion(questions[0]);
};

startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper"),
    questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [...question.options];
  answersWrapper.innerHTML = "";
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((answer) => {
    answersWrapper.innerHTML += `
      <div class="answer">
        <span class="text">${answer}</span>
        <span class="checkbox">
          <i class="fas fa-check"></i>
        </span>
      </div>
    `;
  });

  questionNumber.innerHTML = ` Question <span class="current">${
    questions.indexOf(question) + 1
  }</span>
    <span class="total">/${questions.length}</span>`;

  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });

  time = parseInt(timePerQuestion.value);
  startTimer(time);
};

const startTimer = (time) => {
  let currentTime = time;
  clearInterval(timer);

  timer = setInterval(() => {
    if (currentTime >= 0) {
      progress(currentTime);
      currentTime--;
    } else {
      clearInterval(timer);
      checkAnswer();
    }
  }, 1000);
};

const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");

submitBtn.addEventListener("click", () => {
  checkAnswer();
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text").innerHTML;
    if (answer === questions[currentQuestion - 1].answer) {
      score++;
      selectedAnswer.classList.add("correct");
    } else {
      selectedAnswer.classList.add("wrong");
      document.querySelectorAll(".answer").forEach((answer) => {
        if (
          answer.querySelector(".text").innerHTML ===
          questions[currentQuestion - 1].answer
        ) {
          answer.classList.add("correct");
        }
      });
    }
  } else {
    document.querySelectorAll(".answer").forEach((answer) => {
      if (
        answer.querySelector(".text").innerHTML ===
        questions[currentQuestion - 1].answer
      ) {
        answer.classList.add("correct");
      }
    });
  }
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");

const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/ ${questions.length}`;
};

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});
