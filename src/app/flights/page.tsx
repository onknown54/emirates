import { ActivityListing } from "src/app/components/cards";

export default function Flights() {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Flights</h3>
      </div>
      <ActivityListing className="bg-[#c3cddc]" />
    </div>
  );
}
