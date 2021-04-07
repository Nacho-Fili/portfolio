const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const Transporter = require("./src/main/utils/mailer.js")
const {config, myOAuth2Client} = require("./src/main/config/mailerConfig")


const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.post('/send-mail', (req, res) => {

    transporter = new Transporter(config, myOAuth2Client)

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.MAIL,
        subject: 'NOTIFICACIÓN DE CONTACTO',
        text: req.body.data
    }

    transporter.send(mailOptions, res)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
