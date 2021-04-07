import React from 'react'
import colors from '../../colors/colors'
import SubmitButton from '../SubmitButton'
import Input from '../Input'
import './Form.css'
import UseForm from '../../hooks/UseForm'



const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 20vh',
        padding: '3vh 0',
    },

    mainInput: {
        borderRadius: '20px',
        border: `3px solid ${colors.strong}`,
        margin: '1vh 0',
        padding: '3vh 4vh',
        fontSize: '1.3rem',
        height: '35vh',
        backgroundColor: 'rgba(255,255,255,0.3)',
        outline: 'none',
        color: colors.light,
        resize: 'none'
    }
}


export default function Form(){


    const { message, setSender, setEmailSender, setMessage } = UseForm()
    const { submit } =  UseForm()


    return (
        <form onSubmit={e => submit(e, message)} style={style.form} action="">
            <Input 
                onchange={ ({ target }) => setSender(target.value)} 
                type='text' 
                className='section__form--input' 
                placeholder='Nombre...'/>

            <Input 
                onchange={ ({ target }) => setEmailSender(target.value)}
                type='email' 
                className='section__form--input' 
                placeholder='E-Mail...'/>
            
            <textarea 
                onChange={ ({ target }) => setMessage(target.value)}
                style={style.mainInput} 
                type="text" 
                placeholder='Mensaje...'
                className="section__form--main-input"
                />

            <SubmitButton/>
        </form>
    )
}