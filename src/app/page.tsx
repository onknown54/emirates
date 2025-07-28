import { ActivityListing } from "../components/cards";
import DashboardHero from "../components/DashboardHero";

export default function Home() {
  return (
    <div className="w-full bg-white p-6">
      <DashboardHero />
      <div className="mb-4">
        <h3 className="text-lg font-bold">Trip Itineries</h3>
        <p className="text-sm">Your trip itinerires are placed here</p>
      </div>
      <ActivityListing className="bg-[#c3cddc]" />
      <ActivityListing className="bg-[#c3cddc]" />
      <ActivityListing className="bg-[#c3cddc]" />
    </div>
  );
}
