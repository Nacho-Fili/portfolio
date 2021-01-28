import React, { Component } from 'react'
import colors from '../colors/colors'

const style = {
    borderRadius: '10px',
    border: 'none',
    margin: '1vh 0',
    height: '5vh',
    width: '10vh',
    color: colors.light,
    backgroundColor: colors.strong,
    outline: 'none'
}

export default class SubmitButton extends Component{

    render(){

        return(
            <input style={style} type="submit"/>
        )
    }
}

