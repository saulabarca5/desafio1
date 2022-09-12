import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


const Todo = ({todo, index, deleteTodo, cantidad,sexo,dui,fn,muni,dire,depa}) => {
    return (

        <>
        <div>
        <p>Ficha del paciente</p>
            <table className='table table-sm'><br />
                        <thead className='table-success'>
                            <tr>
                                <th >Nombre</th>
                                <th>Edad</th>
                                <th>Sexo</th>
                                 <th>Dui</th>
                                 <th>Fecha de Nacimiento</th>
                                 <th>Nacionalidad</th>
                                 <th>Direccion</th>
                                 <th>Municipio</th>
                                 <th>Departamento</th>

                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{todo.todo}</th>
                            <td>{todo.cantidad}</td>
                            <td>{todo.sexo}</td>
                            <td>{todo.dui}</td>
                            <td>{todo.fn}</td>
                            <td>{todo.naci}</td>
                            <td>{todo.dire}</td>
                            <td>{todo.muni}</td>
                            <td>{todo.depa}</td>
                        </tr>
                        </tbody>
            </table>
            <button className="btn-delete" onClick={()=>deleteTodo(index)}>Eliminar Paciente</button><br />
            </div> 
           
            <br />
        </>
        
    )
}
export default Todo