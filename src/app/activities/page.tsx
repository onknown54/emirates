import { ActivityListing } from "src/app/components/cards";

export default function Activites() {
  return (
    <div className="w-full bg-white p-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold">Activities</h3>
      </div>
      <ActivityListing className="bg-[#c3cddc]" />
    </div>
  );
}
