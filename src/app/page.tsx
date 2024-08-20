import ScrollButton from "./components/ScrollButton";
import RotatingNetwork from "./components/RotatingNetwork";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div id="main-container">
        <RotatingNetwork />
        <div className="header">
          <h1>Mystical Network</h1>
        </div>
        <div className="footer">
          <ScrollButton />
        </div>
      </div>

      {/* Example Content */}
      <div id="content">
        <h2>Example Content</h2>
        {[...Array(20)].map((_, index) => (
          <p key={index}>
            Content block #{index + 1}: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus interdum purus id nisi tristique, ac
            pharetra magna venenatis.
          </p>
        ))}
      </div>
    </div>
  );
}