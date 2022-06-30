// import logo from './logo.svg';
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

const [mode, setmode] = useState('light') //dark mode enable or not

 const [alert, setalert] = useState(null);

const showAlert = (message, type)=> {
  setalert({
    msg: message,
    type: type
  })

  // console.log(setalert);
}

const togglemode = () =>{

  if(mode === "light"){

    setmode('dark');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    showAlert('You are using dark mode', 'primary');
  }else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("You are using light mode", 'success');
  }

}

// console.log(alert); 

  return (
   <>
   <Navbar logo={'FIRST APP'} about='about us' mode={mode} toggleMode={togglemode}/>
   <Alert text={alert}/>
   <TextForm/>
   <About/>
   </>
  );
}

export default App;
