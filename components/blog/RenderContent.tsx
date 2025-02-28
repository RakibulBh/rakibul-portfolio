import mermaid from "mermaid";
import { useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { duotoneSea } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({
  code,
  language = "go",
}: {
  code: string | undefined;
  language: string | undefined;
}) => (
  <SyntaxHighlighter language={language} style={duotoneSea}>
    {code}
  </SyntaxHighlighter>
);

export const MermaidChart = ({ chart }: { chart: string | undefined }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid" ref={chartRef}>
      {chart}
    </div>
  );
};
