import { twMerge } from "tailwind-merge";

type ImageProps = React.FC<{
  className?: string;
  style?: React.CSSProperties;
}>;

export const PlusIcon: ImageProps = ({ className, style }) => {
  return (
    <img
      src={"svgs/plus.svg"}
      loading={"lazy"}
      alt={"check circle icon"}
      className={twMerge("size-[1.25rem]", className)}
      style={style}
    />
  );
};
