import React, { Component } from 'react'
import { Link } from 'react-scroll'

const style = ({cursor}) => ({
    cursor
})

export default class ScrollTo extends Component{
    
    state= {
        cursor: 'default'
    }
    
    changeDefaultToPointer = () => this.setState({cursor: 'pointer'})

    changePointerToDefault = () => this.setState({cursor: 'default'})
    
    
    render(){

        const { children, href } = this.props

        return(
            <Link 
            onMouseEnter={ this.changeDefaultToPointer }
            onMouseLeave={ this.changePointerToDefault }
            style={style(this.state)} 
            smooth={true} to={href} >{children}</Link>
        )
    }
}