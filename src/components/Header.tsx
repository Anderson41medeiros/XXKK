import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
          <nav className="hidden md:flex items-center gap-1">
            <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Product
            </a>
            <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Open Source
            </a>
            <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search or jump to..."
                className="w-full h-8 px-3 text-sm bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 text-xs text-muted-foreground border border-border rounded">
                /
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="outline" size="sm">
              Sign up
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
            <nav className="flex flex-col gap-2">
              <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
              </a>
              <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solutions
              </a>
              <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Open Source
              </a>
              <a href="#" className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <div className="flex gap-3 pt-4 border-t border-border/50 mt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Sign in
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Sign up
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
