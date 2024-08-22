import { Outlet } from "react-router-dom";
import NavAppBar from "../components/navappbar";
import { Divider, Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <NavAppBar />
      <Container sx={{ p: 5 }}>
        <Divider sx={{ m: 5, display: "inline-block" }} />
        <Outlet />
      </Container>
      <img
        src={"src/assets/legallyRequiredPNG.png"}
        width="180"
        style={{ position: "absolute", right: 0 }}
      />
    </>
  );
}
