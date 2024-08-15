import { Typography, Card, Container } from "@mui/material";
import { green } from "@mui/material/colors";

export default function Home() {
  return ( 
    <>
      <Container sx={{ m: 25 }}>
        <Card sx={{ backgroundColor: green[400], width: "auto" }}>
          <Typography variant="h1">Home Page</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Card>
      </Container>
    </>
  ); 
}
