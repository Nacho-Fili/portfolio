import axios from "axios"


export default function sendEmail(messageData){
    console.log(messageData)
    return axios.post(`/send-mail`, {
        "data": {
            "sender": messageData.sender,
            "email": messageData.emailSender,
            "message": messageData.message
        }
    }, {
        Headers: {
            "Content-Type": "application/json"
        }
    })
}