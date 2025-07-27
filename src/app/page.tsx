import DashboardHero from "../components/DashboardHero";

export default function Home() {
  return (
    <div className="w-full bg-white p-6">
      <DashboardHero />
      <div>
        <h3>Trip Itineries</h3>
        <p>Your trip itinerires are placed here</p>
      </div>
    </div>
  );
}
