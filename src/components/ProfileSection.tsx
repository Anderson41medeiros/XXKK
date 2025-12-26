import { Github, MapPin, Link2, Mail, Users, Twitter } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="w-full lg:w-80 shrink-0">
      {/* Avatar */}
      <div className="mb-4">
        <div className="w-full aspect-square max-w-[296px] rounded-lg border-2 border-border bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center overflow-hidden">
          <span className="text-8xl font-bold text-gradient">X</span>
        </div>
      </div>

      {/* Name & Bio */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-foreground mb-1">XXKK</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          India's leading cryptocurrency exchange. Fast, secure, and compliant digital asset trading platform built for the Indian market. 🇮🇳
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Users className="h-4 w-4" />
        <span><strong className="text-foreground">2.8k</strong> followers</span>
        <span className="mx-1">·</span>
        <span><strong className="text-foreground">15</strong> following</span>
      </div>

      {/* Info Links */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>Mumbai, India</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link2 className="h-4 w-4 shrink-0" />
          <a href="https://xxkk.in" className="text-primary hover:underline truncate">
            https://xxkk.in
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Twitter className="h-4 w-4 shrink-0" />
          <a href="#" className="text-primary hover:underline">
            @xxkk_india
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Github className="h-4 w-4 shrink-0" />
          <a href="#" className="text-primary hover:underline">
            @xxkk-exchange
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-4 w-4 shrink-0" />
          <a href="mailto:support@xxkk.in" className="text-muted-foreground hover:text-primary truncate">
            support@xxkk.in
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
            <span className="w-3 h-3 rounded-full bg-[#00ADD8]" />
            Go
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-[#dea584]" />
            Rust
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-[#563D7C]" />
            Solidity
          </div>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="mt-4 p-3 rounded-md border border-primary/30 bg-primary/5">
        <div className="flex items-center gap-2 text-sm text-primary">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 10.78l3.792-4.08-.862-.8-3.23 3.477-1.556-1.442-.817.882 2.012 1.863.33.306.33-.306z" />
          </svg>
          <span className="font-medium">Verified organization</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
