import React from "react";
import VideoHeroText from "./VideoHeroText";
const video = "https://firebasestorage.googleapis.com/v0/b/lotuswebsites.firebasestorage.app/o/Earth.mp4?alt=media&token=eb4b3e88-1400-4e12-b0ad-c7fee4a46cc5"

const VideoHero = () => {

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background hero video"
      >
        <source
          src={video}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <VideoHeroText />
    </section>
  );
};

export default VideoHero;
