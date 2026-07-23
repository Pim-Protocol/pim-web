import type { ResourceDocument } from "@/constants/resources";

export type { ResourceDocument };

export interface DocumentViewerProps {
  document: ResourceDocument | null;
  open: boolean;
  onClose: () => void;
}
