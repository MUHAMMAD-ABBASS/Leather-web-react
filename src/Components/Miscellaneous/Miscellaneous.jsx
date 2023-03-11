import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Data from './Data.json'

function Miscellaneous() {

    return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {Data.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.img}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
               {item.discription}
              </Card.Text>
              <Button variant='outline-danger'>Buy Product</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Miscellaneous;