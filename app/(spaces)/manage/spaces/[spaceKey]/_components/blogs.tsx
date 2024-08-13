import { getNotesPerSpace } from "@/actions/note";
import CreateNewArticle from "@/components/modals/create-article";
import { Space } from "@prisma/client";
import ArticleCard from "./article";
import { getCurrentUser } from "@/lib/current-user";
import { getArticleLimit } from "@/lib/article-list";

const Blogs = async ({ space }: { userId: string; space: Space }) => {
  const user = await getCurrentUser();

  if (!user) return;

  const articles = await getNotesPerSpace(user.id, space.id);
  const remaingArticles = await getArticleLimit(user.id, space.key);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-medium flex items-center justify-between">
        <h1>Recent to oldest articles</h1>
        <CreateNewArticle
          userId={user.id}
          spaceId={space.id}
          spaceKey={space.key}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {articles?.map((article) => {
          return (
            <ArticleCard
              spaceKey={space.key}
              article={article}
              username={user.username}
              key={article.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
