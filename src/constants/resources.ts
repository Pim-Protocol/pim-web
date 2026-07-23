import {
  FileText,
  Presentation,
  ClipboardList,
  Cog,
  BookOpen,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface ResourceDocument {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  category: string;
  /** Local PDF path, opened in the in-page viewer. Omit when using externalUrl. */
  file?: string;
  /** External page to link out to instead of opening the in-page viewer. */
  externalUrl?: string;
  icon: LucideIcon;
  available: boolean;
}

export const RESOURCE_DOCUMENTS: ResourceDocument[] = [
  {
    id: "whitepaper",
    title: "Technical Whitepaper",
    shortLabel: "Whitepaper",
    description: "Full Specification",
    category: "Protocol",
    externalUrl: "https://whitepaper.pimprotocol.org",
    icon: FileText,
    available: true,
  },
  {
    id: "litepaper",
    title: "Litepaper",
    shortLabel: "Litepaper PDF",
    description: "Condensed Overview",
    category: "Protocol",
    file: "/documents/Pim-Litepaper.pdf",
    icon: BookOpen,
    available: true,
  },
  {
    id: "bluepaper",
    title: "Bluepaper",
    shortLabel: "Bluepaper PDF",
    description: "Implementation Details",
    category: "Protocol",
    file: "/documents/Pim-Bluepaper.pdf",
    icon: Layers,
    available: true,
  },
  {
    id: "pitch-deck",
    title: "Investor Pitch Deck",
    shortLabel: "Pitch Deck PDF",
    description: "PowerPoint Deck",
    category: "Investor Relations",
    file: "/documents/pim-pitch-deck.pdf",
    icon: Presentation,
    available: false,
  },
  {
    id: "one-pager",
    title: "Executive One-Pager",
    shortLabel: "One-Pager",
    description: "2 Pages",
    category: "Overview",
    file: "/documents/Pim-OnePager.pdf",
    icon: ClipboardList,
    available: true,
  },
  {
    id: "specification",
    title: "Technical Specifications",
    shortLabel: "Tech Specs",
    description: "Protocol Specs",
    category: "Protocol",
    file: "/documents/pim-specification.pdf",
    icon: Cog,
    available: false,
  },
];
