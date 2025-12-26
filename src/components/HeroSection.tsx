import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>v2.0 现已发布 - 全新架构升级</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-slide-up">
            <span className="text-gradient">XXKK</span>
            <br />
            <span className="text-foreground">新一代开发框架</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            高性能、轻量级、开箱即用的现代化开发工具链，
            <span className="text-foreground">专为追求极致效率的开发者打造</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-accent" />
              <span className="font-semibold text-foreground">10x</span> 构建速度
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">100%</span> 类型安全
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Github className="h-5 w-5" />
              <span className="font-semibold text-foreground">12.8k</span> Stars
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              立即开始
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Github className="mr-2 h-5 w-5" />
              查看 GitHub
            </Button>
          </div>

          {/* Code Preview */}
          <div className="mt-16 mx-auto max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">Terminal</span>
              </div>
              <pre className="p-6 text-left overflow-x-auto">
                <code className="text-sm font-mono">
                  <span className="text-muted-foreground"># 安装 XXKK CLI</span>
                  {"\n"}
                  <span className="text-primary">$</span> <span className="text-foreground">npm install -g xxkk</span>
                  {"\n\n"}
                  <span className="text-muted-foreground"># 创建新项目</span>
                  {"\n"}
                  <span className="text-primary">$</span> <span className="text-foreground">xxkk create my-app</span>
                  {"\n\n"}
                  <span className="text-muted-foreground"># 启动开发服务器</span>
                  {"\n"}
                  <span className="text-primary">$</span> <span className="text-foreground">cd my-app && xxkk dev</span>
                  {"\n"}
                  <span className="text-primary animate-pulse">▋</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
