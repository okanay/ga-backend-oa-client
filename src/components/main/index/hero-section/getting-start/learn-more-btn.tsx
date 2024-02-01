import { handleSmoothScroll } from "@/lib/smooth-scroll.ts";

export const LearnMoreBtn = () => {
  return (
    <button
      onClick={() => handleSmoothScroll("#features")}
      type={"button"}
      className="relative z-30 h-[40px] w-[140px] cursor-pointer text-base underline underline-offset-8 transition-colors duration-300 hover:text-primary-500 sm-phone:h-[48px] sm-phone:w-[160px] sm-phone:text-xl sm:h-[64px] sm:w-[200px] sm:text-2xl"
    >
      Learn More
    </button>
  );
};
