import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-char">Page not found</h1>
      <p className="mt-4 text-mid">The page you requested does not exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-pink-deep px-8 py-3 text-sm font-semibold text-white"
      >
        Go home
      </Link>
    </main>
  );
}
