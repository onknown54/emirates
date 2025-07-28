import { StatusCardType } from "../lib/type-definations";
import Banner from "./Banner";
import { StatusCard } from "./cards";

export default function DashboardHero() {
  return (
    <div>
      <Banner />
      <div className="mb-10 flex flex-wrap gap-2">
        <StatusCard type={StatusCardType.ACTIVITIES} />
        <StatusCard type={StatusCardType.HOTELS} />
        <StatusCard type={StatusCardType.FLIGHTS} />
      </div>
    </div>
  );
}
