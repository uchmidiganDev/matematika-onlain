// ==== O'ZGARTIRING ====
// Bu ikkitasini o'zingizniki bilan almashtiring!
const BOT_TOKEN = '8413709325:AAEnu9iX4wv9LVFY3RDbHiIFFgV9NMaa7iw';  // Bot token
const CHAT_ID = '-5041180744';  // Guruh yoki shaxsiy chat ID (minus bilan!)

const TELEGRAM_BOT_URL = 'https://t.me/Onlain_natija_bot';
let currentLang = 'uz';

// === TIL MA'LUMOTLARI ===
const translations = {
    uz: {
        heroTitle: "Matematika Onson O'rganing",
        heroDesc: "3-sinfdan yuqori o'quvchilar uchun interaktiv onlayn kurs",
        telegramBadge: "Telegram orqali qo'shiling!",
        btnPrimary: "Kurs Paketlari",
        btnSecondary: "Telegram Botga O'tish",
        forTitle: "Kurs Kimlar Uchun?",
        for1Title: "Majburiy Matematika",
        for1Desc: "Majburiy matematikaga tayyorlanmoqchilar uchun",
        for2Title: "Ixtisoslashtirilgan Maktablar",
        for2Desc: "Prezident va Al-Xorazmiy maktablari uchun",
        for3Title: "Fundament Qo'yish",
        for3Desc: "Matematika asoslarini mustahkam qilish",
        for4Title: "Maktab Darsligi",
        for4Desc: "3-sinf va undan yuqori o'quvchilar uchun",
        pricingTitle: "Kurs Paketlari",
        modalTitle: "Ro'yxatdan o'tish",
        nameLabel: "Ism Familiya",
        phoneLabel: "Telefon raqam",
        emailLabel: "Elektron pochta",
        packageLabel: "Kurs paketi",
        packagePlaceholder: "Tanlang",
        submitBtn: "Telegram Botga O'tish",
        sending: "Yuborilmoqda...",
        darkModeText: "Dark Mode",
        lightModeText: "Light Mode",
        registerBtn: "Ro'yxatdan o'tish",
        buy: "Sotib olish",
        choose: "Tanlash",
        premium: "Premium"
    },
    ru: {
        heroTitle: "Математика Легко и Просто",
        heroDesc: "Интерактивный онлайн-курс для учеников с 3 класса",
        telegramBadge: "Присоединяйтесь через Telegram!",
        btnPrimary: "Пакеты курсов",
        btnSecondary: "Перейти в Telegram-бот",
        forTitle: "Для кого курс?",
        for1Title: "Обязательная математика",
        for1Desc: "Для подготовки к обязательной математике",
        for2Title: "Специализированные школы",
        for2Desc: "Президентские и школы Аль-Хоразмий",
        for3Title: "Укрепление основ",
        for3Desc: "Укрепление базовых знаний математики",
        for4Title: "Школьная программа",
        for4Desc: "Для учеников 3 класса и выше",
        pricingTitle: "Пакеты курсов",
        modalTitle: "Регистрация",
        nameLabel: "Имя Фамилия",
        phoneLabel: "Номер телефона",
        emailLabel: "Электронная почта",
        packageLabel: "Пакет курса",
        packagePlaceholder: "Выберите",
        submitBtn: "Перейти в Telegram-бот",
        sending: "Отправляется...",
        darkModeText: "Тёмный режим",
        lightModeText: "Светлый режим",
        registerBtn: "Регистрация",
        buy: "Купить",
        choose: "Выбрать",
        premium: "Премиум"
    }
};

// Xavfsiz element tanlash
function $(selector) {
    return document.querySelector(selector);
}
function $all(selector) {
    return document.querySelectorAll(selector);
}

// Tilni yangilash
function updateLanguage() {
    const t = translations[currentLang];

    $('.hero h1') && ($('.hero h1').textContent = t.heroTitle);
    $('.hero p') && ($('.hero p').textContent = t.heroDesc);
    $('.telegram-badge span') && ($('.telegram-badge span').textContent = t.telegramBadge);
    $('.btn-primary span') && ($('.btn-primary span').textContent = t.btnPrimary);
    $('.btn-secondary span') && ($('.btn-secondary span').textContent = t.btnSecondary);
    $('#for .section-title') && ($('#for .section-title').textContent = t.forTitle);
    $('#pricing .section-title') && ($('#pricing .section-title').textContent = t.pricingTitle);
    $('.modal-header h3') && ($('.modal-header h3').textContent = t.modalTitle);
    $('#register-btn span') && ($('#register-btn span').textContent = t.registerBtn);
    $('.submit-btn span') && ($('.submit-btn span').textContent = t.submitBtn);

    // For cards
    const h3 = $all('.for-card h3');
    const p = $all('.for-card p');
    h3[0] && (h3[0].textContent = t.for1Title);
    p[0] && (p[0].textContent = t.for1Desc);
    h3[1] && (h3[1].textContent = t.for2Title);
    p[1] && (p[1].textContent = t.for2Desc);
    h3[2] && (h3[2].textContent = t.for3Title);
    p[2] && (p[2].textContent = t.for3Desc);
    h3[3] && (h3[3].textContent = t.for4Title);
    p[3] && (p[3].textContent = t.for4Desc);

    // Paket tugmalari
    const btns = $all('.pricing-btn');
    btns[0] && (btns[0].innerHTML = `<i class="fas fa-shopping-cart"></i> ${t.buy}`);
    btns[1] && (btns[1].innerHTML = `<i class="fas fa-shopping-cart"></i> ${t.buy}`);
    btns[2] && (btns[2].innerHTML = `<i class="fas fa-crown"></i> ${t.choose}`);
    btns[3] && (btns[3].innerHTML = `<i class="fas fa-gem"></i> ${t.premium}`);

    // Dark mode matni
    const themeSpan = $('#theme-toggle span');
    if (themeSpan) {
        const isDark = document.body.classList.contains('dark-mode');
        themeSpan.textContent = isDark ? t.lightModeText : t.darkModeText;
    }
}

// DOM yuklangandan keyin hammasini ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();

    // Dark mode
    $('#theme-toggle')?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = $('#theme-toggle i');
        const isDark = document.body.classList.contains('dark-mode');
        if (icon) {
            icon.classList.toggle('fa-sun', isDark);
            icon.classList.toggle('fa-moon', !isDark);
        }
        updateLanguage();
    });

    // Til tugmalari
    $all('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $all('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            updateLanguage();
        });
    });

    // Modal
    $('#register-btn')?.addEventListener('click', () => $('#registration-modal')?.classList.add('active'));
    $('.close-modal')?.addEventListener('click', () => $('#registration-modal')?.classList.remove('active'));

    // Paket tanlash
    $all('.buy-package').forEach(btn => {
        btn.addEventListener('click', () => {
            $('#package').value = btn.dataset.package;
            $('#registration-modal')?.classList.add('active');
        });
    });

    // Telefon format
    $('#phone')?.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 12) v = v.slice(0, 12);
        if (!v.startsWith('998')) v = '998' + v.replace(/^998/, '');
        let f = '+998';
        if (v.length > 3) f += ' ' + v.slice(3,5);
        if (v.length > 5) f += ' ' + v.slice(5,8);
        if (v.length > 8) f += ' ' + v.slice(8,10);
        if (v.length > 10) f += ' ' + v.slice(10,12);
        e.target.value = f;
    });

    // FORMA YUBORISH – TELEGRAMGA TO'G'RI YUBORADI
    $('#registration-form')?.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = $('#name').value.trim();
        const phone = $('#phone').value.trim();
        const paket = $('#package').value;

        if (!name || !phone || !paket) {
            alert(currentLang === 'uz' ? 'Iltimos, barcha maydonlarni to\'ldiring!' : 'Заполните все поля!');
            return;
        }

        const btn = this.querySelector('.submit-btn');
        const oldText = btn.innerHTML;
        btn.innerHTML = translations[currentLang].sending;
        btn.disabled = true;

        const message = `
YANGI RO'YXATDAN O'TISH

Ism: ${name}
Telefon: ${phone}
Paket: ${paket.toUpperCase()}
Til: ${currentLang === 'uz' ? 'O‘zbekcha' : 'Русский'}

Vaqt: ${new Date().toLocaleString('uz-UZ')}
        `.trim();

        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                alert('Ma\'lumotlar muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz');
                window.open(TELEGRAM_BOT_URL, '_blank');
                $('#registration-modal').classList.remove('active');
                this.reset();
            } else {
                throw new Error();
            }
        })
        .catch(() => {
            alert('Xatolik yuz berdi. Token va Chat ID ni tekshiring!');
        })
        .finally(() => {
            btn.innerHTML = oldText;
            btn.disabled = false;
        });
    });
});

