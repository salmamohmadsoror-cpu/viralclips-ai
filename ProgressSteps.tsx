import type { ProjectStatus } from "@/lib/api";

const STEPS: { key: ProjectStatus; label: string }[] = [
  { key: "uploading", label: "بيترفع الفيديو" },
  { key: "transcribing", label: "بنسمع الفيديو ونحوله لنص" },
  { key: "analyzing", label: "بندور على أفضل اللحظات" },
  { key: "rendering", label: "بنجهز الكابشن ونصدّر الشورتس" },
  { key: "ready", label: "جاهز" }
];

export default function ProgressSteps({ status }: { status: ProjectStatus }) {
  const currentIndex = STEPS.findIndex((s) => s.key === status);

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 flex h-14 items-end justify-center gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="waveform-bar w-1 rounded-full bg-signal"
            style={{
              height: `${20 + ((i * 37) % 40)}px`,
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
      </div>
      <ol className="space-y-4">
        {STEPS.map((step, i) => {
          const done = i < currentIndex;
          const active = i === currentIndex;
          return (
            <li key={step.key} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs ${
                  done
                    ? "bg-signal text-ink"
                    : active
                    ? "border-2 border-signal text-signal"
                    : "border border-line text-paper/30"
                }`}
              >
                {done ? "✓" : ""}
              </span>
              <span
                className={
                  active
                    ? "font-medium text-paper"
                    : done
                    ? "text-paper/60"
                    : "text-paper/30"
                }
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
