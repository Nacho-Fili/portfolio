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
            } else {
                console.log('Successful connection')
            }
        })
        
        this.connection.query(
            'INSERT INTO message(id, sender, email, message) VALUES (?, ?, ?, ?)', 
            [1, sender, email, message], 
            (error, result) => {
                
                if(error) { console.log('Ha ocurrido un error posteando el mensaje ' + error); throw error }
                
                else console.log('Mensaje posteado correctamente ' + result)
            })
        
        this.connection.end()
    }
}

module.exports = Transporter