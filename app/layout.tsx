import type { Metadata } from "next";
import { Fresca } from "next/font/google";
import "./globals.css";
import PasswordProtection from "./components/PasswordProtection";

const fresca = Fresca({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bushfire Brigade",
  description: "TA30",
  icons: {
    icon: "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/burn.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="public/logo.png" />
      <body className={fresca.className}>
        <PasswordProtection>
          <div className={fresca.className}>{children}</div>
        </PasswordProtection>
      </body>
    </html>
  );
}
