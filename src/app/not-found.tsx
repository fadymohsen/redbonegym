import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0E12] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-wider">
          <span className="text-[#CC2421]">4</span>
          <span className="text-[#F6E8D1]">0</span>
          <span className="text-[#CC2421]">4</span>
        </h1>
        <div className="mx-auto my-6 h-px w-32 bg-gradient-to-r from-transparent via-[#CC2421] to-transparent" />
        <p className="text-xl sm:text-2xl font-semibold text-[#F6E8D1] mb-3">
          Page Not Found
        </p>
        <p className="text-[#7F7F7F] mb-8 max-w-md mx-auto">
          Looks like this page skipped leg day and disappeared. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-[#CC2421] px-8 py-3 text-sm font-bold tracking-widest uppercase text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
