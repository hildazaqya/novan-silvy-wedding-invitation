"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";
import { motion } from "motion/react";

export function SaveTheDate() {
      const targetDate = new Date("2026-04-26T00:00:00").getTime();

      const [timeLeft, setTimeLeft] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
      });

      useEffect(() => {
            const interval = setInterval(() => {
                  const now = new Date().getTime();
                  const distance = targetDate - now;

                  if (distance <= 0) {
                        clearInterval(interval);
                        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                  } else {
                        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        const hours = Math.floor(
                              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                        );
                        const minutes = Math.floor(
                              (distance % (1000 * 60 * 60)) / (1000 * 60)
                        );
                        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        setTimeLeft({ days, hours, minutes, seconds });
                  }
            }, 1000);

            return () => clearInterval(interval);
      }, [targetDate]);

      return (
            <main className="relative overflow-hidden bg-[url('/image/photo/save-the-date.webp')] py-5 px-10 bg-cover bg-position-[70%] lg:bg-center bg-right-2 h-screen flex flex-col">
                  <div className="absolute w-full h-full inset-0 bg-black/50"></div>
                  <div className="z-10 flex flex-col items-center text-center pt-5 h-full">
                        <motion.h2
                              initial={{ opacity: 0, y: -30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="text-[32px] md:text-4xl font-semibold text-white"
                        >
                              Save<br /> The Date
                        </motion.h2>

                        <motion.p
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                              className="text-lg lg:text-xl text-white mt-1 md:mt-5"
                        >Minggu, 26 April 2026</motion.p>
                        <motion.hr
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.35, duration: 0.6 }}
                              className="border border-[#ADADAD] w-full my-3 origin-left"
                        />

                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                              className="flex items-center justify-between gap-12"
                        >
                              <div className="flex flex-col">
                                    <p className="text-white text-4xl md:text-[40px]">
                                          {timeLeft.days}
                                    </p>
                                    <p className="text-white text-base md:text-lg">Days</p>
                              </div>
                              <div className="flex flex-col">
                                    <p className="text-white text-4xl md:text-[40px]">
                                          {timeLeft.hours}
                                    </p>
                                    <p className="text-white text-base md:text-lg">Hours</p>
                              </div>
                              <div className="flex flex-col">
                                    <p className="text-white text-4xl md:text-[40px]">
                                          {timeLeft.minutes}
                                    </p>
                                    <p className="text-white text-base md:text-lg">Minutes</p>
                              </div>
                              <div className="flex flex-col">
                                    <p className="text-white text-4xl md:text-[40px]">
                                          {timeLeft.seconds}
                                    </p>
                                    <p className="text-white text-base md:text-lg">Seconds</p>
                              </div>
                        </motion.div>

                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7, duration: 0.6 }}
                        >
                              <Link
                              target="_blank"
                                    href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Novan+Silvy+Wedding+Day&details=Acara+Pernikahan+Novan+%26+Silvy+yang+akan+diselenggarakan+pada+Minggu,+26+April+2026&location=GKIN+Hosana,+JL.+Bandulan+14,+Sukun,+Malang&dates=20260426/20260426"
                                    className="bg-primary-medium flex items-center gap-3 rounded-full px-10 py-2 text-white mt-3 hover:bg-primary-dark transition"
                              >
                                    <IoCalendarOutline size={18} />
                                    Simpan Tanggal
                              </Link>
                        </motion.div>
                  </div>
            </main>
      )
}