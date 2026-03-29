"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { FloatingFlower } from "./FloatingFlower";
import { IoIosArrowDown } from "react-icons/io";

const accounts = [
      { bank: "BCA", number: "3850774136", holder: "Silvy Ayu Kumalasari" },
      { bank: "CIMB NIAGA", number: "763900814600", holder: "Albertus Novan Richardo" },
];

const WA_NUMBER = "6285157534949";

function CopyButton({ text }: { text: string }) {
      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
            navigator.clipboard.writeText(text).then(() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
            });
      };

      return (
            <button
                  onClick={handleCopy}
                  className="mt-1 px-6 py-1.5 text-xs font-semibold border border-primary-medium text-primary-dark rounded-sm hover:bg-primary-light transition-colors"
            >
                  {copied ? "TERSALIN!" : "SALIN"}
            </button>
      );
}

export function WeddingGift() {
      const [name, setName] = useState("");
      const [rekening, setRekening] = useState("");

      const handleWhatsapp = () => {
            const msg = encodeURIComponent(
                  `Halo, saya ${name} ingin mengkonfirmasi transfer hadiah pernikahan melalui rekening ${rekening}.`
            );
            window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
      };

      return (
            <main className="relative overflow-hidden bg-white flex flex-col gap-6 min-h-screen px-5 md:px-6 py-10">
                  <Image
                        src="/image/asset/bg-flower-pattern.png"
                        alt="Background Flower Pattern"
                        fill
                        className="object-cover opacity-40 absolute mix-blend-multiply inset-0 w-full h-full z-0"
                  />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute rotate-180 -bottom-9 -left-9" width={160} height={160} delay={0} />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute rotate-270 -top-9 -left-9" width={160} height={160} delay={0.5} />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute -top-9 -right-9" width={160} height={160} delay={1} />
                  <FloatingFlower src="/image/asset/asset-flower-3.webp" className="absolute rotate-90 -bottom-9 -right-9" width={160} height={160} delay={1.5} />

                  {/* Header */}
                  <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="z-10 flex flex-col text-center gap-1 mt-8"
                  >
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary-medium">Wedding Gift</h2>
                        <p className="text-sm md:text-base text-gray-800">
                              Tanpa mengurangi rasa hormat kami, bagi para tamu yang ingin berbagi
                              kasih melalui hadiah untuk kedua mempelai, dapat mengirimnya melalui:
                        </p>
                  </motion.div>

                  {/* Bank accounts */}
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="z-10 flex flex-row gap-4 w-full justify-center"
                  >
                        {accounts.map((acc) => (
                              <div key={acc.bank} className="flex flex-col items-center flex-1">
                                    <p className="text-primary-medium font-semibold text-sm md:text-base">{acc.bank}</p>
                                    <p className="text-primary-dark font-bold text-base md:text-lg mt-1">{acc.number}</p>
                                    <p className="text-gray-700 text-sm">a.n.&nbsp;&nbsp;{acc.holder}</p>
                                    <CopyButton text={acc.number} />
                              </div>
                        ))}
                  </motion.div>

                  <motion.hr
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="z-10 border-primary-light w-full origin-left"
                  />

                  {/* Konfirmasi */}
                  <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="z-10 flex flex-col gap-3"
                  >
                        <h3 className="text-lg md:text-xl font-semibold text-primary-medium">Konfirmasi</h3>
                        <input
                              type="text"
                              placeholder="Tuliskan Nama Anda"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="bg-primary-light/40  text-sm md:text-base border border-primary-light text-gray-800 placeholder:text-gray-400 rounded-lg px-4 py-3 w-full outline-none focus:border-primary-medium transition-colors"
                        />
                        <div className="relative">
                              <select
                                    value={rekening}
                                    onChange={(e) => setRekening(e.target.value)}
                                    className="bg-primary-light/40  text-sm md:text-base border border-primary-light text-gray-800 rounded-lg px-4 py-3 pr-10 w-full outline-none focus:border-primary-medium transition-colors appearance-none cursor-pointer"
                              >
                                    <option value="" disabled className="text-gray-400">Rekening</option>
                                    {accounts.map((acc) => (
                                          <option key={acc.bank} value={`${acc.bank} - ${acc.number} a.n. ${acc.holder}`}>
                                                {acc.bank}
                                          </option>
                                    ))}
                              </select>
                              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary-medium text-lg font-bold">
                                    <IoIosArrowDown size={16} />
                              </span>
                        </div>
                        <div className="flex justify-end mb-0 lg:mb-10">
                              <button
                                    onClick={handleWhatsapp}
                                    disabled={!name.trim() || !rekening}
                                    className="bg-primary-dark text-sm md:text-base text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                              >
                                    Konfirmasi Melalui Whatsapp
                              </button>
                        </div>
                  </motion.div>
            </main>
      );
}