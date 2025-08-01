"use client";
import Image from "next/image";
import {
  XMarkIcon,
  MapPinIcon,
  StarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { HotelCardProps } from "src/app/lib/type-definations";

export default function HotelCard({
  imageUrl,
  name,
  address,
  roomType,
  rating,
  reviewsCount,
  facilities = [],
  checkIn,
  checkOut,
  price,
  totalPrice,
  nights,
  currency = "NGN",
  currencyDisplay = "symbol",
  onShowMap,
  onEdit,
  onRemove,
  className = "",
}: HotelCardProps) {
  const fmt = (v: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      currencyDisplay,
      minimumFractionDigits: 2,
    }).format(v);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm not-last:mb-4 ${className}`}
    >
      {/* Remove button */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 cursor-pointer rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Remove hotel"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      <div className="flex flex-col gap-4 p-4 md:flex-row">
        {/* Image */}
        <div className="relative h-32 w-full shrink-0 overflow-hidden rounded md:h-32 md:w-40">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="160px"
            priority
          />
        </div>

        {/* Main content */}
        <div className="flex w-full flex-col gap-2">
          {/* Title & price row */}
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            {/* Left: title + address */}
            <div>
              <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-600">{address}</p>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-blue-600">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 hover:underline"
                  onClick={onShowMap}
                >
                  <MapPinIcon className="h-4 w-4" />
                  Show in map
                </button>

                {rating != null && (
                  <span className="inline-flex items-center gap-1 text-gray-700">
                    <StarIcon className="h-4 w-4 text-yellow-500" />
                    <span className="font-semibold">{rating}</span>
                    {reviewsCount != null && (
                      <span className="text-gray-500">({reviewsCount})</span>
                    )}
                  </span>
                )}

                {roomType && <span className="text-gray-700">{roomType}</span>}
              </div>
            </div>

            {/* Right: price */}
            <div className="text-right">
              <div className="text-xl font-semibold text-gray-900">
                {fmt(price)}
              </div>
              {totalPrice != null && (
                <div className="mt-1 text-xs text-gray-500">
                  Total Price: {fmt(totalPrice)}
                  {nights ? (
                    <>
                      <br />
                      {`1 room x ${nights} night${nights > 1 ? "s" : ""} incl. taxes`}
                    </>
                  ) : (
                    <div>incl. taxes</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Facilities */}
          {facilities.length > 0 && (
            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-600">
              <span className="font-medium text-gray-500">Facilities:</span>
              {facilities.map((f) => (
                <span key={f.label} className="inline-flex items-center gap-1">
                  {f.icon ? <f.icon className="h-4 w-4" /> : null}
                  {f.label}
                </span>
              ))}
            </div>
          )}

          {/* Check-in / Check-out */}
          {(checkIn || checkOut) && (
            <div className="mt-2 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-2 text-sm text-gray-700">
              {checkIn && (
                <span className="inline-flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
                  Check In: <span className="ml-1 font-medium">{checkIn}</span>
                </span>
              )}
              {checkOut && (
                <span className="inline-flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
                  Check Out:{" "}
                  <span className="ml-1 font-medium">{checkOut}</span>
                </span>
              )}
            </div>
          )}

          {/* Footer links */}
          <div className="mt-2 flex items-center gap-6 text-sm">
            <button className="text-blue-600 hover:underline">
              Hotel details
            </button>
            <button className="text-blue-600 hover:underline">
              Price details
            </button>
            <button
              onClick={onEdit}
              className="ml-auto text-blue-600 hover:underline"
            >
              Edit details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
