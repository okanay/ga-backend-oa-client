export const Footer = () => {
  return (
    <footer className="bg-secondary-700 text-flower-50/50 shadow">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center p-4 md:flex-row md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Gokok Games™
          </a>{" "}
          All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
