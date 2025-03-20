import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import ContextMenu from "./ContextMenu";
import { useState } from "react";

export default function OpenedFilesBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const { openedFiles } = useSelector((state: RootState) => state.fileTree);

  return (
    <div className="w-full">
      <ul
        className="flex items-center ml-8 mb-8"
        onContextMenu={(e) => {
          e.preventDefault();
          setMousePosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </ul>
      {showMenu && (
        <ContextMenu positions={mousePosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
}
