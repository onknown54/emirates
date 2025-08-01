"use client";
import { ActivityListing } from "../components/cards";
import FlightCard from "../components/cards/FlightCard";
import HotelCard from "../components/cards/HotelCard";
import DashboardHero from "../components/DashboardHero";
import ActivityCard from "../components/cards/ActivityCard";
import { ActivityItems, FlightItems, HotelListing } from "../lib/placeholders";

export default function Home() {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleRemove = () => {
    console.log("remove");
  };

  const handleShowOnMap = () => {
    console.log("show on map");
  };

  const handleDirections = () => {
    console.log("show directions");
  };

  return (
    <div className="w-full bg-white p-6">
      <DashboardHero />
      <div className="mb-4">
        <h3 className="text-lg font-bold">Trip Itineries</h3>
        <p className="text-sm">Your trip itinerires are placed here</p>
      </div>
      <ActivityListing title="Flights" href="/flights" className="bg-[#F0F2F5]">
        {FlightItems.slice(0, 2).map((flight, i) => (
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
      </ActivityListing>
      <ActivityListing
        title="Hotels"
        href="/hotels"
        className="bg-[#344054] text-white"
      >
        {HotelListing.slice(0, 2).map((hotel, i) => (
          <HotelCard
            key={i}
            name={hotel.name}
            rating={hotel.rating}
            price={hotel.price}
            onEdit={handleEdit}
            nights={hotel.nights}
            address={hotel.address}
            checkIn={hotel.checkIn}
            onRemove={handleRemove}
            imageUrl={hotel.imageUrl}
            checkOut={hotel.checkOut}
            roomType={hotel.roomType}
            onShowMap={handleShowOnMap}
            facilities={hotel.facilities}
            totalPrice={hotel.totalPrice}
            reviewsCount={hotel.reviewsCount}
          />
        ))}
      </ActivityListing>
      <ActivityListing
        title="Activities"
        href="/activities"
        className="bg-[#0054E4] text-white"
      >
        {ActivityItems.slice(0, 3).map((activity, i) => (
          <ActivityCard
            key={i}
            title={activity.title}
            price={activity.price}
            onEdit={handleEdit}
            onRemove={handleRemove}
            dayTag={activity.dayTag}
            rating={activity.rating}
            imageUrl={activity.imageUrl}
            dateTime={activity.dateTime}
            duration={activity.duration}
            included={activity.included}
            onDirections={handleDirections}
            description={activity.description}
            reviewsCount={activity.reviewsCount}
          />
        ))}
      </ActivityListing>
    </div>
  );
}
