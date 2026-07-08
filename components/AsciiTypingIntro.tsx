"use client";

import { useEffect, useState } from "react";

const KEY_ROWS = [
  ["ESC", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "−", "=", "BKSP"],
  ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
  ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT"],
  ["CTRL", "ALT", "SPACE", "ALT", "CTRL"],
];

const TARGET = "MATT BEITLER";
const SUBTITLE = "DIGITAL PORTFOLIO";
type Phase = "typing-title" | "hold-title" | "typing-subtitle" | "hold-both" | "deleting-subtitle" | "deleting-title" | "reset-pause";

const LEFT_HAND_BODY = [
  "    ██ ██ ██ ██",
  "    ██ ██ ██ ██",
  "    ██ ██ ██ ██",
  "    ████████████   ▓▓▓",
  "    ████████████  ▓▓▓",
  "    ████████████ ▓▓▓",
  "    ████████████▓▓▓",
  "     ▓███████████",
  "       ████████",
  "       ████████",
];

const RIGHT_HAND_BODY = [
  "██ ██ ██ ██",
  "██ ██ ██ ██",
  "██ ██ ██ ██",
  "▓▓████████████",
  "▓█████████████",
  "█████████████▓",
  " ███████████▓",
  "   ████████",
  "   ████████",
];

const FINGER_TOPS = [
  ["    ▓▓ ▓▓ ▓▓ ▓▓", "    ██ ██ ██ ██", "▓▓ ▓▓ ▓▓ ▓▓", "██ ██ ██ ██"],
  ["    ▓▓ ▒▒ ▓▓ ▓▓", "    ██ ▓▓ ██ ██", "▓▓ ▓▓ ▒▒ ▓▓", "██ ██ ▓▓ ██"],
  ["    ▒▒ ▓▓ ▓▓ ▓▓", "    ▓▓ ██ ██ ██", "▓▓ ▒▒ ▓▓ ▓▓", "██ ▓▓ ██ ██"],
  ["    ▓▓ ▓▓ ▒▒ ▓▓", "    ██ ██ ▓▓ ██", "▒▒ ▓▓ ▓▓ ▓▓", "▓▓ ██ ██ ██"],
];

const HAND_FRAMES = FINGER_TOPS.map(([leftTop, leftTips, rightTop, rightTips]) => ({
  left: [leftTop, leftTips, ...LEFT_HAND_BODY].join("\n"),
  right: [rightTop, rightTips, ...RIGHT_HAND_BODY].join("\n"),
}));

export function AsciiTypingIntro() {
  const [frame, setFrame] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [text, setText] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [phase, setPhase] = useState<Phase>("typing-title");
  const handsActive = !reducedMotion && ["typing-title", "typing-subtitle", "deleting-subtitle", "deleting-title"].includes(phase);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!handsActive) return;
    const timer = window.setInterval(() => setFrame((current) => (current + 1) % HAND_FRAMES.length), 145);
    return () => window.clearInterval(timer);
  }, [handsActive]);

  useEffect(() => {
    if (reducedMotion) {
      setText(TARGET);
      setSubtitle(SUBTITLE);
      setPhase("hold-both");
      return;
    }

    let delay = 100;
    if (phase === "hold-title") delay = 1400;
    if (phase === "hold-both") delay = 2100;
    if (phase === "typing-subtitle") delay = 75;
    if (phase === "deleting-subtitle" || phase === "deleting-title") delay = 45;
    if (phase === "reset-pause") delay = 650;

    const timer = window.setTimeout(() => {
      if (phase === "typing-title") {
        if (text === TARGET) setPhase("hold-title");
        else setText(TARGET.slice(0, text.length + 1));
      } else if (phase === "hold-title") {
        setPhase("typing-subtitle");
      } else if (phase === "typing-subtitle") {
        if (subtitle === SUBTITLE) setPhase("hold-both");
        else setSubtitle(SUBTITLE.slice(0, subtitle.length + 1));
      } else if (phase === "hold-both") {
        setPhase("deleting-subtitle");
      } else if (phase === "deleting-subtitle") {
        if (subtitle === "") setPhase("deleting-title");
        else setSubtitle((current) => current.slice(0, -1));
      } else if (phase === "deleting-title") {
        if (text === "") setPhase("reset-pause");
        else setText((current) => current.slice(0, -1));
      } else {
        setPhase("typing-title");
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [phase, reducedMotion, subtitle, text]);

  const hands = HAND_FRAMES[frame];

  return (
    <div className="ascii-intro" role="img" aria-label="Animated top-view ASCII hands typing on a keyboard beneath a red CRT monitor">
      <div className="ascii-monitor">
        <div className="ascii-screen"><div className="screen-raster"><div className={`crt-copy ${subtitle || phase === "typing-subtitle" ? "is-stacked" : ""}`}><div className="crt-title">{text}{["typing-title", "hold-title", "deleting-title"].includes(phase) && <span className="ascii-cursor">_</span>}</div>{(subtitle || phase === "typing-subtitle") && <div className="crt-subtitle">{subtitle}{["typing-subtitle", "hold-both", "deleting-subtitle"].includes(phase) && <span className="ascii-cursor">_</span>}</div>}</div></div></div>
      </div>
      <div className="monitor-neck" aria-hidden="true" />
      <div className="monitor-base" aria-hidden="true" />
      <div className="keyboard-stage" aria-hidden="true">
        <div className="keyboard">
          {KEY_ROWS.map((row, rowIndex) => (
            <div className={`key-row key-row-${rowIndex + 1}`} key={rowIndex}>
              {row.map((key, keyIndex) => <span data-key={key} key={`${rowIndex}-${keyIndex}`}>{key}</span>)}
            </div>
          ))}
        </div>
        <pre className={`ascii-hand ascii-hand-left ${handsActive ? "" : "hand-paused"}`}>{hands.left}</pre>
        <pre className={`ascii-hand ascii-hand-right ${handsActive ? "" : "hand-paused"}`}>{hands.left}</pre>
      </div>
      <p className="typing-status" aria-hidden="true">home row // active input</p>
    </div>
  );
}
