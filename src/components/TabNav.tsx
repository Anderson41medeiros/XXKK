import { Star, TrendingUp, BarChart3, Briefcase } from "lucide-react";

interface TabNavProps {
  activeTab?: string;
}

const tabs = [
  { id: "favorites", label: "Favorites", icon: Star, href: "https://www.xxkk.com/en/markets" },
  { id: "spot", label: "Spot", icon: TrendingUp, href: "https://www.xxkk.com/en/spot/btc-usdt" },
  { id: "usdt-m", label: "USDT-M", icon: BarChart3, href: "https://www.xxkk.com/en/swap/btc-usdt" },
  { id: "tradfi", label: "TradFi", icon: Briefcase, href: "https://www.xxkk.com/en/tradfi" },
];

const TabNav = ({ activeTab = "favorites" }: TabNavProps) => {
  return (
    <nav className="border-b border-border/60 bg-background/50 backdrop-blur-sm sticky top-14 z-40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto -mb-px scrollbar-hide">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNav;