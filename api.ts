const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export type ProjectStatus =
  | "uploading"
  | "transcribing"
  | "analyzing"
  | "rendering"
  | "ready"
  | "failed";

export interface ClipResult {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  viralScore: number;
  durationSeconds: number;
}

export interface Project {
  id: string;
  status: ProjectStatus;
  progress: number;
  sourceFileName: string;
  clips: ClipResult[];
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {})
    }
  });

  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText);
    throw new Error(`API error (${res.status}): ${message}`);
  }

  return res.json() as Promise<T>;
}

export async function uploadVideo(file: File): Promise<{ projectId: string }> {
  const formData = new FormData();
  formData.append("video", file);

  const res = await fetch(`${API_URL}/api/projects`, {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    const message = await res.text().catch(() => res.statusText);
    throw new Error(`فشل رفع الفيديو (${res.status}): ${message}`);
  }

  return res.json();
}

export function getProject(projectId: string): Promise<Project> {
  return request<Project>(`/api/projects/${projectId}`);
}

export function listProjects(): Promise<Project[]> {
  return request<Project[]>(`/api/projects`);
}

export function updateClip(
  clipId: string,
  payload: Partial<{ captionStyle: string; title: string; startSeconds: number; endSeconds: number }>
): Promise<ClipResult> {
  return request<ClipResult>(`/api/clips/${clipId}`, {
    method: "PATCH",
    body: JSON.stringify(payload)
  });
}

export function exportClip(clipId: string): Promise<{ downloadUrl: string }> {
  return request<{ downloadUrl: string }>(`/api/clips/${clipId}/export`, {
    method: "POST"
  });
}
