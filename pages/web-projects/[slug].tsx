import Error from "next/error";
import { gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import client from "../../apollo-client";
import Layout from "../../components/Layout";

const WebProjectPage = ({ article, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  const { title, content } = article.attributes;
  return (
    <Layout title="LP | Web Projects">
      <div className="mt-2 flex flex-col gap-2">
        <h1 className="text-3xl italic p-2 prose border-2 border-lspdrz-pink min-w-full">
          {title}
        </h1>
        <article className="p-2 prose border-2 border-lspdrz-pink min-w-full">
          <ReactMarkdown children={content} />
        </article>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Query($filters: ArticleFiltersInput) {
        articles(filters: $filters) {
          data {
            id
            attributes {
              slug
            }
          }
        }
      }
    `,
    variables: {
      filters: {
        type: {
          eq: "web_project",
        },
      },
    },
  });
  console.log("hi");
  console.log(data);
  const slugs = data.articles.data.map((article) => article.attributes.slug);
  console.log(slugs);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data } = await client.query({
    query: gql`
      query Query($filters: ArticleFiltersInput) {
        articles(filters: $filters) {
          data {
            id
            attributes {
              title
              content
            }
          }
        }
      }
    `,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
        type: {
          eq: "web_project",
        },
      },
    },
  });

  return {
    props: {
      article: data.articles.data[0] || {},
      errorCode: data.articles.data[0] ? false : 404,
    },
  };
}

export default WebProjectPage;
