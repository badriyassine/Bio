import React from "react";
import { socialLinksData } from "../data/socialLinks";

const SocialGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl mx-auto mb-12 items-center relative z-10">
      {socialLinksData.map((platform) => {
        const Icon = platform.icon;

        return (
          <a
            key={platform.id}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            /* CHANGED: w-12 h-12 on mobile, md:w-14 md:h-14 on desktop */
            className={`group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full border ${platform.borderColor} ${platform.bgColor} transition-all duration-300 hover:-translate-y-2 hover:scale-110 ${platform.glow}`}
          >
            {/* CHANGED: text-lg on mobile, md:text-2xl on desktop */}
            <Icon
              className={`text-lg md:text-2xl ${platform.iconColor} transition-all duration-300 group-hover:drop-shadow-lg`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialGrid;
