import React, {Component} from 'react'
import colors from '../colors/colors'

const style = {
    color: colors.light,
    textDecoration: 'none'
}

export default class A extends Component {
    render() {

        const {href, children} = this.props

        return (
            <a href={href} style={style}>
                {children}
            </a>
        )
    }
}
