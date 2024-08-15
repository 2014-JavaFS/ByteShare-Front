import { Card, Grid, Typography } from "@mui/material";
import green from "@mui/material/colors/green";

export default function TestBlock({ num }) {
  //ignore this
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";


  const textCard = (
    <Card
      sx={{
        backgroundColor: green[400],
        width: "80%",
        p: 5,
        m: 5
      }}
    >
    <Typography variant="h2" align="center">
      {num}
    </Typography>
      <Typography align="justify">
        {loremIpsum}
      </Typography>
    </Card>
  );

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ top: 5 }}
      >
        {textCard}
        {textCard}
        {textCard}
        
      </Grid>
    </>
  );
}
