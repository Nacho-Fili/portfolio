import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import A from './components/A';
import Form from './components/Form'
import H1 from './components/H1'
import H2 from './components/H2'
import Li from './components/Li'
import Ul from './components/Ul'
import P from './components/P'
import Div from './components/Div'
import Img from './components/Img'
import ScrollTo from './components/ScrollTo'


import Flex from './utils/Flex'
import Block from './utils/Block'

import image1 from './images/EntrenamientosDeReaccion.png'

import './App.css';

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}  className="App">
            <Header flexDirection={'column'}>
                <Div height='5vh' width='100%' display={Flex} flexDirection='row ' justifyContent='space-around'
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
                    <Div width='60vw' height='auto' display={Block}>
                        <Div display={Flex} alignItems='center' justifyContent='center'>
                            <Img src={image1} alt='Image 1'/>
                        </Div>
                        <Div display={Flex} alignItems='center' justifyContent='center'>
                            <Img src={image1} alt='Image 1'/>
                        </Div>
                        <Div display={Flex} alignItems='center' justifyContent='center'>
                            <Img src={image1} alt='Image 1'/>
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
                    <P>Blablabla</P>
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
            <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry"
                                  title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/"
                                                                                title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    );
}

export default App;
