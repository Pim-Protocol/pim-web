"use client";

import dynamic from "next/dynamic";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { DocumentToolbar } from "./document-toolbar";
import type { DocumentViewerProps } from "./types";

const PdfViewer = dynamic(
  () => import("./pdf-viewer").then((mod) => mod.PdfViewer),
  { ssr: false },
);

export function DocumentViewer({
  document,
  open,
  onClose,
}: DocumentViewerProps) {
  if (!document?.file) return null;

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(event) => event.preventDefault()}
        className="flex max-h-[90vh] max-w-3xl flex-col gap-0 overflow-hidden p-6"
      >
        <DialogHeader>
          <DocumentToolbar document={document} />
          <DialogDescription className="sr-only">
            Viewing {document.title}
          </DialogDescription>
        </DialogHeader>

        <div className="-mx-6 overflow-y-auto px-6">
          <PdfViewer file={document.file} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
