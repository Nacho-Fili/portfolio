const express = require("express")
const sendMail = require("./api/sendMail")

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', express.static(__dirname + '/client/build'))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

app.post('/send-mail', sendMail)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
