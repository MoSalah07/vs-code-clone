import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
}

export default function FileComponent({ fileName }: IProps) {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{fileName}</span>
    </div>
  );
}
