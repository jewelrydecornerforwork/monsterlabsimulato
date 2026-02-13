export default function MediaUsagePanel() {
  return (
    <div className="rounded-xl bg-surface border border-surface-light/30 p-4 space-y-2">
      <h2 className="text-lg font-semibold text-white">Media Usage</h2>
      <div className="text-sm text-gray-400 space-y-2">
        <p>
          These captures are provided to help illustrate wiki pages, lab layout
          explanations, and feature-specific guide sections. Feel free to embed
          them wherever visual context improves understanding.
        </p>
        <p>
          When sharing screenshots outside this site, always credit the original
          source &mdash; whether that&apos;s a Steam store page, an IndieDB
          gallery, or a personal gameplay capture.
        </p>
        <p>
          If the capture comes from a specific game build or demo version,
          mention that context so readers know whether the UI or mechanics shown
          may have changed since.
        </p>
        <p>
          For the best results, link back to the relevant wiki section or guide
          when embedding a screenshot in an external article or discussion.
        </p>
      </div>
    </div>
  );
}
