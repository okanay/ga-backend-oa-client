import { useMediaQuery } from "@mantine/hooks";

export const GridRows = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery("(max-width: 640px)");
  const rows = matches ? 6 : 8;

  return (
    <div
      className={"grid h-full  gap-4"}
      style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={`key={\`row-${rowIndex}-up\`}`} className={""}>
          {children}
        </div>
      ))}
    </div>
  );
};
