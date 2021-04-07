import axios from "axios"


export default function sendEmail(message){
    const ENDPOINT = "https://ignacio-filipovskis.vercel.app/"
    
    return axios.post(`${ENDPOINT}/send-mail`, {
        "data": message
    }, {
        Headers: {
            "Content-Type": "application/json"
        }
    })
}