import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import A from './components/A';
import Form from './components/Form'
import H2 from './components/H2'



import './App.css';

function App() {
  return (
    <div className="App">
      <Header flexDirection={'column'}>
        <h1>Ignacio Filipovskis</h1>
        <p>Estudiante de Ingeniería Informática</p>
      </Header>
      <Section>
        <H2> Contacto </H2>  

        <Form/>

      </Section>
      <Footer justifyContent={'space-around'} flexDirection={'row'}>
   
        <A href='https://github.com/Nacho-Fili'>Github</A>
        <A href='https://www.linkedin.com/in/nacho-filipovskis-320a6418b/'>Linkedin</A>
        <A href='https://www.instagram.com/nacho_fili/'>Instagram</A>

      </Footer>
    </div> 
  );
}

export default App;
