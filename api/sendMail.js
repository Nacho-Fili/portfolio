const Transporter = require("./src/main/utils/Transporter")
const mailerConfig = require('./src/main/config/mailerConfig')

module.exports = async ({ body }, res) => {
    transporter = new Transporter(mailerConfig)
    const { data } = body
    const { sender, email, message } = data

    const mailOptions = {
        sender: sender,
        email: email,
        message: message
    }

    try{
        await transporter.send(mailOptions)
        res.status(200)
        console.log("Message sent " + res)
        return res
    } catch(err) {
        console.log("An error has ocurred posting the message")
        return res.status(400).json({message: "An error has ocurred posting the message"})
    }
}