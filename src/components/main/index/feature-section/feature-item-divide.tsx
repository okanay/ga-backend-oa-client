import { m } from "framer-motion";

type Props = React.FC<{
  isInView: boolean;
}>;

export const FeatureItemDivide: Props = ({ isInView }) => {
  return (
    <m.div
      variants={dividerAnimation}
      animate={isInView ? "visible" : "hidden"}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.45,
        delay: 0.05,
      }}
      className={`h-[1px] w-full bg-flower-50`}
    />
  );
};

const dividerAnimation = {
  hidden: { clipPath: `inset(0% 100% 0% 100%)` },
  visible: { clipPath: `inset(0% 0% 0% 0%)` },
};
