import { Card, Divider, Grid, Typography } from "@mui/material";

export default function TestBlock({ props }) {
  const title = props.title;
  const num = props.num;
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";

  const textCard = (
    <Card sx={{ width: "80%", p: 5, pt: 3, m: 5 }}>
      {/*ANY CONTENT YOU WANT BELOW*/}

      <Typography variant="h3" align="center">
        {title}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography align="justify">
        {text} {text} {text}
      </Typography>

      {/*ANY CONTENT YOU WANT ABOVE*/}
    </Card>
  );

  const cards = [];
  for (let i = 0; i < num; i++) {
    cards.push(textCard);
  }

  return (
    <>
      <Grid container direction="column" alignItems="center" minWidth={"500px"}>
        <Divider sx={{ m: 6 }} />
        {cards}
      </Grid>
    </>
  );
}
