import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import CarouselImage2 from "./CarouselImage2";
import CarouselImage3 from "./CarouselImage3";
import CarouselImage4 from "./CarouselImage4";
import CarouselImage5 from "./CarouselImage5";
import CarouselImage6 from "./CarouselImage6";
import CarouselImage7 from "./CarouselImage7";
import CarouselImage8 from "./CarouselImage8";
import CarouselImage9 from "./CarouselImage9";
import CarouselImage10 from "./CarouselImage10";
import "../../App.css";

function MyCarousel() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item interval={2100}>
        <CarouselImage />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>5521 Kester Ave #12, Sherman Oaks, CA 914111</h5>
          <h1>$850,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage2 />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>1244 Valley View Rd APT 108, Glendale, CA 91202</h5>
          <h1>$900,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage3 />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>7613 Machrea St, Tujunga, CA 91042</h5>
          <h1>$765,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage4 />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>7832 Jayseel St, Sunland, CA 91040</h5>
          <h1>$540,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage5 />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>2435 N Woodhaven St, Simi Valley, CA 93063</h5>
          <h1>$615,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage6 />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>616 Grove Pl, Glendale, CA 91206</h5>
          <h1>$807,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage7 />
        <Carousel.Caption className="carousel-caption">
          <h3>Refinanced!!!</h3>
          <h5>43175 Avenida Estrella, Indio, CA 92203</h5>
          <h1>$475,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage8 />
        <Carousel.Caption className="carousel-caption">
          <h3>Refinanced!!!</h3>
          <h5>7432 Summitrose St, Tujunga, CA 91042</h5>
          <h1>$551,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage9 />
        <Carousel.Caption className="carousel-caption">
          <h3>Refinanced!!!</h3>
          <h5>8792 Wyngate St, Los Angeles, CA 91040</h5>
          <h1>$529,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
        <CarouselImage10 />
        <Carousel.Caption className="carousel-caption">
          <h3>Refinanced!!!</h3>
          <h5>10249 Tujunga Canyon Blvd UNIT 2, Tujunga, CA 91042</h5>
          <h1>$405,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
