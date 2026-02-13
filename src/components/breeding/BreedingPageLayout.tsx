interface BreedingPageLayoutProps {
  children: React.ReactNode;
}

export default function BreedingPageLayout({ children }: BreedingPageLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">{children}</div>
    </div>
  );
}
