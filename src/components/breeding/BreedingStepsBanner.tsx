const steps = [
  {
    label: "Step 1",
    title: "Choose Essences",
    description: "Pick three essences that match what you have in your lab.",
  },
  {
    label: "Step 2",
    title: "Set Filters",
    description: "Narrow results by rarity, element, or minimum lab level.",
  },
  {
    label: "Step 3",
    title: "Review Outputs",
    description: "Browse matching Fulus and click through to their full profiles.",
  },
];

export default function BreedingStepsBanner() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      {steps.map((step) => (
        <div
          key={step.label}
          className="flex-1 rounded-lg bg-surface border border-surface-light/30 p-4"
        >
          <p className="text-xs font-semibold text-primary-light mb-1">{step.label}</p>
          <p className="text-sm font-medium text-white mb-1">{step.title}</p>
          <p className="text-xs text-gray-500">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
