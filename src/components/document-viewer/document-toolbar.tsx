import { Download, ExternalLink, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import type { ResourceDocument } from "./types";

interface DocumentToolbarProps {
  document: ResourceDocument;
}

export function DocumentToolbar({ document }: DocumentToolbarProps) {
  const Icon = document.icon;

  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-center gap-3">
        <Icon size={18} className="shrink-0 text-primary" />

        <div>
          <DialogTitle className="text-sm font-semibold">
            {document.title}
          </DialogTitle>

          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {document.category}
            {" • "}
            {document.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1.5" asChild>
          <a href={document.file} download>
            <Download size={14} />
            Download
          </a>
        </Button>

        <Button variant="ghost" size="sm" className="gap-1.5" asChild>
          <a href={document.file} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} />
            Open New Tab
          </a>
        </Button>

        <DialogClose asChild>
          <Button variant="ghost" size="icon-sm">
            <X size={16} />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </div>
    </div>
  );
}
