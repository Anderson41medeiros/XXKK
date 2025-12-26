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
    <div className="p-4 rounded-md border border-border bg-card/30 hover:bg-card/50 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <a
          href={`#${name}`}
          className="text-primary font-semibold hover:underline truncate"
        >
          {name}
        </a>
        <span className="shrink-0 px-2 py-0.5 text-xs rounded-full border border-border text-muted-foreground">
          {isPublic ? "Public" : "Private"}
        </span>
      </div>

      {description && (
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
      )}

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        {language && (
          <div className="flex items-center gap-1">
            <Circle
              className="h-3 w-3 fill-current"
              style={{ color: languageColor }}
            />
            <span>{language}</span>
          </div>
        )}
        <a href="#" className="flex items-center gap-1 hover:text-primary">
          <Star className="h-3.5 w-3.5" />
          <span>{stars}</span>
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-primary">
          <GitFork className="h-3.5 w-3.5" />
          <span>{forks}</span>
        </a>
      </div>
    </div>
  );
};

export default RepositoryCard;
