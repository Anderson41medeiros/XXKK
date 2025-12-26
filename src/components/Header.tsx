import { Button } from "@/components/ui/button";
import { Menu, X, Search, Bell, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 glass">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <a href="https://www.xxkk.com/en" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent overflow-hidden">
              <span className="text-base font-bold text-primary-foreground tracking-tight">X</span>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              XXKK
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <a href="#" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50">
              Product
            </a>
            <a href="#" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50">
              Solutions
            </a>
            <a href="#" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50">
              Resources
            </a>
            <a href="#" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50">
              Open Source
            </a>
            <a href="#" className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50">
              Pricing
            </a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xs">
            <div className="relative w-full group">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-8 pl-8 pr-10 text-sm bg-secondary/60 border border-border/60 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 focus:bg-secondary text-foreground placeholder:text-muted-foreground transition-all"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] text-muted-foreground border border-border/60 rounded bg-background/50 font-mono">
                /
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <Plus className="h-4 w-4" />
            </Button>
            <div className="w-px h-5 bg-border mx-1" />
            <Button variant="ghost" size="sm" className="h-8 text-sm">
              Sign in
            </Button>
            <Button size="sm" className="h-8 text-sm bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-9 pl-10 pr-3 text-sm bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors">
                Product
              </a>
              <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors">
                Solutions
              </a>
              <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors">
                Resources
              </a>
              <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors">
                Open Source
              </a>
              <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors">
                Pricing
              </a>
              <div className="flex gap-2 pt-4 border-t border-border/40 mt-3">
                <Button variant="outline" size="sm" className="flex-1 h-9">
                  Sign in
                </Button>
                <Button size="sm" className="flex-1 h-9 bg-primary hover:bg-primary/90 text-primary-foreground">
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