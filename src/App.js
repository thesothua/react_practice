// import logo from './logo.svg';
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {

const [mode, setmode] = useState('light') //dark mode enable or not

const togglemode = () =>{

  if(mode === "light"){

    setmode('dark');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
  }

}

// console.log(mode); 

  return (
   <>
   <Navbar logo={'FIRST APP'} about='about us' mode={mode} toggleMode={togglemode}/>
   <TextForm/>
   <About/>
   </>


 
  );
}

export default App;
