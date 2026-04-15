import Image from "next/image";

export default function Home() {
  const partyDetails = [
    { label: "Date", value: "Wednesday, April 15, 2026" },
    { label: "Time", value: "5:00 PM to 10:00 PM" },
    { label: "Place", value: "Mishika Kadari Residency" },
    { label: "Theme", value: "Balloons, bubbles, and big smiles" },
  ];

  const highlights = [
    "Cupcake decorating corner",
    "Mini dance floor for tiny feet",
  ];

  return (
    <main className="invite-shell">
      <section className="invite-hero">
        <div className="hero-copy-column">
          <div className="hero-badge">Hip hip hooray!</div>
          <p className="hero-kicker">You are invited to a joyful little party</p>
          <h1 className="hero-title">
            Mishu is turning <span>3</span>
          </h1>
          <p className="hero-copy">
            Come celebrate our sunshine girl with a bright and happy birthday
            evening full of cake, colors, laughter, games, and the sweetest
            little memories.
          </p>

          <div className="hero-actions">
            <a className="primary-pill" href="#details">
              View Party Details
            </a>
          </div>
        </div>

        <div className="hero-photo-stack">
          <div className="photo-sparkle sparkle-one" aria-hidden="true" />
          <div className="photo-sparkle sparkle-two" aria-hidden="true" />
          <div className="photo-sparkle sparkle-three" aria-hidden="true" />
          <figure className="hero-photo-frame">
            <Image
              src="/Mishu.jpeg"
              alt="Mishu smiling for her 3rd birthday invitation"
              width={1206}
              height={1386}
              priority
              className="hero-photo"
            />
          </figure>
          <div className="balloon-row" aria-hidden="true">
            <span className="balloon balloon-peach" />
            <span className="balloon balloon-yellow" />
            <span className="balloon balloon-blue" />
            <span className="balloon balloon-coral" />
          </div>
        </div>
      </section>

      <section className="detail-grid" id="details">
        {partyDetails.map((detail) => (
          <article className="detail-card" key={detail.label}>
            <p className="detail-label">{detail.label}</p>
            <p className="detail-value">{detail.value}</p>
          </article>
        ))}
      </section>

      <section className="story-band">
        <div className="story-card story-card-large">
          <p className="section-tag">Tiny Celebration, Big Memories</p>
          <h2>A sweet little day made for smiles.</h2>
          <p>
            We are planning a cheerful celebration with playful moments for the
            kids and a cozy, happy atmosphere for the whole family to enjoy
            together.
          </p>
        </div>

        <div className="story-card story-card-list">
          <p className="section-tag">Party Highlights</p>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="timeline-panel">
        <p className="section-tag">Little Party Plan</p>
        <div className="timeline-list">
          <article>
            <span>06:00 PM</span>
            <strong>Welcome hugs and playtime</strong>
          </article>
          <article>
            <span>07:00 PM</span>
            <strong>Magic moments and games</strong>
          </article>
          <article>
            <span>08:00 PM</span>
            <strong>Cake cutting for our star</strong>
          </article>
          <article>
            <span>08:30 PM</span>
            <strong>Snacks & dancing</strong>
          </article>
        </div>
      </section>
    </main>
  );
}
