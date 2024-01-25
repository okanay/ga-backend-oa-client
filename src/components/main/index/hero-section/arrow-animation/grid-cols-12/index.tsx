export const GridCols12 = ({ children }: { children: React.ReactNode }) => {
  return Array.from({ length: 12 }).map((_, columnIndex) => (
    <div
      key={`column-${columnIndex}`}
      className="grid h-full grid-rows-12 gap-4"
    >
      {children}
    </div>
  ));
};
