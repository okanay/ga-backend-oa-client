import { useState } from "react";
import { dummyPages } from "@/components/main/index/hero-section/browser/pages-tabs/data.ts";

export const useGetPages = () => {
  const [pageCount, setPageCount] = useState(dummyPages.length - 1);
  const [pages, setPages] = useState(dummyPages.slice(0, pageCount));
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  const handlePageClose = (index: number) => {
    const newPages = pages.filter((page) => page.index !== index);
    setPages(newPages);
    setPageCount(pageCount - 1);

    if (selectedPageIndex === index && newPages.length > 0) {
      setSelectedPageIndex(newPages[newPages.length - 1].index);
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
    setPageCount(pageCount + 1);
    setSelectedPageIndex(dummyPages[randomId].index);
  };

  return {
    pages,
    selectedPageIndex,
    handlePageClose,
    handlePageAdd,
    setSelectedPageIndex,
  };
};
