import { useState } from "react";
import { type Rental } from "../../types/rental";
import "./Carousel.css";

export function Carousel({ rentals }: { rentals: Rental[] }) {

  const lengthCarousel = rentals.length;
  const [indexImage, setIndexImage] = useState(0);

  function clickPreviousImage() {
    setIndexImage((indexImage + 39) % lengthCarousel);
  }

  function clickNextImage() {
    setIndexImage((indexImage + 1) % lengthCarousel);
  }
  
  return (
    <div className="carousel-container">
      <button id="carousel-previous" onClick={clickPreviousImage}>◀</button>
      <img src={rentals[indexImage]?.photos.at(0)} alt="Carousel image" />
      <button id="carousel-next" onClick={clickNextImage}>▶</button>
    </div>
  );
}

export default Carousel