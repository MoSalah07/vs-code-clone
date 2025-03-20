import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  removeContextMenuActions,
  resetFilesActions,
} from "../app/features/fileTreeSlice";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

export default function ContextMenu({
  positions: { x, y },
  setShowMenu,
}: IProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  // ================ Handlers =======================

  const onCloseAll = () => {
    dispatch(resetFilesActions());
    setShowMenu(false);
  };

  const onClose = () => {
    dispatch(removeContextMenuActions());
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
        className="bg-white text-black w-28 rounded-md p-3"
      >
        <li
          className="p-1 w-full block hover:bg-black/30 capitalize cursor-pointer transition-colors duration-300"
          onClick={onClose}
        >
          close
        </li>
        <li
          className="p-1 w-full block hover:bg-black/30 capitalize cursor-pointer transition-colors duration-300"
          onClick={onCloseAll}
        >
          close all
        </li>
      </ul>
    </div>
  );
}
