export const GridRows12 = ({ children }: { children: React.ReactNode }) => {
  return Array.from({ length: 12 }).map((_, rowIndex) => (
    <div key={`key={\`row-${rowIndex}-up\`}`}>{children}</div>
  ));
};
