import { Link } from "@tanstack/react-router";
import Logo from "../../assets/images/logo.svg";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { useToggleClick } from "../../hooks/useToggleClick";
import { Button } from "../ui/Button/Button";

export const NavBarWrapper = () => {
  const { isOpen, toggle, close, ref } = useToggleClick<HTMLDivElement>();

  return (
    <header className="header flex items-center px-6 md:px-16 py-6 md:py-8 relative">
      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Shortly" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <DesktopNav />

      {/* Mobile Button */}
      <div className="nav-button block md:hidden ml-auto">
        <Button
          variant="secondary"
          type="button"
          onClick={toggle}
          aria-label="Open navigation menu"
        >
          <svg
            fill="#bfbfbf"
            width="25px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && <MobileNav ref={ref} onClose={close} />}
    </header>
  );
};
