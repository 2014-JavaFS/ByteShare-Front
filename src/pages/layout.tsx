import { Outlet } from "react-router-dom";
import NavAppBar from "../components/navappbar";

export default function Layout() {
  return (
    <>
      <NavAppBar />
      <Outlet />
    </>
  );
}
