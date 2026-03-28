"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FirstPage } from "../components/FirstPage";
import { GroomBride } from "../components/GroomBride";
import { SaveTheDate } from "../components/SaveTheDate";
import { WeddingEvent } from "../components/WeddingEvent";
import { OurMoment } from "../components/OurMoment";
import { RsvpWishes } from "../components/RsvpWishes";
import { WeddingGift } from "../components/WeddingGift";
import { LastPage } from "../components/LastPage";
import { Cover } from "../components/Cover";
import { SoundAndFullScreen } from "../components/SoundAndFullScreen";
import { FadeInSection } from "../components/FadeInSection";
import { CoverMainPage } from "@/components/CoverMainPage";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative bg-primary-light-500 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full z-10 max-w-137.5">
        <AnimatePresence>
          {!opened && (
            <motion.div
              key="cover"
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <Cover onOpen={() => setOpened(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {opened && (
          <>
            <FadeInSection><CoverMainPage /></FadeInSection>
            <FadeInSection><FirstPage /></FadeInSection>
            <FadeInSection><GroomBride /></FadeInSection>
            <FadeInSection><SaveTheDate /></FadeInSection>
            <FadeInSection><WeddingEvent /></FadeInSection>
            <FadeInSection><OurMoment /></FadeInSection>
            <FadeInSection><RsvpWishes /></FadeInSection>
            <FadeInSection><WeddingGift /></FadeInSection>
            <FadeInSection><LastPage /></FadeInSection>
          </>
        )}
      </div>
      <SoundAndFullScreen />
      <Image
        src="/image/asset/bg-flower-pattern.png"
        alt="Background Flower Pattern"
        width={1200}
        height={1200}
        className="object-cover opacity-40 fixed mix-blend-multiply w-full h-full inset-0 z-0"
      />
    </div>
  );
}

