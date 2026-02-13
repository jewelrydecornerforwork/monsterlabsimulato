interface BreedingHeaderProps {
  recipeCount: number;
}

export default function BreedingHeader({ recipeCount }: BreedingHeaderProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-white">
        Breeding &amp; Recipe Calculator
      </h1>
      <p className="mt-2 text-sm text-gray-500 max-w-2xl">
        Combine three essences &mdash; Fire, Water, Nature, Neutral, Shadow, or Light &mdash; to
        preview which Fulus you can potentially hatch. Plan every synthesis before spending rare
        resources in your lab.
      </p>
      <span className="mt-3 inline-flex items-center rounded-full bg-surface-light/30 px-3 py-1 text-xs font-medium text-gray-300">
        {recipeCount} recipes logged
      </span>
    </section>
  );
}
