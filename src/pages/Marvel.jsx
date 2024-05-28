import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardComponent } from '../component/CardComponent';
import { heroes } from '../data/heroes';

export const Marvel = () => {
  const [marvel, setMarvel] = useState([]);

  useEffect(() => {
    const marvelHeroes = heroes.filter(heroe => heroe.publisher === 'Marvel Comics');
    setMarvel(marvelHeroes);
  }, []);

  return (
    <Container>
      <Row>
        {marvel.map((heroe) => (
          <Col key={heroe.id} md={6} lg={4}> {/* Asegúrate de pasar el id correctamente */}
              <CardComponent heroe={heroe} />
           
          </Col>
        ))}
      </Row>
    </Container>
  );
}
