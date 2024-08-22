import RotatingNetwork from "./components/RotatingNetwork";
import Header from "./components/Header";
export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div id="main-container">
        <RotatingNetwork />
      </div>

      <Header />
      
      {/* Example Content */}
      <div id="content">
        <h2>Example Content</h2>
      </div>
    </div>
  );
}