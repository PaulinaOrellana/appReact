import React, { useState, useEffect } from 'react';
import {Card, Col, Row } from 'react-bootstrap';
 
const MiApi = ({valorBusqueda}) => { 
    const [personajes, setPersonajes] = useState([]);
    const [cargado, setCargado] = useState(false);

   useEffect(() => {

    getData();

   },[]);

   async function getData(){
   const res = await fetch("https://api.sampleapis.com/futurama/characters");
   const data = await res.json();
   
    setPersonajes(data);
    setCargado(true);
    console.log(data)

   };
    
  return (
    cargado ?
    <Row>
        {
            personajes
              .filter((p) => {
                return p.name.first.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
                p.name.middle.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
                p.name.last.toLowerCase().includes(valorBusqueda.toLowerCase());
                })
              .map((p,i) => {
                return (
                  <Col key={i}>
                  <Card style={{ width: '15rem', margin: '16px', padding: '1rem'}}>
                  <img className='card-img-top' style={{width: '50%', height: '60%', objectFit: 'contain'}}
                   src={p.images.main} alt="imagen personaje" />
                <Card.Body>
                  <Card.Title> {[p.name.first, p.name.middle, p.name.last].join(' ')}
                  </Card.Title>
                  <Card.Text>
                    <p>{p.occupation}</p>
                    <p>{p.species}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
                )
            })
        }
      
    </Row>:
    <h1>Cargando datos</h1>
  )
}

export default MiApi
