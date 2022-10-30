import { useRef } from "react";

const FormNoControlado  = ()=> { 

  const formulario = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Procesando...')
    const datos = new FormData(formulario.current)
    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)

    const { todoName, todoDescripcion, todoEstado } = objetoDatos;

    if(!todoName.trim() || !todoDescripcion.trim()) {
      return console.log('Lo siento pero no ingresaste datos validos')
    }

    console.log('Los datos ingresado cumplen con los requisitos.')
    
  
}

    return (
      <>
        <h2> NO CONTROLADO </h2>
        <form ref={formulario} action="" onSubmit={handleSubmit}>
          <input 
              name="todoName" 
              type="text" 
              placeholder="Ingrese su tarea aqui"
              className="form-control"
          />
          <textarea 
              name="todoDescripcion" 
              className="form-control mt-2"
              placeholder="Ingrese la descripcion de su tarea aqui"
          />
          <select name="todoEstado" className="form-control mt-2"  >
              <option value="Pendiente">Pendiente</option>
              <option value="Realizada">Realizada</option>
          </select>
          <button className="btn btn-primary mt-2" >Agregar</button>

        </form>
      </>
    );
}

export default FormNoControlado