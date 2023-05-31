import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import home1 from '../images/home1.jpg';
import lakenorth2 from '../images/lakenorth2.jpeg';
import carnival from '../images/carnival.jpeg';

export default function Carosel() {
  return (
    <Carousel fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home1}
          alt="First slide"
          style={{width: '900px', height:'650px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lakenorth2}
          alt="Second slide"
          style={{width: '900px', height:'650px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carnival}
          alt="Third slide"
          style={{width: '900px', height:'650px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};