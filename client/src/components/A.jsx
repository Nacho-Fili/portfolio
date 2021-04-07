import React, {Component} from 'react'
import colors from '../colors/colors'

const style = styleToAdd => ({
    ...styleToAdd,
    color: colors.light,
    textDecoration: 'none',
    fontSize: '1.3rem'
})

export default class A extends Component {
    render() {

        const {href, children, styleToAdd} = this.props

        return (
            <a href={href} style={style(styleToAdd)}>
                {children}
            </a>
        )
    }
}
