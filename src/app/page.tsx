import RotatingNetwork from "./components/RotatingNetwork";
import Content from "./components/Content";
import ScrollButton from "./components/ScrollButton";

export default function HomePage() {
  return (
    <>
      {/* 첫 번째 화면 */}
      <div id="main-container">
        <RotatingNetwork />
        <ScrollButton direction="down" targetId="content" />
      </div>

      {/* 두 번째 화면 */}
      <div id="content">
        <Content />
        <ScrollButton direction="up" targetId="main-container" />
      </div>
    </>
  );
}
