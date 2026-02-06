import { type Rental } from "../../types/rental";
import './RentalCard.css';

function RentalCard({ rental }: { rental: Rental }) {

  return (
    <div className="card">
      <img src={rental.photos.at(0)} alt="Rental photo" />
      <h3 className="info name">{rental.name}</h3>
      <h3 className="info">
        {rental.location.city}, {rental.location.country} | {rental.pricePerNight}€/nuit | {rental.maxGuests} voyageurs
        </h3>
    </div>
  );
}

export default RentalCard
