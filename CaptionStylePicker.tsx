"use client";

const STYLES = [
  { key: "bold", label: "Bold", preview: "كلمة كلمة" },
  { key: "neon", label: "Neon", preview: "كلمة كلمة" },
  { key: "minimal", label: "Minimal", preview: "كلمة كلمة" },
  { key: "karaoke", label: "Karaoke", preview: "كلمة كلمة" }
];

export default function CaptionStylePicker({
  value,
  onChange
}: {
  value: string;
  onChange: (style: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm text-paper/70">استايل الكابشن</p>
      <div className="grid grid-cols-2 gap-3">
        {STYLES.map((style) => (
          <button
            key={style.key}
            onClick={() => onChange(style.key)}
            className={`rounded-clip border px-3 py-4 text-sm transition-colors ${
              value === style.key
                ? "border-signal bg-signal/10 text-signal"
                : "border-line bg-panel text-paper/70 hover:border-paper/30"
            }`}
          >
            <span className="block font-display font-medium">{style.label}</span>
            <span className="mt-1 block text-xs text-paper/40">{style.preview}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
