import { PropsWithChildren } from "react";

type FaqButtonProps = React.FC<
  PropsWithChildren<{
    index: number;
    handleFaqOnClick: (index: number) => void;
  }>
>;

export const FaqButton: FaqButtonProps = ({
  children,
  handleFaqOnClick,
  index,
}) => {
  return (
    <button
      onClick={() => handleFaqOnClick(index)}
      className="flex w-full items-center justify-between gap-8 p-6 sm:p-8"
    >
      {children}
    </button>
  );
};
