const VibeStatus = () => (
  <div className="flex justify-center items-center gap-6 sm:gap-9 my-12 px-4">
    <div className="flex flex-col items-center gap-1 group">
      <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black group-hover:text-purple-500 transition-colors">Mood</span>
      <span className="text-white text-xs font-medium italic">Quiet</span>
    </div>
    <div className="h-8 w-[1px] bg-white/5"></div>
    <div className="flex flex-col items-center gap-1 group">
      <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black group-hover:text-purple-500 transition-colors">Energy</span>
      <span className="text-white text-xs font-medium italic">Low_Battery</span>
    </div>
    <div className="h-8 w-[1px] bg-white/5"></div>
    <div className="flex flex-col items-center gap-1 group">
      <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black group-hover:text-purple-500 transition-colors">Loc</span>
      <span className="text-white text-xs font-medium italic">Shadows</span>
    </div>
  </div>
);

export default VibeStatus;