import Carousel from 'react-bootstrap/Carousel';
import Data from './Data.json'

function Home() {
  return (
    <div style={{width:"80%", height:"80vh", margin:"auto"}}>
    <Carousel >
    {Data.map((item,idx)=>
       <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    )}
    </Carousel>
    </div>
  );
}

export default Home;