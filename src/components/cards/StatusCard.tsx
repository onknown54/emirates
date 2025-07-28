import Link from "next/link";

export enum StatusCardType {
  ACTIVITIES = "activities",
  HOTELS = "hotels",
  FLIGHTS = "flights",
}

function captaliseText(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const statusCardVariiant = {
  [StatusCardType.HOTELS]: {
    url: "/hotels",
    btnClass: "bg-[#0D6EFD] text-white",
    className: "bg-[#E7F0FF] text-[#1D2433]",
    heading: `${captaliseText(StatusCardType.HOTELS)}`,
  },
  [StatusCardType.FLIGHTS]: {
    url: "/flights",
    btnClass: "bg-white text-[#0D6EFD]",
    className: "bg-[#0D6EFD] text-white",
    heading: `${captaliseText(StatusCardType.FLIGHTS)}`,
  },
  [StatusCardType.ACTIVITIES]: {
    url: "/activities",
    btnClass: "bg-[#0D6EFD]",
    className: "bg-[#000031] text-white",
    heading: `${captaliseText(StatusCardType.ACTIVITIES)}`,
  },
};

type StatusCardProps = {
  type: StatusCardType;
};

export function StatusCard({ type }: StatusCardProps) {
  const variant = statusCardVariiant[type];

  return (
    <div
      className={`inline-flex h-[14rem] max-w-[18rem] flex-col justify-between rounded-sm p-4 ${variant.className}`}
    >
      <div>
        <h3 className="mb-2 text-lg font-bold">{variant.heading}</h3>
        <p className="text-sm">
          Build, personalize, and optimize your itineraries with our trip
          planner.
        </p>
      </div>
      <Link
        href={variant.url}
        className={`min-w-[5rem] cursor-pointer rounded-sm bg-blue-500 px-2 py-2.5 text-center text-sm ${variant.btnClass}`}
      >
        View {variant.heading}
      </Link>
    </div>
  );
}
