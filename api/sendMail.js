const Transporter = require("./src/main/utils/mailer")

module.exports = (req, res) => {
    transporter = new Transporter(config, myOAuth2Client)

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.MAIL,
        subject: 'NOTIFICACIÓN DE CONTACTO',
        text: req.body.data
    }

    transporter.send(mailOptions, res)
}