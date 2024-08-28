import {
  Alert,
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NewPostTextForm from "../components/newPost/newTextForm.tsx";
import NewPostIngredientForm from "../components/newPost/newIngredientForm.tsx";
import NewPostTagForm from "../components/newPost/newTagForm.tsx";
import NewPostIngredientList from "../components/newPost/newIngredientList.tsx";
import NewPostTagList from "../components/newPost/newTagList.tsx";

export default function NewPostForm() {
  const [recipeText, setRecipeText] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([]);
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");

  function optionalAlert(condition: boolean, statement: string) {
    if (condition) {
      return (
        <Alert severity="error" variant="filled" sx={{ mx: 2, my: 1 }}>
          {statement}
        </Alert>
      );
    }
  }

  function handlePostRecipe() {
    //some sort of validation
    //visual feedback at some point
    if (
      !recipeText ||
      !prepTime ||
      !cookTime ||
      ingredients.length < 1 ||
      tags.length < 1
    ) {
      return;
    }

    if (!recipeText) console.log("===PROTO RECIPE INFO===");
    console.log("text:\n" + JSON.stringify(recipeText));
    console.log("ingredients:\n" + JSON.stringify(ingredients));
    console.log("tags:\n" + JSON.stringify(tags));
    console.log("prep time: " + prepTime);
    console.log("cook time: " + cookTime);
    console.log("=======================");
  }

  return (
    <Card sx={{ p: 5, mx: 5, width: "100%" }}>
      <Typography variant="h3" align="center">
        Create Your New Post:
      </Typography>
      <Divider sx={{ m: 3 }} />
      <Stack spacing={1}>
        <NewPostTextForm setRecipeText={setRecipeText} />

        <Divider sx={{ m: 1 }} />
        <Stack direction="row">
          <TextField
            label="Prep Time"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            required
            fullWidth
            color="secondary"
            sx={{ m: 1, width: "40%" }}
          />
          <TextField
            label="Cook Time"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            required
            fullWidth
            color="secondary"
            sx={{ m: 1, width: "40%" }}
          />
        </Stack>
        <Divider sx={{ m: 1 }} />

        <NewPostIngredientForm
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <NewPostIngredientList
          props={{ ingredients: ingredients, setIngredients: setIngredients }}
        />

        <Divider sx={{ m: 1 }} />

        <NewPostTagForm props={{ tags: tags, setTags: setTags }} />
        <NewPostTagList props={{ tags: tags, setTags: setTags }} />

        <Divider sx={{ m: 1 }} />

        {optionalAlert(!recipeText, "You must add a Title and Description!")}
        {optionalAlert(ingredients.length < 1, "You must add at least one ingredient!")}
        {optionalAlert(tags.length < 1, "You must add at least one tag!")}
        {optionalAlert(!prepTime, "You must enter a Prep Time!")}
        {optionalAlert(!cookTime, "You must enter a Cook Time!")}
        <Button
          color="secondary"
          size="large"
          variant="outlined"
          onClick={handlePostRecipe}
        >
          Post Recipe
        </Button>
      </Stack>
    </Card>
  );
}
