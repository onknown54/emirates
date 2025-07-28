"use client";
import FlightCard from "src/app/components/cards/FlightCard";

export default function Flights() {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Flights</h3>
      </div>
      <FlightCard
        isDirect
        price={123450.0}
        duration="1h 45m"
        cabinTag="Premium"
        flightNumber="AA-492"
        airline="American Airlines"
        onEdit={() => console.log("edit")}
        onRemove={() => console.log("remove")}
        depart={{ time: "08:35", date: "Sun, 7th Aug", code: "LOS" }}
        arrive={{ time: "09:55", date: "Sun, 7th Aug", code: "SIN" }}
      />
    </div>
  );
}
