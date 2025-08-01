"use client";
import ActivityCard from "src/app/components/cards/ActivityCard";
import { ActivityItems } from "src/app/lib/placeholders";

export default function Activites() {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleRemove = () => {
    console.log("remove");
  };

  const handleDirections = () => {
    console.log("show directions");
  };

  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Activities</h3>
      </div>
      <div>
        {ActivityItems.map((activity, i) => (
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
      </div>
    </div>
  );
}
