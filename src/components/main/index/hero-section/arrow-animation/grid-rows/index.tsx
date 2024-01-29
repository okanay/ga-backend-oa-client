import { useMediaQuery } from "@mantine/hooks";

export const GridRows = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery("(max-width: 640px)");

  const randomRowsDesktop = Math.floor(Math.random() * 4) + 3;
  const randomRowsMobile = Math.floor(Math.random() * 2) + 3;

  const rows = matches ? randomRowsMobile : randomRowsDesktop;

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
