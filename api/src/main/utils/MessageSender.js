const nodemailer = require('nodejs-nodemailer-outlook')

class MessageSender {
    constructor({auth, mailsConfig}){
        this.mailer = nodemailer
        this.auth = auth
        this.mailsConfig = mailsConfig
    }

    sendMail = message => {
        this.mailer.sendEmail({
            auth: this.auth,
            from: this.mailsConfig.from,
            to: this.mailsConfig.to,
            text: message,
            onError: e => console.error(`Error enviando email de ${this.mailsConfig.from} a ${this.mailsConfig.to}
            ${e}` ),
            onSuccess: i => {
                console.log(`Mensaje enviado correctamente de ${this.mailsConfig.from} a ${this.mailsConfig.to}
                ${i}`)
                return message
            }
        })
    } 
}

module.exports = MessageSender