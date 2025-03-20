import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/file.tree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFiles } = useSelector(({ fileTree }: RootState) => fileTree);

  return (
    <div className="my-5 ">
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel={true}
          defaultLayout={[30, 70]}
          leftPanel={
            <div className="w-64 p-4">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
}

export default App;
