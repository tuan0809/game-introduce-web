import introVideo from "../../assets/video/intro.mp4";
import logo from "../../assets/logo.png"

import { useRef, useState } from "react";
import "./IntroVideo.css";

const IntroVideo = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.pause();     // ⏸ dừng
    } else {
      video.play();      // ▶ chạy
    }

    setPlaying(!playing);
  };

  return (
    <section className="intro-video-section">
      <video
        ref={videoRef}
        className="intro-video"
        src={introVideo}
        poster={logo}
        playsInline
      />
      <button className="video-play-btn" onClick={togglePlay}>
        {playing ? "⏸" : "▶"}
      </button>
    </section>
    
  );
};

export default IntroVideo;
