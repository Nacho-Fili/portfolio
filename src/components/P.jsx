import React, {Component} from 'react'
import colors from '../colors/colors'

const style = styleToAdd => ({
    color: colors.light,
    maxWidth: '70vw',
    ...styleToAdd
})

export default class P extends Component {
    render() {

        const {children, styleToAdd} = this.props

        return (
            <p style={style(styleToAdd)}>{children}</p>
        )
    }
}