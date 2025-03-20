import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string;
}

export default function FileSyntaxHighlighter({ content }: IProps) {
  return (
    <div className="w-full h-screen">
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          backgroundColor: "transparent",
          width: "100%",
          overflowX: "auto",
          fontSize: "1.2rem",
          maxHeight: "100vh",
        }}
        showLineNumbers
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}
