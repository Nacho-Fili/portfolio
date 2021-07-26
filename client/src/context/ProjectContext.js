import React, {createContext, useState} from 'react'


const context = createContext({})

export function ProjectContextProvider({children}){

    const projectMap = new Map()

    const [isInProjectState, setProjectState] = useState({
        impReactions: false,
        algoblocks: false,
        learningSheetMusic: false,
        motorcyclistManager: false
    })

    projectMap.set('algoblocks', isInProjectState.algoblocks)
    projectMap.set('impReactions', isInProjectState.impReactions)
    projectMap.set('learningSheetMusic', isInProjectState.learningSheetMusic)
    projectMap.set('motorcyclistManager', isInProjectState.motorcyclistManager)

    
    return (
        <context.Provider value={{isInProjectState, projectMap, setProjectState}}>
            {children}
        </context.Provider>
    )
}

export default context