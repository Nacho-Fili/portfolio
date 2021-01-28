import React, { Component } from 'react'
import colors from '../colors/colors'

const style = {
    listStyleType: 'none',
}

export default class Ul extends Component{
    
    render(){
        const {children} = this.props

        return(
            <ul style={style}> {children} </ul>
        )
    }
}