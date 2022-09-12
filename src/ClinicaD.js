import logo from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Conversor from './Conversor';


const ClinicaD = () => {



  const [showForm,setShowForm]=useState(false);
  const [showConversor,setShowConversor]=useState(false);

  const mostrar =(valor)=>{ 
    setShowConversor(false)
    setShowForm(valor)
  }
  const mostrarConversor =(valor)=>{ 
    setShowConversor(valor)
    setShowForm(false)
  }
  

 
  return(
    <div className='nuevo'>
      <header>
          <h5 className='izquierda' >Clinica Dental & conversor de libras</h5>  
        <img src="./logoo.jpg" />
        <img className='libra' src="./libra.jpg" />
       </header>
    <div className='App-content'>
    <button onClick={()=>mostrar(!showForm)}>Mostrar / Ocultar Clinica Dental</button>
    <button onClick={()=>mostrarConversor(!showConversor)}>Mostrar / Ocultar Conversor de libras</button>
    {showForm&&<Form/>}
    
    {showConversor&&<Conversor></Conversor>}
    </div>
    <footer>
      Univeridad don bosco
      </footer>
    </div>
  )






  
}

export default ClinicaD;