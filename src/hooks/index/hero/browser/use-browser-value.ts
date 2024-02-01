import { usePagesCount } from "@/hooks/index/hero/browser/use-pages-count.tsx";
import { usePages } from "@/hooks/index/hero/browser/use-pages.tsx";
import { useSelectedPageIndex } from "@/hooks/index/hero/browser/use-selected-page-index.tsx";

export const useBrowserValue = () => {
  const { pages, setPages, dummyPages } = usePages();
  const { pagesCount, setPagesCount } = usePagesCount();
  const { selectedIndex, setSelectedIndex } = useSelectedPageIndex();

  const handlePageClose = (index: number) => {
    const newPages = pages.filter((page) => page.index !== index);
    setPages(newPages);
    setPagesCount(pagesCount - 1);

    if (selectedIndex === index && newPages.length > 0) {
      setSelectedIndex(newPages[newPages.length - 1].index);
    }
  };

  const handlePageAdd = () => {
    const selectablePageIds = dummyPages.map((page) => page.index);
    const activePageIds = pages.map((page) => page.index);

    const availablePageIds = selectablePageIds.filter(
      (pageId) => !activePageIds.includes(pageId)
    );

    if (availablePageIds.length === 0) return;

    const randomId =
      availablePageIds[Math.floor(Math.random() * availablePageIds.length)];

    const newPage = { ...dummyPages[randomId] };

    setPages([...pages, newPage]);
    setPagesCount(pagesCount + 1);
    setSelectedIndex(dummyPages[randomId].index);
  };

  return {
    pages,
    selectedIndex,
    setSelectedIndex,
    handlePageClose,
    handlePageAdd,
  };
};
