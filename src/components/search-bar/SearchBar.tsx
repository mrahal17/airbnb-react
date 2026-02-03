import { useState } from "react";
import DateRangeInput from "../date-range-input/DateRangeInput";
import { type DateRange } from "react-day-picker";
import "./SearchBar.css";

function SearchBar() {

  const destinationInputLabel = "destinationInput";
  const numberOfGuestsInputLabel = "numberOfGuestsInput";
  const dateFromInputLabel = "dateFrom";
  const dateToInputLabel = "dateTo";
  const [range, setRange] = useState<DateRange | undefined>();
  
  async function submitSearch(searchParameters: FormData) {
    const destination = searchParameters.get(destinationInputLabel);
    const numberOfGuests = searchParameters.get(numberOfGuestsInputLabel);
    const dateFrom = searchParameters.get(dateFromInputLabel);
    const dateTo = searchParameters.get(dateToInputLabel);
    console.log("Searching for", { destination, dateFrom, dateTo, numberOfGuests });
    //await updateCart(productId);
  }

  return (
    <form action={submitSearch}>
      <input type="text" name={destinationInputLabel} />
      <DateRangeInput onChange={setRange} />
      <input type="hidden" name={dateFromInputLabel} value={range?.from?.toISOString() || ""} />
      <input type="hidden" name={dateToInputLabel} value={range?.to?.toISOString() || ""} />
      <input type="number" name={numberOfGuestsInputLabel} min="1" defaultValue="1" />
      <button type="submit">Chercher 🔎</button>
    </form>
  );
}

export default SearchBar
