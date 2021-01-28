import React, { Component } from 'react'


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