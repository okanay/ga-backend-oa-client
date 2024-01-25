import { ArrowDownAnimationWrapper } from "./arrow-down";
import { ArrowDown } from "./arrow-down/animation";

import { ArrowUpAnimationWrapper } from "./arrow-up";
import { ArrowUp } from "./arrow-up/animation.tsx";

import { GridCols12 } from "./grid-cols-12";
import { GridRows12 } from "./grid-rows-12";

export const ArrowAnimation = () => {
  return (
    <div className={"absolute inset-0 overflow-hidden"}>
      <div className="grid h-full grid-cols-12 gap-4">
        <GridCols12>
          <GridRows12>
            <>
              <ArrowUpAnimationWrapper>
                <ArrowUp />
              </ArrowUpAnimationWrapper>

              <ArrowDownAnimationWrapper>
                <ArrowDown />
              </ArrowDownAnimationWrapper>
            </>
          </GridRows12>
        </GridCols12>
      </div>
    </div>
  );
};
