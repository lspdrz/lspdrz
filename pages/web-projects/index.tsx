import Link from "next/link";
import client from "../../apollo-client";
import Layout from "../../components/Layout";
import { ArticlesDocument } from "../../graphql/queries/getArticles.generated";

const WebProjectsPage = ({ articles }) => {
  return (
    <Layout title="LP | Web Projects">
      <div className="pt-2">
        {articles.map((article, index) => (
          <Link
            key={`article-${index}`}
            href={`/web-projects/${article.attributes.slug}`}
          >
            <div className="border-2 border-lspdrz-pink cursor-pointer">
              <p className="p-2 truncate">
                <span className="italic text-xl">
                  {article.attributes.title}
                </span>{" "}
                | {article.attributes.content}
              </p>
            </div>
          </Link>
        ))}
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
