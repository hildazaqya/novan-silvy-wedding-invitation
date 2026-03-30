"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCalendarClearOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { PiMapPinArea } from "react-icons/pi";
import { FloatingFlower } from "./FloatingFlower";
import { motion } from "motion/react";

export function WeddingEvent() {
      return (
            <main className="relative overflow-hidden bg-white flex flex-col gap-3 lg:gap-6 min-h-screen px-5 py-10 lg:p-10">
                  <Image
                        src="/image/asset/bg-flower-pattern.png"
                        alt="Background Flower Pattern"
                        fill
                        className="object-cover opacity-40 absolute mix-blend-multiply inset-0 w-full h-full z-0"
                  />

                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute rotate-180 -bottom-10 -left-10" imageClassName="w-34 h-34 lg:w-40 lg:h-40" width={160} height={160} delay={0} />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute rotate-270 -top-10 -left-10" imageClassName="w-34 h-34 lg:w-40 lg:h-40" width={160} height={160} delay={0.5} />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute -top-10 -right-10" imageClassName="w-34 h-34 lg:w-40 lg:h-40" width={160} height={160} delay={1} />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute rotate-90 -bottom-10 -right-10" imageClassName="w-34 h-34 lg:w-40 lg:h-40" width={160} height={160} delay={1.5} />

                  <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="z-10 flex flex-col items-center text-center gap-1"
                  >
                        <p className="text-base text-gray-800 ">Wedding Event</p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary-medium">
                              Minggu, 26 April 2026
                        </h2>
                  </motion.div>
                  <motion.hr
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="border border-primary-light w-full origin-left"
                  />

                  {/* Pemberkatan */}
                  <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="z-10 bg-primary-light/40 backdrop-blur-md border border-primary-light-500/40 rounded-2xl p-5 w-full flex flex-col gap-3 mt-3 lg:mt-0"
                  >
                        <h3 className="text-xl md:text-2xl font-bold text-primary-medium">Pemberkatan</h3>
                        <div className="flex items-center gap-3 text-neutral-800 text-sm md:text-base">
                              <IoCalendarClearOutline size={18} className="shrink-0 w-4 h-4 md:w-4.5 md:h-4.5" />
                              <span>Minggu, 26 April 2026</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-800 text-sm md:text-base">
                              <GoClock size={18} className="shrink-0 w-4 h-4 md:w4.5" />
                              <span>08.00 WIB - Selesai</span>
                        </div>
                        <div className="flex items-start gap-3 text-neutral-800 text-sm md:text-base">
                              <PiMapPinArea size={18} className="shrink-0 w-4 h-4 md:w4.5 mt-0.5" />
                              <span>GKIN Hosana,<br />JL. Bandulan 14, Sukun, Malang</span>
                        </div>
                        <Link
                              href="https://maps.app.goo.gl/SAzhmiKAmN4ycKcx6?g_st=ic"
                              className="text-sm text-white bg-primary-dark px-8 py-1 border border-neutral-500 rounded-full w-fit"
                              target="_blank"
                        >
                              Map Navigation
                        </Link>
                  </motion.div>

                  {/* Resepsi */}
                  <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="z-10 bg-primary-light/40 backdrop-blur-md border border-primary-light-500/40 rounded-2xl p-5 w-full mt-2 mb-10 md:mb-20 flex flex-col gap-3"
                  >
                        <h3 className="text-xl md:text-2xl font-bold text-primary-medium">Resepsi</h3>
                        <div className="flex items-center gap-3 text-neutral-800 text-sm md:text-base">
                              <IoCalendarClearOutline size={18} className="shrink-0 w-4 h-4 md:w-4.5 md:h-4.5" />
                              <span>Minggu, 26 April 2026</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-800 text-sm md:text-base">
                              <GoClock size={18} className="shrink-0 w-4 h-4 md:w-4.5 md:h-4.5" />
                              <span>13.00 WIB - Selesai</span>
                        </div>
                        <div className="flex items-start gap-3 text-neutral-800 text-sm md:text-base">
                              <PiMapPinArea size={18} className="shrink-0 w-4 h-4 md:w-4.5 md:h-4.5 mt-0.5" />
                              <span>Rumah Kami,<br />JL. Bandulan IX No. 601, Sukun, Malang</span>
                        </div>
                        <Link
                              href="https://maps.app.goo.gl/PXXteQTshm1mUW3C7?g_st=aw"
                              className="text-sm text-white bg-primary-dark px-8 py-1 border border-neutral-500 rounded-full w-fit"
                              target="_blank"
                        >
                              Map Navigation
                        </Link>
                  </motion.div>
            </main>
      )
}