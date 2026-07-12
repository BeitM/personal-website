"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const bootLines = ["BIOS CHECK ........ OK", "MOUNTING /PUBLIC_ARCHIVE", "IDENTITY SIGNATURE FOUND", "DESKTOP BUFFER READY"];

export function BootSequence() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState(0);
  const [ready, setReady] = useState(false);

  function replay() {
    setStage(reducedMotion ? 4 : 0);
    setReady(Boolean(reducedMotion));
    setVisible(true);
  }

  useEffect(() => {
    if (!sessionStorage.getItem("mb-desktop-booted-v2")) {
      sessionStorage.setItem("mb-desktop-booted-v2", "1");
      replay();
    }
    const handleReplay = () => replay();
    window.addEventListener("mb:replay-boot", handleReplay);
    return () => window.removeEventListener("mb:replay-boot", handleReplay);
  // replay is intentionally captured once as the sequence reset handler.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible || reducedMotion) return;
    const stages = [220, 620, 1080, 1650].map((delay, index) => window.setTimeout(() => setStage(index + 1), delay));
    const complete = window.setTimeout(() => setReady(true), 2350);
    return () => { stages.forEach(window.clearTimeout); window.clearTimeout(complete); };
  }, [reducedMotion, visible]);

  useEffect(() => {
    if (!visible || !ready) return;
    const enter = (event: KeyboardEvent) => {
      if (["Tab", "Shift", "Control", "Alt", "Meta"].includes(event.key)) return;
      setVisible(false);
    };
    window.addEventListener("keydown", enter);
    return () => window.removeEventListener("keydown", enter);
  }, [ready, visible]);

  return <AnimatePresence>{visible && <motion.div className="boot-sequence desktop-boot" initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "brightness(3)", scaleY: .02 }} transition={{ duration: .28 }}>
    <div className="boot-logo-stage">
      <div className="boot-orbit" aria-hidden="true"><i /><i /><i /></div>
      <div className="boot-identity" aria-live="polite"><span>MB/OS PRESENTS</span><h1 data-text="MATT BEITLER">MATT BEITLER</h1><h2>PERSONAL DIGITAL ARCHIVE</h2><p>{ready ? "ARCHIVE READY" : "ESTABLISHING PUBLIC SESSION"}<span className="boot-dots">...</span></p>{ready && <button className="boot-enter" type="button" onClick={() => setVisible(false)}>PRESS ANY KEY TO ENTER DESKTOP <i /></button>}</div>
      <div className="boot-log">{bootLines.slice(0, stage).map((line) => <p key={line}>&gt; {line}</p>)}</div>
      <div className="boot-progress"><span style={{ width: `${Math.min(stage / 4, 1) * 100}%` }} /></div>
    </div>
  </motion.div>}</AnimatePresence>;
}
