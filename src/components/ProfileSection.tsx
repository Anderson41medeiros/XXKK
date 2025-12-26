import { Github, MapPin, Link2, Mail, Users } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="w-full lg:w-80 shrink-0">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-full aspect-square max-w-[296px] rounded-lg border-2 border-border bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <span className="text-8xl font-bold text-gradient">X</span>
        </div>
      </div>

      {/* Name & Bio */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-foreground mb-1">XXKK</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          新一代高性能开发框架。快速、轻量、类型安全的现代化开发工具链，专为追求极致效率的开发者打造。
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Users className="h-4 w-4" />
        <span><strong className="text-foreground">1.2k</strong> followers</span>
        <span className="mx-1">·</span>
        <span><strong className="text-foreground">28</strong> following</span>
      </div>

      {/* Info Links */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>Global</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link2 className="h-4 w-4 shrink-0" />
          <a href="https://xxkk.dev" className="text-primary hover:underline truncate">
            https://xxkk.dev
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Github className="h-4 w-4 shrink-0" />
          <a href="#" className="text-primary hover:underline">
            @xxkk
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4 shrink-0" />
          <a href="mailto:contact@xxkk.dev" className="text-muted-foreground hover:text-primary truncate">
            contact@xxkk.dev
          </a>
        </div>
      </div>

      {/* Top Languages */}
      <div className="mt-6 pt-4 border-t border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Top languages</h3>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-[#3178c6]" />
            TypeScript
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-[#dea584]" />
            Rust
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-[#f1e05a]" />
            JavaScript
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
