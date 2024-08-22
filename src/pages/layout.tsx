import { Outlet } from "react-router-dom";
import NavAppBar from "../components/navappbar";
import { Grid, Divider } from "@mui/material";

export default function Layout() {
  return (
    <>
      <NavAppBar />
      <Grid container direction="column" minWidth={"500px"} sx={{ p: 5 }}>
        <Divider sx={{ m: 5, display: "inline-block" }} />
        <Outlet />
      </Grid>
      <img
        src={"src/assets/legallyRequiredPNG.png"}
        width="180"
        style={{ position: "absolute", right: 0 }}
      />
    </>
  );
}
