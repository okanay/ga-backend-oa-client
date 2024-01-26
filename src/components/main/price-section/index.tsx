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
  const opacity = useTransform(scrollYProgress, [0, 0.73, 0.9], [0, 0.9, 1]);
  const clipTop = useTransform(scrollYProgress, [0, 0.62, 1], [100, 100, 0]);
  const clipTemplate = useMotionTemplate`inset(0% 0% ${clipTop}% 0%)`;

  // circle animation on scroll
  // prettier-ignore
  const radius = useTransform(scrollYProgress, [0, 0.2, 0.9], ["0%", "0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9], [1, 1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.9], ["-200%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className={"relative h-fit overflow-hidden bg-flower-50 py-24"}
    >
      <div className={"flex flex-col items-center justify-center space-y-12"}>
        {/*About Price*/}
        <div
          className={
            "flex w-full flex-col items-center justify-center space-y-12 text-center"
          }
        >
          <h4 className="text-balance text-center font-plexSansSerif text-4xl text-secondary-950 sm:text-6xl sm:leading-[3.75rem] lg:max-w-[42.5rem] lg:text-7xl lg:leading-[4.75rem]">
            Unlimited Access One Time Payment
          </h4>
          <h5 className="text-balance text-center text-sm tracking-wider text-secondary-800 sm:text-xl sm:leading-[1.4rem] lg:max-w-[55rem] lg:text-2xl lg:leading-[1.85rem]">
            With our one-time payment plan, you can save money and time on your
            website's indexation. Get started today and see the difference!
          </h5>
        </div>

        {/*Card*/}
        <m.div
          className={`relative z-30 h-[30rem] w-[22rem] space-y-6 rounded-lg 
          border-2 border-secondary-950/10 bg-flower-50 px-12 py-12 
          shadow shadow-flower-950/10 sm:border-secondary-700`}
          style={{
            opacity,
            clipPath: clipTemplate,
          }}
        >
          <div className={"flex h-full w-full flex-col justify-between"}>
            {/*Card Top*/}
            <div>
              <h6 className="text-lg font-bold tracking-wide text-ebony-950">
                One Time
              </h6>
              <h5 className="mb-6 text-base tracking-wide text-ebony-950/50">
                Per Website
              </h5>
              <h5 className="text-4xl font-bold tracking-wide text-ebony-950">
                $20
              </h5>
            </div>

            {/*Card List*/}
            <ul className="space-y-2 text-sm text-ebony-950">
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
              <button className="h-[3.75rem] w-full rounded-lg border border-secondary-950/10 bg-secondary-700 text-xl tracking-widest text-flower-50">
                Start Now
              </button>
            </div>
          </div>
        </m.div>
      </div>

      <m.div
        className="absolute bottom-0 left-0 z-20 hidden h-[22rem] w-full bg-secondary-700 sm:block"
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
