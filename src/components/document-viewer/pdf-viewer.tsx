"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { cn } from "@/lib/utils";
import { LoadingState } from "./loading-state";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface PdfViewerProps {
  file: string;
}

export function PdfViewer({ file }: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState<number>();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setPageWidth(Math.min(entry.contentRect.width, 720));
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-4 py-6">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={() => setFailed(true)}
        loading={<LoadingState />}
        error={
          <p className="py-24 text-sm text-muted-foreground">
            Couldn&apos;t load this document.
          </p>
        }
        className={cn(numPages === null && !failed && "min-h-[40vh] w-full")}
      >
        {numPages &&
          pageWidth &&
          Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page-${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              className="mb-4 shadow-sm last:mb-0"
              loading=""
            />
          ))}
      </Document>
    </div>
  );
}
