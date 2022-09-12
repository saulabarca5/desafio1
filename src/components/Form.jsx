import React,{useState} from 'react'
import Todo from '../components/Todo'
import "bootstrap/dist/css/bootstrap.min.css"
const Form = () => {
    const [todo, setTodo]= useState({})
    const [cantidad, setCantidad]= useState({})
    const [sexo, setSexo]= useState({})
    const [dui, setDui]= useState({})
    const [fn, setFn]= useState({})
    const [naci, setNaci]= useState({})
    const [dire, setDire]= useState({})
    const [muni, setMuni]= useState({})
    const [depa, setDepa]= useState({})

//------------------------------------------------------------------------------------------------------------------------------------

    const [todos, setTodos] = useState([])

     const handleChange = e => setTodo({[e.target.name]: e.target.value})
     const changes = e => setCantidad({[e.target.name]: e.target.value})
     const changes2 = e => setSexo({[e.target.name]: e.target.value})
     const changes3 = e => setDui({[e.target.name]: e.target.value})
     const changes4 = e => setFn({[e.target.name]: e.target.value})
     const changes5 = e => setNaci({[e.target.name]: e.target.value})
     const changes6 = e => setDire({[e.target.name]: e.target.value})
     const changes7 = e => setMuni({[e.target.name]: e.target.value})
     const changes8 = e => setDepa({[e.target.name]: e.target.value})
     

     //--------------------------------------------------------------------------------------------------------------------------------------
     const handleClick = e => 
     {
        setTodos([...todos, {todo:todo.todo, cantidad:cantidad.cantidad, sexo:sexo.sexo, dui:dui.dui, fn:fn.fn,
        naci:naci.naci, dire:dire.dire, muni:muni.muni, depa:depa.depa}])
  
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
                <p>Formulario de paciente</p>
                <form onSubmit={e => e.preventDefault()}>
                    <label>Nombre</label><br />
                    <input type="text" name='todo' onChange={handleChange} placeholder = "Nombre"></input>
                    <label>Edad</label>
                    <input type="number" name='cantidad' onChange={changes} placeholder= "Edad"></input>
                    <label>Sexo</label>
                    <input type="text" name='sexo' onChange={changes2} placeholder="Sexo"></input>
                    <label>Dui</label>
                    <input type="text" name='dui' onChange={changes3} placeholder="00000000-0" pattern="[0-9.-]{8,12}"></input>
                    <label>Fecha Nacimiento</label>
                    <input type="text" name='fn' onChange={changes4} placeholder="DD-MM-AA" pattern="[0-9.-]{8,12}"></input>
                    <label>Nacionaidad</label>
                    <input type="text" name='naci' onChange={changes5} placeholder="nacionalidad"></input>
                    <label>Direccion</label>
                    <input type="text" name='dire' onChange={changes6} placeholder="direccion"></input>
                    <label>Municipio</label>
                    <input type="text" name='muni' onChange={changes7} placeholder="Municipio"></input>
                    <label>Departamento</label>
                    <input type="text" name='depa' onChange={changes8} placeholder="Departamento"></input>
                    <button onClick={handleClick}>agregar</button>
                </form>
                {
            todos.map((value,index)=>(<Todo  todo={value} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </div>
        </>
    )
}
export default Form