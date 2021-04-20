const { connectionConfig } = require("./src/main/config/mailerConfig")
const Transporter = require("./src/main/utils/Transporter")

module.exports = async (req, res) => {
    transporter = new Transporter(connectionConfig)

    const mailOptions = {
        sender: req.body.data.sender,
        email: req.body.data.email,
        message: req.body.data.message
    }

    try{
        transporter.send(mailOptions, res)
        res.status(200)
    } catch(err) {
        console.log("An error has ocurred posting the message")
    }
}