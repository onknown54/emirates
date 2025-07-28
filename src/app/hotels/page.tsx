import { ActivityListing } from "src/app/components/cards";

export default function Hotels() {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Hotels</h3>
      </div>
      <ActivityListing className="bg-[#c3cddc]" />
    </div>
  );
}
