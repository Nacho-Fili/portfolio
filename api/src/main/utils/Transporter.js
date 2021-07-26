const MessageSender = require('./MessageSender')
const defaultConfig = require('../config/mailerConfig')

class Transporter{

    constructor(config = defaultConfig){
        this.sender = new MessageSender(config)
    }

    async send({ sender, email, message }){
        const text = 
                    `from: ${sender}
                    reply-to: ${email}
                    message: ${message}`

        return await this.sender.sendMail(text)
    }
}

module.exports = Transporter