import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Monster Lab Simulator Tools & Wiki | Recipe Calculator & Monster Database",
    template: "%s | Monster Lab Simulator Wiki",
  },
  description:
    "The ultimate Monster Lab Simulator companion. Use our recipe calculator to find essence combinations, browse the monster database, and master team building strategies.",
  keywords: [
    "Monster Lab Simulator",
    "recipe calculator",
    "monster database",
    "essence combinations",
    "team building",
    "breeding guide",
    "monster crafting",
  ],
  openGraph: {
    type: "website",
    siteName: "Monster Lab Simulator Wiki",
    title: "Monster Lab Simulator Tools & Wiki",
    description:
      "Find the perfect essence combinations, unlock rare monsters, and build winning teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-surface-dark text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
