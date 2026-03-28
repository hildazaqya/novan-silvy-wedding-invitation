"use client";

import { useState, useEffect } from "react";
import { RsvpForm } from "./RsvpForm";
import { WishesList } from "./WishesList";
import type { Wish } from "@/lib/rsvp";
import { fetchWishes, submitWish } from "@/lib/rsvp";

export function RsvpWishes() {
      const [wishes, setWishes] = useState<Wish[]>([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            fetchWishes().then((data) => {
                  setWishes(data);
                  setLoading(false);
            });
      }, []);

      const addWish = async (data: Omit<Wish, "id" | "createdAt">) => {
            const ok = await submitWish(data);
            if (ok) {
                  const fresh = await fetchWishes();
                  setWishes(fresh);
            } else {
                  // Optimistic fallback
                  const optimistic: Wish = {
                        ...data,
                        id: crypto.randomUUID(),
                        createdAt: Date.now(),
                  };
                  setWishes((prev) => [optimistic, ...prev]);
            }
      };

      return (
            <main className="relative overflow-hidden bg-[url('/image/photo/WIL00739_gm_optimized.webp')] bg-position-[50%] lg:bg-center py-5 px-6 bg-cover flex flex-col">
                  <div className="absolute w-full inset-0 bg-black/50" />

                  {/* Header & Form */}
                  <div className="z-10 flex flex-col items-center text-center pt-5">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">RSVP &amp; Wishes</h2>
                        <p className="text-sm text-gray-200 max-w-90 mt-2">
                              Kepada tamu undangan yang berkenan hadir dalam acara pernikahan kami,
                              mohon kesediaannya untuk mengisi formulir konfirmasi kehadiran berikut.
                        </p>
                        <RsvpForm onSubmit={addWish} />
                  </div>

                  {/* Wishes list */}
                  <div className="z-10 flex flex-col w-full mt-6 pb-28">
                        {loading ? (
                              <p className="text-white/40 text-sm text-center mt-6">Memuat ucapan...</p>
                        ) : (
                              <WishesList wishes={wishes} />
                        )}
                  </div>
            </main>
      );
}
