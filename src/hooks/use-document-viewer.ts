"use client";

import { useCallback, useState } from "react";

import type { ResourceDocument } from "@/constants/resources";

export function useDocumentViewer() {
  const [activeDocument, setActiveDocument] = useState<ResourceDocument | null>(
    null,
  );

  const openDocument = useCallback((document: ResourceDocument) => {
    setActiveDocument(document);
  }, []);

  const closeDocument = useCallback(() => {
    setActiveDocument(null);
  }, []);

  return { activeDocument, openDocument, closeDocument };
}
