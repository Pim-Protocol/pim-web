"use client";

import { Download, ExternalLink, Lock } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { DocumentViewer } from "@/components/document-viewer";
import { useDocumentViewer } from "@/hooks/use-document-viewer";
import { RESOURCE_DOCUMENTS } from "@/constants/resources";
import { cn } from "@/lib/utils";

export function Resources() {
  const { activeDocument, openDocument, closeDocument } = useDocumentViewer();

  return (
    <section className="relative bg-muted/30 py-18" id="resources">
      <Container>
        <p
          className="
            font-mono
            text-[12px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-primary
          "
        >
          Company Resources
        </p>

        <h2
          className="
            mt-4
            text-4xl
            font-bold
            tracking-tight

            lg:text-4xl
          "
        >
          Whitepaper & <span className="text-primary">Pitch Deck</span>
        </h2>

        <div
          className="
            mt-12

            rounded-3xl
            border
            border-border

            bg-background

            p-8

            lg:grid
            lg:grid-cols-[1fr_320px]
            lg:gap-12
          "
        >
          {/* Left */}

          <div>
            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              Available Now
            </p>

            <h3
              className="
                mt-4
                text-2xl
                font-semibold
              "
            >
              Access All Documents
            </h3>

            <p
              className="
                mt-5
                max-w-xl
                leading-8
                text-muted-foreground
              "
            >
              Download the complete Pim Protocol technical whitepaper,
              litepaper, bluepaper, investor pitch deck, executive summary, and
              supporting protocol specifications.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {RESOURCE_DOCUMENTS.map((document) =>
                document.externalUrl ? (
                  <Button key={document.id} variant="outline" asChild>
                    <a
                      href={document.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {document.shortLabel}
                    </a>
                  </Button>
                ) : (
                  <Button
                    key={document.id}
                    variant="outline"
                    disabled={!document.available}
                    onClick={() => openDocument(document)}
                  >
                    {document.shortLabel}
                  </Button>
                ),
              )}
            </div>

            <p
              className="
                mt-8

                font-mono
                text-xs

                text-muted-foreground
              "
            >
              Investor relations:
              <span className="ml-2 text-primary">contact@pimprotocol.org</span>
            </p>
          </div>

          {/* Right */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-3

              lg:mt-0
            "
          >
            {RESOURCE_DOCUMENTS.map((document) => {
              const Icon = document.icon;
              const isExternal = Boolean(document.externalUrl);
              const isInteractive = isExternal || document.available;

              const cardClassName = cn(
                `
                  group

                  flex
                  items-center
                  justify-between

                  rounded-2xl
                  border

                  bg-background

                  p-4

                  text-left

                  transition-all
                  duration-300
                `,
                isInteractive
                  ? "hover:border-primary/30 hover:bg-primary/[0.03]"
                  : "cursor-not-allowed opacity-50",
              );

              const cardContent = (
                <>
                  <div className="flex gap-3">
                    <Icon
                      size={18}
                      className="
                        mt-0.5
                        text-primary
                      "
                    />

                    <div>
                      <h4
                        className="
                          text-sm
                          font-medium
                        "
                      >
                        {document.title}
                      </h4>

                      <p
                        className="
                          mt-1

                          font-mono
                          text-[10px]

                          uppercase

                          tracking-wider

                          text-muted-foreground
                        "
                      >
                        {isInteractive ? "PDF" : "Coming Soon"}
                        {" • "}
                        {document.description}
                      </p>
                    </div>
                  </div>

                  {isExternal ? (
                    <ExternalLink
                      size={16}
                      className="
                        text-muted-foreground
                        transition-colors

                        group-hover:text-primary
                      "
                    />
                  ) : document.available ? (
                    <Download
                      size={16}
                      className="
                        text-muted-foreground
                        transition-colors

                        group-hover:text-primary
                      "
                    />
                  ) : (
                    <Lock size={16} className="text-muted-foreground" />
                  )}
                </>
              );

              if (isExternal) {
                return (
                  <a
                    key={document.id}
                    href={document.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <button
                  key={document.id}
                  type="button"
                  disabled={!document.available}
                  onClick={() => openDocument(document)}
                  className={cardClassName}
                >
                  {cardContent}
                </button>
              );
            })}
          </div>
        </div>
      </Container>

      <DocumentViewer
        document={activeDocument}
        open={!!activeDocument}
        onClose={closeDocument}
      />
    </section>
  );
}
