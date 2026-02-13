import { Metadata } from "next";
import GuidesPageLayout from "@/components/guides/GuidesPageLayout";
import GuidesHeader from "@/components/guides/GuidesHeader";
import GuidesRoadmap from "@/components/guides/GuidesRoadmap";
import GuidesFocusGrid from "@/components/guides/GuidesFocusGrid";
import GuidesSystemsGrid from "@/components/guides/GuidesSystemsGrid";
import GuidesStandards from "@/components/guides/GuidesStandards";
import GuidesFeaturedList from "@/components/guides/GuidesFeaturedList";

export const metadata: Metadata = {
  title: "Lab Guides - Monster Lab Simulator",
  description:
    "Your central hub for Monster Lab Simulator guides. Find beginner walkthroughs, economy strategies, habitat layouts, combat team-building tips, and more.",
  keywords: [
    "Monster Lab Simulator guides",
    "beginner guide",
    "lab economy",
    "habitat layout",
    "combat teams",
    "essence recipes",
    "Fulu guide",
  ],
};

export default function GuidesPage() {
  return (
    <GuidesPageLayout>
      <GuidesHeader />
      <GuidesRoadmap />
      <GuidesFocusGrid />
      <GuidesSystemsGrid />
      <GuidesStandards />
      <GuidesFeaturedList />
    </GuidesPageLayout>
  );
}
