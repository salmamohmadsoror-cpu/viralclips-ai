import { LayoutGrid, Upload, Settings } from "lucide-react";

export default function Sidebar({ active }: { active: "dashboard" | "settings" }) {
  return (
    <aside className="w-60 shrink-0 border-r border-border bg-surface p-6 flex flex-col gap-8 min-h-screen">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-record record-dot" />
        <span className="font-display font-bold text-lg tracking-tight">ViralClips</span>
      </div>

      <nav className="flex flex-col gap-1">
        <a
          href="/"
          className={`flex items-center gap-3 px-3 py-2 rounded-card text-sm font-medium ${
            active === "dashboard" ? "bg-elevated text-ink" : "text-muted hover:text-ink"
          }`}
        >
          <LayoutGrid size={18} />
          My clips
        </a>
        <a
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-card text-sm font-medium text-muted hover:text-ink"
        >
          <Upload size={18} />
          New upload
        </a>
        <a
          href="#"
          className={`flex items-center gap-3 px-3 py-2 rounded-card text-sm font-medium ${
            active === "settings" ? "bg-elevated text-ink" : "text-muted hover:text-ink"
          }`}
        >
          <Settings size={18} />
          Settings
        </a>
      </nav>

      <div className="mt-auto rounded-card bg-elevated p-4">
        <p className="text-xs text-muted mb-2">Founding member plan</p>
        <p className="text-sm font-medium">6 of 10 videos used this month</p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-border overflow-hidden">
          <div className="h-full w-3/5 bg-volt rounded-full" />
        </div>
      </div>
    </aside>
  );
}
