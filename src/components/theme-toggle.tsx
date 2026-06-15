"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!isClient) {
    return (
      <div
        className="
          h-9
          w-16
          rounded-full
          border
          border-border
          bg-surface
        "
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative

        flex
        h-9
        w-16
        items-center

        rounded-full

        border
        border-border

        bg-surface

        transition-colors
        duration-300

        hover:border-primary/40
      "
    >
      {/* Background Icons */}

      <Sun
        size={14}
        className="
          absolute
          left-3
          text-muted-foreground
        "
      />

      <Moon
        size={14}
        className="
          absolute
          right-3
          text-muted-foreground
        "
      />

      {/* Animated Thumb */}

      <motion.div
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 30,
        }}
        animate={{
          x: isDark ? 30 : 2,
        }}
        className="
          absolute
          z-10

          flex
          h-7
          w-7
          items-center
          justify-center

          rounded-full

          bg-primary

          shadow-lg
        "
      >
        {isDark ? (
          <Moon size={14} className="text-primary-foreground" />
        ) : (
          <Sun size={14} className="text-primary-foreground" />
        )}
      </motion.div>
    </button>
  );
}
