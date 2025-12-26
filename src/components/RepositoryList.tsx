import { Search, ChevronDown, Star, GitFork, Circle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const repositories = [
  {
    name: "xxkk-trading-sdk",
    description: "Official XXKK Trading SDK for building trading bots and integrations with INR/USDT pairs",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1280,
    forks: 342,
    updatedAt: "Updated 3 hours ago",
  },
  {
    name: "xxkk-wallet",
    description: "Secure multi-chain wallet SDK supporting Bitcoin, Ethereum, Solana and 50+ blockchains",
    language: "Rust",
    languageColor: "#dea584",
    stars: 890,
    forks: 156,
    updatedAt: "Updated yesterday",
  },
  {
    name: "matching-engine",
    description: "High-performance order matching engine written in Go - handles 100k+ TPS",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 678,
    forks: 112,
    updatedAt: "Updated 2 days ago",
  },
  {
    name: "xxkk-api-docs",
    description: "Complete API documentation for XXKK Exchange REST and WebSocket APIs",
    language: "MDX",
    languageColor: "#fcb32c",
    stars: 456,
    forks: 89,
    updatedAt: "Updated 4 days ago",
  },
  {
    name: "smart-contracts",
    description: "Audited smart contracts for XXKK DeFi products and token bridge",
    language: "Solidity",
    languageColor: "#AA6746",
    stars: 324,
    forks: 67,
    updatedAt: "Updated last week",
  },
  {
    name: "xxkk-mobile",
    description: "React Native mobile app - Trade crypto on the go with INR deposits",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 245,
    forks: 43,
    updatedAt: "Updated 2 weeks ago",
  },
  {
    name: "kyc-sdk",
    description: "KYC verification SDK with Aadhaar and PAN integration for Indian compliance",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 189,
    forks: 34,
    updatedAt: "Updated 3 weeks ago",
  },
];

const RepositoryList = () => {
  return (
    <section>
      <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-muted-foreground" />
        Repositories
      </h2>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-2 mb-5">
        <div className="flex-1 min-w-[200px] relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full h-9 pl-9 pr-3 text-sm bg-secondary/60 border border-border/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 text-foreground placeholder:text-muted-foreground transition-all"
          />
        </div>
        <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs border-border/60 hover:bg-secondary/80">
          Type
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </Button>
        <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs border-border/60 hover:bg-secondary/80">
          Language
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </Button>
        <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs border-border/60 hover:bg-secondary/80">
          Sort
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </Button>
      </div>

      {/* Repository Items */}
      <div className="divide-y divide-border/60 border-t border-border/60">
        {repositories.map((repo) => (
          <article key={repo.name} className="py-5 group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <a
                    href={`#${repo.name}`}
                    className="text-base font-semibold text-primary hover:underline underline-offset-2 transition-colors"
                  >
                    {repo.name}
                  </a>
                  <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-border/60 text-muted-foreground">
                    Public
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 max-w-2xl leading-relaxed">
                  {repo.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <Circle
                        className="h-3 w-3 fill-current"
                        style={{ color: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Star className="h-3.5 w-3.5" />
                    <span>{repo.stars.toLocaleString()}</span>
                  </a>
                  <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <GitFork className="h-3.5 w-3.5" />
                    <span>{repo.forks}</span>
                  </a>
                  <div className="flex items-center gap-1 text-muted-foreground/70">
                    <Clock className="h-3 w-3" />
                    <span>{repo.updatedAt}</span>
                  </div>
                </div>
              </div>
              {/* Activity Graph */}
              <div className="hidden sm:flex items-end gap-0.5 h-8 opacity-60 group-hover:opacity-100 transition-opacity">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-primary/70 rounded-sm transition-all group-hover:bg-primary"
                    style={{
                      height: `${Math.max(15, Math.random() * 100)}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
  </svg>
);

export default RepositoryList;