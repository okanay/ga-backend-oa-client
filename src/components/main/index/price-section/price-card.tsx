import { m, useTransform, useMotionTemplate, MotionValue } from "framer-motion";

import { CheckIcon } from "./check-icon.tsx";
import { PriceCardButton } from "@/components/main/index/price-section/price-card-btn.tsx";
import { PriceValue } from "@/components/main/index/price-section/price-value.tsx";

type PriceCardProps = React.FC<{
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}>;

export const PriceCard: PriceCardProps = ({ scrollYProgress, isMobile }) => {
  const clipValue = !isMobile ? 100 : 0;
  // prettier-ignore
  const clipTop = useTransform(scrollYProgress, [0, 0.8, 1], [clipValue, clipValue, 0]);
  const clipTemplate = useMotionTemplate`inset(0% 0% ${clipTop}% 0%)`;

  return (
    <m.div
      className={`relative z-30 rounded-lg border-2 border-ebony-950 bg-flower-50 px-6 py-8 sm:min-h-[28rem] sm:w-[20rem] sm:px-8 sm:py-12`}
      style={{ clipPath: clipTemplate }}
    >
      <div className="flex w-full flex-col justify-between space-y-12">
        {/*Card Top with Static Text*/}
        <div>
          <h6 className="text-base font-bold tracking-wide text-ebony-950 sm:text-lg">
            One Time
          </h6>
          <h5 className="-mt-1 text-xs tracking-wide text-ebony-950/50 sm:text-base">
            Per Website
          </h5>
        </div>

        {/*Card Price Value*/}
        <PriceValue />

        {/*Card Offers List */}
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

        {/*Start Now Button*/}
        <PriceCardButton />
      </div>
    </m.div>
  );
};
