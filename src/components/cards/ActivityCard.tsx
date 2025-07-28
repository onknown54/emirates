"use client";
import Image from "next/image";
import {
  XMarkIcon,
  MapPinIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export type ActivityCardProps = {
  title: string;
  price: number;
  dayTag?: string;
  rating?: number;
  imageUrl: string;
  currency?: string;
  duration?: string;
  included?: string;
  dateTime?: string;
  description?: string;
  reviewsCount?: number;
  onDirections?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
  currencyDisplay?: "symbol" | "code" | "name";
};

export default function ActivityCard({
  imageUrl,
  title,
  description,
  rating,
  reviewsCount,
  duration,
  included,
  dateTime,
  price,
  currency = "NGN",
  currencyDisplay = "symbol",
  dayTag,
  onDirections,
  onEdit,
  onRemove,
}: ActivityCardProps) {
  const fmt = (v: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      currencyDisplay,
      minimumFractionDigits: 2,
    }).format(v);

  return (
    <div className="relative flex w-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Remove activity"
      >
        <XMarkIcon className="h-5 w-5" />
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative h-36 w-full shrink-0 md:h-32 md:w-40">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col p-4">
          {/* Title & Price */}
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              {description && (
                <p className="mt-0.5 text-sm text-gray-600">{description}</p>
              )}
              {/* Info row */}
              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
                <button
                  onClick={onDirections}
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <MapPinIcon className="h-4 w-4" />
                  Directions
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
                {duration && (
                  <span className="inline-flex items-center gap-1 text-gray-700">
                    <ClockIcon className="h-4 w-4" />
                    {duration}
                  </span>
                )}
              </div>
            </div>

            {/* Price & Time */}
            <div className="text-right">
              <div className="text-xl font-semibold text-gray-900">
                {fmt(price)}
              </div>
              {dateTime && (
                <div className="mt-1 text-xs text-gray-500">{dateTime}</div>
              )}
            </div>
          </div>

          {/* What's Included */}
          {included && (
            <div className="mt-2 text-sm text-gray-700">
              <span className="font-medium text-gray-500">Whats Included:</span>{" "}
              {included}
              <button className="ml-1 text-blue-600 hover:underline">
                See more
              </button>
            </div>
          )}

          {/* Day Tag */}
          {dayTag && (
            <div className="mt-2 inline-block rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
              {dayTag}
            </div>
          )}

          {/* Footer Links */}
          <div className="mt-3 flex items-center gap-6 text-sm">
            <button className="text-blue-600 hover:underline">
              Activity details
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
