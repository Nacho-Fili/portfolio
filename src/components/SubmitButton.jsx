import React, {Component} from 'react'
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

export default class SubmitButton extends Component {

    state= {
        cursor: 'default'
    }
    
    changeDefaultToPointer = () => this.setState({cursor: 'pointer'})

    changePointerToDefault = () => this.setState({cursor: 'default'})

    render() {

        return (
            <input 
            onMouseEnter={this.changeDefaultToPointer}
            onMouseLeave={this.changePointerToDefault}
            style={style(this.state)} type="submit"/>
        )
    }
}

