export function FAQ({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <section className="grid gap-4">
      <h2 className="text-3xl font-black">Frequently Asked Questions</h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-black">{item.question}</summary>
            <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
