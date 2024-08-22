import { Card, Divider, Typography } from "@mui/material";

export default function TestBlock({ props }) {
  const num: number = props.num;

  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";
  let fullText = "";
  for (let i = 0; i < num; i++) {
    fullText += " " + loremIpsum;
  }

  const Cards = [];
  for (let i = 0; i < num; i++) {
    Cards.push(
      <Card key={i} sx={{ p: 5, m: 5 }}>
        <Typography variant="h2" align="center">
          {num}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography align="justify">{fullText}</Typography>
      </Card>
    );
  }

  return <>{...Cards}</>;
}
