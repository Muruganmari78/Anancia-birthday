import { useEffect, useRef } from "react";
import music from "../assets/bg-music.mp3.mp3";

export default function BackgroundMusic({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src={music} type="audio/mpeg" />
    </audio>
  );
}
