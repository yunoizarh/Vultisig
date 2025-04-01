import React from "react";
import vultVideo from "../assets/Vultisig.mp4";

const VultVideo = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <video
        className="w-full sm:w-[90%] lg:w-[80%] max-w-3xl rounded-2xl shadow-lg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={vultVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VultVideo;
