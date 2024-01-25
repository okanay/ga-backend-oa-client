import { atom, useAtom } from "jotai";
import { dummyPages } from "@/constants/main-index/browser/data.ts";

export const pagesAtom = atom(dummyPages.slice(0, 2));

export const usePages = () => {
  const [pages, setPages] = useAtom(pagesAtom);

  return {
    pages,
    setPages,
    dummyPages,
  };
};
