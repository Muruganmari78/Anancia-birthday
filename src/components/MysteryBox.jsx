import { useEffect, useState } from "react";

export default function MysteryBox() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;

      if (scrolled) {
        setUnlocked(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mystery-section text-center">
      {!unlocked ? (
        <>
          <div className="locked-box">🔒</div>
          <p>
            There’s something here…<br />
            But it unlocks only after you read everything above.
          </p>
        </>
      ) : (
        <div className="unlocked-box">
          <h3>🎁 Surprise</h3>
          <p>
            Someone genuinely wished you happiness today.<br />
            And that thought itself matters more than anything.
          </p>
        </div>
      )}
    </section>
  );
}
