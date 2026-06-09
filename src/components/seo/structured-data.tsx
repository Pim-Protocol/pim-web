export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "Pim Protocol",

    url: "https://pimprotocol.com",

    description:
      "Quantum-resistant, embedded-first, energy-backed Layer-1 blockchain.",

    founder: {
      "@type": "Organization",
      name: "Pim Global Limited",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
