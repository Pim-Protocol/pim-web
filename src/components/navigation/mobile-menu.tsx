"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {open && (
        <div
          className="
            absolute
            left-0
            top-full
            w-full
            border-b
            border-border
            bg-background
            shadow-lg
            lg:hidden
          "
        >
          <div className="container py-6">
            <div className="flex flex-col gap-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-muted-foreground
                    transition-colors
                    hover:bg-muted
                    hover:text-foreground
                  "
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-border" />

              <Button variant="secondary" className="w-full">
                <Link
                  href="https://whitepaper.pimprotocol.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whitepaper
                </Link>
              </Button>

              <Button variant="primary" className="w-full" disabled>
                Join Waitlist →
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
