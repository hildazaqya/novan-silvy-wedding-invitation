"use client";

import Image from "next/image";
import { motion } from "motion/react";

type Props = {
      src: string;
      alt?: string;
      width: number;
      height: number;
      /** Classes applied to the motion.div wrapper (positioning, rotation, size) */
      className?: string;
      /** Extra classes applied directly to the Image element */
      imageClassName?: string;
      delay?: number;
};

export function FloatingFlower({
      src,
      alt = "flower",
      width,
      height,
      className,
      imageClassName,
      delay = 0,
}: Props) {
      return (
            <motion.div
                  className={className}
                  animate={{ x: [0, 10, 0, -10, 0] }}
                  transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay,
                  }}
            >
                  <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className={imageClassName}
                  />
            </motion.div>
      );
}
