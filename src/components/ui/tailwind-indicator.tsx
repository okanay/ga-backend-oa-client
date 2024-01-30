export function DevModeTailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="font-mono fixed bottom-1 left-1 z-50 flex items-center justify-center rounded-full bg-gray-800 p-4 text-xs text-white">
      <div className="block sm-phone:hidden">xs-p</div>
      <div className="hidden sm-phone:block base-phone:hidden">sm-p</div>
      <div className="hidden base-phone:block lg-phone:hidden">base-p</div>
      <div className="hidden lg-phone:block xl-phone:hidden">lg-p</div>
      <div className="hidden xl-phone:block sm:hidden">xl-p</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
