const express = require("express")
const sendMail = require("./api/sendMail")
const Transporter = require('./api/src/main/utils/Transporter')

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', express.static(__dirname + '/client/build'))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

app.post('/send-mail', sendMail)

const transporter = new Transporter()
transporter.send({sender: 'nacho', email: 'n.filipovskis', message: 'Programa iniciado: Test'})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
