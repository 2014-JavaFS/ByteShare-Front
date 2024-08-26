import {
  Typography,
  Stack,
  TextField,
  Tooltip,
  IconButton,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

interface NewIngredientFormProps {
  ingredients: Array<string>;
  setIngredients: (Array) => void;
}

const NewIngredientForm: React.FC<NewIngredientFormProps> = ({
  ingredients,
  setIngredients,
}) => {
  const [unit, setUnit] = useState("quantity");
  const [amount, setAmount] = useState("");
  const [ingredient, setIngredient] = useState(null);
  const [inputVal, setInputVal] = useState("");

  const handleSubmitIngredient = (event) => {
    //default behavior reloads the whole page
    event.preventDefault();

    console.log(ingredients);
    console.log(ingredient);

    const protoRecipeIngredient = {
      amount: amount,
      unit: unit,
      ingredient: ingredient,
    };

    console.log(JSON.stringify(protoRecipeIngredient));
    setIngredients([...ingredients, protoRecipeIngredient]);

    setIngredient(null);
    setInputVal("");
    setAmount("");
    setUnit("quantity");
  };

  const measurements = ["quantity", "grams", "cups", "tsp"];

  const testIngredients = [
    "rice",
    "chicken",
    "beef",
    "pork",
    "bread",
    "broccoli",
    "carrots",
    "apples",
    "oranges",
    "milk",
  ];

  const handleIngredientSearch = (newInputValue) => {
    console.log("im looking for: " + newInputValue);
    //update the list of options here
    setInputVal(newInputValue);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmitIngredient}>
      <Typography variant="subtitle1">Add Your Ingredients:</Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ width: "90%", mt: 1 }}
      >
        <Autocomplete
          value={ingredient}
          onChange={(_event, newValue) => {
            setIngredient(newValue);
          }}
          inputValue={inputVal}
          onInputChange={(_event, newInputValue) => {
            handleIngredientSearch(newInputValue);
          }}
          autoHighlight
          options={testIngredients}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Ingredient"
              color="secondary"
              required
            />
          )}
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
            <option key={option} value={option}>
              {option}
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
  );
};

export default NewIngredientForm;
