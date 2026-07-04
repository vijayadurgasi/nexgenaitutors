"use client";

import { useRef } from "react";
import Script from "next/script";
import Image from "next/image";

/**
 * Vidhya avatar launcher — a large "Meet Vidhya" card (IronBorn "Atlas" style):
 * her face fills a big rounded frame, with the widget's launch button overlaid
 * near the bottom.
 *
 * The ControlShift AI widget renders its "Talk to Vidhya" button into
 * #avatar-agent-container (absolutely positioned over the image).
 *
 * Face image: public/vidhya-avatar.png (square/portrait, >=512px).
 */

const AVATAR_WIDGET_SRC =
  "https://avatar-widget.prod.controlshiftai.com/avatar-agent.js";
const AGENT_ID = "28f44e1e-5a72-4337-b8e8-a059493215eb";
const EMBED_TOKEN = "emb_zZOvjILds8R9_9nmVM_rABacYNIrvnsznDN6yvtvfsI";
const CONTAINER_SELECTOR = "#avatar-agent-container";
const AVATAR_IMAGE_SRC = "/vidhya-avatar.png";

declare global {
  interface Window {
    AvatarAgent?: {
      init: (config: Record<string, unknown>) => void;
    };
  }
}

const VidhyaWidget = () => {
  // Guard so the widget only initialises once, even if onLoad/onReady fire more than once.
  const initialisedRef = useRef(false);

  const initWidget = () => {
    if (initialisedRef.current) return;
    if (typeof window === "undefined" || !window.AvatarAgent) return;
    initialisedRef.current = true;

    window.AvatarAgent.init({
      agentId: AGENT_ID,
      embedToken: EMBED_TOKEN,
      container: CONTAINER_SELECTOR,
      enableStartForm: true,
      buttonText: "Talk to Vidhya",
      buttonColor: "#1a365d",
      buttonTextColor: "#ffffff",
      onError: (error: unknown) => console.error("[Vidhya]", error),
    });
  };

  return (
    <div className="mt-8 w-full max-w-2xl mx-auto">
      {/* Large avatar card — face fills the frame, button overlaid at the bottom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
        <Image
          src={AVATAR_IMAGE_SRC}
          alt="Vidhya, your AI learning guide"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 42rem"
        />

        {/* Bottom gradient so the button stays legible over the photo */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        {/* Status pill (top-left) */}
        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-sm px-3 py-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm font-medium text-white">
            Vidhya &middot; online now
          </span>
        </div>

        {/* Caption + launch button (bottom-center) */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-4 pb-6 text-center">
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-white drop-shadow">
            Meet Vidhya, NextGenAI Tutors Enrolment Advisor
          </p>
          {/* Widget mounts its "Talk to Vidhya" button here */}
          <div id="avatar-agent-container" className="flex justify-center" />
        </div>
      </div>

      <Script
        src={AVATAR_WIDGET_SRC}
        strategy="afterInteractive"
        onLoad={initWidget}
        onReady={initWidget}
      />
    </div>
  );
};

export default VidhyaWidget;
