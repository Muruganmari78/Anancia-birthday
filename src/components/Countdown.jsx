import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Countdown() {
  const birthday = new Date("January 17, 2006 00:00:00").getTime();
  const now = new Date().getTime();
  const isBirthday = now >= birthday;

  const [timeLeft, setTimeLeft] = useState(birthday - now);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(birthday - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <section className="countdown-section text-center">
        <Confetti />
        <h2>🎉 Happy Birthday Madam Jii 🎉</h2>
        <p>You officially make the world brighter today.</p>
      </section>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section className="countdown-section text-center">
      <h2>Counting down to something beautiful…</h2>
      <div className="timer">
        <span>{days}d</span>
        <span>{hours}h</span>
        <span>{minutes}m</span>
        <span>{seconds}s</span>
      </div>
    </section>
  );
}
