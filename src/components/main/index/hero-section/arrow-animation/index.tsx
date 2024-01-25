import { ArrowDownAnimationWrapper } from "./arrow-down";
import { ArrowDown } from "./arrow-down/animation";

import { ArrowUpAnimationWrapper } from "./arrow-up";
import { ArrowUp } from "./arrow-up/animation.tsx";

import { GridCols9 } from "./grid-cols-12";
import { GridRows9 } from "./grid-rows-12";

export const ArrowAnimation = () => {
  return (
    <div className={"absolute inset-0 overflow-hidden"}>
      <GridCols9>
        <GridRows9>
          <>
            <ArrowUpAnimationWrapper>
              <ArrowUp />
            </ArrowUpAnimationWrapper>

            <ArrowDownAnimationWrapper>
              <ArrowDown />
            </ArrowDownAnimationWrapper>
          </>
        </GridRows9>
      </GridCols9>
    </div>
  );
};
