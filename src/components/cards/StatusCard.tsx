import Link from "next/link";
import { statusCardVariiant } from "src/app/lib/placeholders/overview.placeholder";
import { StatusCardProps } from "src/app/lib/type-definations";

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
