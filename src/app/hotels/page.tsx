"use client";
import { MusicalNoteIcon, WifiIcon } from "@heroicons/react/24/outline";
import HotelCard from "src/app/components/cards/HotelCard";

export default function Hotels() {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Hotels</h3>
      </div>
      <div>
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
            { label: "WiFi", icon: WifiIcon },
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
      </div>
    </div>
  );
}
