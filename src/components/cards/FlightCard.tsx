"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Divider, DurationBadge, TimeBlock } from "src/app/lib/helpers";
import { defaultFacilities } from "src/app/lib/placeholders";
import { FlightCardProps } from "src/app/lib/type-definations/flights.interface";

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
    <div className="relative w-full overflow-hidden rounded-md border border-gray-200 bg-white p-4 shadow-sm not-last:mb-4">
      {/* Remove button */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 cursor-pointer rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Remove flight"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      {/* Top Row */}
      <div className="mb-5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-gray-900">{airline}</span>
          <span className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{flightNumber}</span>
            <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-medium text-blue-100">
              {cabinTag}
            </span>
          </span>
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
        <button className="cursor-pointer text-blue-600 hover:underline">
          Flight details
        </button>
        <button className="cursor-pointer text-blue-600 hover:underline">
          Price details
        </button>
        <button
          onClick={onEdit}
          className="ml-auto cursor-pointer text-blue-600 hover:underline"
        >
          Edit details
        </button>
      </div>
    </div>
  );
}
