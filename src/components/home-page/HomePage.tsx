import Carousel from '../carousel/Carousel';
import Header from '../header/Header'
import RentalCard from '../rental-card/RentalCard';
import SearchBar from '../search-bar/SearchBar';
import { rentalsApi } from '../../services/rentals.service';
import { useState, useEffect } from 'react';
import type { Rental } from '../../types/rental';
import './HomePage.css';

function HomePage() {

  const [rentals, setRentals] = useState<Rental[]>([]);

  useEffect(() => {
    async function fetchRentals() {
      try {
        const response = await rentalsApi.getAllRentals();
        setRentals(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRentals();
  }, []);

  return (
    <>
      <Header />
      <Carousel rentals={rentals}/>
      <SearchBar />
      <div className="rentals-grid">
        {
          rentals.map(currentRental => 
            <RentalCard rental={currentRental} />
          )
        }
      </div>
    </>
  )
}

export default HomePage
