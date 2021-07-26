const nodemailer = require('nodejs-nodemailer-outlook')

class MessageSender {
    constructor({auth, mailsConfig}){
        this.mailer = nodemailer
        this.auth = auth
        this.mailsConfig = mailsConfig
    }

    sendMail = async message => {
        this.mailer.sendEmail({
            auth: this.auth,
            from: this.mailsConfig.from,
            to: this.mailsConfig.to,
            text: message,
            onError: () => console.error(`Error enviando email de ${this.mailsConfig.from} a ${this.mailsConfig.to}`),
            onSuccess: i => {
                console.log(`Mensaje enviado correctamente de ${this.mailsConfig.from} a ${this.mailsConfig.to}`)
                return message
            }
        })
    } 
}

module.exports = MessageSender