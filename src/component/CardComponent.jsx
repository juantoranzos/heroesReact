import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const CardComponent = ({ heroe }) => {
    return (

            <Col md={4} lg={3}>
                <Card style={{ width: '18rem' }} className='m-2 p-2 card text-center shadow'>
                    <Card.Img variant="top" src={heroe.url} />
                    <Card.Body>
                        <Card.Title>{heroe.superhero}
                        <p className='p-2'>{heroe.alter_ego}</p>
                         <p className='p-2'>{heroe.first_appearance}</p>
                        </Card.Title>
                        <Card.Text>
                            {heroe.publisher}
                        </Card.Text>
                        <Link to={`/detalleheroe/${heroe.id}`}><Button variant="primary">Ver Mas</Button></Link>
                    </Card.Body>
                </Card>
          </Col>
     


    )
}
