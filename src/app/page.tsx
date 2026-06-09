import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { MetricsGrid } from "@/components/sections/metrics-grid";
import { MarqueeBar } from "@/components/sections/marquee-bar";
import { AboutProtocol } from "@/components/sections/about-protocol";
import { ProtocolLayers } from "@/components/sections/protocol-layers";
import { TokenSystem } from "@/components/sections/token-system";
import { StabilityArchitecture } from "@/components/sections/stability-architecture";
import { NodeArchitecture } from "@/components/sections/node-architecture";
import { DaliAI } from "@/components/sections/dali-ai";
import { MeshNetwork } from "@/components/sections/mesh-network";
import { Comparison } from "@/components/sections/comparison";
import { Roadmap } from "@/components/sections/roadmap";
import { Resources } from "@/components/sections/resources";
import { Research } from "@/components/sections/research";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MarqueeBar />
        <MetricsGrid />
        <AboutProtocol />
        <ProtocolLayers />
        <TokenSystem />
        <StabilityArchitecture />
        <NodeArchitecture />
        <DaliAI />
        <MeshNetwork />
        <Comparison />
        <Roadmap />
        <Resources />
        <Research />
        <Footer />
      </main>
    </>
  );
}
