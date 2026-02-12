# Monster Lab Simulator Tools & Wiki

The ultimate companion website for [Monster Lab Simulator](https://store.steampowered.com/app/3994610/Monster_Lab_Simulator/) on Steam. Features an interactive recipe calculator, comprehensive monster database, and strategy guides.

## Features

- **Recipe Calculator** — Select 3 essences to find craftable monsters instantly
- **Monster Database** — Search and filter 18+ monsters by element, rarity, and role
- **Monster Detail Pages** — Full stats, abilities, crafting recipes, and team suggestions
- **Beginner's Guide** — Step-by-step walkthrough for new players
- **Wiki Pages** — Essences & Eggs, Combat & Teams, Lab & Economy guides
- **SEO Optimized** — Sitemap, meta tags, semantic HTML, internal linking

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: JSON files (easily replaceable with a database)
- **Deployment**: Vercel-ready

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Homepage (calculator + database)
│   ├── guide/              # Beginner's guide
│   ├── monsters/           # Monster database + detail pages
│   └── wiki/               # Essences, combat, lab guides
├── components/             # Reusable UI components
├── lib/                    # Data utilities
└── types/                  # TypeScript interfaces
data/                       # JSON data files
├── monsters.json           # 18 monsters with full stats
├── essences.json           # 6 essence types
├── recipes.json            # 8 featured recipes
└── teams.json              # 5 team compositions
```

## Deployment

```bash
npm run build
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.
