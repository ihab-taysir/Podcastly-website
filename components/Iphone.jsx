import React from "react";
import { socialMedia } from "@constants/socialMedia";

const Iphone = () => {
  return (
    <div className="flex justify-center">
      <div
        className="bg-black rounded-[3rem] border-[10px] border-gray-900 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
        style={{
          width: "320px",
          height: "600px",
          minWidth: "320px",
          minHeight: "600px",
          maxWidth: "320px",
          maxHeight: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "60px",
          paddingBottom: "40px",
          paddingInline: "16px",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-xl z-10"></div>

        {/* Status Bar */}
        <div className="absolute top-2 left-4 right-7 z-30 flex justify-between items-center text-white text-[12px] opacity-70 font-mono">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <span className="w-4 h-2 bg-blue-400 rounded-sm"></span>{" "}
            {/* شبكة */}
            <span className="w-3 h-2 bg-white rounded-sm"></span>{" "}
            {/* واي فاي */}
            <div className="w-5 h-2.5 border border-white rounded-sm relative">
              <div className="w-3 h-full bg-green-400 absolute right-0"></div>{" "}
              {/* بطارية */}
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="text-center mb-4">
          <span className="text-white tracking-[0.3em] font-semibold text-sm">
            PODCASTLY
          </span>
        </div>

        {/* App Folder */}
        <div className="bg-[#2c2c2e] rounded-3xl p-4 grid grid-cols-3 gap-4">
          {socialMedia.map((app, index) => (
            <a
              key={index}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3a3a3c] rounded-xl flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform duration-300 shadow-inner"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="w-10 h-10 object-contain mb-1"
              />
              <span className="text-[10px] text-white opacity-80 text-center">
                {app.name}
              </span>
            </a>
          ))}
        </div>

        {/* Dots under folder */}
        <div className="flex justify-center gap-1 mt-4">
          <span className="w-2 h-2 bg-white rounded-full opacity-90"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
