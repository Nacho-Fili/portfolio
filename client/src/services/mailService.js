import axios from "axios"


export default function sendEmail(message){
    const ENDPOINT = "http://localhost:3000"
    
    return axios.post(`${ENDPOINT}/send-mail`, {
        "data": message
    }, {
        Headers: {
            "Content-Type": "application/json"
        }
    })
}