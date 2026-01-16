export default function GateSection({ onUnlock }) {
  return (
    <section className="gate-section">
      <div className="gate-box">
        <h2>Before you scroll...</h2>
        <p>Take your time. This was made with care ☁️</p>
        <button className="btn-pink" onClick={onUnlock}>
          Okay, I promise
        </button>
      </div>
    </section>
  );
}
