import React, { useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormCita() {
  const [datos, setDatos] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: '',

  });



    const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }

const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.mascota + ' ' + datos.dueño)
}




  return (
    <form className="row" onSubmit={enviarDatos}>
    <div className="col-md-3">
        <input 
            type="text" 
            placeholder="Nombre" 
            className="form-control" 
            onChange={handleInputChange} 
            name="mascota" />
    </div>
    <div className="col-md-3">
        <input 
            type="text" 
            placeholder="Apellido" 
            className="form-control" 
            onChange={handleInputChange} 
            name="dueño" />
    </div>
    <div className="col-md-3">
        <input 
            type="text" 
            placeholder="Apellido" 
            className="form-control" 
            onChange={handleInputChange} 
            name="fecha" />
    </div>
    <div className="col-md-3">
        <input 
            type="text" 
            placeholder="Apellido" 
            className="form-control" 
            onChange={handleInputChange} 
            name="hora" />
    </div>
    <div className="col-md-3">
        <input 
            type="text" 
            placeholder="Apellido" 
            className="form-control" 
            onChange={handleInputChange} 
            name="sintomas" />
    </div>
    <button type="submit" className="btn btn-primary">Enviar</button>
</form>
      
   


  )
  }

export default FormCita;