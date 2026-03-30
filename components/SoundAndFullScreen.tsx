"use client";

import { useEffect, useRef, useState } from "react";
import { IoExpand, IoContract } from "react-icons/io5";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

export function SoundAndFullScreen() {
      const audioRef = useRef<HTMLAudioElement>(null);
      const [muted, setMuted] = useState(false);
      const [isFullscreen, setIsFullscreen] = useState(false);

      // Auto-play on mount
      useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.volume = 0.6;
            audio.play().catch(() => {
                  // Autoplay blocked — will play on first user interaction
                  const resume = () => {
                        audio.play();
                        window.removeEventListener("click", resume);
                  };
                  window.addEventListener("click", resume, { once: true });
            });
      }, []);

      // Sync muted state
      useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.muted = muted;
      }, [muted]);

      // Pause/resume on tab visibility change
      useEffect(() => {
            const handler = () => {
                  const audio = audioRef.current;
                  if (!audio) return;
                  if (document.hidden) {
                        audio.pause();
                  } else {
                        audio.play().catch(() => { });
                  }
            };
            document.addEventListener("visibilitychange", handler);
            return () => document.removeEventListener("visibilitychange", handler);
      }, []);

      // Track fullscreen changes (e.g. user presses Escape)
      useEffect(() => {
            const handler = () => setIsFullscreen(!!document.fullscreenElement);
            document.addEventListener("fullscreenchange", handler);
            return () => document.removeEventListener("fullscreenchange", handler);
      }, []);

      const toggleFullscreen = () => {
            if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen();
            } else {
                  document.exitFullscreen();
            }
      };

      return (
            <>
                  <audio
                        ref={audioRef}
                        src="/song/Glenn Samuel - Will U (Official Lyric Video).mp3"
                        loop
                        preload="auto"
                  />

                  <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2">
                        <button
                              onClick={toggleFullscreen}
                              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                              className="hidden lg:flex w-12 h-12 rounded-full bg-primary-medium/80 backdrop-blur-sm text-white items-center justify-center shadow-lg hover:bg-primary-medium transition-colors"
                        >
                              {isFullscreen ? <IoContract size={20} /> : <IoExpand size={20} />}
                        </button>

                        <button
                              onClick={() => setMuted((m) => !m)}
                              aria-label={muted ? "Unmute" : "Mute"}
                              className="w-12 h-12 rounded-full bg-primary-medium/80 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:bg-primary-medium transition-colors"
                        >
                              {muted ? <HiSpeakerXMark size={20} /> : <HiSpeakerWave size={20} />}
                        </button>
                  </div>
            </>
      );
}
