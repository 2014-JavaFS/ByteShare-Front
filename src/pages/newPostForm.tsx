import { Button, Card, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import NewPostTextForm from "../components/newPost/newTextForm.tsx";
import NewPostIngredientForm from "../components/newPost/newIngredientForm.tsx";
import NewPostTagForm from "../components/newPost/newTagForm.tsx";
import NewPostIngredientList from "../components/newPost/newIngredientList.tsx";
import NewPostTagList from "../components/newPost/newTagList.tsx";

export default function NewPostForm() {
  const [recipeText, setRecipeText] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([]);

  function handlePostRecipe() {
    //some sort of validation
    //visual feedback at some point

    console.log("===PROTO RECIPE INFO===");
    console.log("text:\n" + JSON.stringify(recipeText));
    console.log("ingredients:\n" + JSON.stringify(ingredients));
    console.log("tags:\n" + JSON.stringify(tags));
    console.log("=======================");
  }

  return (
    <Card sx={{ p: 5, mx: 5, width: "100%" }}>
      <Typography variant="h3" align="center">
        Create Your New Post:
      </Typography>
      <Divider sx={{ m: 3 }} />
      <Grid container spacing={1}>
        <NewPostTextForm setRecipeText={setRecipeText} />

        <Grid item xs={12}>
          <Divider sx={{ m: 1 }} />
        </Grid>

        <NewPostIngredientForm
          props={{ ingredients: ingredients, setIngredients: setIngredients }}
        />

        <NewPostIngredientList
          props={{ ingredients: ingredients, setIngredients: setIngredients }}
        />

        <Grid item xs={12}>
          <Divider sx={{ m: 1 }} />
        </Grid>

        <NewPostTagForm props={{ tags: tags, setTags: setTags  }} />

        <Grid item xs={12}>
          <Divider sx={{ m: 1 }} />
        </Grid>

        <NewPostTagList props={{ tags: tags, setTags: setTags }} />

        <Grid item xs={12}>
          <Button
            color="secondary"
            size="large"
            variant="outlined"
            onClick={handlePostRecipe}
          >
            Post Recipe
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
