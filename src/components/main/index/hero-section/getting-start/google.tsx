import { m } from "framer-motion";

const text = [
  {
    letter: "G",
    color: "bg-blue-500",
  },
  {
    letter: "o",
    color: "bg-red-500",
  },
  {
    letter: "o",
    color: "bg-yellow-500",
  },
  {
    letter: "g",
    color: "bg-blue-500",
  },
  {
    letter: "l",
    color: "bg-green-500",
  },
  {
    letter: "e",
    color: "bg-red-500",
  },
];

export const Google = () => {
  return (
    <div className="font-plex-mono relative inline-flex overflow-hidden font-light text-flower-50">
      {text.map(({ letter, color }, index) => (
        <div key={index} className={`relative`}>
          <span>{letter}</span>
          <m.div
            initial={{ y: 0 }}
            animate={{ y: "-100%", opacity: 0.75 }}
            transition={{
              duration: 0.75,
              delay: 0.25 + index * 0.05,
              ease: "easeInOut",
            }}
            className={`absolute inset-0 h-full w-[90%] ${color} rounded`}
          />
        </div>
      ))}
    </div>
  );
};
