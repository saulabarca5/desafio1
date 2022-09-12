import logo from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Convertidor from './components/Convertidor';


const Conversor = () => {

  return(
    <div className='nuevo'>
      <div className='App-content'>
        <p>Convertidor de libras</p>
      </div>
      <Convertidor />

      <footer>
      Univeridad don bosco
      </footer>
      
    </div>
  )
}
export default Conversor;