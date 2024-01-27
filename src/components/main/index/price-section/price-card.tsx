import { m, useTransform, useMotionTemplate, MotionValue } from "framer-motion";

import { CheckIcon } from "./check-icon.tsx";
import { PriceCardButton } from "@/components/main/index/price-section/price-card-btn.tsx";

type PriceCardProps = React.FC<{
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}>;

export const PriceCard: PriceCardProps = ({ scrollYProgress, isMobile }) => {
  const clipValue = !isMobile ? 100 : 0;
  // prettier-ignore
  const clipTop = useTransform(scrollYProgress, [0, 0.75, 1], [clipValue, clipValue, 0]);
  const clipTemplate = useMotionTemplate`inset(0% 0% ${clipTop}% 0%)`;

  return (
    <m.div
      className={`relative z-30 rounded-lg border-2 border-ebony-950 bg-flower-50 sm:min-h-[30rem] sm:w-[22rem]`}
      style={{ clipPath: clipTemplate }}
    >
      <div className="flex w-full flex-col justify-between space-y-12 px-12 py-12 sm:min-h-[30rem]">
        {/*Card Top*/}
        <div>
          <h6 className="text-base font-bold tracking-wide text-ebony-950 sm:text-lg">
            One Time
          </h6>
          <h5 className="-mt-1 text-xs tracking-wide text-ebony-950/50 sm:text-base">
            Per Website
          </h5>
          <h5 className="mt-4 text-3xl font-bold tracking-wide text-ebony-950 sm:text-4xl">
            $20
          </h5>
        </div>

        {/*Card List*/}
        <ul className="space-y-2 text-xs text-ebony-950 sm:text-sm">
          <li className="relative flex items-center justify-start gap-2">
            <CheckIcon />
            <span>Unlimited Access</span>
          </li>
          <li className="relative flex items-center justify-start gap-2">
            <CheckIcon />
            <span>Daily Reports for Indexed Pages</span>
          </li>
          <li className="relative flex items-center justify-start gap-2">
            <CheckIcon />
            <span>Full Autopilot, Runs Every Day</span>
          </li>
        </ul>
        <PriceCardButton />
      </div>
    </m.div>
  );
};
