import Link from "next/link";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

import { Container } from "@/components/layout/container";
import { NavLogo } from "@/components/navigation/nav-logo";

const protocolLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Architecture",
    href: "#architecture",
  },
  {
    label: "QOL & PYM",
    href: "#token-system",
  },
  {
    label: "Stability",
    href: "#stability",
  },
  {
    label: "Node Tiers",
    href: "#nodes",
  },
  {
    label: "DALI AI",
    href: "#dali",
  },
  {
    label: "Pim Hotspot",
    href: "#mesh",
  },
];

const resourceLinks = [
  {
    label: "Whitepaper",
    href: "https://whitepaper.pimprotocol.org",
  },
  {
    label: "Pitch Deck",
    href: "#resources",
  },
  {
    label: "Technical Specs",
    href: "#resources",
  },
  {
    label: "One-Pager",
    href: "#resources",
  },
  {
    label: "Research Papers",
    href: "#research",
  },
  {
    label: "Comparison",
    href: "#comparison",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
];

const companyLinks = [
  {
    label: "Pim Global Ltd",
    href: "#footer",
  },
  {
    label: "QoLLabs Ltd",
    href: "#footer",
  },
  {
    label: "pimprotocol.org",
    href: "#hero",
  },
  {
    label: "Contact",
    href: "#footer",
  },
  {
    label: "Investor Relations",
    href: "#resources",
  },
  {
    label: "Join Waitlist",
    href: "/waitlist",
  },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="
        border-t
        border-border
        bg-background
      "
    >
      <Container>
        <div
          className="
            grid
            gap-12
            py-18

            md:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1fr]
          "
        >
          {/* Brand */}

          <div className="max-w-sm">
            <div className="w-34">
              <NavLogo />
            </div>

            <p
              className="
                mt-6
                text-sm
                leading-8
                text-muted-foreground
              "
            >
              Quantum-resistant, embedded-first, energy-backed Layer-1
              blockchain. QOL flatcoin. UTXO-native PYM governance. DALI AI. For
              the 2 billion unbanked.
            </p>

            <div
              className="
                mt-8

                font-mono
                text-[10px]
                leading-6

                text-muted-foreground
              "
            >
              <p>Pim Global Limited · RC No: 8807790</p>

              <p>Port Harcourt, Nigeria</p>

              <p>QoLLabs Ltd · Research Partner</p>

              <p>pimprotocol.org · qollabs.org</p>
            </div>
          </div>

          {/* Protocol */}

          <div>
            <h3
              className="
                mb-6

                font-mono
                text-[11px]

                uppercase

                tracking-[0.25em]
              "
            >
              Protocol
            </h3>

            <div className="space-y-4">
              {protocolLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    block
                    text-sm
                    text-muted-foreground

                    transition-colors

                    hover:text-primary
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}

          <div>
            <h3
              className="
                mb-6

                font-mono
                text-[11px]

                uppercase

                tracking-[0.25em]
              "
            >
              Resources
            </h3>

            <div className="space-y-4">
              {resourceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    block
                    text-sm
                    text-muted-foreground

                    transition-colors

                    hover:text-primary
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}

          <div>
            <h3
              className="
                mb-6

                font-mono
                text-[11px]

                uppercase

                tracking-[0.25em]
              "
            >
              Company
            </h3>

            <div className="space-y-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    block
                    text-sm
                    text-muted-foreground

                    transition-colors

                    hover:text-primary
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            gap-6

            border-t
            border-border

            py-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              font-mono
              text-[10px]
              text-muted-foreground
            "
          >
            © 2024–2026 Pim Global Limited · RC No: 8807790 · Port Harcourt,
            Nigeria · Pim Protocol. All rights reserved.
          </p>

          <div className="flex gap-3">
            {/* X */}

            <Link
              href="https://x.com/PimProtocol"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-lg
                border
                border-border

                transition-all

                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <SiX size={16} />
            </Link>

            {/* LinkedIn */}

            <Link
              href="https://linkedin.com/company/pimprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-lg
                border
                border-border

                transition-all

                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  leading-none
                "
              >
                in
              </span>
            </Link>

            {/* GitHub */}

            <Link
              href="https://github.com/PimProtocol"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-lg
                border
                border-border

                transition-all

                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <SiGithub size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
