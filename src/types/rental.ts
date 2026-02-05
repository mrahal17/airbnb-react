import { type Location } from "./location";

export interface Rental {
    id: string;
    name: string;
    description: string;
    pricePerNight: number;
    photos: string[];
    maxGuests: number;
    location: Location;
}