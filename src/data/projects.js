const projects = [
    {
        description: `Esta aplicación fue desarrollada como práctica personal. Es una aplicación
        para administrar una determinada cantidad de recursos (motocicletas) que están disponibles en cantidades 
        uniformemente en ciertos horarios durante el día. El login es simplemente con un username y
        cada usuario puede solicitar solo un recurso por hora y debe guardarlos para que esta petición
        sea persistida.`,

        technologies: `Esta aplicacion fue desarrollada con NodeJS (express), PostgreSQL, ReactJS. El
        deploy del frontend se hizo en Vercel y el deploy de la API en Heroku.`,
        
        site: 'https://motorcyclist-manager.vercel.app/',

        repo:   [
            `https://github.com/Nacho-Fili/motorcyclist-manager`,
            `https://github.com/Nacho-Fili/motorcyclist-manager-api`
        ],

        img: 'https://www.dl.dropboxusercontent.com/s/v28g4u9bgfjz67d/MotorcyclistManager.png?dl=0',

        enabled: true
    },
    
    {
        description: `Esta aplicación se trata de una lista de supermercado simple, en la que el usuario
        debe agregar las cosas que desea comprar. Fue realizada con un enfoque sencillo pensando en que el
        usuario pueda utilizarla con la menor cantidad de interacciones posibles. Es la resolución del desafío de Goncy Pozzo sobre Tradehelm
        (https://github.com/goncy/tradehelm-challenge)`,

        technologies: `Esta aplicacion fue desarrollada con NodeJS (express, socketio), PostgreSQL, ReactJS y Typescript. El
        deploy se hizo enteramente en heroku.`,
        
        site: 'https://tradehelm-challenge.herokuapp.com/',

        repo:   [
            `https://github.com/Nacho-Fili/tradehelm-challenge`,
        ],

        img: 'https://www.dl.dropboxusercontent.com/s/ggaplu79knqt5au/tradehelm-challenge.png?dl=0',

        enabled: true
    },

    {
        
        description: 'La idea de este proyecto es ayudar a mejorar el tiempo de reaccion de los ' + 
        'usuarios y a su vez proveerles una forma de medir esta mejora. Para ello, se implementaron 2 minijuegos. ' +
        'El primero es un juego en el que aparecen círculos y cuadrados de distintos colores y solo se debe hacer click ' +
        'en los cuadrados de color verde. El segundo es un cuadro en el que caen calculos sencillos genereados aleatoriamente y el usuario' +
        'perderá cuando una llegue al suelo.',

        technologies: 'Esta aplicación fue desarrollada con vanilla JS, CSS y HTML',

        site: 'https://improvingreactions-nacho-fili.vercel.app/',

        repo: ['https://github.com/Nacho-Fili/improvingReactions'],

        img: 'https://www.dl.dropboxusercontent.com/s/jdrfciczrsyol8h/EntrenamientosDeReaccion.png?dl=0',

        enabled: false
    },

    {
        description: 'Esta aplicacion de escritorio fue realizada en concepto de trabajo práctico final de la materia algoritmos y programación 3 ' +
        'en la UBA. Este fue realizado por un equipo de 4 personas en el que me vi incluido. Se emplearon metodologias como TDD y pair ' + 
        'programming. El objetivo es brindar una herramienta que permita dar una primer aproximacion hacia la programacion sin la necesidad de siquiera saber leer' +
        'brindando un personaje, las acciones que puede realizar en forma de bloques que deben ser colocados secuencialmente e introduciendo conceptos como los ciclos y las funciones',

        technologies: 'Esta aplicación fue desarrollada con Java y JavaFX, implementado la arquitectura MVC con el patrón de diseño observer',

        site: '',

        repo: ['https://github.com/angysaavedrafiuba/algoblocks'],

        img: 'https://www.dl.dropboxusercontent.com/s/urolpx7kciuk0ve/algoblocks.png?dl=0',

        enabled: true
    },

    {
        description: 'Esta aplicacion web fue diseñada pensando en que los usuarios puedan aprender a leer partituras musicales y a su vez puedan tener un seguimiento '+
        'de parte de su docente. Cualquier persona puede darse de alta como docente y tener distintos grupos a los que les puede monitorear el rendimiento y la cantidad ' + 
        'de tiempo que sus alumnos practican, recibiendo un informe mensual con estas especificaciones.' +
        'ESTA APLICACIÓN AÚN ESTÁ EN DESARROLLO',

        technologies: 'Esta aplicacion fue desarrollada con Java Spring security, mvc y ReactJS',
        
        repo: ['https://github.com/angysaavedrafiuba/algoblocks'],

        img: 'https://www.dl.dropboxusercontent.com/s/obu5eeasvgbfz7w/LearningToReadSheetMusic.png?dl=0',

        enabled: false
    }
]


const enabledProjects = projects.filter(project => project.enabled)

export default enabledProjects