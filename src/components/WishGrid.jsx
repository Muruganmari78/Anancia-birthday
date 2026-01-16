export default function WishGrid() {
  const wishes = [
    "Peace over pressure",
    "Happiness without guilt",
    "Strength without stress",
    "Smiles without reason",
    "Dreams that feel safe",
    "People who value you",
  ];

  return (
    <section className="wish-grid">
      <h2>Wishes just for you 🌷</h2>
      <div className="grid">
        {wishes.map((w, i) => (
          <div key={i} className="wish-card">{w}</div>
        ))}
      </div>
    </section>
  );
}
