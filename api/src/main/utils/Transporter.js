const MySQL = require('mysql')

class Transporter{

    constructor(connectionConfig){
        this.connection = MySQL.createConnection(connectionConfig)
    }

    async send({ sender, email, message }){
        this.connection.connect((error) => {
            if(error){ 
                console.error(error)
                console.error('Database connection failed')
                throw error
            }

            console.log('Successful connection')

            this.connection.query(
                'INSERT INTO messages(sender, email, message) VALUES (?, ?, ?)', 
                [sender, email, message], 
                (error, result) => {
                    
                    if(error) { console.log('Ha ocurrido un error posteando el mensaje ' + error); throw error }
                    
                    else {
                        console.log('Mensaje posteado correctamente')
                        this.connection.end()
                    }
                })
        })
        
    }
}

module.exports = Transporter