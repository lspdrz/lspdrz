import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../../apollo-client";
import Layout from "../../components/Layout";

const WebProjectsPage = ({ articles }) => {
  return (
    <Layout title="LP | Web Projects">
      <div className="pt-3">
        {articles.map((article, index) => (
          <Link href={`/web-projects/${article.attributes.slug}`}>
            <div
              key={`article=${index}`}
              className="border-2 border-lspdrz-pink cursor-pointer"
            >
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
  const { data } = await client.query({
    query: gql`
      query Articles {
        articles {
          data {
            attributes {
              createdAt
              slug
              title
              content
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      articles: data.articles.data.slice(0, 4),
    },
  };
}

export default WebProjectsPage;
