"use client";

import { useState } from "react";
import type { Wish } from "@/lib/rsvp";

type Props = {
      onSubmit: (data: Omit<Wish, "id" | "createdAt">) => void;
};

export function RsvpForm({ onSubmit }: Props) {
      const [name, setName] = useState("");
      const [message, setMessage] = useState("");
      const [attendance, setAttendance] = useState("");

      const wordCount =
            message.trim() === "" ? 0 : message.trim().split(/\s+/).length;

      const isValid = name.trim() && message.trim() && attendance;

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (!isValid) return;
            onSubmit({
                  name: name.trim(),
                  message: message.trim(),
                  attendance: attendance as Wish["attendance"],
            });
            setName("");
            setMessage("");
            setAttendance("");
      };

      return (
            <form onSubmit={handleSubmit} className="w-full flex text-sm flex-col gap-3 mt-5">
                  <input
                        type="text"
                        placeholder="Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-lg px-4 py-3 w-full outline-none focus:border-white/70 transition-colors"
                        required
                  />

                  <div className="relative">
                        <textarea
                              placeholder="Ucapan (Max. 100 Kata)"
                              value={message}
                              onChange={(e) => {
                                    const words =
                                          e.target.value.trim() === ""
                                                ? []
                                                : e.target.value.trim().split(/\s+/);
                                    if (words.length <= 100) setMessage(e.target.value);
                              }}
                              rows={5}
                              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 rounded-lg px-4 py-3 pb-8 w-full outline-none focus:border-white/70 transition-colors resize-none"
                              required
                        />
                        <span className="absolute bottom-3 right-3 text-white/40 text-xs">
                              {wordCount}/100
                        </span>
                  </div>

                  <div className="relative">
                        <select
                              value={attendance}
                              onChange={(e) => setAttendance(e.target.value)}
                              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg px-4 py-3 w-full outline-none focus:border-white/70 transition-colors appearance-none cursor-pointer"
                              required
                        >
                              <option value="" disabled className="bg-gray-900 text-white/60">
                                    Konfirmasi Kehadiran
                              </option>
                              <option value="hadir" className="bg-gray-900 text-white">
                                    Hadir
                              </option>
                              <option value="tidak_hadir" className="bg-gray-900 text-white">
                                    Tidak Hadir
                              </option>
                              <option value="belum_pasti" className="bg-gray-900 text-white">
                                    Belum Pasti
                              </option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60 text-xs">
                              ▼
                        </span>
                  </div>

                  <div className="flex justify-end">
                        <button
                              type="submit"
                              disabled={!isValid}
                              className="bg-primary-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                              Kirim
                        </button>
                  </div>
            </form>
      );
}
