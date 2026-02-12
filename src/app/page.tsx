import Link from "next/link";
import FAQ from "@/components/FAQ";
import SEOArticle from "@/components/SEOArticle";

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full rounded-xl border-2 border-dashed border-surface-light/40 bg-surface/60 flex items-center justify-center text-center p-6`}
      style={{ aspectRatio: aspect }}
    >
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}

const features = [
  {
    icon: "F",
    gradient: "gradient-fire",
    title: "20 Unique Fulu Families",
    text: "Explore 20 distinct Fulu bloodlines, each with its own look, stats, and playstyle.",
  },
  {
    icon: "S",
    gradient: "gradient-water",
    title: "80 Skills Across Elements",
    text: "Experiment with over 80 unique abilities tailored to different Fulu families and elemental types.",
  },
  {
    icon: "$",
    gradient: "gradient-nature",
    title: "Lab Orders & Economy",
    text: "Track incoming orders and grow your lab\u2019s income by delivering exactly what the market wants.",
  },
  {
    icon: "M",
    gradient: "gradient-shadow",
    title: "Unlock New Lab Wings",
    text: "Level up to open deeper sections of the lab and access advanced machines and opportunities.",
  },
  {
    icon: "R",
    gradient: "gradient-neutral",
    title: "Helper Cleaning Robots",
    text: "Hire sleek, hard-working bots to keep your lab clean, efficient, and chaos-free.",
  },
  {
    icon: "D",
    gradient: "gradient-light",
    title: "Daily & Weekly Challenges",
    text: "Take on rotating tasks that reward efficient lab management and creative monster builds.",
  },
];

const homeFaqItems = [
  {
    question: "What is a Fulu?",
    answer:
      'Fulus are the creatures you synthesize, raise, and send into battle in Monster Lab Simulator. Each Fulu belongs to a specific elemental family and comes with its own stats, abilities, and evolution potential. Think of them as the core unit of your entire lab operation \u2014 you breed them, level them up, and deploy them to fulfill orders or compete in tournaments.',
  },
  {
    question: "How do essences and eggs work?",
    answer:
      'Every Fulu starts as an egg, and every egg is created by mixing exactly three essences in your synthesis machine. The six essence types \u2014 Fire, Water, Nature, Neutral, Shadow, and Light \u2014 determine which Fulu hatches. You can also apply Amber during synthesis to boost the egg\u2019s rarity tier, which affects the monster\u2019s stat potential. Visit our <a class="text-primary-light hover:text-primary" href="/wiki/essences-eggs">Essences & Eggs Guide</a> for full details.',
  },
  {
    question: "How can this site help me?",
    answer:
      'This site provides three main tools: a <a class="text-primary-light hover:text-primary" href="/tools/recipes">Recipe Calculator</a> that shows which Fulus you can create from any essence combination, a <a class="text-primary-light hover:text-primary" href="/monsters">Monster Database</a> with full stats and roles for every Fulu, and structured <a class="text-primary-light hover:text-primary" href="/guide">guides</a> covering lab management, combat, and economy.',
  },
  {
    question: "Is the data up to date with Early Access?",
    answer:
      "This is a community-maintained wiki. We track Early Access updates and aim to keep monster stats, recipes, and guides current. If you notice outdated information, check back soon \u2014 we update regularly after each game patch.",
  },
  {
    question: "Where should I start as a new player?",
    answer:
      'Head to the <a class="text-primary-light hover:text-primary" href="/guide">Beginner\u2019s Guide</a> first \u2014 it walks you through the tutorial, your first monsters, and essential lab upgrades. After that, use the <a class="text-primary-light hover:text-primary" href="/tools/recipes">Recipe Calculator</a> to plan your next synthesis.',
  },
  {
    question: "Can I contribute data or corrections?",
    answer:
      "We\u2019re working on ways for the community to submit corrections and new data. For now, the site is maintained by a small team. Stay tuned for contribution features in a future update.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ===== 1. Hero Section ===== */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Monster Lab Simulator
                <br />
                <span className="text-primary-light">Tools & Wiki</span>
              </h1>
              <p className="text-lg text-gray-400 mb-6">
                Create, raise, and battle your own Fulus &mdash; track recipes, monsters, and lab routes in one place.
              </p>
              <ul className="space-y-2 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary-light mt-1">&#10003;</span>
                  Plan your essence recipes with an interactive calculator.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-light mt-1">&#10003;</span>
                  Browse every Fulu with stats, elements, and roles.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-light mt-1">&#10003;</span>
                  Follow quick guides for lab upgrades, combat, and economy.
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tools/recipes"
                  className="px-7 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary/25 text-center"
                >
                  Open Recipe Calculator
                </Link>
                <Link
                  href="/monsters"
                  className="px-7 py-3 bg-surface border border-surface-light/50 hover:border-primary/50 text-white font-semibold rounded-lg transition-colors text-center"
                >
                  Browse Monster Database
                </Link>
              </div>
            </div>
            {/* Right */}
            <div>
              <ImagePlaceholder label="Hero Image Placeholder &mdash; Lab overview screenshot here" aspect="16/9" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ===== 2. What is Monster Lab Simulator? ===== */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What is Monster Lab Simulator?</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  In Monster Lab Simulator you run your own creature-breeding facility. Collect elemental essences &mdash; Fire, Water, Nature, Neutral, Shadow, and Light &mdash; and combine them inside a synthesis machine to produce eggs. Each unique combination hatches a different Fulu, a monster with its own family traits, elemental affinity, and combat abilities.
                </p>
                <p>
                  Running the lab goes beyond breeding. You manage machines, keep the workspace clean with helper robots, and fulfill incoming orders to grow your economy. Every upgrade you invest in unlocks new wings of the laboratory, giving you access to rarer essences, better equipment, and more powerful recipes.
                </p>
                <p>
                  When your Fulus are ready, assemble them into teams and take on turn-based battles. Progress through story challenges, enter tournaments, and test your roster against increasingly tough opponents. Balancing lab management with smart team-building is the key to becoming the top lab owner.
                </p>
              </div>
            </div>
            <div>
              <ImagePlaceholder label="Feature Image Placeholder &mdash; Fulu lineup or key art" aspect="4/3" />
            </div>
          </div>
        </section>

        {/* ===== 3. Feature Highlights (3x2 grid) ===== */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Game Features</h2>
            <p className="text-gray-400">What makes Monster Lab Simulator stand out</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-surface rounded-xl border border-surface-light/30 p-6 hover:border-primary/40 transition-all"
              >
                <div className={`w-11 h-11 rounded-lg ${f.gradient} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 4. Tools & Guides Overview ===== */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Tools & Guides</h2>
            <p className="text-gray-400">Everything you need to master the lab</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-surface rounded-xl border border-surface-light/30 overflow-hidden flex flex-col">
              <div className="p-4">
                <ImagePlaceholder label="Calculator UI placeholder" aspect="16/10" />
              </div>
              <div className="p-6 pt-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Recipe Calculator</h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  Pick essences, see which Fulus you can hatch, and avoid wasting rare resources.
                </p>
                <Link
                  href="/tools/recipes"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Use the Calculator
                </Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-surface rounded-xl border border-surface-light/30 overflow-hidden flex flex-col">
              <div className="p-4">
                <ImagePlaceholder label="Monster grid screenshot placeholder" aspect="16/10" />
              </div>
              <div className="p-6 pt-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Monster Database</h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  Browse every Fulu with stats, elements, rarity, and recommended roles.
                </p>
                <Link
                  href="/monsters"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-surface-light hover:bg-surface-light/80 text-white text-sm font-medium rounded-lg transition-colors border border-surface-light/50"
                >
                  View All Monsters
                </Link>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-surface rounded-xl border border-surface-light/30 overflow-hidden flex flex-col">
              <div className="p-4">
                <ImagePlaceholder label="Guide page screenshot placeholder" aspect="16/10" />
              </div>
              <div className="p-6 pt-2 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Guides & Wiki</h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  Learn the essence system, lab economy, and combat strategies with quick, structured guides.
                </p>
                <Link
                  href="/guide"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-surface-light hover:bg-surface-light/80 text-white text-sm font-medium rounded-lg transition-colors border border-surface-light/50"
                >
                  Start with Beginner&apos;s Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. Core Loop Illustration ===== */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">The Core Loop</h2>
            <p className="text-gray-400">Three steps to building the ultimate monster lab</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Mix Essences",
                text: "Combine Fire, Water, Nature, Neutral, Shadow, and Light essences to create eggs.",
                placeholder: "Essence vials + machine screenshot placeholder",
              },
              {
                step: 2,
                title: "Grow Your Lab",
                text: "Upgrade machines, keep your lab clean, and fulfill orders to stabilize your economy.",
                placeholder: "Lab layout screenshot placeholder",
              },
              {
                step: 3,
                title: "Battle & Compete",
                text: "Assemble teams of Fulus and take them into turn-based battles and tournaments.",
                placeholder: "Battle UI screenshot placeholder",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4">
                  <ImagePlaceholder label={item.placeholder} aspect="16/10" />
                </div>
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 text-primary-light font-bold text-lg mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 6. FAQ ===== */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400">Answers for new players and tool users</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={homeFaqItems} />
          </div>
        </section>

        {/* ===== 7. SEO Content Block ===== */}
        <section>
          <SEOArticle>
            <h2>Monster Lab Simulator &mdash; The Essence-to-Fulu Pipeline</h2>
            <p>
              At its core, <strong>Monster Lab Simulator</strong> is a game about resource transformation. You start with raw elemental essences &mdash; Fire, Water, Nature, Neutral, Shadow, and Light &mdash; and feed them into a synthesis machine in groups of three. Each combination hatches a different Fulu, a creature tied to a specific elemental family with its own base stats, abilities, and growth curve. The sheer number of possible combinations makes planning essential, and that is exactly where our <a href="/tools/recipes">Recipe Calculator</a> comes in.
            </p>
            <p>
              Understanding which essences produce which Fulu is the single most important skill in the game. Wasting rare Shadow or Light essences on an accidental common-tier creature can set you back hours of farming. By entering your available essences into the calculator before every synthesis, you eliminate guesswork and make every crafting session count.
            </p>

            <h2>Why Monster Stats and Roles Matter</h2>
            <p>
              Not all Fulus are created equal. Each one fills a specific combat role &mdash; Tank, DPS, or Support &mdash; and those roles determine how you build your battle teams. A team of three DPS monsters might burst down weak opponents quickly but will crumble against a well-balanced squad with a dedicated Tank and Support. Our <a href="/monsters">Monster Database</a> lists every Fulu with complete stats, element, rarity, and recommended role so you can plan your roster before you ever touch the synthesis machine.
            </p>
            <p>
              Rarity also plays a major role. Common Fulus have modest stat ranges, while Legendary creatures can reach nearly double those numbers. The <strong>Amber system</strong> lets you boost egg rarity during synthesis, but Amber is scarce &mdash; so knowing exactly when and where to spend it is critical. Check our <a href="/wiki/essences-eggs">Essences &amp; Eggs Guide</a> for a full breakdown of rarity mechanics.
            </p>

            <h2>Lab Management and the Economy Loop</h2>
            <p>
              Breeding monsters is only half the game. Your lab is a living system that needs constant attention. Machines degrade, workspaces get messy, and incoming orders demand specific Fulus at specific rarities. Hiring helper cleaning robots keeps your lab running smoothly, while fulfilling orders generates the currency you need to unlock new lab wings and upgrade equipment.
            </p>
            <p>
              The economy loop is straightforward: collect essences, synthesize Fulus, sell or deploy them for currency, reinvest in lab upgrades, and repeat. The trick is optimizing each step. Our <a href="/wiki/lab-economy">Lab &amp; Economy Guide</a> walks through upgrade priorities, machine placement, and the fastest paths to self-sustaining income.
            </p>

            <h2>Combat, Teams, and Tournaments</h2>
            <p>
              When your Fulus are ready for action, the turn-based combat system puts your team-building skills to the test. Elements create a rock-paper-scissors dynamic &mdash; Fire beats Nature, Water beats Fire, Nature beats Water &mdash; while Shadow and Light counter each other. Speed determines turn order, and abilities range from direct damage to healing, shields, and debuffs.
            </p>
            <p>
              Building a balanced team means covering multiple elements, including at least one Tank and one Support alongside your damage dealers. The <a href="/wiki/combat-teams">Combat &amp; Teams Guide</a> provides sample compositions for every stage of the game, from your first PVE run to competitive PVP tournaments.
            </p>

            <h2>How This Site Helps You Play Smarter</h2>
            <p>
              Monster Lab Simulator rewards preparation. Every essence you spend, every machine you upgrade, and every team slot you fill should be a deliberate choice. This wiki gives you the data and tools to make those choices confidently:
            </p>
            <ul>
              <li><strong>Recipe Calculator</strong> &mdash; enter essences, see results, avoid waste. <a href="/tools/recipes">Try it now</a>.</li>
              <li><strong>Monster Database</strong> &mdash; full stats, elements, and roles for every Fulu. <a href="/monsters">Browse monsters</a>.</li>
              <li><strong>Beginner&apos;s Guide</strong> &mdash; a step-by-step walkthrough for your first few hours. <a href="/guide">Read the guide</a>.</li>
              <li><strong>Advanced Wiki</strong> &mdash; deep dives into <a href="/wiki/essences-eggs">essences</a>, <a href="/wiki/combat-teams">combat</a>, and <a href="/wiki/lab-economy">lab economy</a>.</li>
            </ul>
            <p>
              Whether you are hatching your first Ember Pup or chasing a Legendary Celestial Dragon, planning ahead is what separates a cluttered lab from a thriving one. Use the tools, read the guides, and make every synthesis count.
            </p>
          </SEOArticle>
        </section>
      </div>
    </div>
  );
}
