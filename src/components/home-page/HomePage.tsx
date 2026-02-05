import Header from '../header/Header'
import Carousel from '../carousel/Carousel';
import SearchBar from '../search-bar/SearchBar';
import { rentalsApi } from '../../services/rentals.service';
import { useState, useEffect } from 'react';
import type { Rental } from '../../types/rental';

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
    </>
  )
}

export default HomePage
