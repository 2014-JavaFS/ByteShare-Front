import { Outlet } from "react-router-dom";
import NavAppBar from "../components/navappbar";

export default function Layout() {
  return (
    <>
      <NavAppBar />
      <Outlet />
      <img src={"src/assets/legallyRequiredPNG.png"} width="180" />
    </>
  );
}
