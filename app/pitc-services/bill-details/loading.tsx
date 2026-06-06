export default function BillDetailsLoading() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10">
      <div className="grid gap-3">
        <div className="h-5 w-32 rounded bg-orange-100" />
        <div className="h-10 w-80 max-w-full rounded bg-slate-200" />
        <div className="h-5 w-72 max-w-full rounded bg-slate-100" />
      </div>
      <div className="overflow-hidden rounded-lg border border-orange-100 bg-white p-6 shadow-soft">
        <div className="h-2 w-full overflow-hidden rounded-full bg-orange-100">
          <div className="loading-bar h-full bg-brand-orange" />
        </div>
        <p className="mt-4 text-sm font-bold text-orange-800">Fetching printable bill from the official PITC system...</p>
      </div>
    </div>
  );
}
