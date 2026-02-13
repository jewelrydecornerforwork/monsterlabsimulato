export default function MediaHeader() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-semibold text-white">Media Gallery</h1>
        <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary-light border border-primary/30">
          Official &amp; in-game captures
        </span>
        <span className="inline-flex items-center rounded-full bg-surface-light/30 px-3 py-1 text-xs font-medium text-gray-300">
          Early Access builds
        </span>
      </div>
      <p className="text-sm text-gray-500 max-w-2xl mt-2">
        A curated collection of lab screenshots and in-game scenes from Monster Lab
        Simulator. Use these captures to illustrate wiki pages, explain lab layouts,
        and highlight specific features or systems.
      </p>
    </section>
  );
}
