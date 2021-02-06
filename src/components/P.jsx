import React, {Component} from 'react'
import colors from '../colors/colors'

const style = {
    color: colors.light,
    maxWidth: '70vw',
}

export default class P extends Component {
    render() {

        const {children} = this.props

        return (
            <p style={style}>{children}</p>
        )
    }
}