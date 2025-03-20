import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import {
  setClickedFileActions,
  RemoveFilesActions,
  setTabIdToRemoveActions,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

export default function OpenedFilesBarTab({ file }: IProps) {
  const { id, name, content } = file;
  const dispatch = useDispatch();
  const {
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.fileTree);

  // ========= Handlers
  const onClick = () => {
    dispatch(
      setClickedFileActions({
        filecontent: content,
        filename: name,
        activeTabId: id,
      })
    );
  };

  return (
    <div
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemoveActions(id));
      }}
      style={{
        borderTop:
          id === activeTabId ? "2px solid #cf6ccf" : "2px solid transparent",
      }}
      className={`flex items-center gap-2 hover:bg-gray-800 
        transition-colors duration-100 cursor-pointer 
        px-4 py-1.5 
        `}
    >
      <RenderFileIcon filename={name} />
      <li>{name}</li>
      {/* Icon Close */}
      <span
        onClick={(e) => {
          e.stopPropagation();
          dispatch(RemoveFilesActions(id));
        }}
        className="ml-4 size-5 text-sm rounded-full bg-gray-700 hover:bg-gray-900 flex items-center justify-center"
      >
        x
      </span>
    </div>
  );
}
