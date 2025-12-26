import { MapPin, Link2, Mail, Users, Twitter, Building2, Shield } from "lucide-react";

const ProfileSection = () => {
  return (
    <aside className="w-full lg:w-80 shrink-0 animate-fade-in">
      {/* Avatar */}
      <div className="mb-5">
        <div className="relative w-full aspect-square max-w-[280px] rounded-2xl border border-border/60 bg-gradient-to-br from-card to-secondary overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] font-bold text-gradient select-none">X</span>
          </div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>
      </div>

      {/* Name & Bio */}
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-foreground mb-0.5 tracking-tight">XXKK</h1>
        <p className="text-base text-muted-foreground font-light leading-relaxed">
          India's leading cryptocurrency exchange. Fast, secure, and compliant digital asset trading platform. 🇮🇳
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 mb-5 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span><span className="font-semibold text-foreground">2.8k</span> followers</span>
        </div>
        <span className="text-border">·</span>
        <span className="text-muted-foreground"><span className="font-semibold text-foreground">15</span> following</span>
      </div>

      {/* Info Links */}
      <div className="space-y-2.5 text-sm">
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <Building2 className="h-4 w-4 shrink-0" />
          <span className="text-foreground font-medium">Verified organization</span>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>Mumbai, India</span>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <Link2 className="h-4 w-4 shrink-0" />
          <a href="https://www.xxkk.com/en" className="text-primary hover:underline underline-offset-2 truncate transition-colors">
            www.xxkk.com/en
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <Twitter className="h-4 w-4 shrink-0" />
          <a href="#" className="text-primary hover:underline underline-offset-2 transition-colors">
            @xxkk_exchange
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <Mail className="h-4 w-4 shrink-0" />
          <a href="mailto:support@xxkk.com" className="text-muted-foreground hover:text-primary truncate transition-colors">
            support@xxkk.com
          </a>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="mt-6 p-3.5 rounded-xl border border-primary/20 bg-primary/5">
        <div className="flex items-center gap-2.5 text-sm text-primary">
          <Shield className="h-4 w-4 fill-primary/20" />
          <span className="font-medium">Verified organization</span>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
          This organization has been verified by the platform administrators.
        </p>
      </div>

      {/* Top Languages */}
      <div className="mt-6 pt-5 border-t border-border/60">
        <h3 className="text-sm font-semibold text-foreground mb-3">Top languages</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "TypeScript", color: "#3178c6" },
            { name: "Go", color: "#00ADD8" },
            { name: "Rust", color: "#dea584" },
            { name: "Solidity", color: "#AA6746" },
          ].map((lang) => (
            <div 
              key={lang.name}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-muted-foreground bg-secondary/60 rounded-full border border-border/40 hover:border-border transition-colors"
            >
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: lang.color }} 
              />
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSection;