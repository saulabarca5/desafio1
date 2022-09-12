import React,{useState} from 'react'
import Muestra from '../components/Muestra'
import "bootstrap/dist/css/bootstrap.min.css"
const Conv = () => {
    const [libra, setLibra]= useState({})

//------------------------------------------------------------------------------------------------------------------------------------

    const [todos, setTodos] = useState([])

     const handleChange = e => setLibra({[e.target.name]: e.target.value})

     

     //--------------------------------------------------------------------------------------------------------------------------------------
     const handleClick2 = e => 
     {
        setTodos([...todos, {libra:libra.libra}])
        
     }

     //-----------------------------------------------------------------------------------------------------------------------------------
     const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
     }
     
    //Agregando los input-----------------------------------------------------------------------------------------------------------------
     return (
        <>
                <div>
                <form onSubmit={e => e.preventDefault()}>
                    <label>Peso en libra</label><br />
                    <input type="text" name='libra' onChange={handleChange} placeholder = "00" pattern="[0-9.-..]{8,12}"></input>
                    <button onClick={handleClick2}>Convertir</button>
                </form>
                {
            todos.map((value,index)=>(<Muestra  libra={value} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </div>
        </>
    )
}
export default Conv