type HighlightsProps = {
  data: Array<{
    title: string;
    content: JSX.Element;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extra?: JSX.Element;
  }>;
};

function HighlightSection({ data }: HighlightsProps) {
  return (
    <div className="highlight-card-list">
      {data.map((highlight) => (
        <div className="highlight-card" key={"highlight" + highlight.title}>
          <span className="highlight-title">{highlight.title}</span>
          {highlight.content}
          {highlight.extra}
        </div>
      ))}
    </div>
  );
}

export default HighlightSection;
