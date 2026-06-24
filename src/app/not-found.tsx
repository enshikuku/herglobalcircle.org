import Link from "next/link";

export default function NotFound() {
  return (
    <section className="texture-paper flex min-h-[65vh] items-center py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="display-script text-7xl text-gold">404</p>
        <h1 className="mt-2 text-4xl font-bold text-forest">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-ink/65">
          The page may have moved, or the address may be incomplete.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-full bg-teal px-7 py-4 font-bold text-white transition hover:bg-teal-700"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
