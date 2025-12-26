import RepositoryCard from "./RepositoryCard";

const popularRepos = [
  {
    name: "xxkk-core",
    description: "XXKK 核心框架 - 高性能、轻量级的现代化开发工具链",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 12800,
    forks: 2100,
  },
  {
    name: "xxkk-cli",
    description: "XXKK 命令行工具，快速创建和管理项目",
    language: "Rust",
    languageColor: "#dea584",
    stars: 3200,
    forks: 420,
  },
  {
    name: "xxkk-templates",
    description: "官方项目模板集合，包含多种应用场景的起手模板",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 890,
    forks: 156,
  },
  {
    name: "xxkk-plugins",
    description: "官方插件生态系统，扩展 XXKK 的核心功能",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 650,
    forks: 89,
  },
  {
    name: "xxkk-examples",
    description: "示例项目集合，展示 XXKK 的最佳实践",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 420,
    forks: 78,
  },
  {
    name: "xxkk-docs",
    description: "XXKK 官方文档源码",
    language: "MDX",
    languageColor: "#fcb32c",
    stars: 180,
    forks: 45,
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
