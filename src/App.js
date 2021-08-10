import React from 'react'

import NavBar   from './components/navBar/NavBar';
import Main  from './components/main/Main';
import Footer   from './components/footer/Footer';


import './App.css';



function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}  className="App">
            <NavBar />
            <Main/> 
            <Footer/>
            <div className='copyright'>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> </div>
        </div>
    );
}

export default App;
