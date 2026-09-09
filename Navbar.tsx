import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          Viral<span className="text-pulse">Clips</span> AI
        </Link>
        <nav className="flex items-center gap-6 text-sm text-paper/70">
          <Link href="/dashboard" className="hover:text-paper">
            المشاريع
          </Link>
          <Link
            href="/dashboard"
            className="rounded-clip bg-pulse px-4 py-2 font-medium text-ink hover:bg-[#ff5c7e]"
          >
            ابدأ الآن
          </Link>
        </nav>
      </div>
    </header>
  );
}
