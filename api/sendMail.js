const { connectionConfig } = require("./src/main/config/mailerConfig")
const Transporter = require("./src/main/utils/mailer")

module.exports = async (req, res) => {
    transporter = new Transporter(connectionConfig)

    const mailOptions = {
        sender: req.body.data.sender,
        email: req.body.data.email,
        message: req.body.data.message
    }

    try{
        transporter.send(mailOptions, res)
    } catch(err) {
        console.log("An error has ocurred posting the message")
    }
}