"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCalendarOutline } from "react-icons/io5";

export function SaveTheDate() {
      const targetDate = new Date("2026-04-24T00:00:00").getTime();

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
                        <h2 className="text-[32px] md:text-4xl font-semibold text-white">
                              Save<br /> The Date
                        </h2>

                        <p className="text-lg lg:text-xl text-white mt-1 md:mt-5">Jumat, 24 April 2026</p>
                        <hr className="border border-[#ADADAD] w-full my-3" />

                        <div className="flex items-center justify-between gap-12">
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
                        </div>

                        <Link
                              href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+Day&details=Acara+Pernikahan+Novan+%26+Silvy+yang+insyaAllah+akan+diselenggarakan+pada+Jumat,+24+April+2026&location=&dates=20260424T000000Z/20260424T235959Z"
                              className="bg-primary-medium flex items-center gap-3 rounded-full px-10 py-2 text-white mt-3 hover:bg-primary-dark transition"
                        >
                              <IoCalendarOutline size={18} />
                              Simpan Tanggal
                        </Link>
                  </div>
            </main>
      )
}