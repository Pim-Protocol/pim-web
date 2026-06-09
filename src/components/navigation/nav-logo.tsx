import Link from "next/link";
import Image from "next/image";

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
        "
      >
        <Image
          src="/pim-logo.png"
          alt="Pim Protocol logo"
          width={40}
          height={41}
          priority
          className="h-10 w-10 object-contain"
        />
      </div>

      <span className="text-lg font-semibold tracking-tight">
        Pim
        <span className="text-primary">Protocol</span>
      </span>
    </Link>
  );
}
