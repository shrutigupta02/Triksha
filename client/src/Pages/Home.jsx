import home from "../assets/gemini.png";

export default function Home() {
  return (
    <div className="home">
      <div className="image-container">
        <img src={home} />
        <div className="hero-text">
          <h1>TRIKSHA</h1>
          <p>Draped in culture and couture</p>
        </div>
      </div>
      {/* <div className="home-container"></div> */}
    </div>
  );
}
