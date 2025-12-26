import { BookOpen, Box, Users, LayoutGrid } from "lucide-react";

interface TabNavProps {
  activeTab?: string;
}

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "repositories", label: "Repositories", icon: BookOpen, count: 10 },
  { id: "packages", label: "Packages", icon: Box },
  { id: "people", label: "People", icon: Users },
];

const TabNav = ({ activeTab = "overview" }: TabNavProps) => {
  return (
    <nav className="border-b border-border/60 bg-background/50 backdrop-blur-sm sticky top-14 z-40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto -mb-px scrollbar-hide">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`ml-1 px-2 py-0.5 text-xs font-medium rounded-full ${
                  activeTab === tab.id 
                    ? "bg-primary/10 text-primary" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {tab.count}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TabNav;