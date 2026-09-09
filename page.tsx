import Sidebar from "@/components/Sidebar";
import { UploadCloud, Clock, CheckCircle2 } from "lucide-react";

const PAST_JOBS = [
  { id: "job_1", name: "Podcast ep. 42 - pricing strategy", status: "done", clips: 10, date: "Sep 6" },
  { id: "job_2", name: "Keynote - future of SaaS", status: "done", clips: 10, date: "Sep 3" },
  { id: "job_3", name: "Interview - founder story", status: "processing", clips: 0, date: "Sep 9" },
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-base">
      <Sidebar active="dashboard" />

      <section className="flex-1 p-10 max-w-5xl">
        <header className="mb-8">
          <h1 className="font-display text-3xl font-bold mb-1">My clips</h1>
          <p className="text-muted text-sm">
            Upload a video up to 10 minutes long. We'll hand you back the 10 best shorts.
          </p>
        </header>

        {/* Upload dropzone */}
        <div className="rounded-card border-2 border-dashed border-border bg-surface p-10 flex flex-col items-center text-center mb-10 hover:border-volt transition-colors cursor-pointer">
          <div className="w-14 h-14 rounded-full bg-elevated flex items-center justify-center mb-4">
            <UploadCloud className="text-volt" size={26} />
          </div>
          <p className="font-medium mb-1">Drop a video here, or click to browse</p>
          <p className="text-muted text-sm">MP4 or MOV · up to 10 minutes · max 2GB</p>
          <button className="mt-5 rounded-card bg-record px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
            Choose video
          </button>
        </div>

        {/* Past projects */}
        <h2 className="font-display text-lg font-bold mb-4">Recent projects</h2>
        <div className="flex flex-col gap-3">
          {PAST_JOBS.map((job) => (
            <a
              key={job.id}
              href={job.status === "done" ? `/results/${job.id}` : `/processing/${job.id}`}
              className="flex items-center justify-between rounded-card bg-surface border border-border px-5 py-4 hover:border-volt transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-card bg-elevated flex items-center justify-center">
                  {job.status === "done" ? (
                    <CheckCircle2 className="text-go" size={18} />
                  ) : (
                    <Clock className="text-volt" size={18} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{job.name}</p>
                  <p className="text-muted text-xs mt-0.5">
                    {job.status === "done" ? `${job.clips} clips ready` : "Processing…"}
                  </p>
                </div>
              </div>
              <span className="text-muted text-xs">{job.date}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
