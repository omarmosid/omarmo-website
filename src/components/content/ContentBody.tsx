type ContentProps = {
  html: string;
};

const ContentBody: React.FC<ContentProps> = ({ html }) => {
  return (
    <>
      <article
        className="content"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
    </>
  );
};

export { ContentBody };
