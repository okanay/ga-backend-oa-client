import { atom, useAtom } from "jotai";

export const pageCountAtom = atom(2);

export const usePagesCount = () => {
  const [pagesCount, setPagesCount] = useAtom(pageCountAtom);

  return {
    pagesCount,
    setPagesCount,
  };
};
