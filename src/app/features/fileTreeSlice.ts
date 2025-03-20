import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  filename: string;
  filecontent: string | undefined;
  activeTabId: string | null;
}

interface InitialProps {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}

const initialState: InitialProps = {
  openedFiles: [],
  clickedFile: {
    filename: "",
    filecontent: "",
    activeTabId: null,
  },
  tabIdToRemove: null,
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFilesActions: (state, action: PayloadAction<IFile>) => {
      const exists = state.openedFiles.some(
        (file) => file.id === action.payload.id
      );
      if (exists) return;
      state.openedFiles = [...state.openedFiles, { ...action.payload }];
    },
    setClickedFileActions: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    RemoveFilesActions: (state, action: PayloadAction<string>) => {
      // [1] Remove and Update State
      state.openedFiles = state.openedFiles.filter(
        (file) => file.id !== action.payload
      );

      // [2] Find Last Tab After Update
      const lastTab =
        state.openedFiles.length > 0
          ? state.openedFiles[state.openedFiles.length - 1]
          : null;
      // [3] Check if lastTab exists
      if (!lastTab) {
        state.openedFiles = [];
        state.clickedFile = {
          filename: "",
          filecontent: "",
          activeTabId: null,
        };
      } else {
        // [4] Set Last Tab Active
        state.clickedFile = {
          filename: lastTab.name,
          filecontent: lastTab.content,
          activeTabId: lastTab.id,
        };
      }
    },
    setTabIdToRemoveActions: (state, action: PayloadAction<string | null>) => {
      state.tabIdToRemove = action.payload;
    },
    removeContextMenuActions: (state) => {
      const filtred = (state.openedFiles = state.openedFiles.filter(
        (file) => file.id !== state.tabIdToRemove
      ));
      state.openedFiles = filtred;
    },
    resetFilesActions: (state) => {
      state.openedFiles = [];
    },
  },
});

export const {
  setOpenedFilesActions,
  setClickedFileActions,
  RemoveFilesActions,
  setTabIdToRemoveActions,
  removeContextMenuActions,
  resetFilesActions,
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
