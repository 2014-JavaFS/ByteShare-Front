import {
  Card,
  Typography,
  Divider,
  List,
  ListItem,
  Box,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { bsServer } from "../common/byteshare-server";

export default function SearchResults() {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  console.log("here");

  useEffect(
    () => {
      async function getRecipes() {
        try {
          const response = await bsServer.get(
            `recipes/search?query=` + searchTerm
          );

          if (response.status == 200) {
            // navigate(`/${loggedInUserId()}`)
            console.log(JSON.stringify(results));
            setResults(response.data);
          } else {
            setError(response.data || "Not able to get user data");
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }
      getRecipes();
    },
    [] // when the page first loads
  );

  return (
    <List>
      {results.map((result) => (
        <ListItem key={result.recipeId}>
          <Box sx={{ m: 3, width: "100%", minWidth: "80vw" }}>
            <NavLink to={"/recipe/" + result.recipeId}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h3">{result.title}</Typography>
                <Divider sx={{ mb: 1 }} />
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <Typography>By: {result.author.username} </Typography>
                    <Typography>
                      Posted: {result.date?result.date.substring(0, 10):"Just now"}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>
                      Prep Time: {result.prepTime} minutes
                    </Typography>
                    <Typography>
                      Cook Time: {result.cookTime} minutes
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </NavLink>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
