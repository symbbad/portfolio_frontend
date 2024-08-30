import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"

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
        {children}
      </body>
    </html>
  );
}