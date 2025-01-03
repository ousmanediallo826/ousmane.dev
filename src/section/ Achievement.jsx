"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
const Achievement = () => {
  const words = [
    {
      text: "Join the ",
    },
    {
      text: " Google Developer Group ",  className: "text-yellow-500 ",
    },
    {
      text: " at ",
    },
    
    {
      text: " City Tech",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] mt-[-200px]  ">
    <p className="text-gray-400 dark:text-gray-400 text-xs sm:text-base  ">
      The road to innovation starts from here
    </p>
    <TypewriterEffectSmooth words={ words } />
    <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 space-x-1 md:space-x-4">
      <button onClick={() => window.location.href = "https://gdg.community.dev/gdg-on-campus-new-york-city-college-of-technology-new-york-united-states/"} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Join now
      </button>
      <button onClick={() => window.location.href = "https://discord.gg/FsDnsMbY"} className="flex  justify-center text-center items-center w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
    <span> Discord </span>
  <img 
    src="https://static.vecteezy.com/system/resources/previews/018/930/500/non_2x/discord-logo-discord-icon-transparent-free-png.png" 
    alt="Discord Icon" width={50} height={50} 

  />
</button>

    </div>
  </div>
  );
};

export default Achievement;
