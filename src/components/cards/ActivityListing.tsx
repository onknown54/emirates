export function ActivityListing({
  children,
  title,
  className,
}: {
  className: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`mb-7 ${className}`}>
      <div className="mb-4 flex justify-between px-3 py-2">
        <p>{title}</p>
        <button>view {title.toLowerCase()}</button>
      </div>
      <div className="px-2 pb-4">{children}</div>
    </section>
  );
}
