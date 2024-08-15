import "./App.css";
import { Grid } from "@mui/material"; 
import Navbar from "./components/nav/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Grid container spacing={2}>
          <Grid xs={6} md={8}>
            <h1>recipe?</h1>
          </Grid>
          <Grid xs={6} md={4}>
            <h1>recipe?</h1>
          </Grid>
          <Grid xs={6} md={4}>
            <h1>recipe?</h1>
          </Grid>
          <Grid xs={6} md={8}>
            <h1>recipe?</h1>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
