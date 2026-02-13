import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breeding & Recipe Calculator - Monster Lab Simulator",
  description:
    "Use the Monster Lab Simulator Breeding & Recipe Calculator to find which Fulus you can create from any essence combination. Plan your synthesis and avoid wasting resources.",
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
