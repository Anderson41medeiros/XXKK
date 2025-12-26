import { Button } from "@/components/ui/button";
import { Github, Star, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
              <span className="text-lg font-bold text-primary">X</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient">XXKK</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              功能特性
            </a>
            <a href="#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              快速开始
            </a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              文档
            </a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              社区
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="github" size="sm" className="gap-2">
              <Star className="h-4 w-4" />
              <span>Star</span>
              <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">12.8k</span>
            </Button>
            <Button variant="hero" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              查看源码
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                功能特性
              </a>
              <a href="#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                快速开始
              </a>
              <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                文档
              </a>
              <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                社区
              </a>
              <div className="flex gap-3 pt-4">
                <Button variant="github" size="sm" className="flex-1">
                  <Star className="h-4 w-4 mr-2" />
                  Star
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  源码
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
