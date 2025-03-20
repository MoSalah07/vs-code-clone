import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";

export default function Preview() {
  const { clickedFile } = useSelector(({ fileTree }: RootState) => fileTree);
  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={String(clickedFile.filecontent)} />
    </>
  );
}
