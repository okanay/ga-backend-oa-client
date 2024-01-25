import { LeftIcons } from "@/components/main/index/hero-section/browser/searchbar-shell/left-icons.tsx";
import { SearchArea } from "@/components/main/index/hero-section/browser/searchbar-shell/search-area.tsx";
import { RightIcons } from "@/components/main/index/hero-section/browser/searchbar-shell/right-icons.tsx";

export const SearchbarShell = () => {
  return (
    <div className="relative z-20 h-[2.75rem] w-full translate-y-[-10%] rounded-b-xl rounded-t-xl border-b border-flower-950/10 bg-flower-50">
      <div className={"flex h-full w-full items-center gap-2 px-2.5 py-1.5"}>
        <LeftIcons />
        <SearchArea />
        <RightIcons />
      </div>
    </div>
  );
};
