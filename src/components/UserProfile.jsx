import React, { useState, useEffect } from "react";
import avatarImg from "/avatar/avatar.jpg";
import StatusIndicator from "./StatusIndicator";
import MusicPlayer from "./MusicPlayer";
import SocialGrid from "./SocialGrid";
import ProfileStats from "./ProfileStats";
import {
  FaCode,
  FaTruck,
  FaCamera,
  FaGamepad,
  FaTerminal,
} from "react-icons/fa";

const UserProfile = () => {
  const words = ["YassiNe", "ERROR"];
  const [index, setIndex] = useState(0);

  const hobbies = [
    {
      name: "Coding",
      desc: "Building Systems",
      icon: FaCode,
      color: "text-red-500",
    },
    {
      name: "Photography",
      desc: "Cinematic Shots",
      icon: FaCamera,
      color: "text-red-500",
    },
    {
      name: "Trucking",
      desc: "Atlas Logistics",
      icon: FaTruck,
      color: "text-red-500",
    },
    {
      name: "Gaming",
      desc: "Midnight Setup",
      icon: FaGamepad,
      color: "text-red-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden relative p-4 lg:p-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <style>{`
        @keyframes typing { 0%, 10% { width: 0 } 40%, 60% { width: 100% } 90%, 100% { width: 0 } }
        @keyframes scan { 0% { top: -10% } 100% { top: 110% } }
        .typing-container { display: inline-block; position: relative; width: 220px; height: 50px; text-align: center; }
        .writing-text { display: inline-block; overflow: hidden; white-space: nowrap; border-right: 3px solid #ef4444; margin: 0 auto; position: absolute; left: 50%; transform: translateX(-50%); animation: typing 4s steps(15, end) infinite; }
        .loader-bar { height: 2px; background: #ef4444; animation: loading 2s ease-in-out infinite; box-shadow: 0 0 10px #ef4444; }
        @keyframes loading { 0% { width: 0%; left: 0% } 50% { width: 100%; left: 0% } 100% { width: 0%; left: 100% } }
      `}</style>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* LEFT COLUMN: IDENTITY */}
        <div className="lg:col-span-4 rounded-2xl border border-white/5 backdrop-blur-3xl bg-black/60 shadow-2xl overflow-hidden flex flex-col">
          {/* VIDEO BANNER */}
          <div className="h-40 w-full relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/banner/drift.jpg"
              className="w-full h-full object-cover opacity-70"
            >
              <source src="/video/drift.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <div className="px-8 pb-10 flex-1 flex flex-col items-center">
            <div className="relative -mt-20 mb-6 group">
              <div className="absolute -inset-2 bg-red-600/30 rounded-full blur-xl"></div>
              <img
                src={avatarImg}
                className="relative w-36 h-36 rounded-full border-[6px] border-[#080808] object-cover"
                alt="avatar"
              />
              <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-green-500 border-4 border-[#080808]"></div>
            </div>

            <div className="typing-container text-white text-4xl font-black tracking-tighter uppercase italic mb-2">
              <span key={words[index]} className="writing-text">
                {words[index]}
              </span>
            </div>

            {/* RESTORED DESCRIPTION */}
            <p className="text-center text-xs text-slate-400 leading-relaxed font-medium tracking-wide mb-6">
              Full-Stack Dev <span className="text-red-500/50">•</span> Gamer{" "}
              <span className="text-red-500/50">•</span> Midnight Mode
            </p>

            <StatusIndicator statusText="Creativity Calling" />
            <div className="w-full mt-8 space-y-6">
              <MusicPlayer />
              <SocialGrid />
              <ProfileStats />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HOBBIES CARD: BIGGER ICONS */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl flex flex-col">
            <div className="flex items-center gap-3 text-red-500 mb-8 font-black text-[10px] uppercase tracking-[0.4em]">
              <FaTerminal size={14} /> Interests
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/5 group hover:border-red-600/30 transition-all"
                >
                  <hobby.icon
                    className={`${hobby.color} text-4xl mb-4 group-hover:scale-110 transition-transform duration-500`}
                  />
                  <div className="text-[11px] font-black text-white uppercase tracking-tighter">
                    {hobby.name}
                  </div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest">
                    {hobby.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ATLAS IMAGE CARD */}
          <div className="rounded-2xl border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden relative group">
            <img
              src="/image/workstation.jpeg"
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-[5000ms]"
              alt="VTC"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
              <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-2">
                Visual Feed
              </span>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">
                The Work Station
              </h3>
            </div>
          </div>

          {/* TERMINAL: LOADING ONLY */}
          <div className="md:col-span-2 p-10 rounded-2xl border border-white/5 bg-black shadow-inner relative overflow-hidden">
            <div className="relative z-10 font-mono">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_#ef4444]"></div>
                <span className="text-xs text-slate-500 tracking-[0.2em] uppercase">
                  Kernel // Sub-System
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[10px] text-red-500 font-black uppercase tracking-widest mb-2">
                  <span>Initializing Modules...</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-white/5 h-[2px] relative">
                  <div className="loader-bar absolute top-0 left-0 h-full"></div>
                </div>
                <div className="pt-4 text-slate-600 text-[11px] space-y-1">
                  <p className="animate-pulse">
                    {" "}
                    {">"} Loading assets/cinematic_engine.dll...
                  </p>
                  <p className="opacity-50">
                    {" "}
                    {">"} Establishing secure connection to Morocco_DB...
                  </p>
                  <p className="opacity-30"> {">"} Bypassing firewall...</p>
                </div>
              </div>
            </div>
            {/* Visual Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent h-20 w-full animate-[scan_4s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
