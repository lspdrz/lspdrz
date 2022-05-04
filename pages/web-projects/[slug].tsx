import Error from "next/error";
import ReactMarkdown from "react-markdown";
import client from "../../apollo-client";
import Layout from "../../components/Layout";
import { GetArticlesBySlugDocument } from "../../graphql/queries/getArticlesBySlug.generated";

const WebProjectPage = ({ article }) => {
  if (!article) {
    return <Error statusCode={404} />;
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
    query: GetArticlesBySlugDocument,
    variables: {
      filters: {
        type: {
          eq: "web_project",
        },
      },
    },
  });
  const slugs = data.articles.data.map((article) => article.attributes.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data } = await client.query({
    query: GetArticlesBySlugDocument,
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
      article: data.articles.data[0] || {}, // slug is a unique field, so should always only be one article
    },
  };
}

export default WebProjectPage;
