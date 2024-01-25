import { AddNewPageButton } from "./add-new-page-button.tsx";
import { PageList } from "./page-list.tsx";

export const PagesTabs = () => {
  return (
    <div className="relative z-20 flex h-full items-center gap-2 text-flower-700">
      <div className="flex h-full w-full items-start gap-1.5 bg-flower-200">
        <PageList />
      </div>
      <AddNewPageButton />
    </div>
  );
};
