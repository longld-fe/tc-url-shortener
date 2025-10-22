import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavBar from "../components/NavBar";

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
