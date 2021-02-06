import React, {Component} from 'react'
import colors from '../colors/colors'

const style = {
    borderRadius: '30px',
    margin: '0.5vh',
    border: `3px solid ${colors.strong}`,
    padding: '1vh 4vh',
    width: '40vw',
    backgroundColor: 'rgba(255,255,255,0.3)',
    outline: 'none',
    color: colors.light
}

export default class Input extends Component {

    render() {

        const {type, placeholder, className} = this.props

        return (
            <input type={type} placeholder={placeholder} style={style} className={className}/>
        )
    }
}