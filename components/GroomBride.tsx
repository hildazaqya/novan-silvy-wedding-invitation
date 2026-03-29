"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FloatingFlower } from "./FloatingFlower";

export function GroomBride() {
      return (
            <main className="relative bg-[url('/image/asset/cover-depan.webp')] p-5 bg-cover flex flex-col h-full">
                  <div className="absolute w-full h-full inset-0 bg-white/10 backdrop-blur-sm z-0"></div>
                  <div className="bg-primary-light h-full rounded-[280px] z-10 w-full shadow-lg flex flex-col items-center justify-center gap-5 pt-10 pb-28 px-6">

                        {/* Groom */}
                        <motion.div
                              initial={{ opacity: 0, x: -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-60px" }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                              className="flex flex-col items-center gap-1"
                        >
                              <div className="relative">
                                    <Image
                                          src="/image/photo/groom.webp"
                                          alt="Groom"
                                          width={176}
                                          height={176}
                                          className="w-40 h-50 md:w-50 md:h-60 rounded-[110px] object-cover"
                                    />
                                    <FloatingFlower
                                          src="/image/asset/asset-flower-2.svg"
                                          className="absolute -top-5 -right-8 pointer-events-none"
                                          width={120}
                                          height={120}
                                          delay={0}
                                    />
                              </div>
                              <p className="text-sm md:text-base text-primary-medium font-medium mt-2">THE GROOM</p>
                              <h2 className="text-xl md:text-2xl font-bold text-neutral-800 text-center">ALBERTUS NOVAN RICHARDO</h2>
                              <p className="text-sm md:text-base text-neutral-800 text-center">Putra dari Bapak Tantoro Hadi & Ibu Sri Heru Bekti R.</p>
                        </motion.div>

                        {/* Ampersand */}
                        <motion.p
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                              className="font-dancing-script text-4xl md:text-5xl text-primary-medium font-bold leading-none"
                        >&</motion.p>

                        {/* Bride */}
                        <motion.div
                              initial={{ opacity: 0, x: 40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-60px" }}
                              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                              className="flex flex-col items-center gap-1"
                        >
                              <div className="relative">
                                    <Image
                                          src="/image/photo/bride.webp"
                                          alt="Bride"
                                          width={176}
                                          height={176}
                                          className="w-40 h-50 md:w-50 md:h-60 rounded-[110px] object-cover"
                                    />
                                    <FloatingFlower
                                          src="/image/asset/asset-flower-2.svg"
                                          className="absolute -top-5 -left-8 pointer-events-none scale-x-[-1]"
                                          width={120}
                                          height={120}
                                          delay={1}
                                    />
                              </div>
                              <p className="text-sm md:text-base text-primary-medium font-medium mt-2">THE BRIDE</p>
                              <h2 className="text-xl md:text-2xl font-bold text-neutral-800 text-center">SILVY AYU KUMALASARI</h2>
                              <p className="text-sm md:text-base text-neutral-800 text-center">Putri dari Bapak Yoyok Edhi Sunaryo dan Ibu Saunah</p>
                        </motion.div>

                  </div>
            </main>
      )
}