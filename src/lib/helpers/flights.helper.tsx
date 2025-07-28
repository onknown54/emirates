import { ClockIcon } from "@heroicons/react/24/outline";
import {
  DurationBadgeProps,
  TimeBlockProps,
} from "../type-definations/flights.interface";

export function Divider() {
  return <span className="hidden h-6 w-px bg-gray-200 md:block" />;
}

export function TimeBlock({
  code,
  time,
  date,
  align = "start",
}: TimeBlockProps) {
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

export function DurationBadge({ duration, isDirect }: DurationBadgeProps) {
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
