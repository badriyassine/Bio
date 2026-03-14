import React, { useEffect, useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(15);

  // Function to attempt playing
  const startPlayback = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Still blocked by browser, wait for next interaction
        });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;

      // 1. Try to autoplay immediately (works if they already interacted with the site)
      startPlayback();

      // 2. Global listener: Play music on the very first click anywhere on the page
      const handleFirstInteraction = () => {
        startPlayback();
        // Remove listener after first successful interaction to save performance
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("scroll", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      };

      window.addEventListener("click", handleFirstInteraction);
      window.addEventListener("scroll", handleFirstInteraction);
      window.addEventListener("touchstart", handleFirstInteraction);

      return () => {
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("scroll", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      };
    }
  }, [volume]);

  const handleVolumeChange = (e) => {
    const newVol = e.target.value;
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol / 100;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="w-full max-w-md mx-auto mb-10 flex items-center justify-between p-4 rounded-2xl bg-black/60 border border-white/5 backdrop-blur-3xl shadow-2xl group transition-all duration-500 hover:border-red-500/30 cursor-pointer select-none"
    >
      <audio
        ref={audioRef}
        src="/music/music.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* LEFT: ALBUM ART & TEXT INFO */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-18 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-xl">
          <img
            src="/cover/cover.jpg"
            alt="Cover"
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ${isPlaying ? "scale-125 rotate-3" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-bold">
              {isPlaying ? "OFF" : "ON"}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="text-[8px] uppercase tracking-[0.4em] text-red-500 font-black">
              {isPlaying ? "Playing" : "Paused"}
            </div>
            <div className="flex gap-0.5 h-2 items-end">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-0.5 bg-red-500 transition-all duration-300 ${isPlaying ? "animate-bounce" : "h-0.5 opacity-20"}`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    height: isPlaying ? "100%" : "20%",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="text-xl font-bold text-white truncate tracking-tight">
            B.O.B
          </div>
          <div className="text-[12px] text-slate-500 font-semibold uppercase tracking-wider">
            Outkast
          </div>
        </div>
      </div>

      {/* RIGHT: VOLUME CONTROL */}
      {/* RIGHT: VOLUME CONTROL - Added 'hidden lg:flex' */}
      <div
        className="hidden lg:flex flex-col items-center gap-2 px-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-16 w-8 flex items-center justify-center group/vol">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              appearance: "none",
              transform: "rotate(-90deg)",
              width: "56px",
              height: "4px",
            }}
            className="bg-slate-800 rounded-lg cursor-pointer accent-red-600 appearance-none outline-none transition-all"
          />
        </div>
        <FaVolumeUp
          className="text-slate-500 group-hover:text-red-500 transition-colors"
          size={12}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
