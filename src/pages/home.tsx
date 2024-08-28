import { Typography, Card, Divider } from "@mui/material"; 

export default function Home() {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";
  return ( 
      <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          Home Page
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" align="justify">
          {loremIpsum} {loremIpsum} {loremIpsum} {loremIpsum}
        </Typography>
      </Card> 
  );
}
 