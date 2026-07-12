export type Directory = {
  label: string;
  plainLabel: string;
  href: string;
  code: string;
};

export const directories: Directory[] = [
  { label: "DESKTOP", plainLabel: "Home", href: "/", code: "00" },
  { label: "ABOUT_ME", plainLabel: "About me", href: "/identity", code: "01" },
  { label: "PROJECTS", plainLabel: "Projects", href: "/builds", code: "02" },
  { label: "EXPERIENCE", plainLabel: "Experience", href: "/experience", code: "03" },
  { label: "ARCHIVE", plainLabel: "Notes & experiments", href: "/archive", code: "04" },
  { label: "AWARDS", plainLabel: "Awards", href: "/awards", code: "05" },
  { label: "CONTACT", plainLabel: "Contact", href: "/uplink", code: "06" },
  { label: "RESUME", plainLabel: "Résumé", href: "/personnel-record", code: "07" },
  { label: "INSTRUCTIONS", plainLabel: "MB/OS instructions", href: "/instructions", code: "08" },
];

export function displayPath(pathname: string) {
  return pathname === "/" ? "/root" : pathname;
}
