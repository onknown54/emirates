export function ActivityListing({ className }: { className: string }) {
  return (
    <section>
      <div className={`py2 mb-10 flex justify-between px-3 ${className}`}>
        <p>Flight</p>
        <button>Add flights</button>
      </div>
      <div>main</div>
    </section>
  );
}
