type PageValuesProps = React.FC<{
  index: number;
  favicon: string;
  title: string;
  handlePageClose: (index: number) => void;
  handlePageSelect: (index: number) => void;
}>;
export const PageValues: PageValuesProps = ({
  index,
  favicon,
  title,
  handlePageClose,
  handlePageSelect,
}) => {
  return (
    <>
      <div
        onClick={() => handlePageSelect(index)}
        className={"flex w-full items-center gap-2"}
      >
        <span>{favicon}</span>
        <span className={"text-xs"}>{title}</span>
      </div>
      <button
        onClick={() => handlePageClose(index)}
        className="relative z-20 flex size-[1.25rem] flex-col items-center justify-center rounded-full transition-colors duration-300 hover:bg-slate-200"
      >
        <span className={"text-xs"}>X</span>
      </button>
    </>
  );
};
