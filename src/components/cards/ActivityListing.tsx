export function ActivityListing({ className }: { className: string }) {
  return (
    <section>
      <div className={`mb-10 flex justify-between px-3 py-2 ${className}`}>
        <p>Flight</p>
        <button>Add flights</button>
      </div>
      <div>
        <table>
          <tr></tr>
        </table>
      </div>
    </section>
  );
}
