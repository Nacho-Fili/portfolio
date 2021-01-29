import React, { Component } from 'react'
import colors from '../colors/colors'

const style = {
    color: colors.light,
    marginTop: '10vh',
}

export default class H1 extends Component{
    render(){
    
        const {children} = this.props
    
        return(
            <h1 style={style}>
                {children}
            </h1>  
        )
    }
}