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
import { bsServer } from "../common/byteshare-server.ts";
import loggedInUserId from "../util/loggedInUserId.ts";

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

  async function handlePostRecipe() {
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

    console.log("===PROTO RECIPE INFO===");
    console.log("text:\n" + JSON.stringify(recipeText));
    console.log("ingredients:\n" + JSON.stringify(ingredients));
    console.log("tags:\n" + JSON.stringify(tags));
    console.log("prep time: " + prepTime);
    console.log("cook time: " + cookTime);
    console.log("=======================");

    makeRecipe(); 
  } 

  async function makeRecipe() {
    const recipe = {
      title: recipeText.title,
      content: recipeText.description,
      prepTime: prepTime,
      cookTime: cookTime,
      author: loggedInUserId(),
    };

    try {
      console.log(JSON.stringify(recipe));
      console.log(`/recipes`, recipe);
      const axResp = await bsServer.post(`/recipes`, recipe);
      console.log(axResp);

      if (axResp.status > 199 && axResp.status < 300) {
        console.log("✔️ Recipe");  
        makeRecipeIngredients(axResp.data.recipeId); 
        makeTags(axResp.data.recipeId);
      } else {
        console.log("❌ Recipe");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function makeRecipeIngredients(recipeId) {
    //making the tagDTO list to be passed to the backend (tag DTO only has an Integer:recipeId and a String:tagName)
    const recipeIngredientDTOs = [];

    ingredients.map((ing) => {
        recipeIngredientDTOs.push(
          {
          ingredient: ing.ingredient,
          recipeId: recipeId,
          quantity: ing.amount,
          unit: ing.unit
        }
        );
    });
    console.log(recipeIngredientDTOs);

    try {
      const axResp = await bsServer.post(`/recipeingredients`, recipeIngredientDTOs); 
      console.log(axResp);

      if (axResp.status > 199 && axResp.status < 300) {
        console.log("✔️ Ingredients");
      } else {
        console.log("❌ Ingredients");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function makeTags(recipeId) {
    //making the tagDTO list to be passed to the backend (tag DTO only has an Integer:recipeId and a String:tagName)
    const tagDTOs = tags.map((tagName) => {
      return { recipeId, tagName };
    });
    console.log(tagDTOs);

    try {
      const axResp = await bsServer.post("/tags/makeTags", tagDTOs);
      console.log(axResp);

      if (axResp.status > 199 && axResp.status < 300) {
        console.log("✔️ Tags");
      } else {
        console.log("❌ Tags");
      }
    } catch (error) {
      console.error(error);
    }
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
        {optionalAlert(
          ingredients.length < 1,
          "You must add at least one ingredient!"
        )}
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
