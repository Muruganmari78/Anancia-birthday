import { useEffect, useState } from "react";
import typingSound from "../assets/type.mp3.mp3";

export default function TypingText({ text }) {
  const [displayed, setDisplayed] = useState("");
  const audio = new Audio(typingSound);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      audio.play();
      i++;
      if (i === text.length) clearInterval(interval);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return <p className="typing-text">{displayed}</p>;
}
