import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NavBarWrapper as NavBar } from "../components/NavBar/NavBarWrapper";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <div>404 - Not Found</div>,
});
