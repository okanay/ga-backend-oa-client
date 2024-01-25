import { SelectedPage } from "@/components/main/index/hero-section/browser/pages-tabs/pages-selected.tsx";
import { UnSelectedPage } from "@/components/main/index/hero-section/browser/pages-tabs/pages-un-selected.tsx";
import { useBrowserValue } from "@/hooks/browser-hooks/use-browser-value.ts";
import { useEffect } from "react";

export const PageList = () => {
  const { pages, selectedIndex, setSelectedIndex, handlePageClose } =
    useBrowserValue();

  useEffect(() => {
    setSelectedIndex(selectedIndex);
  }, [selectedIndex, setSelectedIndex]);

  return pages.map((page) =>
    page.index === selectedIndex ? (
      <SelectedPage
        key={"select" + page.index}
        handlePageClose={handlePageClose}
        handlePageSelect={setSelectedIndex}
        {...page}
      />
    ) : (
      <UnSelectedPage
        key={"un-select" + page.index}
        handlePageClose={handlePageClose}
        handlePageSelect={setSelectedIndex}
        {...page}
      />
    )
  );
};
