import { useQuery } from "@tanstack/react-query";
import { ProjectStatus } from "@workspace/db";
import { Badge } from "@workspace/ui/components/badge";
import Profile from "@workspace/ui/components/user-profile";
import { AnimatePresence, motion as m } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import SuperImage from "./image";

interface SearchResultBase {
  id: string;
  createdAt: string;
  articlesCount?: number;
  highlights?: {
    [key: string]: string[];
  };
}

interface SpaceResult extends SearchResultBase {
  name: string;
  description?: string;
  team: {
    name: string;
  };
}

interface ArticleResult extends SearchResultBase {
  title: string;
  description?: string;
  previewImage?: string;
  previewBlur?: string;
  status: ProjectStatus;
  space: {
    name: string;
  };
}

interface MemberResult extends SearchResultBase {
  role: string;
  user: {
    id: string;
    name: string;
    email: string;
    imageUrl?: string;
  };
  team: {
    name: string;
  };
}

interface SearchResults {
  spaces: SpaceResult[];
  articles: ArticleResult[];
  members: MemberResult[];
}

interface SearchResponse {
  data: SearchResults;
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  facets?: {
    types: {
      [key: string]: number;
    };
  };
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const navigateToResult = (type: string, id: string) => {
  const router = useRouter();
  switch (type) {
    case "spaces":
      router.push(`/spaces/${id}`);
      break;
    case "articles":
      router.push(`/articles/${id}`);
      break;
    case "members":
      router.push(`/members/${id}`);
      break;
  }
};

const renderHighlighted = (
  highlights: { [key: string]: string[] } | undefined,
  field: string,
  fallback: string | undefined
) => {
  const highlightText = highlights?.[field]?.[0];
  if (highlightText) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: highlightText.replace(/<em>/g, '<em style="color: blue;">'),
        }}
      />
    );
  }
  return fallback || "";
};

const Search = ({ value, teamId }: { value: string; teamId: string }) => {
  const [debouncedQuery, setDebouncedQuery] = useDebounceValue("", 300);
  useEffect(() => {
    setDebouncedQuery(value);
  }, [value, setDebouncedQuery]);

  const router = useRouter();

  const { data, isLoading } = useQuery<SearchResponse>({
    queryKey: ["search", debouncedQuery, teamId],
    queryFn: async () => {
      if (!debouncedQuery) {
        return {
          data: { spaces: [], articles: [], members: [] },
          pagination: { total: 0, page: 1, limit: 10, totalPages: 0 },
        };
      }

      const response = await fetch(
        `/api/search?query=${encodeURIComponent(debouncedQuery)}&type=all&page=1&limit=10&teamId=${teamId}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      return response.json();
    },
    enabled: debouncedQuery.length > 0 && !!teamId,
  });

  const results = data?.data || { spaces: [], articles: [], members: [] };
  const facets = data?.facets?.types || {};

  console.log(results);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const condition =
    isLoading ||
    results.spaces.length > 0 ||
    results.articles.length > 0 ||
    results.members.length > 0;

  return (
    <AnimatePresence>
      <m.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: debouncedQuery.length > 0 ? 400 : 0,
          paddingTop: debouncedQuery.length > 0 ? 30 : 0,
          paddingBottom: debouncedQuery.length > 0 ? 2 : 0,
          opacity: debouncedQuery.length > 0 ? 1 : 0,
        }}
        className="bg-muted absolute top-2 left-1/2 -translate-x-1/2  right-1/2 w-full z-[5] border rounded-md overflow-auto"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <m.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-full"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </m.div>
          ) : debouncedQuery ? (
            condition ? (
              <m.div
                key="results"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col divide-y"
              >
                {results.spaces.length > 0 && (
                  <SpacesList spaces={results.spaces} />
                )}
                {results.articles.length > 0 && (
                  <ArticlesList articles={results.articles} />
                )}

                {results.members.length > 0 && (
                  <MembersList members={results.members} />
                )}
              </m.div>
            ) : (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-8"
              >
                Nothing found for this search
              </m.div>
            )
          ) : null}
        </AnimatePresence>
      </m.div>
    </AnimatePresence>
  );
};

const MembersList = ({ members }: { members: MemberResult[] }) => {
  return (
    <div className="p-2 flex flex-col gap-2">
      <ItemHeader title="Members" count={members.length} />
      <ul className="flex flex-col gap-1">
        {members.map((member) => (
          <li
            key={member.id}
            className="flex items-center gap-2 bg-transparent hover:bg-background p-1 rounded cursor-pointer"
          >
            <Profile
              name={member.user.name}
              url={member.user.imageUrl}
              size="sm"
            />
            <p className="text-sm font-medium">{member.user.name}</p>
            <p className="text-xs text-muted-foreground">{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ArticlesList = ({ articles }: { articles: ArticleResult[] }) => {
  return (
    <div className="p-4 flex flex-col">
      <ItemHeader title="Articles" count={articles.length} />
      <ul className="flex flex-col gap-1">
        {articles.map((article) => (
          <li
            key={article.id}
            className="flex items-center gap-2 bg-transparent hover:bg-background p-1 rounded cursor-pointer"
          >
            <div className="h-12 w-20 min-w-20 relative">
              <SuperImage
                fill
                src={article.previewImage as string}
                alt={article.title}
                blurDataURL={article.previewBlur}
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-sm font-medium truncate">{article.title}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 justify-between w-full">
                <span className="truncate max-w-[180px]">
                  {article.description}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold mr-0.5 ${
                    article.status === "Published"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {article.status}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SpacesList = ({ spaces }: { spaces: SpaceResult[] }) => {
  return (
    <div className="p-2 flex flex-col">
      <ItemHeader title="Spaces" count={spaces.length} />
      <ul className="flex flex-col gap-1 divide-y">
        {spaces.map((space) => (
          <li
            key={space.id}
            className="p-2 rounded-lg hover:bg-background cursor-pointer transition-colors bg-transparent flex flex-col"
            onClick={() => navigateToResult("spaces", space.id)}
          >
            <p className="text-sm font-medium truncate">{space.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {space.description}
            </p>
            <p className="text-xs text-muted-foreground ml-auto bg-background rounded px-1 border py-0.5">
              {space.articlesCount} articles
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemHeader = ({ title, count }: { title: string; count: number }) => {
  return (
    <h3 className="flex items-center gap-2">
      {title}{" "}
      <span className="text-xs text-muted-foreground size-5 bg-background border flex items-center justify-center rounded-md font-semibold">
        {count}
      </span>
    </h3>
  );
};

export default Search;
