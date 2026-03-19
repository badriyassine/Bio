import React, { useState, useEffect, useRef } from "react";
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
  
  // Use a ref to track how many videos are ready to play
  const readyCount = useRef(0);

  // Function to sync and play both videos
  const handleVideoLoad = () => {
    readyCount.current += 1;

    // Once both (2) videos report they are ready to play
    if (readyCount.current >= 2) {
      const v1 = bgVideoRef.current;
      const v2 = bannerVideoRef.current;

      if (v1 && v2) {
        // Force both to start at the very beginning (frame 0)
        v1.currentTime = 0;
        v2.currentTime = 0;

        // Play both simultaneously
        v1.play().catch((err) => console.warn("Sync play blocked:", err));
        v2.play().catch((err) => console.warn("Sync play blocked:", err));
      }
    }
  };

  // Text cycling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-black overflow-x-hidden relative p-4 lg:p-10">
      
      {/* 1. BACKGROUND VIDEO (Blurred) */}
      <div className="fixed inset-0 overflow-hidden">
        <video
          ref={bgVideoRef}
          onCanPlay={handleVideoLoad} // Check sync
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110 blur-sm"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <style>{`
        @keyframes typing { 0%, 10% { width: 0 } 40%, 60% { width: 100% } 90%, 100% { width: 0 } }
        .typing-container { display: inline-block; position: relative; width: 220px; height: 50px; text-align: center; }
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
        <div className="w-full rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden flex flex-col">
          
          {/* 2. BANNER VIDEO */}
          <div className="h-48 w-full relative overflow-hidden">
            <video
              ref={bannerVideoRef}
              onCanPlay={handleVideoLoad} // Check sync
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70"
            >
              <source src="/video/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          <div className="px-8 pb-10 flex-1 flex flex-col items-center">
            {/* AVATAR */}
            <div className="relative -mt-20 mb-6 group">
              <div className="absolute -inset-4 bg-gray-600/10 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={avatarImg}
                className="relative w-40 h-40 rounded-full border-[1px] border-black object-cover"
                alt="avatar"
              />
            </div>

            {/* NAME / ERROR TEXT */}
            <div className="typing-container text-white text-5xl font-bold tracking-tighter uppercase mb-5">
              <span key={words[index]} className="writing-text">
                {words[index]}
              </span>
            </div>

            {/* SUBTITLE */}
            <p className="text-center text-sm text-slate-400 leading-relaxed font-medium tracking-wide mb-6">
              Full-Stack Dev <span className="text-gray-500">•</span> Gamer{" "}
              <span className="text-gray-500">•</span> Midnight Mode
            </p>

            {/* STATUS INDICATOR */}
            <StatusIndicator statusText="Morocco" />

            {/* UTILITIES */}
            <div className="w-full space-y-8 max-w-md">
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
