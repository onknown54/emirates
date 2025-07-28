"use client";
import { ComponentType, SVGProps } from "react";
import {
  XMarkIcon,
  ClockIcon,
  BoltIcon,
  WifiIcon,
  MusicalNoteIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

type AirportPoint = {
  code: string;
  time: string;
  date: string;
};

type Facility = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type FlightCardProps = {
  airline: string;
  flightNumber: string;
  cabinTag?: string;
  depart: AirportPoint;
  arrive: AirportPoint;
  duration: string;
  isDirect?: boolean;
  price: number;
  currency?: string;
  currencyDisplay?: "symbol" | "code" | "name";
  facilities?: Facility[];
  onRemove?: () => void;
  onEdit?: () => void;
};

export default function FlightCard({
  airline,
  flightNumber,
  cabinTag = "Premium",
  depart,
  arrive,
  duration,
  isDirect = true,
  price,
  currency = "NGN",
  currencyDisplay = "symbol",
  facilities = defaultFacilities,
  onRemove,
  onEdit,
}: FlightCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    currencyDisplay,
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <div className="relative w-full overflow-hidden rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      {/* Remove button */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Remove flight"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      {/* Top Row */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        {/* Airline & tag */}
        <div className="flex items-center gap-2">
          {/* (Put your <Image /> airline logo here if you have it) */}
          <span className="text-sm font-medium text-gray-900">{airline}</span>
          <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
            {cabinTag}
          </span>
          <span className="text-xs text-gray-500">{flightNumber}</span>
        </div>

        {/* Times / airports */}
        <div className="flex flex-1 flex-col items-start gap-2 md:flex-row md:items-center md:justify-center">
          <TimeBlock {...depart} />
          <Divider />
          <DurationBadge duration={duration} isDirect={isDirect} />
          <Divider />
          <TimeBlock {...arrive} align="end" />
        </div>

        {/* Price */}
        <div className="text-right md:min-w-[140px]">
          <div className="text-lg font-semibold text-gray-900">
            {formattedPrice}
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-600">
        <span className="font-medium text-gray-500">Facilities:</span>
        {facilities.map((f) => (
          <span key={f.label} className="inline-flex items-center gap-1">
            <f.icon className="h-4 w-4" />
            {f.label}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="mt-3 flex items-center gap-6 text-sm">
        <button className="text-blue-600 hover:underline">
          Flight details
        </button>
        <button className="text-blue-600 hover:underline">Price details</button>
        <button
          onClick={onEdit}
          className="ml-auto text-blue-600 hover:underline"
        >
          Edit details
        </button>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function TimeBlock({
  code,
  time,
  date,
  align = "start",
}: AirportPoint & { align?: "start" | "end" }) {
  const alignClass =
    align === "end" ? "items-end text-right" : "items-start text-left";

  return (
    <div className={`flex min-w-[90px] flex-col ${alignClass}`}>
      <span className="text-xl font-semibold text-gray-900">{time}</span>
      <span className="text-xs text-gray-500">{date}</span>
      <span className="mt-0.5 text-sm font-medium text-gray-700">{code}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-6 w-px bg-gray-200 md:block" />;
}

function DurationBadge({
  duration,
  isDirect,
}: {
  duration: string;
  isDirect: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-1 text-xs text-gray-500">
        <ClockIcon className="h-4 w-4" />
        Duration: {duration}
      </div>
      <span className="mt-1 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
        {isDirect ? "Direct" : "With stops"}
      </span>
    </div>
  );
}

const defaultFacilities: Facility[] = [
  { label: "Baggage: 20kg", icon: BoltIcon },
  { label: "Cabin Baggage: 8kg", icon: BoltIcon },
  { label: "In flight entertainment", icon: ComputerDesktopIcon },
  { label: "In flight meal", icon: MusicalNoteIcon },
  { label: "USB Port", icon: WifiIcon },
];
