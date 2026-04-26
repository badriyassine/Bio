import { FaDiscord, FaSteam, FaSpotify, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinksData = [
  {
    id: 1,
    name: "instagram",
    link: "https://www.instagram.com/yassine_.dev",
    icon: FaInstagram,
    iconColor: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
  {
    id: 2,
    name: "x",
    link: "https://x.com/ba_yassine_",
    icon: FaXTwitter,
    iconColor: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
  {
    id: 3,
    name: "discord",
    link: "https://discord.com/users/1325979065269882914",
    icon: FaDiscord,
    iconColor: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
  {
    id: 4,
    name: "steam",
    link: "https://steamcommunity.com/profiles/76561199806046820/",
    icon: FaSteam,
    iconColor: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
    showTooltip: true,
  },
  {
    id: 5,
    name: "spotify",
    link: "https://open.spotify.com/user/31t52zcahfamxhyfsssn3i3lbyx4",
    icon: FaSpotify,
    iconColor: "text-white",
    bgColor: "bg-white/5",
    borderColor: "border-white/20",
  },
];
