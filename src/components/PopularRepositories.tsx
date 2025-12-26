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
    <section className="mb-8">
      <h2 className="text-base font-normal text-foreground mb-4">
        Popular repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularRepos.map((repo) => (
          <RepositoryCard key={repo.name} {...repo} />
        ))}
      </div>
    </section>
  );
};

export default PopularRepositories;
