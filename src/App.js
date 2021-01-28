import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import A from './components/A';
import Form from './components/Form'
import H2 from './components/H2'
import Li from './components/Li'
import Ul from './components/Ul'
import P from './components/P'



import './App.css';

function App() {
  return (
    <div className="App">
      <Header flexDirection={'column'}>
        <h1>Ignacio Filipovskis</h1>
        <P>Estudiante de Ingeniería Informática</P>
      </Header>
      <Section>
        <H2>Skills</H2>
        <Ul>
          <Li>Lenguaje Javascript y biblioteca React</Li>
          <Li>CSS3 y HTML5</Li>
          <Li>NodeJS, biblioteca express</Li>
          <Li>Java</Li>
          <Li>TDD y metodologías de desarrollo ágil</Li>
          <Li>C y estructuras de datos</Li>
          <Li> Git y Github </Li>
          <Li>POO</Li>  
        </Ul>

        <H2> Sobre mi </H2>
        <P>Blablabla</P>

        <H2> Contacto </H2>  
        
        <Form/>

      </Section>
      <Footer justifyContent={'space-around'} flexDirection={'row'}>
   
        <A href='https://github.com/Nacho-Fili'>Github</A>
        <A href='https://www.linkedin.com/in/nacho-filipovskis-320a6418b/'>Linkedin</A>
        <A href='https://www.instagram.com/nacho_fili/'>Instagram</A>

      </Footer>
      <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
