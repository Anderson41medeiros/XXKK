import { Star, GitFork, Circle } from "lucide-react";

interface RepositoryCardProps {
  name: string;
  description: string;
  language?: string;
  languageColor?: string;
  stars: number;
  forks: number;
  isPublic?: boolean;
}

const RepositoryCard = ({
  name,
  description,
  language,
  languageColor = "#3178c6",
  stars,
  forks,
  isPublic = true,
}: RepositoryCardProps) => {
  return (
    <article className="group pro-card rounded-xl p-4 border-glow">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-2">
          <a
            href={`#${name}`}
            className="text-sm font-semibold text-primary hover:underline underline-offset-2 truncate transition-colors"
          >
            {name}
          </a>
          <span className="shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-full border border-border/60 text-muted-foreground bg-background/50">
            {isPublic ? "Public" : "Private"}
          </span>
        </div>
        
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
            {description}
          </p>
        )}
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
          {language && (
            <div className="flex items-center gap-1.5">
              <Circle
                className="h-2.5 w-2.5 fill-current"
                style={{ color: languageColor }}
              />
              <span>{language}</span>
            </div>
          )}
          <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Star className="h-3.5 w-3.5" />
            <span>{stars.toLocaleString()}</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
            <GitFork className="h-3.5 w-3.5" />
            <span>{forks}</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default RepositoryCard;