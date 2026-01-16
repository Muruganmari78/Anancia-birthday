import { useEffect, useState } from "react";

const wishes = [
  "May this year be gentle with your heart.",
  "You deserve happiness without conditions.",
  "Your smile carries warmth.",
  "Never doubt your worth.",
  "You bring comfort just by being yourself.",
  "May good things find you unexpectedly.",
  "Your kindness always matters.",
  "You are doing better than you think.",
  "The world feels softer because of you.",
  "Today is about celebrating you."
];

export default function WishWall() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % wishes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="wish-wall text-center">
      <h2>Take a moment…</h2>
      <p className="wish-text fade-in">{wishes[index]}</p>
      <small>(More wishes are waiting…)</small>
    </section>
  );
}
