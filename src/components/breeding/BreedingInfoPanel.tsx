export default function BreedingInfoPanel() {
  return (
    <div className="sticky top-24 space-y-4">
      {/* Essence Basics */}
      <div className="rounded-xl bg-surface border border-surface-light/30 p-4">
        <h3 className="text-sm font-medium text-white mb-3">Essence Basics</h3>
        <ul className="space-y-2 text-xs text-gray-400 leading-relaxed">
          <li className="flex gap-2">
            <span className="text-primary-light mt-0.5">&#8226;</span>
            Six essence types exist: Fire, Water, Nature, Neutral, Shadow, and Light. Each drives
            different Fulu families and stat profiles.
          </li>
          <li className="flex gap-2">
            <span className="text-primary-light mt-0.5">&#8226;</span>
            Every synthesis requires exactly three essences placed into the lab machine. The
            combination determines which Fulu hatches.
          </li>
          <li className="flex gap-2">
            <span className="text-primary-light mt-0.5">&#8226;</span>
            Essence order does not matter &mdash; Fire + Water + Nature gives the same result
            regardless of slot placement.
          </li>
          <li className="flex gap-2">
            <span className="text-primary-light mt-0.5">&#8226;</span>
            Higher lab levels unlock access to rarer recipes. Upgrading your lab is essential for
            Epic and Legendary Fulus.
          </li>
          <li className="flex gap-2">
            <span className="text-primary-light mt-0.5">&#8226;</span>
            Some combinations can produce multiple Fulus of different rarities. Use the rarity
            filter to narrow down what you are targeting.
          </li>
        </ul>
      </div>

      {/* Early Access Notes */}
      <div className="rounded-xl bg-surface border border-surface-light/30 p-4">
        <h3 className="text-sm font-medium text-white mb-3">Early Access &amp; Data Notes</h3>
        <div className="space-y-2 text-xs text-gray-400 leading-relaxed">
          <p>
            Monster Lab Simulator is in Early Access. Recipe data shown here is sourced from the
            community and may not reflect the latest game build.
          </p>
          <p>
            Some recipes might change, be removed, or have new ones added as the game updates.
            Always double-check results in-game before committing rare essences.
          </p>
        </div>
      </div>

      {/* Logging Findings */}
      <div className="rounded-xl bg-surface border border-surface-light/30 p-4">
        <h3 className="text-sm font-medium text-white mb-3">Logging Your Findings</h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-2">
          Discovered a new recipe? Keep track of these details:
        </p>
        <ul className="space-y-1.5 text-xs text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-gray-600">&#9744;</span>
            Which three essences you used
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-600">&#9744;</span>
            Your lab level and machine setup
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-600">&#9744;</span>
            The resulting Fulu name and rarity
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-600">&#9744;</span>
            Whether the result was consistent across multiple attempts
          </li>
        </ul>
      </div>
    </div>
  );
}
