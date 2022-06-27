// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';


function App() {
  return (
   <>
   <Navbar logo={'FIRST APP'} about='about us'/>
   {/* <Navbar logo={'FIRST APP'} about='about us'/> */}
   <TextForm/>
   </>


 
  );
}

export default App;
