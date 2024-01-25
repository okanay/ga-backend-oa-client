import { dummyPages } from "../../../../../../constants/main-index/browser/data.ts";

import { useSelectedPageIndex } from "@/hooks/browser-hooks/use-selected-page-index.tsx";
import { DummyDot } from "./dummy-dot.tsx";

export const SearchArea = () => {
  const { selectedIndex } = useSelectedPageIndex();

  return (
    <div className="flex h-full w-full items-center justify-between rounded-full bg-flower-200 pl-2 pr-4">
      <div className={"flex items-center gap-2.5 text-sm text-flower-600"}>
        <div className="flex size-5 cursor-pointer flex-col items-center justify-center rounded-full border border-flower-950/20 bg-flower-50 opacity-75" />
        <p>{`https://my-perfect-webpage${dummyPages[selectedIndex].url}`}</p>
      </div>
      <DummyDot />
    </div>
  );
};
