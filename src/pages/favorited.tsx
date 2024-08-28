import {
  Typography,
  Card,
  Divider,
  Button,
  Box,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { bsServer } from "../common/byteshare-server";
import { NavLink } from "react-router-dom";
import loggedInUserId from "../util/loggedInUserId";

export default function Favorited() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState("");

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

        if (response.status == 200) {
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

  async function removeFromFavorite(recipeId: number) {
    bsServer
      .delete("/favorite", {
        headers: {
          Accept: "application/json",
          userID: loggedInUserId(),
          recipeID: recipeId.toString(),
        },
      })
      .then(
        (response) => {
          setFavorites(response.data);
          //console.log(response.data);
        },
        (error) => {
          console.log("You Have an Error" + "\n" + error);
        }
      );
  }

  if (!favorites)
    return (
      <Card sx={{ p: 5, m: 5, width: "100%" }}>
        <Typography variant="h2" align="center">
          You have no favorited recipes
        </Typography>
      </Card>
    );

  return (
    <List>
      {favorites.map((fav) => (
        <ListItem key={fav.recipeId}>
          <Box sx={{ m: 3, width: "100%", minWidth: "80vw" }}>
            <NavLink to={"/recipe/" + fav.recipeId}>
              <Card sx={{ p: 2 }}>
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
                  onClick={() => removeFromFavorite(fav.recipeId)}
                >
                  Remove From Favorites
                </Button>
              </Card>
            </NavLink>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
