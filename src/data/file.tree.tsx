import { IFile } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const fileTree: IFile = {
  id: uuidv4(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [],
    },
    {
      name: "public",
      id: uuidv4(),
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "app",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "store.ts",
              isFolder: false,
              content: `import { configureStore } from "@reduxjs/toolkit";
import fileTreeSlice from "./features/fileTreeSlice";

export const store = configureStore({
  reducer: {
    tree: fileTreeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
`,
            },
          ],
        },
        {
          id: uuidv4(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "IconImg.tsx",
              isFolder: false,
              content: `interface IProps {
  src: string;
  className?: string;
}

const IconImg = ({ src, className = "w-6 h-w-6" }: IProps) => {
  return <img src={src} className={className} />;
};

export default IconImg;
`,
            },
            {
              id: uuidv4(),
              name: "Preview.tsx",
              isFolder: false,
              content: `import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";

const Preview = () => {
  const {
    clickedFile: { fileContent },
  } = useSelector(({ tree }: RootState) => tree);

  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={fileContent} />
    </>
  );
};

export default Preview;
`,
            },
          ],
        },
        {
          id: uuidv4(),
          name: "constants",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "index.ts",
              isFolder: false,
              content: `export const extensionIconPaths: Record<string, string> = {
  // ** Files
  js: "/icons/javascript",
  ts: "/icons/typescript",
  tsx: "/icons/react_ts",
  jsx: "/icons/react",
  html: "/icons/html",
  svg: "/icons/svg",
};
  `,
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      name: ".gitignore",
      isFolder: false,
      content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local`,
    },
    {
      id: uuidv4(),
      name: "package.json",
      isFolder: false,
      content: `{
    "name": "react-ts-alert-project",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "dependencies": {
      "@reduxjs/toolkit": "^1.9.5",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-redux": "^8.1.2",
      "react-resizable-panels": "^0.0.54",
      "react-syntax-highlighter": "^15.5.0",
      "uuid": "^9.0.0"
    }
}`,
    },
  ],
};
