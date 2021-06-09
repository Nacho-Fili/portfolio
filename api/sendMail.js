const Transporter = require("./src/main/utils/Transporter")
const mailerConfig = require('./src/main/config/mailerConfig')

module.exports = async (req, res) => {
    transporter = new Transporter(mailerConfig)
    const { body } = req
    console.log(body)

    const mailOptions = {
        sender: req.body.data.sender,
        email: req.body.data.email,
        message: req.body.data.message
    }

    try{
        transporter.send(mailOptions)
        res.status(200)
    } catch(err) {
        console.log("An error has ocurred posting the message")
    }
}