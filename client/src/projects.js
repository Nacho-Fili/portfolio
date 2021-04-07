const projects = {
    IMPROVING_REACTIONS: {
        
        description: 'La idea de este proyecto es ayudar a mejorar el tiempo de reaccion de los ' + 
        'usuarios y a su vez proveerles una forma de medir esta mejora. Para ello, se implementaron 2 minijuegos. ' +
        'El primero es un juego en el que aparecen círculos y cuadrados de distintos colores y solo se debe hacer click ' +
        'en los cuadrados de color verde. El segundo es un cuadro en el que caen calculos sencillos genereados aleatoriamente y el usuario' +
        'perderá cuando una llegue al suelo.',

        technologies: 'Esta aplicación fue desarrollada con vanilla JS, CSS y HTML',

        site: 'https://improvingreactions-nacho-fili.vercel.app/',

        repo: 'https://github.com/Nacho-Fili/improvingReactions'
    },

    ALGOBLOCKS: {
        description: 'Esta aplicacion de escritorio fue realizada en concepto de trabajo práctico final de la materia algoritmos y programación 3 ' +
        'en la UBA. Este fue realizado por un equipo de 4 personas en el que me vi incluido. Se emplearon metodologias como TDD y pair ' + 
        'programming. El objetivo es brindar una herramienta que permita dar una primer aproximacion hacia la programacion sin la necesidad de siquiera saber leer' +
        'brindando un personaje, las acciones que puede realizar en forma de bloques que deben ser colocados secuencialmente e introduciendo conceptos como los ciclos y las funciones',

        technologies: 'Esta aplicación fue desarrollada con Java y JavaFX, implementado la arquitectura MVC con el patrón de diseño observer',

        repo: 'https://github.com/angysaavedrafiuba/algoblocks'
    },

    LEARNING_SHEET_MUSIC: {
        description: 'Esta aplicacion web fue diseñada pensando en que los usuarios puedan aprender a leer partituras musicales y a su vez puedan tener un seguimiento '+
        'de parte de su docente. Cualquier persona puede darse de alta como docente y tener distintos grupos a los que les puede monitorear el rendimiento y la cantidad ' + 
        'de tiempo que sus alumnos practican, recibiendo un informe mensual con estas especificaciones.',

        technologies: 'Esta aplicacion fue desarrollada con Java Spring security, mvc y ReactJS',
        
        repo: 'https://github.com/angysaavedrafiuba/algoblocks'
    }
}


const projectsMap = new Map()
projectsMap.set('impReactions', projects.IMPROVING_REACTIONS)
projectsMap.set('algoblocks', projects.ALGOBLOCKS)
projectsMap.set('learningSheetMusic', projects.LEARNING_SHEET_MUSIC)



export default projectsMap