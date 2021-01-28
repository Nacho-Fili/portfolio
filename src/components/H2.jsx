import React, { Component } from 'react'
import colors from '../colors/colors'

const style = {
    borderBottom: `2px solid ${colors.strong}`,
    width: '50vw',
    padding: '2vh 0 0 0',
    fontSize: '1.5rem',
    color: colors.light,
    margin: '0',
    marginBottom: '1vh',
    textAlign: 'center'
}

export default class H2 extends Component{
    render(){
        const {children} = this.props

        return(
            <h2 style={style}> 
                {children}
            </h2>
        )
    }
}
