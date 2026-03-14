import React from "react";
import { socialLinksData } from "../data/socialLinks";

const SocialGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-12 items-center relative z-10">
      {socialLinksData.map((platform) => {
        const Icon = platform.icon; // Extract the component to render it
        
        return (
          <a
            key={platform.id}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center w-14 h-14 rounded-full border ${platform.borderColor} ${platform.bgColor} transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${platform.glow}`}
          >
            {platform.showTooltip && (
              <div className="absolute bottom-full mb-3 px-3 py-1.5 text-xs font-bold tracking-wider text-white bg-slate-900 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 border border-slate-700 shadow-xl">
                github.com/reactwizard
              </div>
            )}

            <Icon className={`text-2xl ${platform.iconColor} transition-all duration-300 group-hover:drop-shadow-lg`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialGrid;