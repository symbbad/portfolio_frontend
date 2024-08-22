import "./styles/globals.css";
import ScrollButton from "./components/ScrollButton"; 

export const metadata = {
  title: "symbbad Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* 아래로 스크롤 버튼 */}
        <ScrollButton direction="down" targetId="content" />

        {children}
        
        {/* 위로 스크롤 버튼 */}
        <ScrollButton direction="up" targetId="main-container" />
      </body>
    </html>
  );
}