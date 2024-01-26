import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const PriceSection = () => {
  // framer-motion
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: sectionRef,
  });

  // black circle animation on scroll
  // prettier-ignore
  const radius = useTransform( scrollYProgress, [0, 0.5, 1], ["0%", "0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["-150%", "0%"]);

  // card animation on scroll
  // prettier-ignore
  const opacity = useTransform(scrollYProgress, [0, 0.80, 1], [0, 0, 1]);

  return (
    <section
      ref={sectionRef}
      className={
        "relative h-full bg-flower-50 sm:min-h-[100svh] sm:overflow-hidden"
      }
    >
      <div className="relative h-full w-full">
        {/*About Price */}
        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 pb-12 pt-12 sm:absolute sm:left-0 sm:top-0 sm:min-h-[60svh] sm:pb-0 sm:pt-40">
          <h4 className="text-balance text-center font-plexSansSerif text-4xl text-secondary-950 sm:text-6xl sm:leading-[3.75rem] lg:max-w-[680px] lg:text-7xl lg:leading-[4.75rem]">
            Unlimited Access One Time Payment
          </h4>
          <h5 className="text-balance text-center text-sm tracking-wider text-secondary-800 sm:text-xl sm:leading-[1.4rem] lg:max-w-[880px] lg:text-2xl lg:leading-[1.85rem]">
            With our one-time payment plan, you can save money and time on your
            website's indexation. Get started today and see the difference!
          </h5>

          {/*Card s*/}
          <div className="relative z-30 mt-8 h-full max-h-[480px] w-full max-w-[340px] rounded-lg border-2 border-secondary-950/10 bg-flower-50 shadow shadow-flower-950/10 sm:hidden sm:border-secondary-700">
            <div className="flex h-full w-full flex-col items-center justify-start py-12">
              <div className="flex flex-col items-start justify-center gap-12">
                {/*Title*/}
                <div className="flex flex-col items-center justify-center">
                  <div className={"text-start"}>
                    <h6 className="text-lg font-bold tracking-wide text-ebony-950">
                      One Time
                    </h6>
                    <h5 className="text-base tracking-wide text-ebony-950/50">
                      Per Website
                    </h5>
                  </div>
                </div>

                {/*  Price*/}
                <div className="flex flex-col items-center justify-center">
                  <div className={"text-start"}>
                    <h5 className="text-4xl font-bold tracking-wide text-ebony-950">
                      $20
                    </h5>
                  </div>
                </div>

                {/*List*/}
                <ul className="space-y-2 text-sm text-ebony-950">
                  <li className="relative flex items-center justify-start gap-2">
                    <img
                      src={"/check-circle.svg"}
                      loading={"lazy"}
                      alt={"check circle icon"}
                      className={"size-[1.25rem]"}
                    />
                    <span>Unlimited Access</span>
                  </li>
                  <li className="relative flex items-center justify-start gap-2">
                    <img
                      src={"/check-circle.svg"}
                      loading={"lazy"}
                      alt={"check circle icon"}
                      className={"size-[1.25rem]"}
                    />
                    <span>Daily Reports for Indexed Pages</span>
                  </li>
                  <li className="relative flex items-center justify-start gap-2">
                    <img
                      src={"/check-circle.svg"}
                      loading={"lazy"}
                      alt={"check circle icon"}
                      className={"size-[1.25rem]"}
                    />
                    <span>Full Autopilot, Runs Every Day</span>
                  </li>
                </ul>
              </div>

              {/*Button*/}
              <div className={"mt-12 flex w-full items-center justify-center"}>
                <button className="h-[60px] w-[200px] rounded-lg border border-secondary-950/10 bg-secondary-700 text-xl tracking-widest text-flower-50">
                  Start Now
                </button>
              </div>
            </div>
          </div>

          {/*Card*/}
          <m.div
            style={{ opacity }}
            className="relative z-30 mt-8 hidden h-full max-h-[480px] w-full max-w-[340px] rounded-lg border-2 border-secondary-950/10 bg-flower-50 shadow shadow-flower-950/10 sm:block sm:border-secondary-700"
          >
            <div className="flex h-full w-full flex-col items-center justify-start py-12">
              <div className="flex flex-col items-start justify-center gap-12">
                {/*Title*/}
                <div className="flex flex-col items-center justify-center">
                  <div className={"text-start"}>
                    <h6 className="text-lg font-bold tracking-wide text-ebony-950">
                      One Time
                    </h6>
                    <h5 className="text-base tracking-wide text-ebony-950/50">
                      Per Website
                    </h5>
                  </div>
                </div>

                {/*  Price*/}
                <div className="flex flex-col items-center justify-center">
                  <div className={"text-start"}>
                    <h5 className="text-4xl font-bold tracking-wide text-ebony-950">
                      $20
                    </h5>
                  </div>
                </div>

                {/*List*/}
                <ul className="space-y-2 text-sm text-ebony-950">
                  <li className="relative flex items-center justify-start gap-2">
                    <img
                      src={"/check-circle.svg"}
                      loading={"lazy"}
                      alt={"check circle icon"}
                      className={"size-[1.25rem]"}
                    />
                    <span>Unlimited Access</span>
                  </li>
                  <li className="relative flex items-center justify-start gap-2">
                    <img
                      src={"/check-circle.svg"}
                      loading={"lazy"}
                      alt={"check circle icon"}
                      className={"size-[1.25rem]"}
                    />
                    <span>Daily Reports for Indexed Pages</span>
                  </li>
                  <li className="relative flex items-center justify-start gap-2">
                    <img
                      src={"/check-circle.svg"}
                      loading={"lazy"}
                      alt={"check circle icon"}
                      className={"size-[1.25rem]"}
                    />
                    <span>Full Autopilot, Runs Every Day</span>
                  </li>
                </ul>
              </div>

              {/*Button*/}
              <div className={"mt-12 flex w-full items-center justify-center"}>
                <button className="h-[60px] w-[200px] rounded-lg border border-secondary-950/10 bg-secondary-700 text-xl tracking-widest text-flower-50">
                  Start Now
                </button>
              </div>
            </div>
          </m.div>
        </div>
      </div>

      {/* Black Circle */}
      <m.div
        className="absolute bottom-0 left-0 z-20 hidden h-[40svh] w-full bg-secondary-700 sm:block"
        style={{
          y,
          scale,
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }}
      />
    </section>
  );
};
