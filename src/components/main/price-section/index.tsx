import { m, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const PriceSection = () => {
  // framer-motion
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: sectionRef,
  });

  // card animation on scroll
  // prettier-ignore
  const opacity = useTransform(scrollYProgress, [0, 0.65, 0.9], [0, 0, 1]);
  const clipTop = useTransform(scrollYProgress, [0, 0.65, 0.95], [100, 100, 0]);
  const clipTemplate = useMotionTemplate`inset(0% 0% ${clipTop}% 0%)`;

  // circle animation on scroll
  // prettier-ignore
  const radius = useTransform(scrollYProgress, [0, 0.4, 0.9], ["0%", "0%", "45%"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9], [1, 1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.9], ["-200%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-fit min-h-[844px] flex-col justify-center overflow-hidden bg-flower-50 py-16 sm:h-full sm:min-h-0 sm:py-24"
    >
      {/*Contents*/}
      <div className="flex flex-col items-center justify-center space-y-12">
        {/*Price Section Header*/}
        <div className="flex w-full flex-col items-center justify-center space-y-8 text-center sm:space-y-12">
          <h4 className="text-balance text-center font-plexSansSerif text-3xl text-secondary-950 base-phone:text-4xl sm:text-6xl sm:leading-[3.75rem] lg:max-w-[42.5rem] lg:text-7xl lg:leading-[4.75rem]">
            Unlimited Access One Time Payment
          </h4>
          <h5 className="text-balance text-center text-sm leading-5 tracking-wider text-secondary-800 base-phone:text-sm sm:text-xl sm:leading-[1.4rem] lg:max-w-[55rem] lg:text-2xl lg:leading-[1.85rem]">
            With our one-time payment plan, you can save money and time on your
            website's indexation. Get started today and see the difference!
          </h5>
        </div>

        {/*Card*/}
        <m.div
          className={`relative z-30 rounded-lg border-2 bg-secondary-50 sm:min-h-[30rem] sm:w-[22rem] sm:scale-[108%] sm:border-2
          sm:border-secondary-700
          `}
          style={{
            opacity,
            clipPath: clipTemplate,
          }}
        >
          {/* Card Items*/}
          <div className="flex h-full w-full flex-col justify-between space-y-12 px-12 py-12">
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
            <div className="w-full">
              <button className="h-[2.5rem] w-full rounded-lg border border-secondary-950/10 bg-secondary-700 text-base tracking-widest text-ebony-50 sm:h-[3.75rem] sm:text-xl">
                Start Now
              </button>
            </div>
          </div>
        </m.div>
      </div>

      {/* Bottom Circle*/}
      <m.div
        className="absolute bottom-0 left-0 z-20 h-[22rem] w-full bg-secondary-700 sm:block"
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
