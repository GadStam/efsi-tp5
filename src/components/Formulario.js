import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroupExample from './ListGroupExample';
export default function FormCita({setCitas}) {
  
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mascota || !dueño || !fecha || !hora || !sintomas) {
      console.log("completa")
    }else{
    setCitas(prev => [...prev, {
    mascota,
    dueño,
    fecha,
    hora,
    sintomas
    }])
    setMascota("")
    setDueño("")
    setFecha("")
    setHora("")
    setSintomas("")
  }
}

    

  




  return (
   

<Form className="row" onSubmit={handleSubmit}>
      <Form.Group className="col-mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={e=> setMascota(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="col-mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={e=> setDueño(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="date" placeholder="Enter email" onChange={e=> setFecha(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="time" placeholder="Enter email" onChange={e=> setHora(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={e=> setSintomas(e.target.value)} 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button >
    </Form>
      
   


  )
  }





