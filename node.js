const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = 3000;

// Bot token va admin ID
const TOKEN = '8391557463:AAHwL7DsGYpF6reAOobm-gWtXc8okdGHVDY';
const ADMIN_ID = 1234567890; // Admin telegram ID
const bot = new TelegramBot(TOKEN, { polling: true });

app.use(bodyParser.json());
app.use(express.static('public')); // frontend fayllar shu papkada

// POST endpoint ro'yxatdan o'tish uchun
app.post('/register', (req, res) => {
    const { name, phone, email, package } = req.body;

    if (!name || !phone || !email || !package) {
        return res.status(400).send('Malumot yetarli emas');
    }

    // Telegram uchun xabar tayyorlash
    const message = `📥 Yangi ro'yxatdan o'tish:\n\n` +
                    `👤 Ism: ${name}\n` +
                    `📞 Telefon: ${phone}\n` +
                    `📧 Email: ${email}\n` +
                    `📦 Paket: ${package}\n` +
                    `🕐 Vaqt: ${new Date().toLocaleString()}`;

    // Adminga yuborish
    bot.sendMessage(ADMIN_ID, message);

    res.status(200).send('OK');
});

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server ishlayapti: http://localhost:${PORT}`);
});
