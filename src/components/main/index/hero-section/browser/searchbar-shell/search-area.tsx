import { dummyPages } from "@/constants/index/hero/browser/data.ts";

import { useSelectedPageIndex } from "@/hooks/index/hero/browser/use-selected-page-index.tsx";
import { usePagesCount } from "@/hooks/index/hero/browser/use-pages-count.tsx";

import { DummyDot } from "./dummy-dot.tsx";

export const SearchArea = () => {
  const { selectedIndex } = useSelectedPageIndex();
  const { pagesCount } = usePagesCount();

  const url = `${pagesCount > 0 ? dummyPages[selectedIndex].url : ""}`;

  return (
    <div className="flex h-full w-full items-center justify-between rounded-full bg-flower-200 pl-2 pr-4">
      <div className={"flex items-center gap-2.5 text-sm text-flower-600"}>
        <div className="flex size-5 cursor-pointer flex-col items-center justify-center rounded-full border border-flower-950/20 bg-flower-50 opacity-75" />
        <p>{`https://searchpusher.com${url}`}</p>
      </div>
      <DummyDot />
    </div>
  );
};
