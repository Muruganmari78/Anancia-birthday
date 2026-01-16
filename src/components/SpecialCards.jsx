export default function SpecialCards() {
  const cards = [
    {
      title: "🌸 Kind Soul",
      text: "You have a gentle way of making people feel valued."
    },
    {
      title: "🌟 Positive Energy",
      text: "Your presence alone can lift the mood."
    },
    {
      title: "😄 Fun Spirit",
      text: "You bring laughter without even trying."
    },
    {
      title: "💫 Strong Heart",
      text: "You handle life with grace and confidence."
    }
  ];

  return (
    <section className="cards-section container">
      <div className="row">
        {cards.map((card, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="glass-card">
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
