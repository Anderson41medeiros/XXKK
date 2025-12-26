import { Download, Star, GitFork, Users } from "lucide-react";

const stats = [
  {
    icon: Download,
    value: "2M+",
    label: "每周下载量",
    description: "被全球开发者信任"
  },
  {
    icon: Star,
    value: "12.8k",
    label: "GitHub Stars",
    description: "开源社区认可"
  },
  {
    icon: GitFork,
    value: "3.2k",
    label: "Forks",
    description: "活跃的贡献者"
  },
  {
    icon: Users,
    value: "50k+",
    label: "开发者",
    description: "正在使用 XXKK"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-1 text-gradient">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
