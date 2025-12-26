import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="community" className="py-16 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-lg font-bold text-primary">X</span>
              </div>
              <span className="text-xl font-bold text-gradient">XXKK</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              新一代高性能开发框架，为现代 Web 应用而生。
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">文档</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">快速开始</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API 参考</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">配置指南</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">示例项目</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">社区</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub 讨论</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord 服务器</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">贡献指南</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">行为准则</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">更多</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">博客</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">更新日志</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">路线图</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">品牌资源</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 XXKK. 基于 MIT 协议开源。
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">隐私政策</a>
            <a href="#" className="hover:text-foreground transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
