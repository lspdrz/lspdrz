import Link from "next/link";
import client from "../../apollo-client";
import Layout from "../../components/Layout";
import { ArticleEntity } from "../../graphql/generated/graphql-types.generated";
import { ArticlesDocument } from "../../graphql/queries/getArticles.generated";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";

type WebProjectsPageProps = { articles: ArticleEntity[] };

const WebProjectsPage = ({ articles }: WebProjectsPageProps) => {
  const darkMode = useContext(DarkModeContext);
  const borderColor = darkMode ? "border-lspdrz-pink" : "border-black";

  return (
    <Layout title="LP | Web Projects">
      <div className="pt-2">
        {articles.map(
          (article, index) =>
            article.attributes && (
              <Link
                key={`article-${index}`}
                href={`/web-projects/${article.attributes.slug}`}
              >
                <div className={`border-2 ${borderColor} cursor-pointer`}>
                  <p className="p-2 truncate">
                    <span className="italic text-xl">
                      {article.attributes.title}
                    </span>{" "}
                    | {article.attributes.content}
                  </p>
                </div>
              </Link>
            )
        )}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: ArticlesDocument });

  return {
    props: {
      articles: data.articles.data.slice(0, 4),
    },
  };
}

export default WebProjectsPage;
