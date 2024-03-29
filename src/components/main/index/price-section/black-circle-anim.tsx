import { m, MotionValue, useTransform } from "framer-motion";

type AnimationCircleProps = React.FC<{
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}>;

export const BlackCircleAnim: AnimationCircleProps = ({
  scrollYProgress,
  isMobile,
}) => {
  // prettier-ignore
  const radius = useTransform(scrollYProgress, [0, 0.4, 0.9], ["0%", "0%", "45%"]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9], [1, 1, 1.2]);

  const yValue = !isMobile ? "-200%" : "0%";
  const y = useTransform(scrollYProgress, [0, 0.9], [yValue, "0%"]);

  return (
    <m.div
      className="absolute bottom-0 left-0 z-20 h-[18rem] w-full bg-ebony-950 sm:block sm:h-[28rem] sm:[--y-from:200]"
      style={{
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        scaleX: scale,
        y,
      }}
    />
  );
};
