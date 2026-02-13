import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery - Monster Lab Simulator",
  description:
    "Browse curated screenshots and in-game captures from Monster Lab Simulator. Filter by system, tag, or keyword to find the perfect visual for wiki pages, guides, and feature documentation.",
  openGraph: {
    title: "Media Gallery - Monster Lab Simulator",
    description:
      "Curated gallery of lab screenshots and in-game scenes from Monster Lab Simulator.",
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
