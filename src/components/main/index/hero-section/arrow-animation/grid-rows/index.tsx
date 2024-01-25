import { useMediaQuery } from "@mantine/hooks";

export const GridRows = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery("(max-width: 640px)");
  const length = matches ? 7 : 10;

  return (
    <div className={"grid h-full grid-rows-7 gap-4 sm:grid-rows-10"}>
      {Array.from({ length }).map((_, rowIndex) => (
        <div key={`key={\`row-${rowIndex}-up\`}`} className={""}>
          {children}
        </div>
      ))}
    </div>
  );
};
