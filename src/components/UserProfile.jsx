import React, { useState, useEffect, useRef } from "react";
import avatarImg from "/avatar/avatar.png";
import StatusIndicator from "./StatusIndicator";
import SocialGrid from "./SocialGrid";
import ProfileStats from "./ProfileStats";
import VibeStatus from "./VibeStatus";

const UserProfile = () => {
  const words = ["YassiNe", "ERROR"];
  const [index, setIndex] = useState(0);

  const bgVideoRef = useRef(null);
  const bannerVideoRef = useRef(null);
  const readyCount = useRef(0);

  // Function to sync and play
  const syncAndPlay = () => {
    const v1 = bgVideoRef.current;
    const v2 = bannerVideoRef.current;

    if (v1 && v2) {
      v1.muted = true;
      v2.muted = true;
      v1.currentTime = 0;
      v2.currentTime = 0;

      // Wrap in a promise to catch errors
      const p1 = v1.play();
      const p2 = v2.play();

      Promise.all([p1, p2]).catch((err) => {
        console.warn("Autoplay was prevented. The user might need to click the page first.", err);
      });
    }
  };

  const handleVideoLoad = () => {
    readyCount.current += 1;
    if (readyCount.current >= 2) {
      syncAndPlay();
    }
  };

  // FALLBACK: If the events don't fire (e.g. video cached), force a check
  useEffect(() => {
    const timer = setTimeout(() => {
      if (readyCount.current < 2) {
        syncAndPlay();
      }
    }, 1000); // Wait 1 second and force start
    return () => clearTimeout(timer);
  }, []);

  // Text cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-black overflow-x-hidden relative p-4 lg:p-10">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="fixed inset-0 overflow-hidden">
        <video
          ref={bgVideoRef}
          onLoadedData={handleVideoLoad}
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110"
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

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        <div className="w-full rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden flex flex-col">
          
          {/* 2. BANNER VIDEO */}
          <div className="h-48 w-full relative overflow-hidden">
            <video
              ref={bannerVideoRef}
              onLoadedData={handleVideoLoad}
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
            <div className="relative -mt-20 mb-6 group">
              <div className="absolute -inset-4 bg-gray-600/10 rounded-full blur-2xl animate-pulse"></div>
              <img
                src={avatarImg}
                className="relative w-40 h-40 rounded-full border-[1px] border-black object-cover"
                alt="avatar"
              />
            </div>

            <div className="typing-container text-white text-5xl font-bold tracking-tighter uppercase mb-5">
              <span key={words[index]} className="writing-text">
                {words[index]}
              </span>
            </div>

            <p className="text-center text-sm text-slate-400 leading-relaxed font-medium tracking-wide mb-6">
              Full-Stack Dev <span className="text-gray-500">•</span> Gamer{" "}
              <span className="text-gray-500">•</span> Midnight Mode
            </p>

            <StatusIndicator statusText="Morocco" />

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
