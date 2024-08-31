import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Symbbad",
  icons: {
    icon: "/favicon/favicon.ico",
  },
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
        <Analytics />
      </body>
    </html>
  );
}