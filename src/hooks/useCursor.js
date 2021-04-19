import { useState } from "react";

export default function useCursor(init){

    const [ cursor, setCursor ] = useState(init);

    const setPointer = () => {
        setCursor('pointer')
    }

    const setDefault = () => {
        setCursor('default')
    }

    return({
        cursor,
        setPointer,
        setDefault
    })

}