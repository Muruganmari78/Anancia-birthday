import { useState } from "react";

export default function SurpriseModal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="text-center">
      <button className="btn btn-pink" onClick={() => setOpen(true)}>
        Tap this if you're smiling 😊
      </button>

      {open && (
        <div className="custom-modal">
          <div className="modal-box">
            <p>
              You may not realize it,<br />
              but you are truly appreciated.<br /><br />
              This little space exists just to remind you of that.
            </p>
            <button className="btn btn-secondary" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
