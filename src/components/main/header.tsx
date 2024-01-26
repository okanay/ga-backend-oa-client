import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[999] h-fit w-full bg-secondary-700">
      <div className="relative z-20 mx-auto max-w-7xl">
        <nav className="flex items-center justify-between px-4 py-4">
          <Link to={"/"}>
            <span className="font-plexSansSerif text-2xl sm:text-4xl">
              Grow Pusher
            </span>
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
