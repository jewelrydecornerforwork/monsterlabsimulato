import Link from "next/link";

const footerLinks = [
  {
    title: "Tools",
    links: [
      { href: "/", label: "Recipe Calculator" },
      { href: "/monsters", label: "Monster Database" },
      { href: "/media", label: "Media Gallery" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/guides", label: "Guides Hub" },
      { href: "/guide", label: "Beginner's Guide" },
      { href: "/wiki/essences-eggs", label: "Essences & Eggs" },
      { href: "/wiki/combat-teams", label: "Combat & Teams" },
      { href: "/wiki/lab-economy", label: "Lab & Economy" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "https://store.steampowered.com/app/3994610/Monster_Lab_Simulator/", label: "Steam Page" },
      { href: "#", label: "Discord" },
      { href: "#", label: "YouTube" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-surface-light/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-shadow flex items-center justify-center text-white font-bold text-sm">
                ML
              </div>
              <span className="font-bold text-lg text-white">MonsterLab Wiki</span>
            </div>
            <p className="text-sm text-gray-400">
              Your ultimate companion for Monster Lab Simulator. Find recipes, build teams, and master the lab.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-surface-light/30 text-center text-sm text-gray-500">
          <p>Monster Lab Simulator Tools & Wiki. Not affiliated with the game developers.</p>
          <p className="mt-1">Game content and assets belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
