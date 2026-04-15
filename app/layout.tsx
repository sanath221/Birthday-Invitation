import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mishu Turns 3",
  description:
    "A playful birthday invitation website for a 3 year old celebration filled with colors, games, cake, and smiles.",
  openGraph: {
    title: "Mishika Kadari's 3rd Birthday Celebration",
    description:
      "Join us in celebrating our love and togetherness on April 15, 2026.",
    images: ["./Mishu.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["./Mishu.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
