interface GuidesPageLayoutProps {
  children: React.ReactNode;
}

export default function GuidesPageLayout({ children }: GuidesPageLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">{children}</div>
    </div>
  );
}
