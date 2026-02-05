import rentals from '../data/rentals.json';
import { type Rental } from '../types/rental';

const rentalsData: Rental[] = rentals as Rental[];

class RentalsApi {
  
  getAllRentals(): Promise<{data: Rental[]; status: number}> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          data: rentalsData, 
          status: 200 
        });
      }, 800);
    });
  }

  getRentalById(id: string): Promise<{data: Rental; status: number}> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rental = rentalsData.find((r) => r.id === id);
        
        if (rental) {
          resolve({ 
            data: rental, 
            status: 200 
          });
        } else {
          reject({ 
            error: `Rental with id ${id} not found`, 
            status: 404 
          });
        }
      }, 500);
    });
  }
}

export const rentalsApi = new RentalsApi();