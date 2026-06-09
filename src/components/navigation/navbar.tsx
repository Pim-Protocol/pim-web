import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/layout/container";
import { NAVIGATION_LINKS } from "@/constants/navigation";

import { NavLogo } from "./nav-logo";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-border/50
        bg-background/90
        backdrop-blur-xl
      "
    >
      <Container
        className="
          flex
          h-[68px]
          items-center
          justify-between
          gap-6
        "
      >
        <NavLogo />

        <nav
          className="
            hidden
            flex-1
            items-center
            justify-center
            gap-1
            lg:flex
          "
        >
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="
                rounded-md
                px-3
                py-2
                text-sm
                font-medium
                text-muted-foreground
                transition-all
                duration-200
                hover:bg-muted
                hover:text-foreground
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="secondary" asChild>
              <a href="#resources">Whitepaper</a>
            </Button>

            <Button
              variant="primary"
              disabled
              className="
                cursor-not-allowed
                opacity-70
              "
            >
              Join Waitlist →
            </Button>
          </div>

          {/* Mobile only */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
