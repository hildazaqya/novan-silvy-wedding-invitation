"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FloatingFlower } from "./FloatingFlower";

export function FirstPage() {
      return (
            <main className="relative bg-white flex flex-col gap-8 items-center justify-center pt-10 pb-12 md:pb-16">
                  <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative"
                  >
                        <Image src="/image/photo/first_page.webp" alt="First Page" width={800} height={800} className="w-full max-w-80 lg:max-w-110 object-cover h-100 lg:h-124 rounded-[104px]" />
                        <FloatingFlower src="/image/asset/asset-flower-1.webp" className="absolute -bottom-2 -left-2" imageClassName="w-32 h-32 lg:w-40 lg:h-40" width={160} height={160} delay={0} />
                        <FloatingFlower src="/image/asset/asset-flower-1.webp" className="absolute -top-2 -right-2 rotate-180" imageClassName="w-32 h-32 lg:w-40 lg:h-40" width={160} height={160} delay={1.5} />
                  </motion.div>

                  <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        className="flex flex-col px-10 gap-3 justify-center items-center text-center"
                  >
                        <h2 className="text-2xl md:text-3xl font-medium text-primary-medium">
                              NOVAN & SILVY
                        </h2>
                        <p className="text-sm md:text-base text-neutral-800">
                              “Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”
                        </p>
                        <p className="text-sm md:text-base text-neutral-800 italic">
                              Matius 19:6
                        </p>
                  </motion.div>
                  <Image
                        src="/image/asset/bg-flower-pattern.png"
                        alt="Background Flower Pattern"
                        fill
                        className="object-cover opacity-40 absolute mix-blend-multiply inset-0 w-full h-full z-0"
                  />
            </main>
      )
}