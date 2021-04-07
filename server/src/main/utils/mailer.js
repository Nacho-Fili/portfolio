const nodemailer = require("nodemailer")

class Transporter{

    constructor(config, oauth2Client){
        this.oauth2Client = oauth2Client
        this.config = config
    }

    async send(mailOptions, res){
        
        const accessToken = this.oauth2Client.getAccessToken()

        this.transporter = await nodemailer.createTransport(this.config(accessToken))
        
        console.log("Enviando Email a " + mailOptions.to )
        return this.transporter.sendMail(mailOptions, err => {
            if(err){
                console.log("Error al enviar el email")
                console.log(err)
                res.status(500)
                res.send({
                    message: err
                })
            } else {
                console.log("Email enviado correctamente")
                res.status(200)
                res.send({
                    message: 'Email has been sent'
                })
            }
        })
    }

    async getHost(){
        const accessToken = this.oauth2Client.getAccessToken()
        this.transporter = await nodemailer.createTransport(this.config(accessToken))
        return this.transporter.options.mailerTestConfig.host
    }

    async getPort(){
        const accessToken = this.oauth2Client.getAccessToken()
        this.transporter = await nodemailer.createTransport(this.config(accessToken))
        return this.transporter.options.mailerTestConfig.port
    }
}

module.exports = Transporter