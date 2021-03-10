import React from 'react'
import { useState } from 'react'

const style = newSize => ({
    objectFit: 'fill',
    objectPosition: 'center',
    height: newSize,
    width: newSize,
    display: 'block',
    padding: '10px',
    alignSelf: 'center'
})

export default function Img (props) {

    const EXPANDED_SIZE = '90%'
    const ORIGINAL_SIZE = '70%'
    const [cursor, setCursor] = useState('default')
    const [ size, setSize ]   = useState(ORIGINAL_SIZE)

    const {src, alt} = props

    return (
        <img

            onClick= {() =>{
                    console.log("click");
                }
            }
            
            onMouseEnter = { () => { 
                    setCursor('pointer')
                    setSize(EXPANDED_SIZE) 
                }
            }

            onMouseLeave = { () => { 
                    setCursor('default')
                    setSize(ORIGINAL_SIZE) 
                }
            }

            src={src} 
            alt={alt}
            style={{
                ...style(size), 
                cursor
            }}
        />
    )
    
}