import React from "react";
import { FaEye, FaHeart, FaShareAlt } from "react-icons/fa";

const ProfileStats = () => {
  return (
    <div>
      {/* CREATIVE FOOTER */}
      <div className="flex flex-col items-center gap-2 pt-4  border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-red-600/50"></span>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
            Created by{" "}
            <span className="text-red-600 font-black animate-pulse">ERROR</span>{" "}
            with <FaHeart className="inline text-red-600 mb-0.5" size={8} />
          </p>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-red-600/50"></span>
        </div>
        <div className="text-[7px] text-slate-700 font-mono tracking-tighter opacity-50">
          BUILD_V2.0.26 - MOROCCO_CORE
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
