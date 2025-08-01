"use client";
import FlightCard from "src/app/components/cards/FlightCard";
import { FlightItems } from "src/app/lib/placeholders";

export default function Flights() {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleRemove = () => {
    console.log("remove");
  };

  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Flights</h3>
      </div>
      <div>
        {FlightItems.map((flight, i) => (
          <FlightCard
            key={i}
            isDirect
            onEdit={handleEdit}
            price={flight.price}
            depart={flight.depart}
            arrive={flight.arrive}
            onRemove={handleRemove}
            airline={flight.airline}
            cabinTag={flight.cabinTag}
            duration={flight.duration}
            flightNumber={flight.flightNumber}
          />
        ))}
      </div>
    </div>
  );
}
