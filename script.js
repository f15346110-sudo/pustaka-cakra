/* ============================================
   PUSTAKA CAKRA - MAIN SCRIPT
   + Rating, Denda Otomatis, Chart, 3D Reader
   + Banner Slider, Reviews, View Count
   + Admin Reply Reviews, Monthly Chart
   ========================================== */

// ==========================================
// DATA BUKU (50 buku, 8 kategori) + ISBN asli
// ==========================================
const DEFAULT_BOOKS = [
    // --- Fiksi (8) ---
    { id:1, isbn:"9789791227001", title:"Laskar Pelangi", author:"Andrea Hirata", year:2005, category:"Fiksi", status:"Tersedia", desc:"Kisah inspiratif 10 anak Belitung yang berjuang meraih pendidikan di sekolah yang hampir runtuh.", customCover:"" },
    { id:2, isbn:"9789799023119", title:"Bumi Manusia", author:"Pramoedya Ananta Toer", year:1980, category:"Fiksi", status:"Tersedia", desc:"Novel sejarah tentang perjuangan Minke melawan ketidakadilan kolonial di Hindia Belanda.", customCover:"" },
    { id:3, isbn:"9789799100859", title:"Cantik Itu Luka", author:"Eka Kurniawan", year:2002, category:"Fiksi", status:"Tersedia", desc:"Novel magis-realistis yang menelusuri sejarah Indonesia melalui nasib perempuan-perempuan cantik.", customCover:"" },
    { id:4, isbn:"9789792201890", title:"Ronggeng Dukuh Paruk", author:"Ahmad Tohari", year:1982, category:"Fiksi", status:"Tersedia", desc:"Tragedi manusia desa yang terjebak antara tradisi dan gejolak politik tahun 1965.", customCover:"" },
    { id:5, isbn:"9789792776538", title:"Perahu Kertas", author:"Dee Lestari", year:2009, category:"Fiksi", status:"Tersedia", desc:"Dua jiwa kreatif yang mencari jati diri dan akhirnya menemukan satu sama lain.", customCover:"" },
    { id:6, isbn:"9789792776491", title:"Supernova: Ksatria, Puteri, dan Bintang Jatuh", author:"Dee Lestari", year:2001, category:"Fiksi", status:"Tersedia", desc:"Perjalanan intelektual dan spiritual yang memadukan sains, filsafat, dan cinta.", customCover:"" },
    { id:7, isbn:"9786042403176", title:"Orang-Orang Biasa", author:"Andrea Hirata", year:2019, category:"Fiksi", status:"Tersedia", desc:"Potret kehidupan masyarakat pesisir yang penuh humor dan air mata.", customCover:"" },
    { id:8, isbn:"9789792489179", title:"Pulang", author:"Leila S. Chudori", year:2012, category:"Fiksi", status:"Tersedia", desc:"Kisah eksil politik Indonesia yang terombang-ambing antara ideologi dan kerinduan kampung halaman.", customCover:"" },

    // --- Sains (7) ---
    { id:9, isbn:"9780553380163", title:"A Brief History of Time", author:"Stephen Hawking", year:1988, category:"Sains", status:"Tersedia", desc:"Penjelasan brilian tentang kosmologi, lubang hitam, dan asal-usul alam semesta untuk pembaca umum.", customCover:"" },
    { id:10, isbn:"9780345539434", title:"Cosmos", author:"Carl Sagan", year:1980, category:"Sains", status:"Tersedia", desc:"Perjalanan menakjubkan menjelajahi alam semesta, dari atom hingga galaksi terjauh.", customCover:"" },
    { id:11, isbn:"9781476733524", title:"The Gene: An Intimate History", author:"Siddhartha Mukherjee", year:2016, category:"Sains", status:"Tersedia", desc:"Riwayat genetika manusia dari Mendel hingga revolusi CRISPR yang mengubah masa depan.", customCover:"" },
    { id:12, isbn:"9780199291151", title:"The Selfish Gene", author:"Richard Dawkins", year:1976, category:"Sains", status:"Tersedia", desc:"Perspektif revolusioner tentang evolusi: gen yang memanfaatkan organisme untuk bereplikasi.", customCover:"" },
    { id:13, isbn:"9780767908184", title:"A Short History of Nearly Everything", author:"Bill Bryson", year:2003, category:"Sains", status:"Tersedia", desc:"Tur menyenangkan melintasi sejarah sains dan penemuan-penemuan besar umat manusia.", customCover:"" },
    { id:14, isbn:"9780226458120", title:"The Structure of Scientific Revolutions", author:"Thomas Kuhn", year:1962, category:"Sains", status:"Tersedia", desc:"Teori paradigma yang mengubah cara kita memahami perkembangan ilmu pengetahuan.", customCover:"" },
    { id:15, isbn:"9780618249060", title:"Silent Spring", author:"Rachel Carson", year:1962, category:"Sains", status:"Tersedia", desc:"Buku legendaris yang meluncurkan gerakan lingkungan modern dan menyadarkan dunia tentang bahaya pestisida.", customCover:"" },

    // --- Sejarah (7) ---
    { id:16, isbn:"9780062316097", title:"Sapiens: A Brief History of Humankind", author:"Yuval Noah Harari", year:2011, category:"Sejarah", status:"Tersedia", desc:"Narasi grand tentang perjalanan Homo sapiens dari pemburu-pengumpul hingga menguasai planet.", customCover:"" },
    { id:17, isbn:"9780062464313", title:"Homo Deus: A Brief History of Tomorrow", author:"Yuval Noah Harari", year:2015, category:"Sejarah", status:"Tersedia", desc:"Visi masa depan umat manusia ketika teknologi mulai menggantikan evolusi biologi.", customCover:"" },
    { id:18, isbn:"9780393354324", title:"Guns, Germs, and Steel", author:"Jared Diamond", year:1997, category:"Sejarah", status:"Tersedia", desc:"Mengapa peradaban Eurasia mendominasi? Jawaban berdasarkan geografi dan lingkungan.", customCover:"" },
    { id:19, isbn:"9789799023478", title:"Sejarah Indonesia Modern", author:"M.C. Ricklefs", year:2005, category:"Sejarah", status:"Tersedia", desc:"Referensi komprehensif tentang sejarah Indonesia dari kerajaan Nusantara hingga era reformasi.", customCover:"" },
    { id:20, isbn:"9781590302255", title:"The Art of War", author:"Sun Tzu", year:2003, category:"Sejarah", status:"Tersedia", desc:"Risalah strategi militer kuno yang masih relevan dalam bisnis dan kehidupan modern.", customCover:"" },
    { id:21, isbn:"9780307237834", title:"Genghis Khan and the Making of the Modern World", author:"Jack Weatherford", year:2004, category:"Sejarah", status:"Tersedia", desc:"Revisi pandangan tentang Genghis Khan dan kontribusi bangsa Mongol terhadap peradaban dunia.", customCover:"" },
    { id:22, isbn:"9781101912379", title:"The Silk Roads", author:"Peter Frankopan", year:2015, category:"Sejarah", status:"Tersedia", desc:"Sejarah dunia dari perspektif Jalur Sutra, menghubungkan Timur dan Barat.", customCover:"" },

    // --- Teknologi (6) ---
    { id:23, isbn:"9780132350884", title:"Clean Code", author:"Robert C. Martin", year:2008, category:"Teknologi", status:"Tersedia", desc:"Panduan menulis kode yang bersih, mudah dibaca, dan dapat dipelihara untuk pengembang software.", customCover:"" },
    { id:24, isbn:"9780135957059", title:"The Pragmatic Programmer", author:"David Thomas & Andrew Hunt", year:1999, category:"Teknologi", status:"Tersedia", desc:"Filosofi dan praktik terbaik untuk menjadi programmer yang efektif dan profesional.", customCover:"" },
    { id:25, isbn:"9781476708706", title:"The Innovators", author:"Walter Isaacson", year:2014, category:"Teknologi", status:"Tersedia", desc:"Kisah para perintis revolusi digital dari Ada Lovelace hingga era internet.", customCover:"" },
    { id:26, isbn:"9781101946596", title:"Life 3.0", author:"Max Tegmark", year:2017, category:"Teknologi", status:"Tersedia", desc:"Membayangkan masa depan umat manusia di era kecerdasan buatan yang semakin maju.", customCover:"" },
    { id:27, isbn:"9781325546147", title:"AI Superpowers", author:"Kai-Fu Lee", year:2018, category:"Teknologi", status:"Tersedia", desc:"Persaingan AS dan Tiongkok dalam perlombaan AI dan dampaknya terhadap dunia kerja.", customCover:"" },
    { id:28, isbn:"9780201835953", title:"The Mythical Man-Month", author:"Frederick Brooks", year:1975, category:"Teknologi", status:"Tersedia", desc:"Klasik tentang manajemen proyek software: menambah orang tidak selalu mempercepat pekerjaan.", customCover:"" },

    // --- Filsafat (6) ---
    { id:29, isbn:"9780374530716", title:"Sophie's World", author:"Jostein Gaarder", year:1991, category:"Filsafat", status:"Tersedia", desc:"Perjalanan seorang gadis remaja menelusuri sejarah filsafat Barat dari Socrates hingga Sartre.", customCover:"" },
    { id:30, isbn:"9780140449334", title:"Meditations", author:"Marcus Aurelius", year:2006, category:"Filsafat", status:"Tersedia", desc:"Catatan pribadi kaisar Romawi tentang stoisme, kedisiplinan, dan ketenangan batin.", customCover:"" },
    { id:31, isbn:"9780140455113", title:"The Republic", author:"Plato", year:2007, category:"Filsafat", status:"Tersedia", desc:"Dialog filosofis tentang keadilan, negara ideal, dan sifat manusia yang berpengaruh selama ribuan tahun.", customCover:"" },
    { id:32, isbn:"9780140449235", title:"Beyond Good and Evil", author:"Friedrich Nietzsche", year:1886, category:"Filsafat", status:"Tersedia", desc:"Tantangan terhadap moralitas konvensional dan ajakan untuk berpikir melampaui dikotomi baik-buruk.", customCover:"" },
    { id:33, isbn:"9780671739164", title:"The Story of Philosophy", author:"Will Durant", year:1926, category:"Filsafat", status:"Tersedia", desc:"Pengantar populer tentang sejarah filsafat Barat yang ditulis dengan gaya mengalir dan mudah dipahami.", customCover:"" },
    { id:34, isbn:"9780807014271", title:"Man's Search for Meaning", author:"Viktor Frankl", year:1946, category:"Filsafat", status:"Tersedia", desc:"Pengalaman penyintas Holocaust yang melahirkan logoterapi: mencari makna di tengah penderitaan.", customCover:"" },

    // --- Sastra (6) ---
    { id:35, isbn:"9789795986163", title:"Hujan Bulan Juni", author:"Sapardi Djoko Damono", year:1994, category:"Sastra", status:"Tersedia", desc:"Kumpulan puisi cinta yang memukau dari maestro sastra Indonesia dengan lirisme yang mendalam.", customCover:"" },
    { id:36, isbn:"9789799749389", title:"Layar Terkembang", author:"Sutan Takdir Alisjahbana", year:1936, category:"Sastra", status:"Tersedia", desc:"Novel perintis modernisme Indonesia yang mengeksplorasi konflik antara tradisi dan kemajuan.", customCover:"" },
    { id:37, isbn:"9789792260049", title:"Salah Asuhan", author:"Abdul Muis", year:1928, category:"Sastra", status:"Tersedia", desc:"Novel yang menggambarkan benturan budaya Timur dan Barat dalam konteks kolonial.", customCover:"" },
    { id:38, isbn:"9789792260056", title:"Siti Nurbaya", author:"Marah Roesli", year:1922, category:"Sastra", status:"Tersedia", desc:"Kisah cinta tragis yang menjadi kritik terhadap kawin paksa dan feodalisme Minangkabau.", customCover:"" },
    { id:39, isbn:"9789799749396", title:"Atheis", author:"Achdiat K. Mihardja", year:1949, category:"Sastra", status:"Tersedia", desc:"Novel eksistensialis Indonesia tentang konflik keimanan, nalar, dan kebebasan berpikir.", customCover:"" },
    { id:40, isbn:"9789795923588", title:"Di Bawah Lindungan Ka'bah", author:"Hamka", year:1938, category:"Sastra", status:"Tersedia", desc:"Novel religius tentang cinta yang terlarang dan kekuatan iman di bawah naungan Mekkah.", customCover:"" },

    // --- Psikologi (6) ---
    { id:41, isbn:"9780374533557", title:"Thinking, Fast and Slow", author:"Daniel Kahneman", year:2011, category:"Psikologi", status:"Tersedia", desc:"Dua sistem berpikir manusia: intuitif-cepat versus deliberatif-lambat, dan bias-bias kognitif kita.", customCover:"" },
    { id:42, isbn:"9780735211292", title:"Atomic Habits", author:"James Clear", year:2018, category:"Psikologi", status:"Tersedia", desc:"Metode praktis membangun kebiasaan baik dan menghancurkan kebiasaan buruk dengan perubahan kecil.", customCover:"" },
    { id:43, isbn:"9780307352156", title:"Quiet: The Power of Introverts", author:"Susan Cain", year:2012, category:"Psikologi", status:"Tersedia", desc:"Mengapa introvert sering diabaikan dan bagaimana kekuatan mereka justru mengubah dunia.", customCover:"" },
    { id:44, isbn:"9780812981605", title:"The Power of Habit", author:"Charles Duhigg", year:2012, category:"Psikologi", status:"Tersedia", desc:"Ilmu di balik kebiasaan: bagaimana terbentuk, berubah, dan mempengaruhi kehidupan.", customCover:"" },
    { id:45, isbn:"9781501111108", title:"Grit: Passion, Perseverance", author:"Angela Duckworth", year:2016, category:"Psikologi", status:"Tersedia", desc:"Ketekunan dan passion lebih menentukan kesuksesan daripada bakat alam.", customCover:"" },
    { id:46, isbn:"9780062937545", title:"Influence: The Psychology of Persuasion", author:"Robert Cialdini", year:1984, category:"Psikologi", status:"Tersedia", desc:"Enam prinsip psikologi yang mendasari persuasi dan cara orang mempengaruhi kita.", customCover:"" },

    // --- Bisnis (4) ---
    { id:47, isbn:"9781612680194", title:"Rich Dad Poor Dad", author:"Robert Kiyosaki", year:1997, category:"Bisnis", status:"Tersedia", desc:"Pelajaran keuangan yang tidak diajarkan di sekolah: literasi uang, aset, dan mentalitas kaya.", customCover:"" },
    { id:48, isbn:"9780804139298", title:"Zero to One", author:"Peter Thiel", year:2014, category:"Bisnis", status:"Tersedia", desc:"Catatan tentang startup dan masa depan: cara membangun perusahaan yang menciptakan sesuatu yang baru.", customCover:"" },
    { id:49, isbn:"9780066620992", title:"Good to Great", author:"Jim Collins", year:2001, category:"Bisnis", status:"Tersedia", desc:"Penelitian mendalam tentang perusahaan yang bertransformasi dari biasa menjadi luar biasa.", customCover:"" },
    { id:50, isbn:"9780307887894", title:"The Lean Startup", author:"Eric Ries", year:2011, category:"Bisnis", status:"Tersedia", desc:"Metodologi startup modern: iterasi cepat, validasi pembelajaran, dan build-measure-learn.", customCover:"" }
];

// ==========================================
// COVER BUKU - Open Library API + Fallback
// ==========================================
const CATEGORY_COLORS = {
    'Fiksi': '#2e7d32', 'Sains': '#1565c0', 'Sejarah': '#b77e28',
    'Teknologi': '#6a1b9a', 'Filsafat': '#b71c1c', 'Sastra': '#ad1457',
    'Psikologi': '#00838f', 'Bisnis': '#e67e22'
};

function getCoverUrl(isbn, size) {
    if (!isbn) return null;
    return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

function createCoverFallback(book) {
    const bg = CATEGORY_COLORS[book.category] || '#333333';
    const initial = book.title.charAt(0).toUpperCase();
    const shortTitle = book.title.length > 25 ? book.title.substring(0, 22) + '...' : book.title;
    const category = book.category;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="520" viewBox="0 0 440 520">
        <defs>
            <linearGradient id="bg${book.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${bg};stop-opacity:1"/>
                <stop offset="100%" style="stop-color:${bg};stop-opacity:0.7"/>
            </linearGradient>
        </defs>
        <rect width="440" height="520" fill="url(%23bg${book.id})"/>
        <rect x="30" y="30" width="380" height="460" rx="8" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <text x="220" y="220" text-anchor="middle" dominant-baseline="central" font-family="Georgia,serif" font-size="140" font-weight="bold" fill="rgba(255,255,255,0.25)">${initial}</text>
        <text x="220" y="360" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="600" fill="rgba(255,255,255,0.85)">${shortTitle.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</text>
        <text x="220" y="400" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.5)">${category}</text>
        <line x1="140" y1="330" x2="300" y2="330" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    </svg>`;

    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function checkCoverSize(img) {
    if (img.naturalWidth <= 1 || img.naturalHeight <= 1) {
        handleCoverError(img);
    }
}

function handleCoverError(img) {
    const bookId = parseInt(img.dataset.bookId);
    if (img.dataset.fallbackUsed) return;
    img.dataset.fallbackUsed = 'true';

    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    if (book) {
        img.src = createCoverFallback(book);
    } else {
        img.src = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="440" height="520"><rect width="440" height="520" fill="#ccc"/><text x="220" y="260" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#666">No Cover</text></svg>`);
    }
}

function getBookCoverSrc(book, size = 'M') {
    if (book.customCover && book.customCover.trim() !== '') return book.customCover;
    if (book.isbn) return getCoverUrl(book.isbn, size);
    return createCoverFallback(book);
}

// ==========================================
// SOUND EFFECTS (Web Audio API)
// ==========================================
const sfx = {
    ctx: null,
    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (this.ctx.state === 'suspended') this.ctx.resume();
    },
    click() {
        try { this.init(); const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); osc.connect(gain); gain.connect(this.ctx.destination); osc.frequency.value = 880; osc.type = 'sine'; const t = this.ctx.currentTime; gain.gain.setValueAtTime(0.06, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06); osc.start(t); osc.stop(t + 0.06); } catch(e) {}
    },
    success() {
        try { this.init(); [660, 880].forEach((freq, i) => { const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); osc.connect(gain); gain.connect(this.ctx.destination); osc.frequency.value = freq; osc.type = 'sine'; const t = this.ctx.currentTime + i * 0.1; gain.gain.setValueAtTime(0.08, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15); osc.start(t); osc.stop(t + 0.15); }); } catch(e) {}
    },
    error() {
        try { this.init(); const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); osc.connect(gain); gain.connect(this.ctx.destination); osc.frequency.value = 250; osc.type = 'triangle'; const t = this.ctx.currentTime; gain.gain.setValueAtTime(0.08, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2); osc.start(t); osc.stop(t + 0.2); } catch(e) {}
    },
    remove() {
        try { this.init(); const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); osc.connect(gain); gain.connect(this.ctx.destination); osc.frequency.value = 440; osc.type = 'sine'; const t = this.ctx.currentTime; osc.frequency.exponentialRampToValueAtTime(220, t + 0.15); gain.gain.setValueAtTime(0.06, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2); osc.start(t); osc.stop(t + 0.2); } catch(e) {}
    }
};

// ==========================================
// LOCAL STORAGE HELPERS
// ==========================================
function getBooks() {
    let books = JSON.parse(localStorage.getItem('perpus_books'));
    if (!books || books.length === 0) {
        books = JSON.parse(JSON.stringify(DEFAULT_BOOKS));
        localStorage.setItem('perpus_books', JSON.stringify(books));
    }
    return books;
}
function saveBooks(books) { localStorage.setItem('perpus_books', JSON.stringify(books)); }
function getUsers() { return JSON.parse(localStorage.getItem('perpus_users')) || []; }
function saveUsers(users) { localStorage.setItem('perpus_users', JSON.stringify(users)); }
function getSession() { return JSON.parse(localStorage.getItem('perpus_session')) || null; }
function saveSession(session) { localStorage.setItem('perpus_session', JSON.stringify(session)); }
function clearSession() { localStorage.removeItem('perpus_session'); }
function getBorrows() { return JSON.parse(localStorage.getItem('perpus_borrows')) || []; }
function saveBorrows(borrows) { localStorage.setItem('perpus_borrows', JSON.stringify(borrows)); }

// ==========================================
// TOAST NOTIFICATION
// ==========================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info', warning: 'fa-triangle-exclamation' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${icons[type]} toast-icon"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ==========================================
// MODAL
// ==========================================
function openModal(id) { const modal = document.getElementById(id); if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeModal(id) { const modal = document.getElementById(id); if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } }
document.addEventListener('click', (e) => { if (e.target.classList.contains('modal-overlay')) { e.target.classList.remove('active'); document.body.style.overflow = ''; } });

// ==========================================
// RATING SYSTEM
// ==========================================
function getRatings() { return JSON.parse(localStorage.getItem('perpus_ratings')) || {}; }
function saveRatings(ratings) { localStorage.setItem('perpus_ratings', JSON.stringify(ratings)); }
function getBookAvgRating(bookId) { const ratings = getRatings(); const bookRatings = Object.values(ratings[bookId] || {}); if (bookRatings.length === 0) return 0; return (bookRatings.reduce((a, b) => a + b, 0) / bookRatings.length).toFixed(1); }
function rateBook(bookId, score) {
    const session = getSession(); if (!session) { showToast('Login untuk memberi rating', 'warning'); return; }
    const ratings = getRatings(); if (!ratings[bookId]) ratings[bookId] = {}; ratings[bookId][session.userId] = score;
    saveRatings(ratings); sfx.click(); showToast(`Kamu memberi rating ${score} bintang!`, 'success');
    const page = document.body.dataset.page; if (page === 'katalog') initKatalog(); if (page === 'home') initHome();
    const detailModal = document.getElementById('bookDetailModal');
    if (detailModal && detailModal.classList.contains('active')) showBookDetail(bookId);
}
function renderStarRating(bookId) {
    const session = getSession(); const ratings = getRatings();
    const userRating = (session && ratings[bookId] && ratings[bookId][session.userId]) ? ratings[bookId][session.userId] : 0;
    const avgRating = getBookAvgRating(bookId); let starsHtml = `<div class="star-rating-container"><div class="star-rating">`;
    for (let i = 5; i >= 1; i--) { const checked = userRating === i ? 'checked' : ''; starsHtml += `<input type="radio" id="star${i}_${bookId}" name="rating_${bookId}" value="${i}" ${checked} disabled><label for="star${i}_${bookId}" class="fa-solid fa-star" onclick="rateBook(${bookId}, ${i})"></label>`; }
    starsHtml += `</div><span class="avg-rating-display"><i class="fa-solid fa-star"></i> ${avgRating > 0 ? avgRating : '-'}</span></div>`; return starsHtml;
}

// ==========================================
// VIEW COUNT SYSTEM
// ==========================================
function getViews() { return JSON.parse(localStorage.getItem('perpus_views')) || {}; }
function saveViews(views) { localStorage.setItem('perpus_views', JSON.stringify(views)); }
function incrementView(bookId) {
    const views = getViews();
    views[bookId] = (views[bookId] || 0) + 1;
    saveViews(views);
    return views[bookId];
}
function getViewCount(bookId) { return getViews()[bookId] || 0; }

// ==========================================
// REVIEWS / ULASAN SYSTEM
// + Admin Reply Support
// ==========================================

/* FIX: Auto-assign ID ke review lama yang belum punya ID */
function getReviews() {
    let reviews = JSON.parse(localStorage.getItem('perpus_reviews')) || {};
    
    // Migration: beri ID unik untuk review lama yang belum punya
    let needsSave = false;
    for (const bookId in reviews) {
        reviews[bookId].forEach(r => {
            if (!r.id) {
                r.id = 'review_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
                needsSave = true;
            }
            if (r.adminReply === undefined) {
                r.adminReply = null;
                needsSave = true;
            }
        });
    }
    if (needsSave) {
        localStorage.setItem('perpus_reviews', JSON.stringify(reviews));
    }
    
    return reviews;
}

function saveReviews(reviews) { localStorage.setItem('perpus_reviews', JSON.stringify(reviews)); }

/* CHANGED: submitReview sekarang menyimpan id unik dan field adminReply */
function submitReview(bookId) {
    const session = getSession();
    if (!session) { showToast('Silakan login untuk memberi ulasan', 'warning'); return; }
    
    const ratingStars = document.querySelectorAll('#reviewFormContainer .review-rating-select .fa-star.selected');
    const commentEl = document.getElementById('reviewComment');
    
    if (ratingStars.length === 0) { showToast('Pilih rating bintang terlebih dahulu', 'warning'); return; }
    if (!commentEl.value.trim()) { showToast('Tulis komentar ulasanmu', 'warning'); return; }

    const rating = ratingStars.length;
    const comment = commentEl.value.trim();

    const reviews = getReviews();
    if (!reviews[bookId]) reviews[bookId] = [];

    const existingIndex = reviews[bookId].findIndex(r => r.userId === session.userId);

    /* CHANGED: tambahkan id unik dan adminReply null */
    const reviewObj = {
        id: existingIndex >= 0 ? reviews[bookId][existingIndex].id : 'review_' + Date.now(),
        userId: session.userId,
        userName: session.name,
        rating: rating,
        comment: comment,
        date: new Date().toLocaleDateString('id-ID'),
        adminReply: existingIndex >= 0 ? (reviews[bookId][existingIndex].adminReply || null) : null
    };

    if (existingIndex >= 0) {
        reviews[bookId][existingIndex] = reviewObj;
    } else {
        reviews[bookId].push(reviewObj);
    }

    saveReviews(reviews);
    sfx.success();
    showToast('Ulasan berhasil ditambahkan!', 'success');
    showBookDetail(bookId); 
}

/* CHANGED: renderReviewsList sekarang menampilkan balasan admin */
function renderReviewsList(bookId) {
    const reviews = getReviews()[bookId] || [];
    const session = getSession();

    let html = `<div class="reviews-section">
        <div class="reviews-header">
            <h3><i class="fa-solid fa-comments"></i> Ulasan Pembaca</h3>
            <div class="reviews-meta">
                <span><i class="fa-solid fa-eye"></i> ${getViewCount(bookId)}x dilihat</span>
                <span><i class="fa-solid fa-comment"></i> ${reviews.length} ulasan</span>
            </div>
        </div>`;

    /* Form ulasan hanya untuk user biasa yang sudah login */
    if (session && !session.isAdmin) {
        const existingReview = reviews.find(r => r.userId === session.userId);
        html += `<div class="review-form-container" id="reviewFormContainer">
            <h4>${existingReview ? 'Edit Ulasanmu' : 'Tulis Ulasan'}</h4>
            <div class="review-rating-select" id="reviewRatingSelect">
                ${[1,2,3,4,5].map(i => `<i class="fa-solid fa-star ${existingReview && existingReview.rating >= i ? 'selected' : ''}" data-rating="${i}"></i>`).join('')}
            </div>
            <textarea id="reviewComment" placeholder="Bagikan pendapatmu tentang buku ini...">${existingReview ? existingReview.comment : ''}</textarea>
            <button class="btn btn-primary btn-sm" onclick="submitReview(${bookId})"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
        </div>`;
    } else if (!session) {
        html += `<div class="review-login-prompt"><a href="login.html">Masuk</a> untuk menulis ulasan.</div>`;
    }

    if (reviews.length === 0) {
        html += `<div class="no-reviews">Belum ada ulasan. Jadilah yang pertama memberi ulasan!</div>`;
    } else {
        html += `<div class="reviews-list">`;
        reviews.slice().reverse().forEach(r => {
            html += `<div class="review-item">
                <div class="review-avatar">${r.userName.charAt(0).toUpperCase()}</div>
                <div class="review-content">
                    <div class="review-top">
                        <strong>${r.userName}</strong>
                        <div class="review-stars">${'<i class="fa-solid fa-star" style="color:#f1c40f;font-size:0.75rem;"></i>'.repeat(r.rating)}${'<i class="fa-solid fa-star" style="color:#ddd;font-size:0.75rem;"></i>'.repeat(5 - r.rating)}</div>
                        <span class="review-date">${r.date}</span>
                    </div>
                    <p>${r.comment}</p>
                    ${r.adminReply ? `
                        <div class="review-admin-reply">
                            <div class="admin-reply-badge"><i class="fa-solid fa-shield-halved"></i> Balasan Admin</div>
                            <p>${r.adminReply.text}</p>
                            <span class="admin-reply-date">${r.adminReply.date}</span>
                        </div>
                    ` : ''}
                </div>
            </div>`;
        });
        html += `</div>`;
    }

    html += `</div>`;
    return html;
}

/* NEW: Helper untuk mencari review berdasarkan ID */
function findReviewById(reviewId) {
    const reviews = getReviews();
    for (const bookId in reviews) {
        const review = reviews[bookId].find(r => r.id === reviewId);
        if (review) return { review, bookId };
    }
    return null;
}

/* FIX: Tambah penanganan kalau review tidak ditemukan */
function openReplyModal(reviewId) {
    if (!reviewId || reviewId === 'undefined') {
        showToast('ID ulasan tidak valid. Coba refresh halaman.', 'error');
        return;
    }

    const found = findReviewById(reviewId);
    if (!found) {
        showToast('Ulasan tidak ditemukan. Coba refresh halaman.', 'error');
        return;
    }

    const { review } = found;

    document.getElementById('replyReviewId').value = reviewId;
    document.getElementById('replyOriginalReview').innerHTML = `
        <div class="reply-original-box">
            <div class="reply-original-header">
                <strong>${review.userName}</strong>
                <span>${'<i class="fa-solid fa-star" style="color:#f1c40f;font-size:0.7rem;"></i>'.repeat(review.rating)}${'<i class="fa-solid fa-star" style="color:#ddd;font-size:0.7rem;"></i>'.repeat(5 - review.rating)}</span>
            </div>
            <p>${review.comment}</p>
        </div>
    `;
    document.getElementById('replyAdminText').value = review.adminReply ? review.adminReply.text : '';

    openModal('replyReviewModal');
}
/* FIX: Langsung cari dan edit di object reviews yang sama, lalu simpan */
function submitAdminReply() {
    const reviewId = document.getElementById('replyReviewId').value;
    const replyText = document.getElementById('replyAdminText').value.trim();

    if (!replyText) {
        showToast('Tulis balasan terlebih dahulu', 'warning');
        return;
    }

    const reviews = getReviews();
    let found = false;

    // Cari review langsung di object reviews, bukan pakai findReviewById
    for (const bookId in reviews) {
        const review = reviews[bookId].find(r => r.id === reviewId);
        if (review) {
            review.adminReply = {
                text: replyText,
                date: new Date().toLocaleDateString('id-ID'),
                adminName: 'Administrator'
            };
            found = true;
            break;
        }
    }

    if (found) {
        saveReviews(reviews);
        sfx.success();
        showToast('Balasan berhasil dikirim!', 'success');
        closeModal('replyReviewModal');
        renderAdminReviews();
    } else {
        sfx.error();
        showToast('Ulasan tidak ditemukan', 'error');
    }
}
// ==========================================
// BOOK CONTENT GENERATOR (Baca Buku)
// ==========================================
function getBookContent(book) {
    let intro = `<h2>${book.title}</h2><p style="font-style:italic; color:#555;">Oleh: ${book.author}</p><div class="chapter-title">Bab 1 - Permulaan</div>`;
    let story = '';
    if (book.category === 'Fiksi') {
        story = `<p>Angin sore berhembus pelan menyapu pepohonan tua di desa itu. Matahari mulai tenggelam, meninggalkan jejak kemerahan di cakrawala. Di teras rumah kayu yang usang, duduk seorang pemuda memandang jauh, memikirkan nasib yang baru saja menimpanya. Ia tahu, perjalanan panjang menantinya di luar sana, melampaui batas desa yang selama ini melindunginya.</p><p>Dengan langkah mantap, ia meraih ransel tua di sampingnya. Buku-buku usang dan secarik peta menjadi satu-satunya bekal. "Ini bukan akhir," bisiknya dalam hati, "Ini baru permulaan petualangan yang sesungguhnya." Kabut tipis mulai menyelimuti jalan setapak di depannya, seolah alam semesta ikut menyembunyikan rahasia yang menanti di ujung jalan.</p>`;
    } else if (book.category === 'Sains') {
        story = `<p>Alam semesta adalah teka-teki raksasa yang menunggu untuk dipecahkan. Setiap atom yang bergetar, setiap bintang yang meledak, menyimpan rahasia tentang asal-usul kita. Di laboratorium yang sunyi, seorang ilmuwan mengamati data yang berkedip di layar komputernya. Angka-angka itu bukan sekadar simbol, melainkan bahasa alam semesta yang mencoba berkomunikasi dengan manusia.</p><p>Penemuan kecil hari ini mungkin akan mengubah pemahaman kita tentang realitas esok hari. Sains bukan tentang kepastian, melainkan tentang keberanian untuk terus bertanya dan mencari tahu di tengah ketidakpastian yang tak berujung.</p>`;
    } else {
        story = `<p>Sejarah adalah cermin yang memantulkan perjalanan panjang umat manusia. Dari peradaban kuno yang bertengger di lembah sungai, hingga kota-kota modern yang menjulang tinggi menusuk awan. Setiap era memiliki ceritanya sendiri, pahlawannya sendiri, dan pelajaran yang tak boleh dilupakan.</p><p>Kita mempelajari masa lalu bukan untuk terjebak di dalamnya, melainkan untuk memahami siapa diri kita hari ini dan ke mana kita akan melangkah esok. Refleksi ini menjadi bekal yang tak ternilai bagi generasi penerus.</p>`;
    }
    return intro + story + `<div class="chapter-title">Bab 2 - Perjalanan</div><p>Kisah berlanjut menuju babak yang lebih menegangkan... (Baca versi lengkapnya di perpustakaan terdekat)</p><div class="page-footer">- Halaman Demo - Pustaka Cakra -</div>`;
}

// ==========================================
// CEK HAK BACA BUKU
// ==========================================
function hasBorrowed(bookId) {
    const session = getSession();
    if (!session) return false;
    if (session.isAdmin) return true; 
    const borrows = getBorrows();
    return borrows.some(b => b.bookId === bookId && b.userId === session.userId && b.status === 'dipinjam');
}

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (toggle && menu) toggle.addEventListener('click', () => { menu.classList.toggle('active'); sfx.click(); });
    const navbar = document.getElementById('navbar');
    if (navbar) window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 10); });
    renderNavAuth();
}

function renderNavAuth() {
    const authDiv = document.getElementById('navAuth');
    if (!authDiv) return;
    const session = getSession();
    if (session) {
        if (session.isAdmin) {
            authDiv.innerHTML = `
                <a href="admin.html" class="nav-link" onclick="sfx.click()"><i class="fa-solid fa-shield-halved"></i> Admin</a>
                <a href="#" class="nav-link" onclick="logout(); sfx.click();">Logout</a>
            `;
        } else {
            authDiv.innerHTML = `
                <a href="#" class="nav-link" onclick="showRiwayat(); sfx.click();"><i class="fa-solid fa-clock-rotate-left"></i> Riwayat</a>
                <span class="nav-link" style="color:var(--primary);font-weight:600;cursor:default;">${session.name}</span>
                <a href="#" class="nav-link" onclick="logout(); sfx.click();">Logout</a>
            `;
        }
    } else {
        authDiv.innerHTML = `<a href="login.html" class="nav-link" onclick="sfx.click()">Masuk</a>`;
    }
}

function logout() {
    clearSession(); sfx.click(); showToast('Berhasil logout', 'success');
    setTimeout(() => location.reload(), 500);
}

// ==========================================
// RIWAYAT PEMINJAMAN (Sisi User)
// ==========================================
function showRiwayat() {
    const session = getSession();
    if (!session || session.isAdmin) { showToast('Silakan login terlebih dahulu', 'warning'); return; }

    const borrows = getBorrows().filter(b => b.userId === session.userId);
    const books = getBooks();
    const body = document.getElementById('riwayatBody');

    if (borrows.length === 0) {
        body.innerHTML = `<div class="empty-state" style="padding:2rem;"><i class="fa-solid fa-inbox"></i><h3>Belum ada peminjaman</h3><p>Pinjam buku dari katalog untuk melihat riwayatmu di sini.</p></div>`;
    } else {
        body.innerHTML = borrows.map(b => {
            const book = books.find(bk => bk.id === b.bookId);
            const coverSrc = book ? getBookCoverSrc(book, 'S') : '';
            const isOverdue = b.status === 'dipinjam' && b.dueDate && new Date(b.dueDate) < new Date();
            
            let statusLabel = '';
            let statusClass = '';
            let dendaHtml = '';
            if (b.status === 'menunggu_konfirmasi') { statusLabel = 'Menunggu Persetujuan'; statusClass = 'badge-warning'; }
            else if (b.status === 'dipinjam') { statusLabel = isOverdue ? 'Terlambat!' : 'Sedang Dipinjam'; statusClass = isOverdue ? 'badge-danger' : 'badge-info'; }
            else if (b.status === 'menunggu_konfirmasi_kembali') { statusLabel = 'Menunggu Konfirmasi Kembali'; statusClass = 'badge-warning'; }
            else if (b.status === 'dikembalikan') { statusLabel = 'Dikembalikan'; statusClass = 'badge-success'; if(b.denda > 0) dendaHtml = `<span class="badge badge-denda">Denda Rp ${b.denda.toLocaleString('id-ID')}</span>`; }
            else if (b.status === 'ditolak') { statusLabel = 'Ditolak Admin'; statusClass = 'badge-danger'; }

            return `
                <div class="riwayat-item">
                    <img src="${coverSrc}" alt="Cover" class="riwayat-cover" data-book-id="${book ? book.id : ''}" onerror="handleCoverError(this)" onload="checkCoverSize(this)">
                    <div class="riwayat-info">
                        <h4>${book ? book.title : 'Buku tidak ditemukan'}</h4>
                        <p>Dipinjam: ${b.borrowDate} ${b.dueDate ? '| Batas: ' + b.dueDate : ''}</p>
                        <span class="badge ${statusClass}">${statusLabel}</span> ${dendaHtml}
                    </div>
                    ${b.status === 'dipinjam' ? `<button class="btn btn-sm btn-outline" onclick="requestReturn('${b.id}'); sfx.click();">Kembalikan</button>` : ''}
                </div>
            `;
        }).reverse().join('');
    }
    openModal('riwayatModal');
}

// ==========================================
// SISTEM PEMINJAMAN & PENGEMBALIAN
// ==========================================
function borrowBook(bookId) {
    sfx.click();
    const session = getSession();
    if (!session) { showToast('Silakan login terlebih dahulu untuk meminjam buku', 'warning'); setTimeout(() => window.location.href = 'login.html', 1200); return; }
    if (session.isAdmin) { showToast('Admin tidak bisa meminjam buku', 'error'); sfx.error(); return; }

    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    if (book.status !== 'Tersedia') {
        showToast('Buku ini sedang tidak tersedia untuk dipinjam', 'error'); sfx.error(); return;
    }

    book.status = 'Pending';
    saveBooks(books);

    const borrows = getBorrows();
    borrows.push({
        id: 'borrow_' + Date.now(),
        bookId: book.id,
        userId: session.userId,
        userName: session.name,
        bookTitle: book.title,
        borrowDate: new Date().toLocaleDateString('id-ID'),
        dueDate: '',
        returnDate: '',
        denda: 0,
        status: 'menunggu_konfirmasi'
    });
    saveBorrows(borrows);

    sfx.success();
    showToast(`Permintaan peminjaman "${book.title}" terkirim. Menunggu konfirmasi admin.`, 'success');
    closeModal('bookDetailModal');

    const page = document.body.dataset.page;
    if (page === 'katalog') initKatalog();
    if (page === 'home') initHome();
}

function requestReturn(borrowId) {
    const borrows = getBorrows();
    const borrow = borrows.find(b => b.id === borrowId);
    if (!borrow) return;

    borrow.status = 'menunggu_konfirmasi_kembali';
    saveBorrows(borrows);

    sfx.success();
    showToast('Permintaan pengembalian terkirim. Menunggu konfirmasi admin.', 'success');
    closeModal('riwayatModal');
}

// ==========================================
// FUNGSI KONFIRMASI ADMIN
// ==========================================
function approveBorrow(borrowId) {
    const borrows = getBorrows();
    const borrow = borrows.find(b => b.id === borrowId);
    if (!borrow) return;

    const books = getBooks();
    const book = books.find(b => b.id === borrow.bookId);
    
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
    
    borrow.status = 'dipinjam';
    borrow.dueDate = dueDate.toLocaleDateString('id-ID');
    
    if (book) book.status = 'Dipinjam';
    
    saveBorrows(borrows);
    saveBooks(books);
    
    sfx.success();
    showToast('Peminjaman berhasil disetujui!', 'success');
    renderAdminDashboard();
}

function rejectBorrow(borrowId) {
    const borrows = getBorrows();
    const borrow = borrows.find(b => b.id === borrowId);
    if (!borrow) return;

    const books = getBooks();
    const book = books.find(b => b.id === borrow.bookId);

    borrow.status = 'ditolak';
    if (book) book.status = 'Tersedia';

    saveBorrows(borrows);
    saveBooks(books);

    sfx.remove();
    showToast('Permintaan peminjaman ditolak.', 'info');
    renderAdminDashboard();
}

function approveReturn(borrowId) {
    const borrows = getBorrows(); const borrow = borrows.find(b => b.id === borrowId); if (!borrow) return;
    const books = getBooks(); const book = books.find(b => b.id === borrow.bookId);
    
    let denda = 0;
    if (borrow.dueDate) {
        const dueDate = new Date(borrow.dueDate); const returnDate = new Date();
        if (returnDate > dueDate) {
            const diffTime = Math.abs(returnDate - dueDate); const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            denda = diffDays * 1000; 
        }
    }

    borrow.status = 'dikembalikan'; borrow.returnDate = new Date().toLocaleDateString('id-ID'); borrow.denda = denda;
    if (book) book.status = 'Tersedia';
    saveBorrows(borrows); saveBooks(books); sfx.success();
    showToast(`Buku dikembalikan! ${denda > 0 ? 'Denda keterlambatan: Rp ' + denda.toLocaleString('id-ID') : ''}`, denda > 0 ? 'warning' : 'success');
    renderAdminDashboard();
}

// ==========================================
// 3D BOOK READER
// ==========================================
function open3DBook(bookId) {
    sfx.click(); 
    
    if (!hasBorrowed(bookId)) {
        showToast('Anda harus meminjam buku ini untuk membacanya', 'warning');
        return;
    }

    const books = getBooks(); const book = books.find(b => b.id === bookId); if (!book) return;
    let modal = document.getElementById('modal3DOverlay');
    if (!modal) { modal = document.createElement('div'); modal.id = 'modal3DOverlay'; modal.className = 'modal-3d-overlay'; document.body.appendChild(modal); }

    const coverSrc = getBookCoverSrc(book, 'L');
    const contentHtml = getBookContent(book);

    modal.innerHTML = `
        <button class="btn-close-3d" onclick="close3DModal()">&times;</button>
        <div class="scene-3d" id="scene3d">
            <div class="face-3d front-3d" style="background-image: url('${coverSrc}');" onclick="toggle3DOpen()"></div>
            <div class="face-3d back-3d"></div>
            <div class="face-3d spine-3d"></div>
            <div class="face-3d pages-3d" id="pages3d">${contentHtml}</div>
        </div>
        <div class="instruction-3d" id="instr3d">Klik & Geser untuk memutar buku<br>Klik sampul untuk membuka</div>
    `;
    modal.classList.add('active'); document.body.style.overflow = 'hidden';

    const scene = document.getElementById('scene3d');
    let isDragging = false, startX = 0, startY = 0, currentRotateY = -30, currentRotateX = 0, isOpen = false;

    scene.onmousedown = (e) => { if (e.target.classList.contains('pages-3d')) return; isDragging = true; startX = e.clientX; startY = e.clientY; scene.style.transition = 'none'; };
    window.onmousemove = (e) => {
        if (!isDragging || isOpen) return;
        const dx = e.clientX - startX; const dy = e.clientY - startY;
        currentRotateY += dx * 0.4; currentRotateX -= dy * 0.2;
        if (currentRotateY > 50) currentRotateY = 50; if (currentRotateY < -150) currentRotateY = -150;
        if (currentRotateX > 15) currentRotateX = 15; if (currentRotateX < -15) currentRotateX = -15;
        scene.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
        startX = e.clientX; startY = e.clientY;
    };
    window.onmouseup = () => { isDragging = false; scene.style.transition = 'transform 0.5s ease'; };

    window.toggle3DOpen = () => {
        isOpen = !isOpen; const instr = document.getElementById('instr3d');
        if (isOpen) { scene.classList.add('is-open'); currentRotateY = 0; currentRotateX = 0; scene.style.transform = `rotateX(0deg) rotateY(0deg) translateX(50px)`; if(instr) instr.style.display = 'none'; }
        else { scene.classList.remove('is-open'); currentRotateY = -30; scene.style.transform = `rotateX(0deg) rotateY(-30deg) translateX(0)`; if(instr) instr.style.display = 'block'; }
    };
}
window.close3DModal = () => { const modal = document.getElementById('modal3DOverlay'); if (modal) modal.classList.remove('active'); document.body.style.overflow = ''; };

// ==========================================
// DETAIL BUKU MODAL
// ==========================================
function showBookDetail(bookId) {
    sfx.click(); 
    const books = getBooks(); const book = books.find(b => b.id === bookId); if (!book) return;
    
    const viewCount = incrementView(bookId);

    const catClass = 'cat-' + book.category.toLowerCase(); const coverSrc = getBookCoverSrc(book, 'L'); const isAvailable = book.status === 'Tersedia';
    const ratingHtml = renderStarRating(book.id);
    const canRead = hasBorrowed(book.id);
    const reviewsHtml = renderReviewsList(bookId);

    document.getElementById('detailTitle').textContent = book.title;
    document.getElementById('bookDetailBody').innerHTML = `
        <div class="book-detail">
            <img src="${coverSrc}" alt="${book.title}" class="book-detail-cover" data-book-id="${book.id}" onerror="handleCoverError(this)" onload="checkCoverSize(this)" style="cursor:${canRead ? 'pointer' : 'default'};" ${canRead ? `onclick="open3DBook(${book.id}); closeModal('bookDetailModal');"` : ''}>
            <div class="book-detail-info">
                <h2>${book.title}</h2>
                <div class="meta">
                    <span><i class="fa-solid fa-user-pen"></i> ${book.author}</span>
                    <span><i class="fa-solid fa-calendar"></i> ${book.year}</span>
                    <span><i class="fa-solid fa-tag"></i> <span class="book-category-badge ${catClass}" style="position:static;display:inline-block;">${book.category}</span></span>
                    <span><i class="fa-solid fa-circle-info"></i> Status: <span class="badge ${book.status === 'Tersedia' ? 'badge-success' : book.status === 'Pending' ? 'badge-warning' : 'badge-danger'}">${book.status}</span></span>
                </div>
                <div class="view-count-detail"><i class="fa-solid fa-eye"></i> Dilihat: ${viewCount}x</div>
                ${ratingHtml}
                <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.7;margin-bottom:1.25rem;">${book.desc}</p>
                <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                    ${canRead ? `<button class="btn btn-outline" onclick="open3DBook(${book.id}); closeModal('bookDetailModal');"><i class="fa-solid fa-book-open"></i> Baca Buku (3D)</button>` : `<button class="btn btn-outline" disabled><i class="fa-solid fa-lock"></i> Kunci (Pinjam dulu)</button>`}
                    ${isAvailable ? `<button class="btn btn-primary" onclick="borrowBook(${book.id}); closeModal('bookDetailModal');"><i class="fa-solid fa-hand-holding"></i> Ajukan Peminjaman</button>` : (!canRead ? `<button class="btn btn-primary" disabled>Tidak Tersedia</button>` : '')}
                </div>
            </div>
        </div>
        ${reviewsHtml}
    `;
    openModal('bookDetailModal');

    // Attach event listeners for review stars
    const ratingSelect = document.getElementById('reviewRatingSelect');
    if (ratingSelect) {
        const stars = ratingSelect.querySelectorAll('.fa-star');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.dataset.rating);
                stars.forEach(s => {
                    if (parseInt(s.dataset.rating) <= rating) s.classList.add('selected');
                    else s.classList.remove('selected');
                });
            });
        });
    }
}

// ==========================================
// RENDER CARD BUKU
// ==========================================
function renderBookCard(book) {
    const coverSrc = getBookCoverSrc(book, 'M'); const catClass = 'cat-' + book.category.toLowerCase();
    const statusClass = book.status === 'Tersedia' ? 'tersedia' : book.status === 'Pending' ? 'pending' : 'dipinjam';
    const isAvailable = book.status === 'Tersedia'; const avgRating = getBookAvgRating(book.id);
    const canRead = hasBorrowed(book.id);
    const views = getViewCount(book.id);

    return `
        <div class="book-card" onclick="showBookDetail(${book.id})">
            <div class="book-cover" style="cursor:pointer;">
                <img src="${coverSrc}" alt="${book.title}" loading="lazy" data-book-id="${book.id}" onerror="handleCoverError(this)" onload="checkCoverSize(this)">
                <span class="book-status-badge ${statusClass}">${book.status}</span>
                <span class="book-category-badge ${catClass}">${book.category}</span>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:5px;">
                    <span class="book-views"><i class="fa-solid fa-eye"></i> ${views}x</span>
                    <span style="font-size:0.75rem; color:#f1c40f;"><i class="fa-solid fa-star"></i> ${avgRating > 0 ? avgRating : '-'}</span>
                </div>
                <div class="book-meta">
                    ${canRead ? 
                        `<button class="btn-pinjam" onclick="event.stopPropagation(); open3DBook(${book.id});" style="background:#555;"><i class="fa-solid fa-book-open"></i></button>` : 
                        `<button class="btn-pinjam" onclick="event.stopPropagation(); showToast('Pinjam buku untuk membaca', 'warning'); sfx.error();" style="background:#999;" disabled><i class="fa-solid fa-lock"></i></button>`
                    }
                    <button class="btn-pinjam" onclick="event.stopPropagation(); borrowBook(${book.id});" ${!isAvailable ? 'disabled' : ''}>
                        ${isAvailable ? 'Pinjam' : 'Habis'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// BANNER SLIDER / PAPAN IKLAN
// ==========================================
const BANNER_DATA = [
    { img: 'li.jpg', tag: 'Layanan Baru', title: 'Pustaka Cakra Digital', desc: 'Akses banyak buku dari perangkat apa saja, kapan saja. Baca langsung dari browser!' },
    { img: 'lib.jpg', tag: 'Komunitas', title: 'Mari Berdiskusi', desc: 'Bagikan ulasan dan pendapatmu. Bangun ekosistem pembaca yang inspiratif.' },
    { img: 'libr.jpg', tag: 'Koleksi Baru', title: 'Update Katalog Bulan Ini', desc: 'Telah hadir 15 buku baru dari kategori Sains dan Teknologi langsung untukmu.' }
];
let currentBannerSlide = 0;
let bannerInterval;

function initBannerSlider() {
    const slider = document.getElementById('bannerSlider');
    const dotsContainer = document.getElementById('bannerDots');
    if (!slider || !dotsContainer) return;

    slider.innerHTML = BANNER_DATA.map((b, i) => `
        <div class="banner-slide ${i === 0 ? 'active' : ''}" style="background-image: url('${b.img}');">
            <div class="banner-slide-overlay"></div>
            <div class="banner-slide-content">
                <span class="banner-tag">${b.tag}</span>
                <h2>${b.title}</h2>
                <p>${b.desc}</p>
                <a href="katalog.html" class="btn btn-primary" onclick="sfx.click()">Lihat Katalog</a>
            </div>
        </div>
    `).join('');

    dotsContainer.innerHTML = BANNER_DATA.map((_, i) => `
        <button class="banner-dot ${i === 0 ? 'active' : ''}" onclick="goToBannerSlide(${i})"></button>
    `).join('');

    document.getElementById('bannerPrev').addEventListener('click', () => { sfx.click(); prevBannerSlide(); });
    document.getElementById('bannerNext').addEventListener('click', () => { sfx.click(); nextBannerSlide(); });

    startBannerAutoplay();
}

function updateBannerSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    if (slides[currentBannerSlide]) slides[currentBannerSlide].classList.add('active');
    if (dots[currentBannerSlide]) dots[currentBannerSlide].classList.add('active');
}

function nextBannerSlide() {
    currentBannerSlide = (currentBannerSlide + 1) % BANNER_DATA.length;
    updateBannerSlide();
}

function prevBannerSlide() {
    currentBannerSlide = (currentBannerSlide - 1 + BANNER_DATA.length) % BANNER_DATA.length;
    updateBannerSlide();
}

function goToBannerSlide(index) {
    currentBannerSlide = index;
    updateBannerSlide();
    resetBannerAutoplay();
}

function startBannerAutoplay() {
    bannerInterval = setInterval(nextBannerSlide, 5000);
}

function resetBannerAutoplay() {
    clearInterval(bannerInterval);
    startBannerAutoplay();
}

// ==========================================
// HALAMAN BERANDA
// ==========================================
function initHome() {
    const container = document.getElementById('popularBooks');
    if (!container) return;
    const books = getBooks();
    const popularIds = [1, 2, 9, 16, 35, 42, 23, 47];
    const popularBooks = popularIds.map(id => books.find(b => b.id === id)).filter(Boolean);
    container.innerHTML = popularBooks.map(b => renderBookCard(b)).join('');

    initBannerSlider();
}

// ==========================================
// HALAMAN KATALOG
// ==========================================
function initKatalog() {
    const searchInput = document.getElementById('searchInput');
    const filterCategory = document.getElementById('filterCategory');
    const filterStatus = document.getElementById('filterStatus');
    const sortBy = document.getElementById('sortBy');
    const container = document.getElementById('katalogBooks');
    const resultsInfo = document.getElementById('resultsInfo');
    const emptyState = document.getElementById('emptyState');

    if (!container) return;

    const books = getBooks();
    const borrows = getBorrows();
    const categories = [...new Set(books.map(b => b.category))].sort();

    const borrowCounts = {};
    borrows.forEach(b => { borrowCounts[b.bookId] = (borrowCounts[b.bookId] || 0) + 1; });

    if (filterCategory && filterCategory.options.length <= 1) {
        categories.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat; opt.textContent = cat; filterCategory.appendChild(opt);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const urlCat = urlParams.get('cat');
    if (urlCat && filterCategory) filterCategory.value = urlCat;

    function applyFilters() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const cat = filterCategory ? filterCategory.value : '';
        const status = filterStatus ? filterStatus.value : '';
        const sort = sortBy ? sortBy.value : 'title-asc';

        let filtered = books.filter(b => {
            const matchSearch = !query || b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query) || b.category.toLowerCase().includes(query);
            const matchCat = !cat || b.category === cat;
            const matchStatus = !status || b.status === status;
            return matchSearch && matchCat && matchStatus;
        });

        const [sortField, sortDir] = sort.split('-');
        filtered.sort((a, b) => {
            if (sortField === 'title') {
                let valA = a.title.toLowerCase(), valB = b.title.toLowerCase();
                return sortDir === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
            } else if (sortField === 'year') {
                return sortDir === 'asc' ? a.year - b.year : b.year - a.year;
            } else if (sortField === 'populer') {
                const countA = borrowCounts[a.id] || 0;
                const countB = borrowCounts[b.id] || 0;
                return countB - countA;
            }
            return 0;
        });

        container.innerHTML = filtered.map(b => renderBookCard(b)).join('');
        if (resultsInfo) resultsInfo.textContent = `Menampilkan ${filtered.length} dari ${books.length} buku`;
        if (emptyState) emptyState.style.display = filtered.length === 0 ? 'block' : 'none';
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (filterCategory) filterCategory.addEventListener('change', () => { sfx.click(); applyFilters(); });
    if (filterStatus) filterStatus.addEventListener('change', () => { sfx.click(); applyFilters(); });
    if (sortBy) sortBy.addEventListener('change', () => { sfx.click(); applyFilters(); });

    applyFilters();
}

// ==========================================
// HALAMAN LOGIN & REGISTER
// ==========================================
function initLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault(); sfx.click();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (!email || !password) { showToast('Semua field harus diisi', 'error'); sfx.error(); return; }

        if (email === 'admin' && password === 'admin123') {
            saveSession({ userId: 'admin', name: 'Administrator', email: 'admin', isAdmin: true });
            sfx.success(); showToast('Login admin berhasil!', 'success');
            setTimeout(() => window.location.href = 'admin.html', 800); return;
        }

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            saveSession({ userId: user.id, name: user.name, email: user.email, isAdmin: false });
            sfx.success(); showToast(`Selamat datang, ${user.name}!`, 'success');
            setTimeout(() => window.location.href = 'index.html', 800);
        } else { sfx.error(); showToast('Email atau password salah', 'error'); }
    });
}

function initRegister() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault(); sfx.click();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        if (!name || !email || !password) { showToast('Semua field harus diisi', 'error'); sfx.error(); return; }
        if (password.length < 6) { showToast('Password minimal 6 karakter', 'error'); sfx.error(); return; }
        const users = getUsers();
        if (users.find(u => u.email === email)) { sfx.error(); showToast('Email sudah terdaftar', 'error'); return; }
        users.push({ id: 'user_' + Date.now(), name, email, password });
        saveUsers(users);
        sfx.success(); showToast('Registrasi berhasil! Silakan login.', 'success');
        setTimeout(() => window.location.href = 'login.html', 1000);
    });
}

// ==========================================
// ADMIN DASHBOARD + CHART
// ==========================================
function initAdmin() {
    const loginSection = document.getElementById('adminLoginSection');
    const dashboard = document.getElementById('adminDashboard');
    const session = getSession();

    if (session && session.isAdmin) {
        loginSection.style.display = 'none';
        dashboard.style.display = 'block';
        renderAdminDashboard();
    }

    const form = document.getElementById('adminLoginForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); sfx.click();
            const username = document.getElementById('adminUser').value.trim();
            const password = document.getElementById('adminPass').value;
            if (username === 'admin' && password === 'admin123') {
                saveSession({ userId: 'admin', name: 'Administrator', email: 'admin', isAdmin: true });
                sfx.success(); showToast('Login admin berhasil!', 'success');
                loginSection.style.display = 'none'; dashboard.style.display = 'block';
                renderAdminDashboard(); renderNavAuth();
            } else { sfx.error(); showToast('Username atau password admin salah', 'error'); }
        });
    }
}

/* CHANGED: renderAdminDashboard sekarang memanggil renderAdminReviews */
function renderAdminDashboard() {
    renderAdminStats();
    renderAdminChart();
    renderAdminRequests();
    renderAdminBookTable();
    renderAdminBorrowTable();
    renderAdminReviews(); // NEW: render kelola ulasan
    initAddBookForm();
    initReplyForm(); // NEW: init form balas ulasan
}

function renderAdminStats() {
    const books = getBooks();
    const borrows = getBorrows();
    const statsContainer = document.getElementById('adminStats');

    const totalBooks = books.length;
    const tersedia = books.filter(b => b.status === 'Tersedia').length;
    const dipinjam = books.filter(b => b.status === 'Dipinjam').length;
    const pending = borrows.filter(b => b.status === 'menunggu_konfirmasi' || b.status === 'menunggu_konfirmasi_kembali').length;

    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card" data-reveal><div class="stat-icon teal"><i class="fa-solid fa-book"></i></div><div class="stat-info"><h4>${totalBooks}</h4><p>Total Buku</p></div></div>
            <div class="stat-card" data-reveal><div class="stat-icon green"><i class="fa-solid fa-circle-check"></i></div><div class="stat-info"><h4>${tersedia}</h4><p>Tersedia</p></div></div>
            <div class="stat-card" data-reveal><div class="stat-icon red"><i class="fa-solid fa-hand-holding"></i></div><div class="stat-info"><h4>${dipinjam}</h4><p>Sedang Dipinjam</p></div></div>
            <div class="stat-card" data-reveal><div class="stat-icon gold"><i class="fa-solid fa-bell"></i></div><div class="stat-info"><h4>${pending}</h4><p>Permintaan</p></div></div>
        `;
    }
}

/* NEW: Helper untuk parse tanggal peminjaman (format DD/MM/YYYY) */
function parseBorrowDate(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            return { month, year };
        }
    }
    return null;
}

/* CHANGED: renderAdminChart sekarang menampilkan grafik peminjaman per bulan */
function renderAdminChart() {
    const canvas = document.getElementById('borrowChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const borrows = getBorrows();
    
    const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
    const currentYear = new Date().getFullYear();
    
    // Hitung peminjaman per bulan untuk tahun berjalan
    const monthCounts = new Array(12).fill(0);
    
    borrows.forEach(b => {
        const parsed = parseBorrowDate(b.borrowDate);
        if (parsed && parsed.year === currentYear) {
            monthCounts[parsed.month - 1]++;
        }
    });
    
    if (window.borrowChartInstance) window.borrowChartInstance.destroy();

    window.borrowChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: MONTH_NAMES,
            datasets: [{
                label: 'Peminjaman',
                data: monthCounts,
                backgroundColor: 'rgba(45, 74, 62, 0.6)',
                borderColor: 'rgba(45, 74, 62, 1)',
                borderWidth: 1,
                borderRadius: 6,
                maxBarThickness: 36
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, font: { family: 'Inter', size: 11 }, color: '#5a6a6a' },
                    grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter', size: 11 }, color: '#5a6a6a' }
                }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: `Statistik Peminjaman Tahun ${currentYear}`,
                    font: { family: 'Poppins', size: 14, weight: '600' },
                    color: '#1a2a2a',
                    padding: { bottom: 20 }
                },
                tooltip: {
                    backgroundColor: 'rgba(26,42,42,0.9)',
                    titleFont: { family: 'Poppins', weight: '600' },
                    bodyFont: { family: 'Inter' },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y} peminjaman`;
                        }
                    }
                }
            }
        }
    });
}

function renderAdminRequests() {
    const borrows = getBorrows().filter(b => b.status === 'menunggu_konfirmasi' || b.status === 'menunggu_konfirmasi_kembali');
    const tbody = document.getElementById('adminRequestBody');
    const badge = document.getElementById('requestBadge');

    if (badge) badge.textContent = borrows.length;

    if (tbody) {
        if (borrows.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:2rem;">Tidak ada permintaan saat ini</td></tr>`;
        } else {
            tbody.innerHTML = borrows.map(b => {
                const type = b.status === 'menunggu_konfirmasi' ? 'Peminjaman' : 'Pengembalian';
                const typeClass = b.status === 'menunggu_konfirmasi' ? 'badge-info' : 'badge-warning';
                return `
                    <tr>
                        <td>${b.userName}</td>
                        <td>${b.bookTitle}</td>
                        <td>${b.borrowDate}</td>
                        <td><span class="badge ${typeClass}">${type}</span></td>
                        <td class="actions">
                            ${b.status === 'menunggu_konfirmasi' ? `
                                <button class="btn btn-sm btn-success" onclick="approveBorrow('${b.id}'); sfx.click();"><i class="fa-solid fa-check"></i> Setujui</button>
                                <button class="btn btn-sm btn-danger" onclick="rejectBorrow('${b.id}'); sfx.click();"><i class="fa-solid fa-xmark"></i> Tolak</button>
                            ` : `
                                <button class="btn btn-sm btn-success" onclick="approveReturn('${b.id}'); sfx.click();"><i class="fa-solid fa-check"></i> Konfirmasi Kembali</button>
                            `}
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }
}

function renderAdminBookTable() {
    const books = getBooks();
    const tbody = document.getElementById('adminBookBody');
    const badge = document.getElementById('totalBooksBadge');

    if (badge) badge.textContent = `${books.length} buku`;

    if (tbody) {
        tbody.innerHTML = books.map((book, i) => {
            const catClass = 'cat-' + book.category.toLowerCase();
            const coverSrc = getBookCoverSrc(book, 'S');
            const avgRating = getBookAvgRating(book.id);
            const views = getViewCount(book.id);
            return `
                <tr>
                    <td>${i + 1}</td>
                    <td><img src="${coverSrc}" alt="Cover" class="admin-cover-thumb" data-book-id="${book.id}" onerror="handleCoverError(this)" onload="checkCoverSize(this)"></td>
                    <td><strong>${book.title}</strong><br><small style="color:var(--text-muted);">${book.desc.substring(0, 40)}...</small><br><small style="color:#f1c40f;"><i class="fa-solid fa-star"></i> ${avgRating > 0 ? avgRating : '-'}</small> <small style="color:var(--text-muted);"><i class="fa-solid fa-eye"></i> ${views}x</small></td>
                    <td>${book.author}</td>
                    <td>${book.year}</td>
                    <td><span class="book-category-badge ${catClass}" style="position:static;display:inline-block;">${book.category}</span></td>
                    <td><span class="badge ${book.status === 'Tersedia' ? 'badge-success' : book.status === 'Pending' ? 'badge-warning' : 'badge-danger'}">${book.status}</span></td>
                    <td class="actions">
                        <button class="btn btn-sm btn-outline" onclick="editBook(${book.id}); sfx.click();"><i class="fa-solid fa-pen"></i> Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteBook(${book.id}); sfx.click();"><i class="fa-solid fa-trash"></i> Hapus</button>
                    </td>
                </tr>
            `;
        }).join('');
    }
}

function renderAdminBorrowTable() {
    const borrows = getBorrows().filter(b => b.status !== 'menunggu_konfirmasi' && b.status !== 'menunggu_konfirmasi_kembali');
    const tbody = document.getElementById('adminBorrowBody');

    if (tbody) {
        if (borrows.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:2rem;">Belum ada data riwayat peminjaman</td></tr>`;
        } else {
            tbody.innerHTML = borrows.map(b => {
                const isOverdue = b.status === 'dipinjam' && b.dueDate && new Date(b.dueDate) < new Date();
                let statusLabel = '';
                let statusClass = '';
                let dendaHtml = '';
                if (b.status === 'dipinjam') { statusLabel = isOverdue ? 'Terlambat' : 'Dipinjam'; statusClass = isOverdue ? 'badge-danger' : 'badge-info'; }
                else if (b.status === 'dikembalikan') { statusLabel = 'Dikembalikan'; statusClass = 'badge-success'; if(b.denda > 0) dendaHtml = `<span class="badge badge-denda">Rp ${b.denda.toLocaleString('id-ID')}</span>`; }
                else if (b.status === 'ditolak') { statusLabel = 'Ditolak'; statusClass = 'badge-danger'; }

                return `
                    <tr>
                        <td>${b.userName}</td>
                        <td>${b.bookTitle}</td>
                        <td>${b.borrowDate}</td>
                        <td>${b.dueDate || '-'}</td>
                        <td><span class="badge ${statusClass} ${isOverdue ? 'text-overdue' : ''}">${statusLabel}</span> ${dendaHtml}</td>
                    </tr>
                `;
            }).reverse().join('');
        }
    }
}

/* NEW: renderAdminReviews — menampilkan semua ulasan di panel admin */
function renderAdminReviews() {
    const reviews = getReviews();
    const books = getBooks();
    const tbody = document.getElementById('adminReviewBody');
    const badge = document.getElementById('totalReviewsBadge');

    if (!tbody) return;

    // Kumpulkan semua ulasan dari semua buku
    let allReviews = [];
    for (const bookId in reviews) {
        const book = books.find(b => b.id === parseInt(bookId));
        reviews[bookId].forEach(r => {
            allReviews.push({
                ...r,
                bookId: parseInt(bookId),
                bookTitle: book ? book.title : 'Buku tidak ditemukan'
            });
        });
    }

    if (badge) badge.textContent = `${allReviews.length} ulasan`;

    if (allReviews.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:2rem;">Belum ada ulasan dari pengguna</td></tr>`;
        return;
    }

    tbody.innerHTML = allReviews.slice().reverse().map(r => {
        const starsHtml = '<i class="fa-solid fa-star" style="color:#f1c40f;font-size:0.7rem;"></i>'.repeat(r.rating) +
                          '<i class="fa-solid fa-star" style="color:#ddd;font-size:0.7rem;"></i>'.repeat(5 - r.rating);
        const replyStatus = r.adminReply
            ? `<span style="color:var(--success);font-size:0.8rem;"><i class="fa-solid fa-check-circle"></i> ${r.adminReply.text.length > 30 ? r.adminReply.text.substring(0, 30) + '...' : r.adminReply.text}</span>`
            : `<span style="color:var(--text-muted);font-size:0.8rem;">Belum dibalas</span>`;

        return `
            <tr>
                <td style="max-width:150px;"><strong style="font-size:0.85rem;">${r.bookTitle}</strong></td>
                <td>${r.userName}</td>
                <td>${starsHtml}</td>
                <td style="max-width:200px;font-size:0.85rem;color:var(--text-muted);">${r.comment.length > 60 ? r.comment.substring(0, 60) + '...' : r.comment}</td>
                <td style="white-space:nowrap;font-size:0.8rem;">${r.date}</td>
                <td>${replyStatus}</td>
                <td class="actions">
                    <button class="btn btn-sm btn-outline" onclick="openReplyModal('${r.id}'); sfx.click();">
                        <i class="fa-solid fa-reply"></i> ${r.adminReply ? 'Edit' : 'Balas'}
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

/* FIX: Pastikan form listener dipasang ulang setiap render dashboard */
function initReplyForm() {
    const form = document.getElementById('replyReviewForm');
    if (!form) return;

    // Hapus listener lama dengan clone node, lalu pasang baru
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitAdminReply();
    });
}

function initAddBookForm() {
    const form = document.getElementById('addBookForm');
    if (!form) return;
    if (form.dataset.listenerAdded) return;
    form.dataset.listenerAdded = 'true';

    form.addEventListener('submit', (e) => {
        e.preventDefault(); sfx.click();
        const title = document.getElementById('addTitle').value.trim();
        const author = document.getElementById('addAuthor').value.trim();
        const year = parseInt(document.getElementById('addYear').value);
        const category = document.getElementById('addCategory').value;
        const desc = document.getElementById('addDesc').value.trim();
        const customCover = document.getElementById('addCoverUrl').value.trim();

        if (!title || !author || !year || !category || !desc) {
            showToast('Semua field wajib harus diisi', 'error'); sfx.error(); return;
        }

        const books = getBooks();
        const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

        books.push({ id: newId, isbn: '', title, author, year, category, status: 'Tersedia', desc, customCover });
        saveBooks(books);
        sfx.success(); showToast(`Buku "${title}" berhasil ditambahkan!`, 'success');
        form.reset();
        renderAdminStats(); renderAdminBookTable();
    });
}

function editBook(bookId) {
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('editBookId').value = book.id;
    document.getElementById('editTitle').value = book.title;
    document.getElementById('editAuthor').value = book.author;
    document.getElementById('editYear').value = book.year;
    document.getElementById('editCategory').value = book.category;
    document.getElementById('editDesc').value = book.desc;
    document.getElementById('editCoverUrl').value = book.customCover || '';

    openModal('editBookModal');
}

document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('editBookForm');
    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault(); sfx.click();
            const id = parseInt(document.getElementById('editBookId').value);
            const title = document.getElementById('editTitle').value.trim();
            const author = document.getElementById('editAuthor').value.trim();
            const year = parseInt(document.getElementById('editYear').value);
            const category = document.getElementById('editCategory').value;
            const desc = document.getElementById('editDesc').value.trim();
            const customCover = document.getElementById('editCoverUrl').value.trim();

            const books = getBooks();
            const book = books.find(b => b.id === id);
            if (book) {
                book.title = title; book.author = author; book.year = year;
                book.category = category; book.desc = desc; book.customCover = customCover;
                saveBooks(books);
                sfx.success(); showToast(`Buku "${title}" berhasil diperbarui!`, 'success');
                closeModal('editBookModal');
                renderAdminStats(); renderAdminBookTable();
            }
        });
    }
});

function deleteBook(bookId) {
    sfx.remove();
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    const confirmed = confirm(`Hapus buku "${book.title}"?`);
    if (!confirmed) return;
    const updatedBooks = books.filter(b => b.id !== bookId);
    saveBooks(updatedBooks);
    sfx.remove(); showToast(`Buku "${book.title}" berhasil dihapus`, 'info');
    renderAdminStats(); renderAdminBookTable();
}

// ==========================================
// SCROLL REVEAL ANIMATION & GLOBAL SFX
// ==========================================
function initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}

function initGlobalClickSfx() {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, .nav-link, .book-card, .btn-pinjam, select');
        if (target && !target.getAttribute('onclick')) sfx.click();
    });
}

// ==========================================
// INISIALISASI HALAMAN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar(); initScrollReveal(); initGlobalClickSfx();
    const page = document.body.dataset.page;
    switch (page) {
        case 'home': initHome(); break;
        case 'katalog': initKatalog(); break;
        case 'login': initLogin(); break;
        case 'register': initRegister(); break;
        case 'admin': initAdmin(); break;
    }
});
