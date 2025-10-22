import { Link } from "@tanstack/react-router";
import { Button } from "../ui/Button/Button";

export const DesktopNav = () => {
  return (
    <nav className="nav-block hidden md:flex flex-row w-full justify-between items-center">
      <ul className="flex flex-row gap-[30px] list-none pl-10">
        {["Features", "Pricing", "Resources"].map((item) => (
          <li key={item}>
            <Link
              to="/"
              className="no-underline text-grayish-violet font-bold transition-colors duration-300 hover:text-very-dark-violet"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-[30px] items-center">
        <Button variant="secondary" asChild>
          <Link to="/">Login</Link>
        </Button>
        <Button variant="primary" asChild>
          <Link to="/">Sign Up</Link>
        </Button>
      </div>
    </nav>
  );
};
