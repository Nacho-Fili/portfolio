import React, {Component} from 'react'

const style = {
    objectFit: 'fill',
    objectPosition: 'center',
    height: '100%',
    width: '100%',
    display: 'block',
    padding: '10px',
    alignSelf: 'center'
}

export default class Img extends Component {

    render() {

        const {src, alt} = this.props

        return (
            <img src={src} alt={alt} style={style}/>
        )
    }
}