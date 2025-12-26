import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Terminal, FileCode, Folder } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "安装 CLI",
    description: "使用 npm 或 yarn 全局安装 XXKK 命令行工具",
    code: "npm install -g xxkk-cli",
    icon: Terminal
  },
  {
    id: 2,
    title: "创建项目",
    description: "使用 create 命令快速生成项目模板",
    code: "xxkk create my-awesome-app",
    icon: Folder
  },
  {
    id: 3,
    title: "开始开发",
    description: "进入项目目录，启动开发服务器",
    code: "cd my-awesome-app && xxkk dev",
    icon: FileCode
  }
];

const QuickstartSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="quickstart" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">快速开始</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              只需三步，即可开始使用 XXKK 构建你的下一个项目
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative flex gap-6 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>

                  {/* Code Block */}
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border font-mono text-sm">
                    <span className="text-primary">$</span>
                    <code className="flex-1 text-foreground">{step.code}</code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      onClick={() => copyToClipboard(step.code, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.25rem] top-[4.5rem] w-0.5 h-[calc(100%-1rem)] bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              需要更多帮助？查看我们的完整文档
            </p>
            <Button variant="hero-outline" size="lg">
              阅读完整文档
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickstartSection;
