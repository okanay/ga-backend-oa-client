export const GridRows = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"grid h-full grid-rows-10 gap-4"}>
      {Array.from({ length: 10 }).map((_, rowIndex) => (
        <div key={`key={\`row-${rowIndex}-up\`}`} className={""}>
          {children}
        </div>
      ))}
    </div>
  );
};
