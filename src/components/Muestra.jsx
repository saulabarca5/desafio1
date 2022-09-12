import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Muestra = ({libra, index, deleteTodo, cantidad,sexo}) => {
    return (

        <>
        <div>
        <p>Conversiones basicas </p>
            <table className='table table-sm'><br />
                        <thead className='table-success'>
                            <tr>
                                <th >valor en onzas</th>
                                <th>Valor en Kilogramos</th>
                                <th>Valor en Gramos</th>

                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{libra.libra * 16} Onzas</th>
                            <th scope="row">{libra.libra / 2.205} Kg</th>
                            <th scope="row">{libra.libra * 453.6} G</th>
                        </tr>
                        </tbody>
            </table>
            <button className="btn-delete" onClick={()=>deleteTodo(index)}>Eliminar Conversion</button><br />
            </div> 
           
            <br />
        </>
        
    )
}
export default Muestra