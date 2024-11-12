import Error from "next/error";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import client from "../../apollo-client";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";
import { ArticleEntity } from "../../graphql/generated/graphql-types.generated";
import { GetArticlesBySlugDocument } from "../../graphql/queries/getArticlesBySlug.generated";

type WebProjectsPageProps = { article: ArticleEntity };

const WebProjectPage = ({ article }: WebProjectsPageProps) => {
  if (!article || !article.attributes) {
    return <Error statusCode={404} />;
  }
  const { title, content } = article.attributes;
  const [cookies, setCookie] = useCookies(["lspdrzBw"]);
  const [blackAndWhiteArticle, setBlackAndWhiteArticle] = useState(false);
  /* 
    Using cookies with pre-rendered pages can result in differing outputs on the client and server.
    This is a fix to persist the b&w user choice. See https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div
  */
  useEffect(() => {
    setBlackAndWhiteArticle(cookies.lspdrzBw);
  }, [cookies.lspdrzBw]);

  return (
    content && (
      <Layout title="LP | Web Projects">
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <h1 className="text-3xl italic p-2 prose border-2 border-lspdrz-pink flex-1">
              {title}
            </h1>
            <h1
              suppressHydrationWarning // Suppressing the warning because of the fix in above useEffect
              className="text-xl cursor-pointer italic p-2 pt-3 prose border-2 border-lspdrz-pink"
              onClick={() =>
                setCookie("lspdrzBw", blackAndWhiteArticle ? "false" : "true", {
                  sameSite: "lax",
                })
              }
            >
              {cookies.lspdrzBw !== "true"
                ? "I prefer to read in b&w"
                : "Not anymore"}
            </h1>
          </div>
          <article
            className={`prose p-2 border-2 border-lspdrz-pink min-w-full ${
              blackAndWhiteArticle ? "bg-white prose-invert" : ""
            }`}
          >
            <Markdown markdown={{ content }} />
          </article>
        </div>
      </Layout>
    )
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
  const slugs = data.articles.data.map(
    (article: ArticleEntity) => article.attributes && article.attributes.slug
  );
  const paths = slugs.map((slug: string) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
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
