// import Carousel from "react-bootstrap/Carousel";
// import React, { useState } from "react";
// import pic1 from "../../images/pic1.jpeg";
// import pic2 from "../../images/pic2.jpeg";

// import pic3 from "../../images/pic3.jpeg";

// function EventsCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <section className="py-5 mb-5">
//       <div className="container">
//         <h2 className="section-title">Image Gallery</h2>
//         <Carousel
//           interval={1000}
//           activeIndex={index}
//           onSelect={handleSelect}
//           style={{ marginTop: "3rem" }}
//         >
//           <Carousel.Item>
//             <img
//               className="d-block w-100 "
//               height="500"
//               src={pic1}
//               alt="First slide"
//             />
//             {/* <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption> */}
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               height="500"
//               src={pic2}
//               alt="Second slide"
//             />

//             {/* <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption> */}
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               height="500"
//               src={pic3}
//               alt="Third slide"
//             />

//             {/* <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption> */}
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </section>
//   );
// }

// export default EventsCarousel;
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/imagegal/pic1.jpeg",
    thumbnail: "/imagegal/pic1.jpeg",
  },
  {
    original: "/imagegal/pic2.jpeg",
    thumbnail: "/imagegal/pic2.jpeg",
  },
  {
    original: "/imagegal/pic3.jpeg",
    thumbnail: "/imagegal/pic3.jpeg",
  },
];

const EventsCarousel = () => {
  return (
    <section className="py-5 mb-5" id="gallery">
      <div className="container">
        <h2 className="section-title pb-4">Image Gallery</h2>
        <ImageGallery items={images} />
      </div>
    </section>
  );
};

export default EventsCarousel;
