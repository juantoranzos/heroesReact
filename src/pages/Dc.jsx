import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardComponent } from '../component/CardComponent';
import { heroes } from '../data/heroes';

export const Dc = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dcHeroes = heroes.filter((heroe) => heroe.publisher === 'DC Comics');
    setData(dcHeroes);
  }, []);

  return (
    <Container>
      <Row>
        {data.map((heroe) => (
          <Col key={heroe.id} xs={12} md={6} lg={4}>
            <CardComponent heroe={heroe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
