import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Data from './Data.json'


function Women() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {Data.map((item, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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

export default Women;