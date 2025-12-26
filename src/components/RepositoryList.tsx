import { Search, ChevronDown, Star, GitFork, Circle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const repositories = [
  {
    name: "xxkk-trading-sdk",
    description: "Official XXKK Trading SDK for building trading bots and integrations with INR/USDT pairs",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1280,
    forks: 342,
    issues: 28,
    prs: 12,
    updatedAt: "Updated 3 hours ago",
  },
  {
    name: "xxkk-wallet",
    description: "Secure multi-chain wallet SDK supporting Bitcoin, Ethereum, Solana and 50+ blockchains",
    language: "Rust",
    languageColor: "#dea584",
    stars: 890,
    forks: 156,
    issues: 15,
    prs: 8,
    updatedAt: "Updated yesterday",
  },
  {
    name: "matching-engine",
    description: "High-performance order matching engine written in Go - handles 100k+ TPS",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 678,
    forks: 112,
    issues: 9,
    prs: 4,
    updatedAt: "Updated 2 days ago",
  },
  {
    name: "xxkk-api-docs",
    description: "Complete API documentation for XXKK Exchange REST and WebSocket APIs",
    language: "MDX",
    languageColor: "#fcb32c",
    stars: 456,
    forks: 89,
    issues: 6,
    prs: 3,
    updatedAt: "Updated 4 days ago",
  },
  {
    name: "smart-contracts",
    description: "Audited smart contracts for XXKK DeFi products and token bridge",
    language: "Solidity",
    languageColor: "#AA6746",
    stars: 324,
    forks: 67,
    issues: 4,
    prs: 2,
    updatedAt: "Updated last week",
  },
  {
    name: "xxkk-mobile",
    description: "React Native mobile app - Trade crypto on the go with INR deposits",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 245,
    forks: 43,
    issues: 11,
    prs: 5,
    updatedAt: "Updated 2 weeks ago",
  },
  {
    name: "kyc-sdk",
    description: "KYC verification SDK with Aadhaar and PAN integration for Indian compliance",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 189,
    forks: 34,
    issues: 3,
    prs: 1,
    updatedAt: "Updated 3 weeks ago",
  },
];

const RepositoryList = () => {
  return (
    <section>
      <h2 className="text-base font-normal text-foreground mb-4 flex items-center gap-2">
        <span className="inline-flex p-1">
          <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
        </span>
        Repositories
      </h2>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full h-8 pl-9 pr-3 text-sm bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
          Type
          <ChevronDown className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
          Language
          <ChevronDown className="h-3 w-3" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 gap-1 text-xs">
          Sort
          <ChevronDown className="h-3 w-3" />
        </Button>
      </div>

      {/* Repository Items */}
      <div className="divide-y divide-border border-t border-border">
        {repositories.map((repo) => (
          <div key={repo.name} className="py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <a
                    href={`#${repo.name}`}
                    className="text-xl font-semibold text-primary hover:underline"
                  >
                    {repo.name}
                  </a>
                  <span className="px-2 py-0.5 text-xs rounded-full border border-border text-muted-foreground">
                    Public
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 max-w-2xl">
                  {repo.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <Circle
                        className="h-3 w-3 fill-current"
                        style={{ color: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <a href="#" className="flex items-center gap-1 hover:text-primary">
                    <Star className="h-3.5 w-3.5" />
                    <span>{repo.stars.toLocaleString()}</span>
                  </a>
                  <a href="#" className="flex items-center gap-1 hover:text-primary">
                    <GitFork className="h-3.5 w-3.5" />
                    <span>{repo.forks}</span>
                  </a>
                  <a href="#" className="flex items-center gap-1 hover:text-primary">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{repo.issues}</span>
                  </a>
                  <span>{repo.updatedAt}</span>
                </div>
              </div>
              {/* Activity Graph Placeholder */}
              <div className="hidden sm:flex items-end gap-0.5 h-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-primary/60 rounded-sm"
                    style={{
                      height: `${Math.random() * 100}%`,
                      minHeight: "4px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RepositoryList;
