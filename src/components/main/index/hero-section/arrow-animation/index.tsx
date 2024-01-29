import { ArrowDownAnimationWrapper } from "./arrow-down";
import { ArrowDown } from "./arrow-down/animation";

import { ArrowUpAnimationWrapper } from "./arrow-up";
import { ArrowUp } from "./arrow-up/animation.tsx";

import { GridCols } from "./grid-cols";
import { GridRows } from "./grid-rows";

export const ArrowAnimation = () => {
  return (
    <div className={"absolute bottom-0 h-[98vh] w-full overflow-hidden"}>
      <GridCols>
        <GridRows>
          <>
            <ArrowUpAnimationWrapper>
              <ArrowUp />
            </ArrowUpAnimationWrapper>

            <ArrowDownAnimationWrapper>
              <ArrowDown />
            </ArrowDownAnimationWrapper>
          </>
        </GridRows>
      </GridCols>
    </div>
  );
};
