import { atom, useAtom } from "jotai";

export const selectedIndexAtom = atom(0);

export const useSelectedPage = () => {
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom);

  return {
    selectedIndex,
    setSelectedIndex,
  };
};
