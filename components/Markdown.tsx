// Markdown.tsx
// Wrapper class to add anchors to headers
// Solution found here: https://amirardalan.com/blog/generate-blog-heading-anchors-in-react-markdown
import ReactMarkdown from "react-markdown";
import generateSlug from "../utils/generateSlug";

const Markdown = ({ markdown }: { markdown: { content: string } }) => {
  const MarkdownComponents: object = {
    h2: (props: any) => {
      const arr = props.children;
      let heading = "";

      for (let i = 0; i < arr.length; i++) {
        if (arr[i]?.type !== undefined) {
          for (let j = 0; j < arr[i].props.children.length; j++) {
            heading += arr[i]?.props?.children[0];
          }
        } else heading += arr[i];
      }

      const slug = generateSlug(heading);
      return (
        <h3 id={slug}>
          <a href={`#${slug}`} {...props}></a>
        </h3>
      );
    },
  };

  return (
    <ReactMarkdown components={MarkdownComponents}>
      {markdown.content}
    </ReactMarkdown>
  );
};

export default Markdown;
