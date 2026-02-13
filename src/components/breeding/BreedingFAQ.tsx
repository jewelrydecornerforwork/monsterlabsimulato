"use client";

import FAQ from "@/components/FAQ";

const breedingFAQItems = [
  {
    question: "Why am I not seeing any results?",
    answer:
      "Make sure all three essence slots are filled before searching. If they are, the combination might not be in our dataset yet. Try loosening your output filters (set rarity and element to \"Any\") to see if any matches appear.",
  },
  {
    question: "Are hidden or secret recipes included?",
    answer:
      "Our database only includes community-confirmed recipes. If a recipe has been publicly documented and verified by multiple players, it will appear here. Unverified or datamined recipes are not included to avoid misinformation.",
  },
  {
    question: "Does lab level affect breeding outcomes?",
    answer:
      "Yes. Each recipe has a minimum lab level requirement. You cannot create a Fulu if your lab level is below the threshold. Higher lab levels also unlock access to rarer essence types like Shadow and Light, which are needed for Epic and Legendary creatures.",
  },
  {
    question: "Can I submit my own recipe discoveries?",
    answer:
      "We are working on a community submission system. In the meantime, you can share your findings in the Monster Lab Simulator community channels and we will periodically update the database with confirmed discoveries.",
  },
  {
    question: "How does essence order affect results?",
    answer:
      "It does not. The calculator matches essences regardless of slot order. Placing Fire in Slot 1 and Water in Slot 2 produces the same result as Water in Slot 1 and Fire in Slot 2. Only the combination of three essences matters.",
  },
];

export default function BreedingFAQ() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4">
        Frequently Asked Questions
      </h2>
      <FAQ items={breedingFAQItems} />
    </section>
  );
}
