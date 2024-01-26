import { Link } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.9, 1], ["-100", "-100%", "0%"]);

  return (
    <header className="fixed top-0 z-[999] h-fit w-full">
      <m.div
        style={{ y }}
        className="absolute top-0 h-full w-full bg-secondary-950"
      />
      <div className="relative z-20 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between px-4 py-4">
          <Link to={"/"}>
            <span className="font-plexSansSerif text-4xl">Grow Pusher</span>
          </Link>
          <ul className="hidden items-center justify-end gap-12 text-lg sm:flex">
            <li>
              <Link to={"#faq"}>
                <span>F.A.Q</span>
              </Link>
            </li>
            <li>
              <Link to={"#pricing"}>
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"}>
                <span className="rounded-lg border border-flower-950/10 bg-ebony-950 px-4 py-2 text-primary-300">
                  Dashboard
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
