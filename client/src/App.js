import React from 'react'

import Header   from './components/Header';
import Section  from './components/Section';
import Footer   from './components/Footer';
import A        from './components/A';
import Form     from './components/Form/Form'
import H1       from './components/H1'
import H2       from './components/H2'
import Li       from './components/Li'
import Ul       from './components/Ul/Ul'
import P        from './components/P'
import Div      from './components/Div'
import Img      from './components/Img'
import ScrollTo from './components/ScrollTo'


import Flex from './utils/Flex'
import Block from './utils/Block'

import improvingReactionsImg from './images/EntrenamientosDeReaccion.png'
import algoblocksImg from './images/algoblocks.png'
import learningToReadSheetMusicImg from './images/LearningToReadSheetMusic.png'

import {ProjectContextProvider} from './context/ProjectContext'

import './App.css';


function App() {
    return (
        <ProjectContextProvider>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}  className="App">
                <Header flexDirection={'column'}>
                    <Div height='5vh' width='100vw' display={Flex} flexDirection='row ' justifyContent='space-around'
                        alignItems='space-around'>
                        <P><ScrollTo href="proyectos"> Proyectos </ScrollTo></P>
                        <P><ScrollTo href="conocimientos"> Conocimientos </ScrollTo></P>
                        <P><ScrollTo href="sobremi"> Sobre mi </ScrollTo></P>
                        <P><ScrollTo href="contacto">Contacto </ScrollTo></P>
                    </Div>
                    <H1>Ignacio FILIPOVSKIS</H1>
                    <P>Estudiante de Ingeniería Informática</P>
                </Header>
                <Section>
                    <Div width='95vw' height='auto' display={Flex} flexDirection='column' alignItems='center'
                        justifyContent='center' id="proyectos">
                        <H2>Portafolio</H2>
                        <Div width='100vw' height='auto' display={Block} className='container'> 
                            <Div display={Flex} alignItems='center' justifyContent='center' name='impReactions'>
                                <Img src={improvingReactionsImg} alt='impReactions'/>
                            </Div>
                            <Div display={Flex} alignItems='center' justifyContent='center' name='algoblocks'>
                                <Img src={algoblocksImg} alt='algoblocks'/>
                            </Div>
                            <Div display={Flex} alignItems='center' justifyContent='center' name='learningSheetMusic'>
                                <Img src={learningToReadSheetMusicImg} alt='learningSheetMusic'/>
                            </Div>
                        </Div>
                    </Div>
                    <Div width='52vw' display={Flex} flexDirection='column' alignItems='center' 
                    justifyContent='center' id="conocimientos">
                        <H2>Conocimientos</H2>
                        <Ul>
                            <Li>Lenguaje Javascript y biblioteca React</Li>
                            <Li>CSS3 y HTML5</Li>
                            <Li>NodeJS, biblioteca express</Li>
                            <Li>Java</Li>
                            <Li>TDD y metodologías de desarrollo ágil</Li>
                            <Li>C y estructuras de datos</Li>
                            <Li> Git y Github </Li>
                            <Li>POO</Li>
                            <Li>Diagramas de clases y secuencia en UML</Li>
                        </Ul>
                    </Div>
                    <Div id='sobremi'>
                        <H2> Sobre mi </H2>
                        <P>Soy un estudiante de Ingeniería informática de 20 años al que le apasiona la tecnología, el desarrollo web y los videojuegos.
                            A los 18 años me adentré en el mundo de la programación mediante la plataforma de educación online platzi en la
                            que adquirí conocimientos básicos sobre programación en el lenguaje Javascript antes de entrar a la carrera de ingeniería en la UBA.
                            Luego seguí estudiando en Platzi mientras asistía a la universidad, compaginando mis prácticas de programación en C en la facultad
                            con la instrucción algo más avanzada en Platzi. Mis proyectos personales se centran en resolver problemas puntuales de personas de mi entorno
                            y ponerme nuevos desafíos con cosas que desconozco, porque con los libros solo no se aprende, hay que poner en práctica lo que se ve en los libros
                            para realmente comenzar a dominar el conocimiento. Comencé con un proyecto en JS vanilla CSS y HTML para dominarlos. Luego aprendí a manejar el framework
                            React, el cual puse en práctica construyendo este portafolio y que posteriormente seguí utilizando en la aplicación learning-to-read-sheet-music. Este último proyecto
                            es el más ambicioso que he encarado hasta ahora, incluyendo conexión con base de datos y un backend no trivial implementado con Java spring, lenguaje en el que me inicié
                            en Platzi y seguí poniendo en práctica durante mis estudios universitarios en un curso destinado a aprender las bases de POO. Este proyecto aun está en desarrollo.
         
                        </P>
                    </Div> 
                    

                    <H2> Contacto </H2>
                    <Div width='95vw' id="contacto">
                        <Form/>
                    </Div>
                    
                </Section>
                <Footer justifyContent={'space-around'} flexDirection={'row'}>

                    <A href='https://github.com/Nacho-Fili'>Github</A>
                    <A href='https://www.linkedin.com/in/nacho-filipovskis-320a6418b/'>Linkedin</A>
                    <A href='https://www.instagram.com/nacho_fili/'>Instagram</A>

                </Footer>
                <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </div>
            </div>
        </ProjectContextProvider>
    );
}

export default App;
