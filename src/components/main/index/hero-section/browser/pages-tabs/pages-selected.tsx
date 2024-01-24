import { PageValues } from "@/components/main/index/hero-section/browser/pages-tabs/pages-values.tsx";

type PageProps = React.FC<{
  favicon: string;
  title: string;
  index: number;
  handlePageClose: (index: number) => void;
  handlePageSelect: (index: number) => void;
}>;

export const SelectedPage: PageProps = ({
  index,
  favicon,
  title,
  handlePageSelect,
  handlePageClose,
}) => {
  return (
    <div className="flex h-full w-[12rem] cursor-default flex-col items-center justify-start rounded-t-xl bg-flower-50">
      <div className="flex h-[2rem] w-full items-center justify-between rounded-t-xl px-2.5">
        <PageValues
          index={index}
          favicon={favicon}
          title={title}
          handlePageClose={handlePageClose}
          handlePageSelect={handlePageSelect}
        />
      </div>
    </div>
  );
};
