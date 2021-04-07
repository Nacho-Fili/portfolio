import React, {useState} from 'react'
import colors from '../colors/colors'

const style = ({cursor}) => ({
    borderRadius: '10px',
    border: 'none',
    margin: '1vh 0',
    minWidth: '50px',
    height: '5vh',
    width: '10vh',
    color: colors.light,
    backgroundColor: colors.strong,
    outline: 'none',
    cursor
})

export default function SubmitButton(){

    const [cursor, setCursor] = useState('default')


    return (
        <input 
        onMouseEnter={e => setCursor('pointer')}
        onMouseLeave={e => setCursor('default')}
        style={style(cursor)} type="submit"
        value="Enviar"/>
    )
    
}

