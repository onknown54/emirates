"use client";
import ActivityCard from "src/app/components/cards/ActivityCard";

export default function Activites() {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Activities</h3>
      </div>
      <div>
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
      </div>
    </div>
  );
}
