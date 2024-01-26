import { m, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";

export const PriceSection = () => {
  //mantine hooks
  const isMatch = useMediaQuery("(max-width: 640px)");

  // framer-motion
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: sectionRef,
  });

  // card animation on scroll
  const clipTemplateValue = isMatch ? 0.58 : 0.76;
  // prettier-ignore
  const clipTop = useTransform(scrollYProgress, [0, clipTemplateValue, 0.9], [100, 100, 0]);
  const clipTemplate = useMotionTemplate`inset(0% 0% ${clipTop}% 0%)`;

  // circle animation on scroll
  // prettier-ignore
  const radius = useTransform(scrollYProgress, [0, 0.4, 0.9], ["0%", "0%", "45%"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9], [1, 1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.9], ["-200%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-fit min-h-[844px] flex-col justify-center overflow-hidden bg-flower-50 py-16 sm:h-full sm:min-h-0 sm:py-28"
    >
      {/*Contents*/}
      <div className="flex flex-col items-center justify-center space-y-8 px-4 sm:space-y-16">
        {/*Price Section Header*/}
        <div className="flex w-full flex-col items-center justify-center space-y-8 text-center sm:space-y-16">
          <h6 className="-mb-4 text-xs font-bold tracking-widest text-secondary-950 sm:-mb-12 sm:text-lg">
            Pricing
          </h6>
          <h4 className="text-balance text-center font-plexSansSerif text-3xl text-secondary-950 base-phone:text-4xl sm:text-6xl sm:leading-[3.75rem] lg:max-w-[42.5rem] lg:text-7xl lg:leading-[4.75rem]">
            Unlimited Access One Time Payment
          </h4>
          <h5 className="max-w-[340px] text-balance text-center text-sm leading-5 tracking-wider text-secondary-800 base-phone:text-sm sm:max-w-[560px] sm:text-xl sm:leading-[1.4rem] lg:max-w-[55rem] lg:text-2xl lg:leading-[1.85rem]">
            With our one-time payment plan, you can save money and time on your
            website's indexation. Get started today and see the difference!
          </h5>
        </div>

        {/*Card*/}
        <m.div
          className={`relative z-30 rounded-lg border-2 border-ebony-950 bg-flower-50 sm:min-h-[30rem] sm:w-[22rem]`}
          style={{ clipPath: clipTemplate }}
        >
          {/* Card Items*/}
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

            {/*Card Button*/}
            <button className="h-[2.5rem] w-full rounded-lg border border-secondary-950/10 bg-secondary-700 text-base tracking-widest text-ebony-50 transition-colors duration-300 hover:bg-secondary-600 sm:h-[3.75rem] sm:text-xl">
              Start Now
            </button>
          </div>
        </m.div>
      </div>

      {/* Bottom Circle*/}
      <m.div
        className="absolute bottom-0 left-0 z-20 h-[18rem] w-full bg-ebony-950 sm:block sm:h-[28rem]"
        style={{
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          scaleX: scale,
          y,
        }}
      />
    </section>
  );
};

export const CheckIcon = () => {
  return (
    <img
      src={"/check-circle.svg"}
      loading={"lazy"}
      alt={"check circle icon"}
      className={"size-[1.25rem]"}
    />
  );
};
