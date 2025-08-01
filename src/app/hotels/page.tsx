"use client";
import HotelCard from "src/app/components/cards/HotelCard";
import { HotelListing } from "src/app/lib/placeholders";

export default function Hotels() {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleRemove = () => {
    console.log("remove");
  };

  const handleShowOnMap = () => {
    console.log("show on map");
  };

  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Hotels</h3>
      </div>
      <div>
        {HotelListing.map((hotel, i) => (
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
      </div>
    </div>
  );
}
