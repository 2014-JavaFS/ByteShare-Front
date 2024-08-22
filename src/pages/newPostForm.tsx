import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import PostTextForm from "../components/newPostTextForm";

export default function NewPostForm() {
  const [recipeText, setRecipeText] = useState("");

  //#region Adding Ingredients
  const [ingredient, setIngredient] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddIngredient = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();

    const recipeIngredient = {
      amount: amount,
      measurement: measurement,
      ingredient: ingredient,
    };
    console.log(JSON.stringify(recipeIngredient));
  };

  const measurements = [
    { label: "quantity" },
    { label: "grams" },
    { label: "cups" },
    { label: "tsp" },
  ];

  const ingredientAdding = (
    <Grid item xs={12}>
      <Typography variant="subtitle1">Add Your Ingredients:</Typography>
      <form autoComplete="off" onSubmit={handleAddIngredient}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "90%" }}
        >
          <TextField
            fullWidth
            id="Ingredient"
            label="Ingredient"
            variant="filled"
            onChange={(e) => setIngredient(e.target.value)}
          />
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            sx={{ width: "40%" }}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            fullWidth
            select
            label="measurement?"
            SelectProps={{ native: true }}
            sx={{ width: "40%" }}
            onChange={(e) => setMeasurement(e.target.value)}
          >
            {measurements.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Tooltip title={"Add Ingredient"} arrow>
            <IconButton
              onClick={handleAddIngredient}
              type="submit"
              size="small"
              sx={{ mx: 2, backgroundColor: "#00000022" }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Stack>{" "}
      </form>
    </Grid>
  );

  //#endregion

  //#region Adding Tags
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagSubmit = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();
    setTags([...tags, tag]);
    console.log(tag);
  };

  const tagAdding = (
    <Grid item xs={12}>
      <Typography variant="subtitle1">Add Your Tags:</Typography>
      <form autoComplete="off" onSubmit={handleTagSubmit}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "30%" }}
        >
          <TextField
            id="Ingredient"
            label="Ingredient"
            variant="filled"
            onChange={(e) => setTag(e.target.value)}
          />
          <Tooltip title={"Add Tag"} arrow>
            <IconButton
              type="submit"
              size="small"
              sx={{ mx: 2, backgroundColor: "#00000022" }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </form>
    </Grid>
  );
  //#endregion

  function handlePostRecipe() {

  }

  return (
    <Card sx={{ p: 5, mx: 5, width: "100%" }}>
      <Typography variant="h3" align="center">
        Create Your New Post:
      </Typography>
      <Divider sx={{ m: 3 }} />
      <Grid container spacing={2}>
        <PostTextForm props={{ setRecipeText: setRecipeText }} />

        <Grid item xs={12}>
          <Divider sx={{ m: 1 }} />
        </Grid>

        {ingredientAdding}

        <Grid item xs={12}>
          <Divider sx={{ m: 1 }} />
        </Grid>

        {tagAdding}

        <Grid item xs={12}>
          <Divider sx={{ m: 1 }} />
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" size="large" variant="outlined" onClick={handlePostRecipe}>
            Post Recipe
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
