import {
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loggedInUserId from "../util/loggedInUserId";
import IngredientList from "../components/ingredientList";
import DisplayTagList from "../components/displayTagList";
import DisplayRecipe from "../components/displayRecipe";
import { bsServer } from "../common/byteshare-server";

export default function FullRecipePage() {
  const { recipeId } = useParams();
  const [followed, setFollowed] = useState(false);

  const [favorited, setFavorited] = useState(false);

  //really didnt wanna handle this here but im tired and cant think of a better way rn and this does at least work
  const [recipe, setRecipe] = useState({
    author: {
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
    },
    content: "",
    cookTime: 0,
    date: "",
    prepTime: 0,
    recipeId: recipeId,
    title: "",
  });

  useEffect(
    () => {
      async function getRecipe() {
        try {
          const response = await bsServer.get(`recipes/${recipeId}`);

          if (response.status == 200) {
            // navigate(`/${loggedInUserId()}`)
            console.log(response);
            setRecipe(response.data);
          } else {
            console.log("bad");
          }
        } catch (error: any) {
          console.log(error);
        }
      }
      getRecipe();
    },
    [] // when the page first loads
  ); 
  
  async function handleFollowClick() {
    setFollowed(true);
    //post request w/ current userId and author.userId
  }
  function handleFavoriteClick() {
    setFavorited(true);
    //post request w/ current userId and author.userId
  }

  return (
    <>
      <Card sx={{ p: 5, m: 5, mb: 1, width: "80vw" }}>
        <Typography variant="h2" align="center">
          {recipe.title}
        </Typography>
        <Divider sx={{ m: 2 }} />
        <Stack direction="row" spacing={1}>
          <Typography alignSelf="center">
            {recipe.author.first_name} {recipe.author.last_name}
          </Typography>

          <Button
            color="secondary"
            variant="outlined"
            disabled={followed}
            onClick={handleFollowClick}
          >
            Follow
          </Button>

          <Button
            color="secondary"
            variant="outlined"
            disabled={favorited}
            onClick={handleFavoriteClick}
          >
            Favorite
          </Button>
        </Stack>

        <Divider sx={{ m: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <DisplayRecipe recipe={recipe} />
            <Divider sx={{ m: 2 }} />
            <DisplayTagList recipeId={recipeId} />
          </Grid>

          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5">Ingredients:</Typography>
            <IngredientList recipeId={recipeId} />
          </Grid>
        </Grid>
      </Card>
      <Stack>
        <Card sx={{ p: 5, m: 5, my: 1, width: "80vw" }}>Comment display?</Card>
      </Stack>
    </>
  );
}
