import { useState } from "react";
import "./Carousel.css";

export function Carousel() {

  const imageUrls = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1494526585095-c41746248156"
  ];

  const length = imageUrls.length;

  const [indexImage, setIndexImage] = useState(0);

  function clickPreviousImage() {
    setIndexImage((indexImage - 1) % length);
  }

  function clickNextImage() {
    setIndexImage((indexImage + 1) % length);
  }
  
  return (
    <div className="carousel-container">
      <button id="carousel-previous" onClick={clickPreviousImage}>◀</button>
      <img src={imageUrls[indexImage]} alt="Carousel image"></img>
      <button id="carousel-next" onClick={clickNextImage}>▶</button>
    </div>
  );
}