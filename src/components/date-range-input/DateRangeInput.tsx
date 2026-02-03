import { useState, useRef, useEffect } from "react"
import { DayPicker, type DateRange } from "react-day-picker"
import "react-day-picker/dist/style.css"
import "./DateRangeInput.css"

type Props = {
  onChange: (range: DateRange | undefined) => void
}

export default function DateRangeInput({ onChange }: Props) {
  const [range, setRange] = useState<DateRange | undefined>()
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, []);


  function formatDate(date?: Date) {
    return date ? date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short"}) : "";
  }

  function initCalendarPopUp() {
    setOpen(true);
    setRange(undefined);
    onChange(undefined);
  }

  return (
    <div ref={ref} className="date-range-wrapper">
      <button onClick={() => open ? setOpen(false) : initCalendarPopUp()} className="border rounded-lg px-4 py-2 bg-white shadow hover:shadow-md transition"
      >
        {range?.from
          ? `${formatDate(range.from)} → ${
              range.to ? formatDate(range.to) : "?"
            }`
          : "Choisir des dates"}
      </button>

      {open && (
        <div className="calendar-pop-up">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={(r) => {
              setRange(r);
              onChange(r);
              if (r?.from && r?.to && r.from != r.to) setOpen(false);
            }}
            numberOfMonths={2}
            disabled={{ before: new Date() }}
          />
        </div>
      )}
    </div>
  )
}
