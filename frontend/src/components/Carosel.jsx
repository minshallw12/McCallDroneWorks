import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import home1 from '../images/home1.jpg';
import drone from '../images/DJI_0067.jpeg'
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
          <h3>Affordable rates</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={drone}
          alt="Second slide"
          style={{width: '900px', height:'650px'}}
        />

        <Carousel.Caption>
          <h3>Commercial equipment</h3>
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
          <h3>Big events!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};