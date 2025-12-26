import RepositoryCard from "./RepositoryCard";

const popularRepos = [
  {
    name: "xxkk-trading-sdk",
    description: "Official XXKK Trading SDK for building trading bots and integrations with INR/USDT pairs",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1280,
    forks: 342,
  },
  {
    name: "xxkk-wallet",
    description: "Secure multi-chain wallet SDK supporting Bitcoin, Ethereum, Solana and 50+ blockchains",
    language: "Rust",
    languageColor: "#dea584",
    stars: 890,
    forks: 156,
  },
  {
    name: "xxkk-api-docs",
    description: "Complete API documentation for XXKK Exchange REST and WebSocket APIs",
    language: "MDX",
    languageColor: "#fcb32c",
    stars: 456,
    forks: 89,
  },
  {
    name: "smart-contracts",
    description: "Audited smart contracts for XXKK DeFi products and token bridge",
    language: "Solidity",
    languageColor: "#AA6746",
    stars: 324,
    forks: 67,
  },
  {
    name: "xxkk-mobile",
    description: "React Native mobile app - Trade crypto on the go with INR deposits",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 245,
    forks: 43,
  },
  {
    name: "matching-engine",
    description: "High-performance order matching engine written in Go - handles 100k+ TPS",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 678,
    forks: 112,
  },
];

const PopularRepositories = () => {
  return (
    <section className="mb-10">
      <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">Pinned</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularRepos.map((repo, index) => (
          <div 
            key={repo.name} 
            className={`opacity-0 animate-fade-in stagger-${Math.min(index + 1, 6)}`}
            style={{ animationFillMode: 'forwards' }}
          >
            <RepositoryCard {...repo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRepositories;