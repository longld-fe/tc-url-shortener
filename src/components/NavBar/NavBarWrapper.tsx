import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import Logo from "../../assets/images/logo.svg";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const NavBarWrapper = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const toggleNavMobile = () => setIsNavMobileOpen((prev) => !prev);

  useEffect(() => {
    if (!isNavMobileOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsNavMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isNavMobileOpen]);

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
        <button
          type="button"
          onClick={toggleNavMobile}
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
        </button>
      </div>

      {/* Mobile Nav */}
      {isNavMobileOpen && (
        <MobileNav
          ref={mobileNavRef}
          onClose={() => setIsNavMobileOpen(false)}
        />
      )}
    </header>
  );
};
