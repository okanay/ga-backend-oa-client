import {
  ArrowDown,
  ArrowDownAnimationWrapper,
} from "@/components/main/index/hero-section/arrow-animation/arrow-down";
import {
  ArrowUp,
  ArrowUpAnimationWrapper,
} from "@/components/main/index/hero-section/arrow-animation/arrow-up";

export const ArrowAnimation = () => {
  return (
    <div className={"absolute inset-0 overflow-hidden"}>
      <div className="grid h-full grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="grid h-full grid-rows-12 gap-4"
          >
            {Array.from({ length: 12 }).map((_, rowIndex) => (
              <>
                <ArrowDownAnimationWrapper>
                  <ArrowDown key={`row-${rowIndex}-down`} />
                </ArrowDownAnimationWrapper>
                <ArrowUpAnimationWrapper>
                  <ArrowUp key={`row-${rowIndex}-up`} />
                </ArrowUpAnimationWrapper>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
