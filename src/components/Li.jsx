import React, { Component } from 'react'
import colors from '../colors/colors'

const style = {
    color: colors.light,
    fontSize: '1.3rem'
}

export default class Li extends Component{
    render(){

        const {children} = this.props

        return(
            <li style={style}>{children}</li>
        )
    }
}