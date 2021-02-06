import React, {Component} from 'react'
import colors from '../colors/colors'
import SubmitButton from './SubmitButton'
import Input from './Input'

import './Form.css'

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 20vh',
        padding: '3vh 0'
    },

    mainInput: {
        borderRadius: '20px',
        border: `3px solid ${colors.strong}`,
        margin: '1vh 0',
        padding: '3vh 4vh',
        fontSize: '0.9rem',
        height: '35vh',
        width: '40vw',
        backgroundColor: 'rgba(255,255,255,0.3)',
        outline: 'none',
        color: colors.light,
        resize: 'none'
    }
}

export default class Form extends Component {

    render() {

        return (
            <form style={style.form} action="">
                <Input type='text' className='section__form--input' placeholder='Nombre...'/>
                <Input type='email' className='section__form--input' placeholder='E-Mail...'/>
                <textarea style={style.mainInput} type="text" placeholder='Mensaje...'
                          className="section__form--main-input"/>
                <SubmitButton/>
            </form>
        )
    }
}