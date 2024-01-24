import { dummyPages } from "@/components/main/index/hero-section/browser/pages-tabs/data.ts";
import { useSelectedPage } from "@/hooks/use-selected-page.tsx";

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

const SearchArea = () => {
  const { selectedIndex } = useSelectedPage();

  return (
    <div className="flex h-full w-full items-center justify-between rounded-full bg-flower-200 pl-2 pr-4">
      <div className={"flex items-center gap-2.5 text-sm text-flower-600"}>
        <div className="flex size-5 cursor-pointer flex-col items-center justify-center rounded-full border border-flower-950/20 bg-flower-50 opacity-75" />
        <p>{`http://my-perfect-webpage${dummyPages[selectedIndex].url}`}</p>
      </div>
      <DummyDot />
    </div>
  );
};

const DummyDot = () => {
  return (
    <div className="size-4 cursor-pointer rounded-full border border-flower-950/10 bg-flower-400 opacity-75" />
  );
};

const LeftIcons = () => {
  return (
    <div className={"flex items-center justify-center gap-3"}>
      <DummyDot />
      <DummyDot />
      <DummyDot />
    </div>
  );
};

const RightIcons = () => {
  return (
    <div className={"flex items-center justify-center gap-3"}>
      <DummyDot />
      <DummyDot />
    </div>
  );
};
