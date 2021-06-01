import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import Auto_Infirmary from "../../assets/banners/Auto_Infirmary.jpeg";
import Open_Mobile from "../../assets/banners/Open_Mobile.jpeg";
import Placement_manager from "../../assets/banners/Placement_manager.jpeg";

function CarouselIndex() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      interval={1000}
      activeIndex={index}
      onSelect={handleSelect}
      style={{ marginTop: "3rem" }}
    >
      <Carousel.Item onClick="https://github.com/upes-open/Auto-Infirmary">
        <img
          className="d-block w-100 "
          height="500"
          src={Auto_Infirmary}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500"
          src={Open_Mobile}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500"
          src={Placement_manager}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselIndex;
