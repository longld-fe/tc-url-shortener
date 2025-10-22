import { Link } from "@tanstack/react-router";

const NavBar = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/">Home</Link>
    </div>
  );
};

export default NavBar;
