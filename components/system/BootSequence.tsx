"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const bootLines = ["BIOS CHECK ........ OK", "MOUNTING /PUBLIC_ARCHIVE", "IDENTITY SIGNATURE FOUND", "DESKTOP READY"];

export function BootSequence() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("mb-desktop-booted")) return;
    sessionStorage.setItem("mb-desktop-booted", "1");
    if (!reducedMotion) setVisible(true);
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible) return;
    const stages = [250, 700, 1250, 2050].map((delay, index) => window.setTimeout(() => setStage(index + 1), delay));
    const finish = window.setTimeout(() => setVisible(false), 3100);
    return () => { stages.forEach(window.clearTimeout); window.clearTimeout(finish); };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const skip = (event: KeyboardEvent) => { if (event.key === "Escape" || event.key === "Enter") setVisible(false); };
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [visible]);

  return <AnimatePresence>{visible && <motion.div className="boot-sequence desktop-boot" initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "brightness(3)", scaleY: .02 }} transition={{ duration: .28 }}>
    <button type="button" onClick={() => setVisible(false)}>SKIP [ENTER]</button>
    <div className="boot-orbit" aria-hidden="true"><i /><i /><i /></div>
    <div className="boot-identity" aria-live="polite">
      <span>MB/OS PRESENTS</span>
      <h1 data-text="MATT BEITLER">MATT BEITLER</h1>
      <h2>PERSONAL DIGITAL ARCHIVE</h2>
      <p>ESTABLISHING PUBLIC SESSION<span className="boot-dots">...</span></p>
    </div>
    <div className="boot-log">{bootLines.slice(0, stage).map((line) => <p key={line}>&gt; {line}</p>)}</div>
    <div className="boot-progress"><span style={{ width: `${Math.min(stage / 4, 1) * 100}%` }} /></div>
  </motion.div>}</AnimatePresence>;
}
