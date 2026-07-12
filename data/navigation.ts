export type Directory = {
  label: string;
  plainLabel: string;
  href: string;
  command: string;
  code: string;
};

export const directories: Directory[] = [
  { label: "ROOT", plainLabel: "Home", href: "/", command: "home", code: "00" },
  { label: "IDENTITY", plainLabel: "About", href: "/identity", command: "identity", code: "01" },
  { label: "BUILDS", plainLabel: "Projects", href: "/builds", command: "builds", code: "02" },
  { label: "ARCHIVE", plainLabel: "Notes & experiments", href: "/archive", command: "archive", code: "03" },
  { label: "PERSONNEL RECORD", plainLabel: "Résumé", href: "/personnel-record", command: "resume", code: "04" },
  { label: "UPLINK", plainLabel: "Contact", href: "/uplink", command: "contact", code: "05" },
];

export const commandAliases: Record<string, string> = {
  projects: "/builds",
  current: "/#current",
  random: "/builds/computational-biology",
  help: "help",
};

export function displayPath(pathname: string) {
  return pathname === "/" ? "/root" : pathname;
}
