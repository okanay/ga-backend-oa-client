import { MacosColorDots } from "./macos-color-dots";
import { PagesTabs } from "./pages-tabs";
import { SearchbarShell } from "./searchbar-shell";

export const Browser = () => {
  return (
    <div className="hidden w-full flex-col justify-start rounded-b-xl sm:flex">
      <div className="relative z-30 flex w-full flex-col justify-start overflow-hidden rounded-b-xl rounded-t-xl border-t border-flower-200/75">
        <div className="flex h-[2.75rem] w-full items-center justify-start rounded-b-xl rounded-t-xl bg-flower-50 pr-1 pt-1">
          <SafeBackground />
          <MacosColorDots />
          <PagesTabs />
        </div>
        <SearchbarShell />
      </div>
    </div>
  );
};

export const SafeBackground = () => {
  return (
    <div className="absolute inset-0 h-[75%] w-full rounded-t-xl bg-flower-200" />
  );
};
