import { SelectedPage } from "@/components/main/index/hero-section/browser/pages-tabs/pages-selected.tsx";
import { UnSelectedPage } from "@/components/main/index/hero-section/browser/pages-tabs/pages-un-selected.tsx";
import { useGetPages } from "@/hooks/use-get-pages.ts";
import { AddNewPageButton } from "@/components/main/index/hero-section/browser/pages-tabs/add-new-page-button.tsx";

export const PagesTabs = () => {
  const {
    pages,
    selectedPageIndex,
    handlePageClose,
    handlePageAdd,
    setSelectedPageIndex,
  } = useGetPages();

  return (
    <div
      className={"relative z-20 flex h-full items-center gap-2 text-flower-700"}
    >
      <div className="flex h-full w-full items-start gap-1.5 bg-flower-200">
        {pages.map((page) =>
          page.index === selectedPageIndex ? (
            <SelectedPage
              key={"select" + page.index}
              handlePageClose={handlePageClose}
              handlePageSelect={setSelectedPageIndex}
              {...page}
            />
          ) : (
            <UnSelectedPage
              key={"un-select" + page.index}
              handlePageClose={handlePageClose}
              handlePageSelect={setSelectedPageIndex}
              {...page}
            />
          )
        )}
      </div>
      <AddNewPageButton handlePageAdd={handlePageAdd} />
    </div>
  );
};
