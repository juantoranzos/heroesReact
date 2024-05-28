import { Container, Row } from 'react-bootstrap';
import { CardComponent } from '../component/CardComponent';

export const Inicio = ({ heroes }) => {
  return (
    <>
      <Container>
        <Row>
          {heroes.map((heroe, index) => (
            <CardComponent heroe={heroe} key={index} />
          ))}
        </Row>
      </Container>
    </>
  );
};

