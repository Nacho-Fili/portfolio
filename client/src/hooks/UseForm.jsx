import {useState} from 'react'
import sendEmail from '../services/mailService'

const UseForm = () => {
    
    const [sender, __setSender] = useState()
    const [emailSender, __setEmailSender] = useState()
    const [message, __setMessage] = useState()

    const setMessage = (_message) => {
        __setMessage(_message)
        console.log(message)
    }

    const setSender = (_sender) => {
        __setSender(_sender)
        console.log(sender)
    }

    const setEmailSender = (_emailSender) => {
        __setEmailSender(_emailSender)
        console.log(emailSender)
    }

    const submit = (e, messageDetails) => {
        e.preventDefault()
        
        sendEmail(messageDetails)
            .then(() => {
                e.target.reset()
                __setSender('')
                __setMessage('')
                __setEmailSender('')
                console.log("Email enviado!")
            })
            .catch(err => {
                e.target.reset()
                console.error(err)
            })
    }

    return({
        sender,
        emailSender,
        message,
        setMessage,
        setEmailSender,
        setSender,
        submit
    })
}

export default UseForm