import Link from "next/link";
import { ActivityListingProps } from "src/app/lib/type-definations";

export function ActivityListing({
  title,
  href,
  children,
  className,
}: ActivityListingProps) {
  return (
    <section className={`mb-7 px-4 ${className}`}>
      <div className="mb-4 flex justify-between py-3">
        <p className="text-lg font-bold">{title}</p>
        <Link href={href} className="text-sm underline">
          View {title}
        </Link>
      </div>
      <div className="pb-4">{children}</div>
    </section>
  );
}
