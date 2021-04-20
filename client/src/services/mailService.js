import axios from "axios"


export default function sendEmail(messageData){
    //"https://ignacio-filipovskis.vercel.app"
    
    return axios.post(`/send-mail`, {
        "data": {
            "sender": messageData.sender,
            "email": messageData.email,
            "message": messageData.message
        }
    }, {
        Headers: {
            "Content-Type": "application/json"
        }
    })
}