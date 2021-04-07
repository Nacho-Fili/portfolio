import {useState} from 'react'
import sendEmail from '../services/mailService'

const UseForm = () => {
    
    const [sender, __setSender] = useState()
    const [emailSender, __setEmailSender] = useState()
    const [message, __setMessage] = useState()

    const setMessage = (_message) => {
        __setMessage(`${_message}
        
        From: ${sender}, 
        E-mail: ${emailSender}`)
    }

    const setSender = (_sender) => {
        __setSender(_sender)
        setMessage(message)
    }

    const setEmailSender = (_emailSender) => {
        __setEmailSender(_emailSender)
        setMessage(message)
    }

    const submit = (e, message) => {
        e.preventDefault()
        
        sendEmail(message)
            .then(() => {
                e.target.reset()
                __setSender('')
                __setMessage('')
                __setEmailSender('')
                console.log("Email enviado!")
            })
            .catch(err => console.error(err))
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