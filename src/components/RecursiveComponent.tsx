import { useState } from "react";
import { IFile } from "../interfaces";

import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch } from "react-redux";
import {
  setClickedFileActions,
  setOpenedFilesActions,
} from "../app/features/fileTreeSlice";

interface IProps {
  fileTree: IFile;
}

export default function RecursiveComponent({ fileTree }: IProps) {
  const { isFolder, name, children, id, content } = fileTree;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handlers
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className=" mb-1.5 mt-1.5 ml-2 cursor-pointer">
      <div className="flex items-center">
        <span className="mr-2">
          {isFolder ? (
            <div onClick={toggle} className="flex items-center">
              <span className="mr-2">
                {" "}
                {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
              </span>
              {/* <FolderIcon /> */}
              <RenderFileIcon
                filename={name}
                isFolder={isFolder}
                isOpen={isOpen}
              />
              <span className="ml-1">{name}</span>
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch(setOpenedFilesActions(fileTree));
                dispatch(
                  setClickedFileActions({
                    filename: name,
                    filecontent: content,
                    activeTabId: id,
                  })
                );
              }}
              className="flex items-center mr-2"
            >
              <RenderFileIcon filename={name} />
              <span className="ml-1">{name}</span>
            </div>
          )}
        </span>
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
}
