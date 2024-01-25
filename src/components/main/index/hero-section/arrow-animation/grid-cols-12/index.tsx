export const GridCols9 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full w-full grid-cols-10 gap-4">
      {Array.from({ length: 10 }).map((_, columnIndex) => (
        <div key={`column-${columnIndex}`} className="h-full w-full">
          {children}
        </div>
      ))}
    </div>
  );
};
