"use client";

export function ReplayBootButton() {
  return <button className="desktop-file replay-file" type="button" onClick={() => window.dispatchEvent(new Event("mb:replay-boot"))}>
    <span className="desktop-file-art system replay-art" aria-hidden="true"><i /><b>EXE</b></span>
    <strong>REPLAY_BOOT</strong><small>system intro</small>
  </button>;
}
