import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion as m } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

interface SearchResultBase {
  id: string;
  createdAt: string;
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

const Search = ({ value }: { value: string }) => {
  const [debouncedQuery, setDebouncedQuery] = useDebounceValue("", 300);
  useEffect(() => {
    setDebouncedQuery(value);
  }, [value, setDebouncedQuery]);

  const router = useRouter();

  const { data, isLoading } = useQuery<SearchResponse>({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      if (!debouncedQuery) {
        return {
          data: { spaces: [], articles: [], members: [] },
          pagination: { total: 0, page: 1, limit: 10, totalPages: 0 },
        };
      }

      const response = await fetch(
        `/api/search?query=${encodeURIComponent(debouncedQuery)}&type=all&page=1&limit=10`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      return response.json();
    },
    enabled: debouncedQuery.length > 0,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  // Render highlighted content or fallback to plain text
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

  // Navigate to result item
  const navigateToResult = (type: string, id: string) => {
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

  const condition =
    isLoading ||
    results.spaces.length > 0 ||
    results.articles.length > 0 ||
    results.members.length > 0;

  return (
    <AnimatePresence>
      <m.div
        initial={{ height: 0 }}
        animate={{
          height: debouncedQuery.length > 0 ? 400 : 0,
          paddingTop: debouncedQuery.length > 0 ? 10 : 0,
          paddingBottom: debouncedQuery.length > 0 ? 2 : 0,
        }}
        className="bg-muted absolute top-2 left-0 w-full z-[5] border rounded-md overflow-auto"
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
                className="space-y-4 "
              >
                {results.spaces.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Spaces
                    </h3>
                    <div className="space-y-1">
                      {results.spaces.map((space) => (
                        <m.div
                          key={space.id}
                          variants={itemVariants}
                          className="p-4 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                          onClick={() => navigateToResult("spaces", space.id)}
                        >
                          <div className="font-medium">
                            {renderHighlighted(
                              space.highlights,
                              "name",
                              space.name
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {renderHighlighted(
                              space.highlights,
                              "description",
                              space.description
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Team: {space.team.name}
                          </div>
                        </m.div>
                      ))}
                    </div>
                  </div>
                )}
                {results.articles.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Articles
                    </h3>
                    <div className="space-y-1">
                      {results.articles.map((article) => (
                        <m.div
                          key={article.id}
                          variants={itemVariants}
                          className="p-4 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                          onClick={() =>
                            navigateToResult("articles", article.id)
                          }
                        >
                          <div className="font-medium">
                            {renderHighlighted(
                              article.highlights,
                              "title",
                              article.title
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {renderHighlighted(
                              article.highlights,
                              "description",
                              article.description
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Space: {article.space.name}
                          </div>
                        </m.div>
                      ))}
                    </div>
                  </div>
                )}

                {results.members.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      Team Members
                    </h3>
                    <div className="space-y-1">
                      {results.members.map((member) => (
                        <m.div
                          key={member.id}
                          variants={itemVariants}
                          className="p-1 rounded-lg hover:bg-background cursor-pointer transition-colors"
                          onClick={() => navigateToResult("members", member.id)}
                        >
                          <div className="font-medium">
                            {renderHighlighted(
                              member.highlights,
                              "name",
                              member.user.name
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {renderHighlighted(
                              member.highlights,
                              "email",
                              member.user.email
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Team: {member.team.name}
                          </div>
                        </m.div>
                      ))}
                    </div>
                  </div>
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

export default Search;
