import Link from "next/link";
import type { ClipResult } from "@/lib/api";

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ClipCard({ clip }: { clip: ClipResult }) {
  return (
    <div className="overflow-hidden rounded-clip border border-line bg-panel">
      <div className="relative aspect-[9/16] bg-black/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={clip.thumbnailUrl}
          alt={clip.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-2 top-2 rounded-clip bg-ink/80 px-2 py-1 text-xs text-paper">
          {formatDuration(clip.durationSeconds)}
        </span>
        <span className="absolute right-2 top-2 rounded-clip bg-pulse px-2 py-1 text-xs font-medium text-ink">
          {clip.viralScore}٪
        </span>
      </div>
      <div className="p-3">
        <p className="mb-3 truncate text-sm font-medium">{clip.title}</p>
        <div className="flex gap-2">
          <a
            href={clip.videoUrl}
            download
            className="flex-1 rounded-clip border border-line py-2 text-center text-xs hover:border-signal hover:text-signal"
          >
            تحميل
          </a>
          <Link
            href={`/editor/${clip.id}`}
            className="flex-1 rounded-clip bg-pulse py-2 text-center text-xs font-medium text-ink hover:bg-[#ff5c7e]"
          >
            تعديل
          </Link>
        </div>
      </div>
    </div>
  );
}
