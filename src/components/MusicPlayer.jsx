import React, { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(15);

  const startPlayback = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Auto-play block handling
        });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      startPlayback();

      const handleFirstInteraction = () => {
        startPlayback();
        ["click", "scroll", "touchstart"].forEach(event => 
          window.removeEventListener(event, handleFirstInteraction)
        );
      };

      ["click", "scroll", "touchstart"].forEach(event => 
        window.addEventListener(event, handleFirstInteraction)
      );

      return () => {
        ["click", "scroll", "touchstart"].forEach(event => 
          window.removeEventListener(event, handleFirstInteraction)
        );
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
    <>
      <audio
        ref={audioRef}
        src="/music/music.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* FIXED TOP-RIGHT CONTROLLER */}
      <div className="fixed top-4 right-4 z-[100] flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl  shadow-2xl transition-all hover:border-gray-300/10 group">
        
        {/* PLAY/PAUSE ICON */}
        <button 
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full bg-gray-600/30 hover:bg-gray-600/40 transition-colors"
        >
          {isPlaying ? (
            <FaVolumeUp className="text-gray-100 text-xs animate-pulse" />
          ) : (
            <FaVolumeMute className="text-slate-500 text-xs" />
          )}
        </button>

        {/* VOLUME SLIDER - Reveals on hover or stays compact */}
        <div className="flex items-center w-0 overflow-hidden group-hover:w-24 transition-all duration-500 ease-in-out">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gray-300 outline-none"
          />
        </div>

        {/* SMALL VISUALIZER DOTS */}
        <div className="flex gap-0.5 h-3 items-end  pr-1">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-0.5 bg-gray-300 transition-all duration-300 ${isPlaying ? "animate-bounce" : "h-0.5 opacity-20"}`}
              style={{
                animationDelay: `${i * 0.1}s`,
                height: isPlaying ? "100%" : "20%",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
