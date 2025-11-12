export const id = {
  // Homepage
  homepage: {
    title: '🎮 Game Seru untuk Pasangan 💕',
    intro: 'Selamat datang di Game Seru untuk Pasangan! Kumpulan game interaktif yang dirancang untuk pasangan agar dapat bersenang-senang bersama. Pilih game di bawah ini dan mulai bermain!',
    availableGames: 'Game yang Tersedia:',
    playNow: 'Main Sekarang 🎮',
    shopeeFortuneWheel: {
      name: 'Roda Keberuntungan Shopee',
      description: 'Putar roda, tebak huruf, dan menangkan budget belanja Anda! Game seru yang terinspirasi dari Wheel of Fortune.'
    },
    talkDeck: {
      name: 'TalkDeck',
      description: 'Percakapan mendalam dimulai dari sini. Balik kartu untuk menemukan pertanyaan tentang cinta, mimpi, dan segala hal di antaranya.'
    }
  },

  // Host Setup
  hostSetup: {
    title: '🎡 Roda Keberuntungan Shopee 💕',
    subtitle: 'Putar, Tebak, dan Menang!',
    secretPhraseLabel: 'Masukkan Frasa Rahasia:',
    secretPhrasePlaceholder: 'contoh: AKU SAYANG KAMU BANGET',
    currencyLabel: 'Kode Mata Uang:',
    currencyPlaceholder: 'contoh: IDR, USD, EUR',
    currencyHint: '💡 Atur kode mata uang untuk menampilkan nilai (contoh: IDR, USD, EUR)',
    wheelConfigTitle: 'Konfigurasi Roda:',
    useDefaultWheel: 'Gunakan Roda Default (Rekomendasi)',
    customizeWheel: 'Sesuaikan Nilai dan Bobot Roda',
    configHint: '💡 Tips: Bobot lebih rendah = nilai lebih langka. Bobot relatif satu sama lain.',
    valueLabel: 'Nilai',
    weightLabel: 'Bobot (Kelangkaan)',
    actionLabel: 'Aksi',
    addValue: '➕ Tambah Nilai',
    resetToDefault: '🔄 Reset ke Default',
    gameSettingsTitle: 'Pengaturan Permainan:',
    vowelPriceLabel: 'Harga Vokal Awal',
    vowelPriceHint: '💡 Vokal ke-1 dengan harga ini, ke-2 dengan 2x harga, ke-3 dengan 3x harga, dst.',
    bonusPerLetterLabel: 'Poin Bonus per Huruf yang Belum Ditebak',
    bonusPerLetterHint: '💡 Bonus diberikan untuk setiap huruf yang belum ditebak saat menyelesaikan frasa dengan benar.',
    startButton: 'Mulai Permainan 🎮',
    rulesTitle: '📖 Cara Bermain:',
  holdToReveal: 'Tahan untuk melihat',
    rules: {
      spinWheel: '🎡 <strong>Putar Roda:</strong> Klik "Putar" untuk mendapatkan nilai acak yang menentukan poin potensial Anda',
      guessConsonants: '🔤 <strong>Tebak Konsonan:</strong> Setelah memutar, pilih huruf konsonan',
      guessCorrect: '✅ Jika benar: TAMBAHKAN nilai yang diputar ke skor Anda',
      guessWrong: '❌ Jika salah: KEHILANGAN SETENGAH dari nilai yang diputar',
      buyVowels: '💰 <strong>Beli Vokal:</strong> Beli vokal (A, E, I, O, U) menggunakan poin Anda',
      vowel1st: 'Vokal ke-1',
      vowel2nd: 'Vokal ke-2',
      vowel3rd: 'Vokal ke-3',
      andSoOn: 'dan seterusnya...',
      solvePhrase: '🎯 <strong>Selesaikan Frasa:</strong> Ketika Anda tahu jawabannya, klik "Tebak Frasa Lengkap"',
      solveCorrect: '✅ Jika benar: Dapatkan',
      solveCorrectBonus: 'bonus untuk setiap huruf yang belum ditebak!',
      solveWrong: '❌ Jika salah: KEHILANGAN SETENGAH dari skor Anda saat ini',
      finalScore: '🛍️ <strong>Skor Akhir Anda = Budget Belanja Shopee Anda!</strong>',
      proTip: '💡 <strong>Tips Pro:</strong> Seimbangkan antara mengungkap huruf dan menyelesaikan lebih awal untuk memaksimalkan poin bonus Anda. Semoga beruntung! 🍀'
    }
  },

  // Game Board
  gameBoard: {
    initialMessage: 'Putar roda untuk memulai!',
    spinResult: 'Anda memutar',
    nowGuessConsonant: 'Sekarang tebak konsonan.',
    errorSpinning: 'Kesalahan saat memutar roda. Silakan coba lagi.',
    spinFirst: 'Silakan putar roda terlebih dahulu!',
    alreadyGuessed: 'Anda sudah menebak huruf itu!',
    guessConsonant: 'Silakan tebak konsonan!',
    correct: 'Benar!',
    inPhrase: 'ada dalam frasa.',
    wrong: 'Salah!',
    notInPhrase: 'tidak ada dalam frasa.',
    cannotAfford: 'Poin tidak cukup! Anda membutuhkan',
    vowelPurchased: 'Vokal dibeli!',
    vowelInPhrase: 'ada dalam frasa.',
    vowelNotInPhrase: 'tidak ada dalam frasa (tetapi tetap terungkap).',
    congratulations: '🎉 Selamat! Anda berhasil menyelesaikannya!',
    bonusAwarded: 'Bonus diberikan untuk',
    unguessedLetters: 'huruf yang belum ditebak!',
    incorrectPhrase: '❌ Salah! Kehilangan setengah skor Anda. Coba lagi!',
    spinButton: 'Putar',
    score: 'Skor',
    buyVowel: 'Beli Vokal',
    cost: 'Biaya',
    consonants: 'Konsonan',
    vowels: 'Vokal',
    guessPhraseButton: 'Tebak Frasa Lengkap',
    cancelButton: 'Batal',
    submitButton: 'Kirim',
    yourGuess: 'Tebakan Anda:',
    helpButton: '❓ Bantuan',
    endGameButton: '🏁 Akhiri Permainan'
  },

  // Help Modal
  helpModal: {
    title: '🎮 Cara Bermain Roda Keberuntungan Shopee',
    objective: '🎯 Tujuan Permainan',
    objectiveText: 'Tebak frasa rahasia dengan memutar roda dan menebak huruf. Skor akhir Anda menjadi budget belanja Shopee Anda!',
    howToPlayTitle: '🎡 Cara Bermain',
    steps: {
      step1: '<strong>Putar Roda:</strong> Klik tombol "Putar" untuk mendapatkan nilai acak',
      step2: '<strong>Tebak Konsonan:</strong> Klik huruf konsonan untuk menebaknya',
      step2a: '✅ Tebakan benar: <strong>TAMBAHKAN</strong> nilai yang diputar ke skor Anda',
      step2b: '❌ Tebakan salah: <strong>KEHILANGAN SETENGAH</strong> dari nilai yang diputar',
      step3: '<strong>Beli Vokal:</strong> Beli vokal (A, E, I, O, U) menggunakan skor Anda',
      step3a: 'Vokal pertama dengan harga awal (contoh: {currency} 5.000)',
      step3b: 'Vokal kedua dengan harga 2× dari harga awal',
      step3c: 'Vokal ketiga dengan harga 3× dari harga awal, dan seterusnya',
      step4: '<strong>Selesaikan Frasa:</strong> Ketika Anda pikir Anda tahu jawabannya, klik "Tebak Frasa Lengkap"',
      step4a: '✅ Jawaban benar: Dapatkan poin bonus untuk setiap huruf yang belum ditebak',
      step4b: '❌ Jawaban salah: <strong>KEHILANGAN SETENGAH</strong> dari skor Anda saat ini'
    },
    scoringTipsTitle: '💰 Tips Penilaian',
    scoringTips: {
      tip1: 'Nilai roda yang lebih tinggi memberikan lebih banyak poin untuk tebakan yang benar',
      tip2: 'Vokal terungkap saat dibeli, apakah ada dalam frasa atau tidak',
      tip3: 'Selesaikan frasa lebih awal untuk memaksimalkan poin bonus dari huruf yang belum ditebak',
      tip4: 'Hati-hati! Tebakan salah dan upaya frasa salah dapat menghabiskan poin Anda'
    },
    strategyTitle: '🎊 Strategi Menang',
    strategyText: 'Seimbangkan antara menebak huruf umum lebih awal dan menyelesaikan frasa sebelum Anda mengungkap terlalu banyak huruf. Semoga beruntung! 🍀',
    closeButton: 'Mengerti! Ayo Main 🎮'
  },

  // Final Summary
  finalSummary: {
    title: '🎊 Permainan Selesai! 🎊',
    shopeeBudget: 'Budget Shopee Anda',
    bonusDetails: '🎁 Detail Bonus',
    scoreBeforeBonus: 'Skor sebelum bonus:',
    unguessedCount: 'Jumlah huruf yang belum ditebak:',
    unguessedLetters: 'Huruf yang belum ditebak:',
    bonusPerLetter: 'Bonus per huruf:',
    totalBonus: 'Total bonus:',
    celebrations: {
      amazing: 'Luar biasa! Anda siap untuk berbelanja! 🛍️',
      great: 'Bagus sekali! Itu budget yang bagus! 💰',
      notBad: 'Lumayan! Setiap rupiah berarti! 💕',
      ohNo: 'Oh tidak! Lebih beruntung lain kali! 🎯'
    },
    playAgain: '🔄 Main Lagi',
    shopeeMessage: 'Waktunya belanja di Shopee! 🛒',
    backToHome: '🏠 Kembali ke Beranda'
  },

  // Language Switcher
  language: {
    english: 'English',
    indonesian: 'Bahasa Indonesia'
  },

  // Wheel Component
  wheel: {
    youSpun: 'Anda memutar!',
    spinMe: 'Putar Saya!',
    spinning: '🎡 Memutar...',
    spun: '✅ Sudah Diputar!',
    spinWheel: '🎯 Putar Roda!',
    sound: '🔊 Wheeeee!'
  },

  // TalkDeck
  talkDeck: {
    title: '💬 TalkDeck 💕',
    subtitle: 'Percakapan mendalam, satu kartu sekaligus',
    tapToFlip: 'Ketuk untuk melihat pertanyaan',
    questionsRemaining: 'Pertanyaan tersisa',
    instructions: 'Ketuk kartu untuk melihat pemicu percakapan. Ketuk lagi untuk pertanyaan baru!',
    backToHome: '🏠 Kembali ke Beranda',
    questions: [
      // Romantis (20 pertanyaan)
      'Kapan momen kamu menyadari kamu punya perasaan padaku?',
      'Apa kenangan favoritmu tentang kita berdua?',
      'Menurutmu bagaimana hubungan kita berkembang sejak pertama bertemu?',
      'Hal kecil apa yang aku lakukan yang membuatmu merasa dicintai?',
      'Apa satu hal tentang hubungan kita yang membuatmu tersenyum?',
      'Kapan kamu merasa paling terhubung denganku?',
      'Apa cara favoritmu untuk menghabiskan waktu berkualitas bersama?',
      'Apa hal romantis yang pernah aku lakukan yang tidak akan pernah kamu lupakan?',
      'Bagaimana kamu ingin dihibur saat merasa sedih?',
      'Lagu apa yang mengingatkanmu pada kita dan mengapa?',
      'Apa satu mimpi yang kamu miliki untuk masa depan kita bersama?',
      'Apa hadiah paling bijaksana yang pernah aku berikan padamu?',
      'Bagaimana perasaanmu saat kita berpisah untuk waktu yang lama?',
      'Menurutmu seperti apa kencan malam yang sempurna?',
      'Apa yang membuatmu merasa paling dihargai dalam hubungan kita?',
      'Jika kamu bisa menggambarkan cinta kita dalam tiga kata, apa itu?',
      'Tradisi apa yang ingin kamu mulai bersama kita?',
      'Apa satu hal yang aku lakukan yang selalu membuat jantungmu berdebar?',
      'Bagaimana berada denganku mengubahmu sebagai pribadi?',
      'Apa hal favoritmu yang aku katakan padamu?',

      // Serius (20 pertanyaan)
      'Apa ketakutan terbesarmu tentang masa depan?',
      'Bagaimana kamu menangani stres dan apa yang bisa aku lakukan untuk mendukungmu?',
      'Apa yang sedang kamu perjuangkan yang belum kamu ceritakan padaku?',
      'Apa nilai-nilai intimu dan bagaimana mereka memandu hidupmu?',
      'Bagaimana kamu mendefinisikan kesuksesan dalam hidup?',
      'Apa pelajaran terpenting yang hidup ajarkan padamu?',
      'Bagaimana pendapatmu tentang keseimbangan kerja-kehidupan?',
      'Bagaimana perasaanmu tentang posisi kita dalam hidup saat ini?',
      'Apa yang kamu harap orang lain lebih memahami tentang dirimu?',
      'Apa arti komitmen bagimu?',
      'Bagaimana kamu ingin tumbuh sebagai pribadi dalam tahun depan?',
      'Apa ketidakamananmu yang terbesar dan bagaimana aku bisa membantu?',
      'Bagaimana perasaanmu tentang kompromi dalam hubungan?',
      'Apa pendapatmu tentang memiliki anak?',
      'Apa arti stabilitas finansial bagimu?',
      'Bagaimana kamu menangani konflik dalam hubungan?',
      'Peran apa yang keluarga mainkan dalam hidupmu?',
      'Apa pendapatmu tentang ruang pribadi dalam hubungan?',
      'Seberapa penting kesuksesan karir bagimu?',
      'Warisan apa yang ingin kamu tinggalkan?',

      // Lucu (20 pertanyaan)
      'Jika kamu hanya bisa makan satu makanan seumur hidup, apa itu?',
      'Apa hal paling memalukan yang pernah terjadi padamu?',
      'Jika kamu seorang superhero, apa kekuatan super yang tidak berguna?',
      'Apa mimpi paling aneh yang pernah kamu alami?',
      'Jika hewan bisa bicara, mana yang paling kasar?',
      'Apa ketakutan paling irasionalmu?',
      'Jika kamu bisa bertukar hidup dengan karakter fiksi mana pun, siapa itu?',
      'Apa pilihan fashion terburuk yang pernah kamu buat?',
      'Jika kamu harus menghapus semua kecuali tiga aplikasi dari ponselmu, mana yang akan kamu simpan?',
      'Apa guilty pleasure-mu yang membuatmu malu?',
      'Jika kamu bisa makan malam dengan tiga orang, hidup atau mati, siapa mereka?',
      'Apa julukan paling lucu yang pernah kamu miliki?',
      'Jika kamu adalah alat dapur, apa itu dan mengapa?',
      'Apa argumen paling konyol yang pernah kita miliki?',
      'Jika kamu bisa mengganti namamu, nama apa yang akan kamu pilih?',
      'Apa pendapat paling tidak populermu?',
      'Jika kamu bisa terkenal karena sesuatu, apa itu?',
      'Apa hal paling konyol yang kamu percayai saat kecil?',
      'Jika kamu tidak terlihat selama sehari, apa yang akan kamu lakukan?',
      'Apa lagu karaoke andalanmu?',

      // Bermimpi (20 pertanyaan)
      'Jika kamu bisa tinggal di mana saja di dunia, di mana itu?',
      'Apa liburan impianmu?',
      'Jika uang bukan masalah, apa yang akan kamu lakukan dengan hidupmu?',
      'Seperti apa hari sempurnamu dari awal hingga akhir?',
      'Jika kamu bisa menguasai keterampilan apa pun secara instan, apa itu?',
      'Petualangan apa yang ingin kita lakukan bersama?',
      'Jika kamu bisa mendesain rumah impian kita, seperti apa itu?',
      'Apa yang ada di bucket list-mu yang ingin kamu lakukan bersama?',
      'Jika kamu bisa melakukan perjalanan waktu, era mana yang akan kamu kunjungi?',
      'Kehidupan seperti apa yang kamu bayangkan untuk kita dalam 10 tahun?',
      'Jika kamu bisa bangun besok dengan karir apa pun, apa itu?',
      'Apa hobi yang selalu ingin kamu coba bersama?',
      'Jika kita bisa pindah ke negara mana pun, mana yang akan kamu pilih?',
      'Seperti apa pensiun dalam mimpimu?',
      'Jika kamu bisa punya konser pribadi dari artis mana pun, siapa itu?',
      'Dunia fantasi apa yang ingin kamu tinggali selama seminggu?',
      'Jika kamu bisa memiliki jenis bisnis apa pun, apa itu?',
      'Apa tujuan yang ingin kamu dukung atau mulai?',
      'Jika kamu bisa mempelajari jawaban untuk pertanyaan apa pun, apa yang akan kamu tanyakan?',
      'Pengalaman apa yang ingin kamu miliki sebelum kamu mati?',

      // Tentang Masa Depan (10 pertanyaan)
      'Di mana kamu melihat dirimu dalam 5 tahun?',
      'Tujuan apa yang ingin kamu capai dalam tahun depan?',
      'Bagaimana kamu membayangkan kehidupan kita bersama akan berkembang?',
      'Menurutmu seperti apa orang tua yang akan kamu jadi?',
      'Perubahan apa yang ingin kamu buat dalam hidupmu?',
      'Bagaimana kamu ingin merayakan pencapaian masa depan kita?',
      'Apa yang paling membuatmu bersemangat tentang masa depan kita?',
      'Rumah seperti apa yang ingin kita ciptakan bersama?',
      'Bagaimana kamu membayangkan kita menua bersama?',
      'Tradisi apa yang ingin kamu wariskan ke generasi mendatang?',

      // Tentang Masa Lalu (10 pertanyaan)
      'Apa kenangan masa kecilmu yang paling favorit?',
      'Siapa cinta pertamamu dan apa yang terjadi?',
      'Apa dari masa lalumu yang membentuk siapa dirimu hari ini?',
      'Apa nasihat terbaik yang pernah kamu terima?',
      'Momen apa dari masa lalumu yang ingin kamu alami kembali?',
      'Apa kesalahan terbesarmu dan apa yang kamu pelajari darinya?',
      'Siapa sahabatmu saat tumbuh dan seperti apa mereka?',
      'Apa yang kamu percayai saat kecil yang ternyata salah?',
      'Tradisi keluarga apa yang kamu miliki yang kamu sukai?',
      'Pencapaian apa dari masa lalumu yang paling membanggakan?'
    ]
  }
};
