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
  const radius = useTransform( scrollYProgress, [0, 0.2, 1], ["0%", "0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["-175%", "0%"]);

  // card animation on scroll
  // prettier-ignore
  const opacity = useTransform(scrollYProgress, [0, 0.80, 1], [0, 0, 1]);

  return (
    <section
      ref={sectionRef}
      className={"sticky top-0 h-[100svh] overflow-hidden bg-flower-50 px-2"}
    >
      <div className="relative h-svh w-full">
        {/*About Price */}
        <div className="absolute top-0 z-10 flex h-[60svh] w-full flex-col items-center justify-center gap-8">
          <h4 className="max-w-[680px] text-balance text-center font-plexSansSerif text-5xl text-secondary-950 sm:text-6xl sm:leading-[3.75rem] lg:text-7xl lg:leading-[4.75rem]">
            Unlimited Access One Time Payment
          </h4>
          <h5 className="max-w-[880px] text-balance text-center text-xl tracking-wider text-secondary-800 sm:text-xl sm:leading-[1.4rem] lg:text-2xl lg:leading-[1.85rem]">
            With our one-time payment plan, you can save money and time on your
            website's indexation. Get started today and see the difference!
          </h5>
        </div>

        {/*Card*/}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <m.div
            style={{ opacity }}
            className="relative z-30 h-[480px] w-[340px] translate-y-[45%] rounded-lg border border-flower-950/10 bg-flower-50 shadow shadow-flower-950/10"
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

        {/* Black Circle */}
        <m.div
          className="absolute bottom-0 z-20 h-[40svh] w-full bg-secondary-950"
          style={{
            y,
            scale,
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
          }}
        />
      </div>
    </section>
  );
};
