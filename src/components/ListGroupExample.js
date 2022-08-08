import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
function ListGroupExample({citas, setCitas}) {


  const borrarCita = (i) => {
    console.log("Cita borrada");
    const newCitas = [...citas];
    newCitas.splice(i, 1);
    setCitas(newCitas);
  }




  return (
    <div style={{marginTop: '40px' }}>
    {citas.map((cita, i) => 
      <Card style={{ width: '18rem', backgroundColor: "#fff", paddingTop: '40px' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{cita.mascota}</ListGroup.Item>
          <ListGroup.Item>{cita.dueño}</ListGroup.Item>
          <ListGroup.Item>{cita.fecha}</ListGroup.Item>
          <ListGroup.Item>{cita.hora}</ListGroup.Item>
          <ListGroup.Item>{cita.sintomas}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary" type="submit" className="w-100 boton2" onClick={() => {borrarCita(i)}}>
            ELIMINAR x
          </Button>
      </Card>
      )}
    </div>
  );
}

export default ListGroupExample;