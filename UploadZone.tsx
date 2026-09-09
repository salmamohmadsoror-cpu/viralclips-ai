"use client";

import { useCallback, useRef, useState } from "react";

interface UploadZoneProps {
  onFileSelected: (file: File) => void;
  isUploading?: boolean;
}

const MAX_DURATION_LABEL = "حتى 10 دقايق";
const ACCEPTED_TYPES = ["video/mp4", "video/quicktime", "video/x-matroska"];

export default function UploadZone({ onFileSelected, isUploading }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateAndEmit = useCallback(
    (file: File | undefined) => {
      if (!file) return;
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError("الصيغة دي مش مدعومة. استخدم MP4 أو MOV أو MKV.");
        return;
      }
      if (file.size > 2 * 1024 * 1024 * 1024) {
        setError("حجم الفيديو أكبر من الحد المسموح (2GB).");
        return;
      }
      setError(null);
      onFileSelected(file);
    },
    [onFileSelected]
  );

  return (
    <div className="w-full">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          validateAndEmit(e.dataTransfer.files?.[0]);
        }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-clip border-2 border-dashed px-8 py-16 text-center transition-colors ${
          isDragging ? "border-signal bg-signal/5" : "border-line bg-panel"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_TYPES.join(",")}
          className="hidden"
          onChange={(e) => validateAndEmit(e.target.files?.[0])}
        />
        <p className="font-display text-xl font-medium">
          اسحب الفيديو هنا أو دوس للاختيار
        </p>
        <p className="mt-2 text-sm text-paper/50">
          MP4 · MOV · MKV — {MAX_DURATION_LABEL}
        </p>
        <span className="mt-6 rounded-clip border border-line px-4 py-2 text-sm text-paper/70">
          {isUploading ? "بيترفع..." : "اختر ملف"}
        </span>
      </div>
      {error && <p className="mt-3 text-sm text-pulse">{error}</p>}
    </div>
  );
}
