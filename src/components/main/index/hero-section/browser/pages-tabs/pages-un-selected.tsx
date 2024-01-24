import { PageValues } from "@/components/main/index/hero-section/browser/pages-tabs/pages-values.tsx";

type PageProps = React.FC<{
  favicon: string;
  title: string;
  index: number;
  handlePageClose: (index: number) => void;
  handlePageSelect: (index: number) => void;
}>;

export const UnSelectedPage: PageProps = ({
  favicon,
  title,
  index,
  handlePageSelect,
  handlePageClose,
}) => {
  return (
    <div className="group flex h-full w-[12rem] cursor-pointer flex-col items-center justify-start rounded-t-xl bg-flower-200">
      <div className="flex h-[2rem] w-full items-center justify-between rounded-xl px-2.5 transition-colors duration-300 group-hover:bg-flower-100">
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
