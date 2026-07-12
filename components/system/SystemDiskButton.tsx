"use client";

export function SystemDiskButton() {
  return <button className="desktop-drive" type="button" onClick={() => window.dispatchEvent(new Event("mb:open-files"))} aria-label="Open system disk file list">
    <span className="drive-art" aria-hidden="true"><i /></span><b>SYSTEM_DISK</b><small>68% FREE</small>
  </button>;
}
