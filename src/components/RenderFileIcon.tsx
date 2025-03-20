import IconImage from "./IconImage";
import FileIcon from "./SVG/File";
import { extensionIconPath } from "../constant/index";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

export default function RenderFileIcon({ filename, isFolder, isOpen }: IProps) {
  const extension = filename.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPath, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPath[extension]}-open.svg`
        : `${extensionIconPath[extension]}.svg`
      : `${extensionIconPath[extension]}.svg`;

    return <IconImage src={iconPath} />;
  }

  if (isFolder && isOpen)
    return <IconImage src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImage src="/icons/folder-default.svg" />;
  return <FileIcon />;
}
