import { useAtom, atom } from "jotai";

export const selectedPageIndexAtom = atom(0);

export const useSelectedPageIndex = () => {
  const [selectedIndex, setSelectedIndex] = useAtom(selectedPageIndexAtom);

  return {
    selectedIndex,
    setSelectedIndex,
  };
};
