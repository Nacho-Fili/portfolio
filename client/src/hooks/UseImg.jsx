import {useState} from 'react'


export default function UseImg(normalSize){

    const NORMAL_SIZE = normalSize
    const EXPANDED_SIZE = parseInt((normalSize.substr(0, normalSize.length - 1)) * 1.2).toString() + '%'

    const [size, setSize] = useState(NORMAL_SIZE)
    const [cursor, setCursor] = useState('default')

    const onHover = () => {
        setCursor('pointer')
        setSize(EXPANDED_SIZE)
    }

    const exitHover = () => {
        setCursor('default')
        setSize(NORMAL_SIZE)
    }

    return({
        exitHover,
        onHover,
        cursor,
        size
    })
}