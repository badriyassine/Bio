import React from "react";

const StatusIndicator = ({ statusText }) => {
  const isOnline = statusText === "Online";

  return (
    <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/5 backdrop-blur-md shadow-[inset_0_0_10px_rgba(239,68,68,0.05)]">
      {/* The Status Light */}
      <div className="relative flex h-2 w-2">
        {/* Outer Glow Ring */}
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
          isOnline ? "bg-red-500" : "bg-slate-600"
        }`}></span>
        
        {/* Solid Core */}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${
          isOnline ? "bg-red-600 shadow-[0_0_10px_#dc2626]" : "bg-slate-700"
        }`}></span>
      </div>

      {/* Status Text */}
      <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${
        isOnline ? "text-red-500" : "text-slate-500"
      }`}>
        {statusText}
      </span>
    </div>
  );
};

export default StatusIndicator;