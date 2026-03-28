"use client";

import { useState } from "react";
import { IoCheckmarkCircle, IoTimeOutline } from "react-icons/io5";
import type { Wish } from "@/lib/rsvp";
import { IoIosArrowRoundForward } from "react-icons/io";

const ITEMS_PER_PAGE = 3;

const attendanceLabel: Record<Wish["attendance"], string> = {
      hadir: "Hadir",
      tidak_hadir: "Tidak Hadir",
      belum_pasti: "Belum Pasti",
};

function timeAgo(timestamp: number): string {
      const seconds = Math.floor((Date.now() - timestamp) / 1000);
      if (seconds < 60) return "baru saja";
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes} menit yang lalu`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours} jam yang lalu`;
      const days = Math.floor(hours / 24);
      return `${days} hari yang lalu`;
}

type Props = {
      wishes: Wish[];
};

export function WishesList({ wishes }: Props) {
      const [page, setPage] = useState(1);

      const totalPages = Math.max(1, Math.ceil(wishes.length / ITEMS_PER_PAGE));
      const safePage = Math.min(page, totalPages);
      const start = (safePage - 1) * ITEMS_PER_PAGE;
      const currentItems = wishes.slice(start, start + ITEMS_PER_PAGE);

      if (wishes.length === 0) {
            return (
                  <p className="text-white/40 text-sm text-center mt-6">
                        Belum ada ucapan. Jadilah yang pertama! 🎉
                  </p>
            );
      }

      return (
            <div className="w-full flex flex-col gap-4">
                  {currentItems.map((wish) => (
                        <div key={wish.id} className="flex flex-col gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3">
                              <p className="text-white text-sm leading-relaxed">{wish.message}</p>
                              <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 text-white/80 text-sm">
                                          <span>{wish.name}</span>
                                          <IoCheckmarkCircle size={12} className="text-blue-300 shrink-0" />
                                          <span className="text-white/40 text-sm">
                                                · {attendanceLabel[wish.attendance]}
                                          </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-white/40 text-xs">
                                          <IoTimeOutline size={12} className="shrink-0" />
                                          <span>{timeAgo(wish.createdAt)}</span>
                                    </div>
                              </div>
                              {/* <hr className="border-white/15 mt-0.5" /> */}
                        </div>
                  ))}

                  {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-1">
                              <button
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    disabled={safePage === 1}
                                    className="text-white/60 hover:text-white disabled:opacity-30 text-3xl leading-none px-1"
                              >
                                    <IoIosArrowRoundForward className="rotate-180" />
                              </button>

                              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                    <button
                                          key={p}
                                          onClick={() => setPage(p)}
                                          className={`w-7 h-7 rounded-full text-base transition-all duration-200 ${p === safePage
                                                ? "bg-white text-primary-dark font-bold"
                                                : "text-white/50 hover:text-white"
                                                }`}
                                    >
                                          {p}
                                    </button>
                              ))}

                              <button
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={safePage === totalPages}
                                    className="text-white/60 hover:text-white disabled:opacity-30 text-3xl leading-none px-1"
                              >
                                    <IoIosArrowRoundForward />
                              </button>
                        </div>
                  )}
            </div>
      );
}
