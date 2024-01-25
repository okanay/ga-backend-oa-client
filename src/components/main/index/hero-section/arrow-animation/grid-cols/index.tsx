import { useMediaQuery } from "@mantine/hooks";

export const GridCols = ({ children }: { children: React.ReactNode }) => {
  const matches = useMediaQuery("(max-width: 640px)");
  const length = matches ? 4 : 10;

  return (
    <div className="grid h-full w-full grid-cols-4 gap-4 sm:grid-cols-10">
      {Array.from({ length }).map((_, columnIndex) => (
        <div key={`column-${columnIndex}`} className="h-full w-full">
          {children}
        </div>
      ))}
    </div>
  );
};
