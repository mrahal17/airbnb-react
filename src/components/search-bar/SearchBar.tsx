import { useState } from "react";
import DateRangeInput from "../date-range-input/DateRangeInput";
import { type DateRange } from "react-day-picker";
import "./SearchBar.css";

function SearchBar() {

  const destinationInputLabel = "destination-input";
  const numberOfGuestsInputLabel = "number-of-guests-input";
  const dateFromInputLabel = "date-from-input";
  const dateToInputLabel = "date-to-input";
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
      <div className="field-search-bar">
        <label>Destination</label>
        <input type="text" name={destinationInputLabel} />
      </div>
      <div className="field-search-bar">
        <label>Dates</label>
        <DateRangeInput onChange={setRange} />
        <input type="hidden" name={dateFromInputLabel} value={range?.from?.toISOString() || ""} />
        <input type="hidden" name={dateToInputLabel} value={range?.to?.toISOString() || ""} />
      </div>
      <div className="field-search-bar">
        <label>Voyageurs</label>
        <input type="number" name={numberOfGuestsInputLabel} min="1" defaultValue="1" />
      </div>
      <div className="field-search-bar">
        <label>&nbsp;</label>
        <button type="submit">Chercher 🔎</button>
      </div>
    </form>
  );
}

export default SearchBar
