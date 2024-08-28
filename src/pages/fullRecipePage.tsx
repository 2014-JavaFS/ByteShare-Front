import { Button, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import loggedInUserId from "../util/loggedInUserId";

export default function FullRecipePage() {
  const { recipeId } = useParams();
  const [author, setAuthor] = useState(null);
  const [title, setTitle] = useState("Title");

  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";

  function handleFollowClick() {
    const currentUser = loggedInUserId();
    //post request w/ current userId and author.userId
  }
  function handleFavoriteClick() {
    const currentUser = loggedInUserId();
    //post request w/ current userId and author.userId
  }

  return (
    <>
      <Card sx={{ p: 5, m: 5, mb: 1, width: "80%" }}>
        <Typography variant="h2" align="center">
          Recipe Id: {recipeId} {title}
        </Typography>
        <Divider sx={{ m: 2 }} />
        <Stack direction="row" spacing={1}>
          <Typography alignSelf="center">
            author.firstName author.lastName
          </Typography>

          <Button
            color="secondary"
            variant="outlined"
            onClick={handleFollowClick}
          >
            Follow
          </Button>

          <Button
            color="secondary"
            variant="outlined"
            onClick={handleFavoriteClick}
          >
            Favorite
          </Button>
        </Stack>

        <Divider sx={{ m: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <b>RECIPE COMPONENT GO HERE</b> make sure to pass this the setTitle
            and setAuthor functions to update states once axios response is
            returned
            <Divider sx={{ m: 2 }} />
            <b>TAG LIST COMPONENT GO HERE</b> tag tag tag tag tag
          </Grid>

          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>

          <Grid item xs={4}>
            <b>RECIPE INGREDIENT LIST COMPONENT GO HERE</b> <br /> {loremIpsum}
          </Grid>
        </Grid>
      </Card>
      <Stack>
        <Card sx={{ p: 5, m: 5, my: 1, width: "80%" }}>Comment display?</Card>
      </Stack>
    </>
  );
}
