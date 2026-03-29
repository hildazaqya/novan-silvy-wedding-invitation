"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "motion/react";

function toTitleCase(str: string) {
      return str
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(" ");
}

function GuestName() {
      const params = useSearchParams();
      const raw = params.get("to") ?? "";
      // replace + or %20 with space, then title-case
      const name = raw ? toTitleCase(raw.replace(/\+/g, " ")) : null;
      return (
            <h2 className="text-xl font-bold text-neutral-800 mt-1">
                  {name ?? "Bapak/Ibu/Saudara/i"}
            </h2>
      );
}

// type Props = {
//       onOpen: () => void;
// };

export function CoverMainPage() {
      return (
            <section className="bg-[url('/image/asset/cover-depan.webp')] bg-cover bg-center w-full h-svh flex flex-col items-center justify-between pt-10 py-20 px-5 md:px-20">
                  {/* Logo & Judul */}
                  <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col items-center gap-1 mt-4"
                  >
                        <div className="relative w-full h-20 md:h-24 flex items-center justify-center">
                              <Image
                                    src="/image/asset/n-s.webp"
                                    alt="N S"
                                    fill
                                    className="object-contain"
                              />
                              <p className="absolute text-base font-semibold text-[#3E3E3E] uppercase z-10">
                                    The Wedding Of
                              </p>
                        </div>
                        <h1 className="text-4xl md:text-[42px] font-semibold -mt-3 md:-mt-5 text-neutral-800">
                              NOVAN &amp; SILVY
                        </h1>
                        <p className="text-base md:text-lg text-neutral-800">
                              Minggu, 26 April 2026
                        </p>
                  </motion.div>

                  {/* Kartu undangan */}
                  <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="w-full bg-white/45 backdrop-blur-sm rounded-2xl py-6 px-8 lg:px-14 text-center shadow-md mb-4"
                  >
                        <p className="text-sm text-gray-600">Yth. Bapak/Ibu/Saudara/I</p>
                        <Suspense fallback={<div className="h-7" />}>
                              <GuestName />
                        </Suspense>
                        <p className="text-sm text-gray-800 mt-2">
                              Tanpa mengurangi rasa hormat, kami mengundang anda untuk menghadiri
                              acara pernikahan kami.
                        </p>
                  </motion.div>
            </section>
      );
}
