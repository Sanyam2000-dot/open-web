import React from "react";
import ParticlesBg from "particles-bg";
import CarouselIndex from "./CarouselIndex";

// let config = {
//   type: "circle",
//   color: "#a0cc3a",
//   radius: [5, 100],
// };

const Container = () => {
  return (
    <div>
      <CarouselIndex />
      <ParticlesBg color="#a0cc3a" type="fountain" bg={true} />
    </div>
  );
};

export default Container;
