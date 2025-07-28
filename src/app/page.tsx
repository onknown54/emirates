"use client";
import { MusicalNoteIcon, WifiIcon } from "@heroicons/react/24/outline";
import { ActivityListing } from "../components/cards";
import FlightCard from "../components/cards/FlightCard";
import HotelCard from "../components/cards/HotelCard";
import DashboardHero from "../components/DashboardHero";
import ActivityCard from "../components/cards/ActivityCard";

export default function Home() {
  return (
    <div className="w-full bg-white p-6">
      <DashboardHero />
      <div className="mb-4">
        <h3 className="text-lg font-bold">Trip Itineries</h3>
        <p className="text-sm">Your trip itinerires are placed here</p>
      </div>
      <ActivityListing title="Flights" className="bg-[#F0F2F5]">
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
      </ActivityListing>
      <ActivityListing title="Hotels" className="bg-[#344054] text-white">
        <HotelCard
          imageUrl="/images/hotel.jpg"
          name="Riviera Resort, Lekki"
          address="18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1"
          rating={8.5}
          reviewsCount={436}
          roomType="King size room"
          facilities={[
            { label: "Pool" },
            { label: "Bar" },
            { label: "Wi‑Fi", icon: WifiIcon },
            { label: "Live music", icon: MusicalNoteIcon },
          ]}
          checkIn="20-04-2024"
          checkOut="29-04-2024"
          price={123450}
          totalPrice={560000}
          nights={10}
          onShowMap={() => console.log("show on map")}
          onEdit={() => console.log("edit")}
          onRemove={() => console.log("remove")}
        />
      </ActivityListing>
      <ActivityListing title="Activities" className="bg-[#0054E4] text-white">
        <ActivityCard
          imageUrl="/images/hotel.jpg"
          title="The Museum of Modern Art"
          description="Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant"
          rating={4.5}
          reviewsCount={436}
          duration="1 Hour"
          included="Admission to the Empire State Building"
          dateTime="10:30 AM on Mar 19"
          price={123450}
          dayTag="Day 1"
          onDirections={() => console.log("show directions")}
          onEdit={() => console.log("edit activity")}
          onRemove={() => console.log("remove activity")}
        />
      </ActivityListing>
    </div>
  );
}
