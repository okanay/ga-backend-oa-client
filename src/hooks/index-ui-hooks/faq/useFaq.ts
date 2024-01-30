import { useState } from "react";

export const useFaq = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const handleFaqOnClick = (index: number) => {
    setSelectedFaq(index);

    if (selectedFaq === index) setSelectedFaq(null);
  };

  return { selectedFaq, handleFaqOnClick };
};
