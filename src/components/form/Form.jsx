import React from 'react'
import colors from '../../colors/colors'
import './Form.css'
import UseForm from '../../hooks/UseForm'
import styles from './form.module.css'


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

const styleInput = { border: `3px solid ${colors.strong}`, color: colors.light }
const submitButton = { color: colors.light, backgroundColor: colors.strong }

export default function Form(){


    const { message, sender, emailSender, setSender, setEmailSender, setMessage } = UseForm()
    const { submit } =  UseForm()


    return (
        <form onSubmit={e => submit(e, {message, sender, emailSender})} style={style.form} action="">
            <input 
                onChange={ ({ target }) => setSender(target.value)} 
                type='text' 
                className={`section__form--input ${styles.input}`}
                placeholder='Nombre...'
                style={styleInput}/>

            <input 
                onChange={ ({ target }) => setEmailSender(target.value)}
                type='email' 
                className={`section__form--input ${styles.input}`}
                placeholder='E-Mail...'
                style={styleInput}/>
            
            <textarea 
                onChange={ ({ target }) => setMessage(target.value)}
                style={style.mainInput} 
                type="text" 
                placeholder='Mensaje...'
                className="section__form--main-input" />

            <button type='submit' className={styles.submitBtn} style={submitButton}>
                Enviar    
            </button>
        </form>
    )
}