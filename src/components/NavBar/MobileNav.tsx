import { forwardRef } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/Button/Button";

interface MobileNavProps {
  onClose: () => void;
}

export const MobileNav = forwardRef<HTMLDivElement, MobileNavProps>(
  ({ onClose }, ref) => {
    const menuItems = ["Features", "Pricing", "Resources"];

    return (
      <nav
        ref={ref}
        className="nav-mobile flex flex-col items-center bg-dark-violet rounded-xl p-6 absolute left-1/2 top-[80px] w-[80vw] max-w-[350px] -translate-x-1/2 z-50 shadow-lg md:hidden animate-fade-in"
      >
        <ul className="flex flex-col w-full gap-4 py-4 items-center m-0">
          {menuItems.map((item) => (
            <li className="w-full" key={item}>
              <Link
                to="/"
                className="block w-full no-underline text-white font-bold py-2 transition-colors duration-300 hover:text-grayish-violet text-center"
                onClick={onClose}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-buttons flex flex-col w-full items-center border-t border-gray pt-5 gap-4">
          <Button variant="secondary" className="w-full" asChild>
            <Link to="/" onClick={onClose}>
              Login
            </Link>
          </Button>
          <Button variant="primary" className="w-full" asChild>
            <Link to="/" onClick={onClose}>
              Sign Up
            </Link>
          </Button>
        </div>
      </nav>
    );
  }
);

MobileNav.displayName = "MobileNav";
