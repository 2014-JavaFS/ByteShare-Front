import {
  Typography,
  Card,
  Divider,
  Button,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { bsServer } from "../common/byteshare-server";
import { useNavigate } from "react-router-dom";
import loggedInUserId from "../util/loggedInUserId";

export default function Favorited() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Maybe want to refactor some of the DTO, to provide some more info?
  //If not I just need to delete some pieces of whats being displayed

  useEffect(() => {
    async function getFavorites() {
      try {
        const response = await bsServer.get(`/favorite`, {
          headers: {
            userID: loggedInUserId(),
          },
        });
        // TODO:  backend can honestly just return an empty list, front end can
        //        handle it easier that way than trying to detect this
        if (response.status === 200 || response.status === 406) {
          setFavorites(response.data);
        } else {
          setError(response.data || "Not able to get user data");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getFavorites();
  }, []);

  // TODO:  when deleting the last favorite, doesnt properly update or maybe
  //        it just doesnt wanna display the alterate idk but ill fix it later
  async function removeFromFavorite(recipeId: number) {
    bsServer
      .delete("/favorite", {
        headers: {
          Accept: "application/json",
          userID: loggedInUserId(),
          recipeID: recipeId,
        },
      })
      .then((error) => {
        console.log("You Have an Error" + "\n" + error);
      });
    setFavorites(favorites.filter((r) => r.recipeId !== recipeId));
  }

  if (favorites.length < 1) {
    <Card sx={{ p: 5, m: 5, width: "80vw" }}>
      <Typography variant="h4" align="center">
        You have no favorited recipes
      </Typography>
    </Card>;
  } else if (error) {
    return (
      <Card sx={{ p: 5, m: 5, width: "80vw" }}>
        <Typography variant="h4" align="center">
          oops
        </Typography>
      </Card>
    );
  } else {
    return (
      <List>
        {favorites.map((fav) => (
          <ListItem key={fav.recipeId}>
            <Card sx={{ p: 2, m: 3, width: "100%", minWidth: "80vw" }}>
              <Typography variant="h3">{fav.name}</Typography>
              <Divider sx={{ mb: 1 }} />
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <Typography>By: {fav.author} </Typography>
                  <Typography>Posted: {fav.date}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Prep Time: {fav.prepTime} minutes</Typography>
                  <Typography>Cook Time: {fav.cookTime} minutes</Typography>
                </Grid>
              </Grid>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() =>
                  navigate("/recipe/" + fav.recipeId, { replace: true })
                }
                sx={{ m: 1, mr: 3 }}
              >
                View Full Recipe
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => removeFromFavorite(fav.recipeId)}
              >
                Remove From Favorites
              </Button>
            </Card>
          </ListItem>
        ))}
      </List>
    );
  }
}
