interface SEOArticleProps {
  children: React.ReactNode;
}

export default function SEOArticle({ children }: SEOArticleProps) {
  return (
    <article className="prose prose-invert prose-gray max-w-none">
      <div className="bg-surface/50 rounded-xl border border-surface-light/20 p-6 sm:p-8 text-gray-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-200 [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-primary-light [&_a]:hover:text-primary [&_strong]:text-white">
        {children}
      </div>
    </article>
  );
}
