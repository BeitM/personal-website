"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { commandAliases, directories } from "@/data/navigation";

type Props = { open: boolean; onClose: () => void };

type Command = { name: string; description: string; href: string };

const commands: Command[] = [
  ...directories.map((item) => ({ name: item.command, description: item.plainLabel, href: item.href })),
  { name: "projects", description: "Alias for builds", href: "/builds" },
  { name: "experience", description: "Open experience log", href: "/experience" },
  { name: "awards", description: "Open awards database", href: "/awards" },
  { name: "current", description: "Jump to current status", href: "/#current" },
  { name: "random", description: "Open a random record", href: "random" },
  { name: "help", description: "List available commands", href: "help" },
];

export function CommandPalette({ open, onClose }: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [feedback, setFeedback] = useState("TYPE A DIRECTORY OR COMMAND");

  const matches = useMemo(() => {
    const value = query.trim().toLowerCase();
    return (value ? commands.filter((command) => command.name.startsWith(value)) : commands).slice(0, 7);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    setFeedback("TYPE A DIRECTORY OR COMMAND");
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => setActive(0), [query]);

  function run(commandName?: string) {
    const name = (commandName ?? query).trim().toLowerCase();
    const command = commands.find((item) => item.name === name);
    const alias = commandAliases[name];
    if (name === "help" || alias === "help") {
      setFeedback("COMMANDS: HOME · IDENTITY · BUILDS · ARCHIVE · RESUME · CONTACT · CURRENT · RANDOM");
      return;
    }
    if (name === "random") {
      const destinations = ["/builds/robolab-ftc", "/builds/ftc-ai-assistant", "/archive"];
      router.push(destinations[Math.floor(Math.random() * destinations.length)]);
      onClose();
      return;
    }
    const href = command?.href ?? alias;
    if (!href) {
      setFeedback(`UNKNOWN COMMAND: ${name || "[EMPTY]"} — TYPE HELP`);
      return;
    }
    router.push(href);
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="command-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-title"
            initial={{ opacity: 0, y: -12, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="command-heading"><span id="command-title">COMMAND INTERFACE</span><button type="button" onClick={onClose}>ESC / CLOSE</button></div>
            <label className="command-input-row">
              <span aria-hidden="true">C:\PUBLIC_ARCHIVE&gt;</span>
              <span className="sr-only">Enter an archive command</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") { event.preventDefault(); setActive((value) => Math.min(value + 1, Math.max(0, matches.length - 1))); }
                  if (event.key === "ArrowUp") { event.preventDefault(); setActive((value) => Math.max(value - 1, 0)); }
                  if (event.key === "Enter") { event.preventDefault(); run(matches[active]?.name); }
                  if (event.key === "Escape") onClose();
                }}
                autoComplete="off"
                spellCheck={false}
              />
              <span className="command-cursor" aria-hidden="true" />
            </label>
            <p className="command-feedback" aria-live="polite">{feedback}</p>
            <div className="command-results" role="listbox" aria-label="Matching commands">
              {matches.map((command, index) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={active === index}
                  className={active === index ? "is-active" : ""}
                  key={command.name}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => run(command.name)}
                >
                  <span>{command.name}</span><small>{command.description}</small><b>ENTER</b>
                </button>
              ))}
              {!matches.length && <div className="command-empty">NO MATCHING COMMAND — PRESS ENTER FOR DIAGNOSTIC</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
