import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jaime ludeña",
  description: "independent creative / cw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-black antialiased">{children}</body>
    </html>
  );
}
