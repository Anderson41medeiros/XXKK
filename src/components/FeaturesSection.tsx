import { Zap, Shield, Code, Layers, Globe, Terminal, Box, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "闪电般构建速度",
    description: "基于 Rust 编写的编译器，构建速度比传统工具快 10 倍以上",
    highlight: "10x 更快"
  },
  {
    icon: Shield,
    title: "类型安全保障",
    description: "内置完整的 TypeScript 支持，从编码到运行时的全链路类型检查",
    highlight: "100% 类型安全"
  },
  {
    icon: Code,
    title: "零配置开发",
    description: "开箱即用的开发体验，无需繁琐配置即可开始编码",
    highlight: "即装即用"
  },
  {
    icon: Layers,
    title: "模块化架构",
    description: "灵活的插件系统，按需加载功能模块，保持项目轻量",
    highlight: "可扩展"
  },
  {
    icon: Globe,
    title: "国际化支持",
    description: "内置多语言支持方案，轻松构建面向全球用户的应用",
    highlight: "多语言"
  },
  {
    icon: Terminal,
    title: "强大的 CLI",
    description: "功能丰富的命令行工具，提升开发效率和自动化能力",
    highlight: "自动化"
  },
  {
    icon: Box,
    title: "优化打包",
    description: "智能代码分割和树摇优化，生成最小化的生产包",
    highlight: "极致优化"
  },
  {
    icon: Cpu,
    title: "热更新",
    description: "毫秒级热模块替换，保持应用状态的同时实时预览更改",
    highlight: "即时预览"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            为什么选择 <span className="text-gradient">XXKK</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            我们专注于提供最佳的开发体验，让你能够专注于创造价值
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {feature.highlight}
              </div>

              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
