import {
  Grid,
  Typography,
  Stack,
  TextField,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function NewIngredientForm({ props }) {
  const [ingredient, setIngredient] = useState("");
  const [unit, setUnit] = useState("quantity");
  const [amount, setAmount] = useState("");

  const handleSubmitIngredient = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();

    const protoRecipeIngredient = {
      amount: amount,
      unit: unit,
      ingredient: ingredient,
    };

    console.log(JSON.stringify(protoRecipeIngredient));
    props.setIngredients([...props.ingredients, protoRecipeIngredient]);
  };

  const measurements = [
    { label: "quantity" },
    { label: "grams" },
    { label: "cups" },
    { label: "tsp" },
  ];

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1">Add Your Ingredients:</Typography>
      <form autoComplete="off" onSubmit={handleSubmitIngredient}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "90%" }}
        >
          <TextField
            label="Ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            required
            fullWidth
            variant="filled"
            color="secondary"
          />
          <TextField
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            color="secondary"
            sx={{ width: "50%" }}
          />
          <TextField
            label="measurement"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
            select
            SelectProps={{ native: true }}
            color="secondary"
            sx={{ width: "40%" }}
          >
            {measurements.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Tooltip title={"Add Ingredient"} arrow>
            <IconButton type="submit" size="small">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </form>
    </Grid>
  );
}
