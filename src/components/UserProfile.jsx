import { useState, useEffect, useRef } from "react";

import avatarImg from "/avatar/avatar.png";
import StatusIndicator from "./StatusIndicator";
import SocialGrid from "./SocialGrid";
import ProfileStats from "./ProfileStats";
import VibeStatus from "./VibeStatus";

const UserProfile = () => {
  const words = ["YassiNe", "ERROR"];
  const [index, setIndex] = useState(0);

  // Refs for both videos
  const bgVideoRef = useRef(null);
  const bannerVideoRef = useRef(null);

  // Corrected Video Playback Logic
  useEffect(() => {
    const playVideo = (videoRef) => {
      // Access the ACTUAL DOM element using .current
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.muted = true;
        videoElement.play().catch((err) => {
          console.warn("Autoplay blocked or interrupted:", err);
        });
      }
    };

    playVideo(bgVideoRef);
    playVideo(bannerVideoRef);
  }, []);

  // Text cycling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-black overflow-x-hidden relative p-4 lg:p-10">
      {/* 1. BACKGROUND VIDEO (Blurred to create Atmosphere) */}
      <div className="fixed inset-0 overflow-hidden">
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover  scale-110 "
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>

      <style>{`
        @keyframes typing { 0%, 10% { width: 0 } 40%, 60% { width: 100% } 90%, 100% { width: 0 } }
        .typing-container { display: inline-block; position: relative; width: 220px; height: 50px; text-align: center; }
        /* PURPLE ACCENT BORDER */
        .writing-text { 
          display: inline-block; 
          overflow: hidden; 
          white-space: nowrap; 
          border-right: 3px solid #a855f7; 
          margin: 0 auto; 
          position: absolute; 
          left: 50%; 
          transform: translateX(-50%); 
          animation: typing 4s steps(15, end) infinite; 
        }
      `}</style>

      {/* CENTERED PROFILE CARD CONTAINER */}
      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        <div className="w-full rounded-2xl border border-white/5 bg-black/20 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col">
          

          <div className="px-8 mt-30 pb-10 flex-1 flex flex-col items-center">
            {/* AVATAR WITH PURPLE AURA GLOW */}
            <div className="relative -mt-20 mb-6 group">
              <div className="absolute -inset-4 bg-gray-600/10 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={avatarImg}
                className="relative w-40 h-40 rounded-full border-[1px] border-black object-cover"
                alt="avatar"
              />
            </div>

            {/* NAME / ERROR TEXT */}
            <div className="typing-container text-white text-5xl font-bold tracking-tighter uppercase  mb-5">
              <span key={words[index]} className="writing-text">
                {words[index]}
              </span>
            </div>

            {/* PURPLE ACCENTS IN SUBTITLE */}
            <p className="text-center text-sm text-slate-400 leading-relaxed font-medium tracking-wide mb-6">
              Full-Stack Dev <span className="text-gray-500">•</span> Gamer{" "}
              <span className="text-gray-500">•</span> Midnight Mode
            </p>

            {/* STATUS INDICATOR */}
            <StatusIndicator statusText="Morocco" />

            {/* REMOVED EXTRA CARDS, FOCUSING ON MAIN UTILITIES */}
            <div className="w-full  space-y-8 max-w-md">
              <VibeStatus />
              <SocialGrid />
              <ProfileStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
