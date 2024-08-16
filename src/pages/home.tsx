import { Typography, Card, Grid, Divider } from "@mui/material";

export default function Home() {
  //ignore this
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";

  const textCard = (
    <Card
      sx={{
        width: "80%",
        p: 5,
        m: 4,
      }}
    >
      <Typography variant="h2" align="center">
        Home Page
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography align="justify">
        {loremIpsum} {loremIpsum} {loremIpsum} {loremIpsum}
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
        minWidth={"500px"}
      >
        <Divider sx={{ m: 6 }} />
        {textCard}
      </Grid>
    </>
  );
}
