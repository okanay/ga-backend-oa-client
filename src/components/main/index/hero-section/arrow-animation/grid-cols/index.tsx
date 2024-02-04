import { useMediaQuery } from "@mantine/hooks";

export const GridCols = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery("(max-width: 640px)");
  const columns = matches ? 4 : 7;

  return (
    <div
      className="grid h-full w-full gap-4"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={`column-${columnIndex}`} className="h-full w-full">
          {children}
        </div>
      ))}
    </div>
  );
};
