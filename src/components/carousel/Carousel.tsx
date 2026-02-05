import { useState, useEffect, useRef } from "react";
import { rentalsApi } from "../../services/rentals.service";
import { type Rental } from "../../types/rental";
import "./Carousel.css";

export function Carousel() {

  const lengthCarousel = useRef(0);
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [indexImage, setIndexImage] = useState(0);

  useEffect(() => {
    async function fetchRentals() {
      try {
        const response = await rentalsApi.getAllRentals();
        setRentals(response.data);
        lengthCarousel.current = response.data.length;
      } catch (err) {
        console.error(err);
      }
    }
    fetchRentals();
  }, []);

  function clickPreviousImage() {
    setIndexImage(index => (index - 1) % lengthCarousel.current);
  }

  function clickNextImage() {
    setIndexImage(index => (index + 1) % lengthCarousel.current);
    console.log(indexImage);
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