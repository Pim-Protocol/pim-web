"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Globe, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const heroPills = [
  "100,000 TPS",
  "NIST PQC Genesis",
  "PIM-VM Hybrid",
  "DALI Federated AI",
  "0.00034 kWh/tx",
];

interface MetricCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
}

function MetricCard({ title, subtitle, icon, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg border border-border bg-background px-3.5 py-2.5 w-max shadow-md",
        className,
      )}
    >
      <div className="text-primary text-base">{icon}</div>

      <div className="flex flex-col">
        <p className="text-xs font-semibold text-foreground leading-tight">
          {title}
        </p>

        <p className="text-[9px] font-mono uppercase tracking-wide text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-12
        pb-24
        bg-background
      "
    >
      {/* Top Amber Atmosphere */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-full
          h-96
          bg-gradient-radial
          from-primary/12
          via-transparent
          to-transparent
          pointer-events-none
          blur-3xl
          opacity-70
        "
        aria-hidden="true"
      />

      {/* Bottom White Haze */}

      <div
        className="
          absolute
          top-20
          left-1/3
          -translate-x-1/2
          w-96
          h-96
          bg-gradient-radial
          from-white/8
          via-transparent
          to-transparent
          pointer-events-none
          blur-3xl
          opacity-50
        "
        aria-hidden="true"
      />

      {/* Grid Background */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-35
        "
      >
        <div
          className="
            h-full
            w-full
            bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
            bg-[size:64px_64px]
          "
        />
      </div>

      <Container className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-2
          "
        >
          {/* Left Side */}

          <div className="lg:pl-4">
            <Badge
              className="
                mb-6
                border-primary/50
                bg-primary/15
                text-primary
                font-mono
                text-[10.5px]
                tracking-wider
                rounded-full
                px-4
                py-1.5
              "
            >
              ● Pre-Launch · Testnet - To Be Determined
            </Badge>

            <h1
              className="
                text-5xl
                sm:text-6xl
                lg:text-[70px]
                font-bold
                font-sans
                leading-[1.03]
                tracking-tight
                mt-6
                mb-6
              "
            >
              <span className="block text-foreground font-black">
                One Blockchain.
              </span>

              <span className="block text-primary font-black">Any Device.</span>

              <span className="block text-muted-foreground/70">Any World.</span>
            </h1>

            <p
              className="
                text-base
                leading-relaxed
                text-muted-foreground
                max-w-md
                mb-8
              "
            >
              Quantum-resistant, energy-backed, embedded-first Layer-1
              blockchain engineered for the world&apos;s{" "}
              <span className="font-semibold text-foreground">
                world&apos;s 2 billion unbanked
              </span>
              . PoEM consensus. UTXO-native dual-token system. PIM-VM Hybrid
              from microcontroller to GPU server.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-3
                mb-8
              "
            >
              <Button size="lg" className="gap-2">
                Read Whitepaper →
              </Button>

              <Button variant="outline" size="lg">
                Explore Protocol
              </Button>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {heroPills.map((pill) => (
                <Badge
                  key={pill}
                  className="
                    bg-surface
                    border-border
                    text-muted-foreground
                    font-mono 
                    text-[10px] 
                    tracking-wider
                    rounded-md
                    px-3
                    py-1
                    hover:border-primary/30
                    transition-colors
                  "
                >
                  {pill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Side */}

          <div className="relative h-96">
            {/* Video Focus Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-3xl
                bg-gradient-radial
                from-primary/10
                via-transparent
                to-transparent
                blur-3xl
                opacity-60
                -z-10
                pointer-events-none
              "
              aria-hidden="true"
            />

            {/* Video Container */}

            <div
              className="
                relative
                flex
                aspect-video
                items-center
                justify-center

                rounded-3xl
                border
                border-border/60

                bg-background/70

                backdrop-blur-sm
                shadow-[0_30px_120px_rgba(0,0,0,0.08)]
              "
            >
              {/* Label */}

              <div
                className="
                  absolute
                  left-6
                  top-6

                  rounded-md
                  border
                  border-border

                  px-3
                  py-1

                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-muted-foreground
                "
              >
                Protocol Overview
              </div>

              {/* Play Button */}

              <button
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center

                  rounded-full

                  bg-background
                  ring-8
                  ring-background/50

                  shadow-lg

                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-xl
                "
              >
                <span className="ml-1 text-2xl">▶</span>
              </button>

              {/* Video Text */}

              <div
                className="
                  absolute
                  bottom-6
                  text-center
                "
              >
                <p
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-muted-foreground
                  "
                >
                  Protocol Explainer Video
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-muted-foreground
                  "
                >
                  Coming Q3 2026 with Testnet
                </p>
              </div>
            </div>

            {/* 100K TPS */}

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                -right-10
                top-6
                absolute
              "
            >
              <MetricCard
                title="100K TPS"
                subtitle="Throughput"
                icon={<Zap size={20} />}
              />
            </motion.div>

            {/* 2 Billion Users */}

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                -right-12
                top-1/2
                -translate-y-1/2
                absolute
              "
            >
              <MetricCard
                title="2B Users"
                subtitle="Unbanked Target"
                icon={<Globe size={20} />}
              />
            </motion.div>

            {/* NIST PQC */}

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                -left-10
                bottom-16
                absolute
              "
            >
              <MetricCard
                title="NIST PQC"
                subtitle="Quantum Safe"
                icon={<Lock size={20} />}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom Fade Gradient */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-b
          from-transparent
          to-background
          pointer-events-none
        "
        aria-hidden="true"
      />
    </section>
  );
}
