import { Navigation } from "@/components/main/navigation";

export const Header = () => {
  return (
    <header className="absolute top-0 h-fit w-full bg-secondary-700 shadow-sm shadow-secondary-700/20">
      <div className="relative z-20 mx-auto max-w-7xl">
        <Navigation />
      </div>
    </header>
  );
};
