"use client";

import { motion } from "motion/react";

type Props = {
      children: React.ReactNode;
      direction?: "up" | "left" | "right";
      delay?: number;
};

export function FadeInSection({ children, direction = "up", delay = 0 }: Props) {
      const initial = {
            opacity: 0,
            y: direction === "up" ? 48 : 0,
            x: direction === "left" ? -48 : direction === "right" ? 48 : 0,
      };

      return (
            <motion.div
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay }}
            >
                  {children}
            </motion.div>
      );
}
