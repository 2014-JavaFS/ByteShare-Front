import { Grid, Stack, Chip, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function NewIngredientList({ props }) {
  function handleDeleteIngredient(ingredientToDelete) {
    props.setIngredients(
      props.ingredients.filter((i) => i.ingredient !== ingredientToDelete)
    );
  }

  if (props.ingredients.length < 1) {
    return;
  }

  return (
    <Grid item xs={12}>
      <Stack direction="column">
        {props.ingredients.map((i) => (
          <Box key={i.ingredient} sx={{ pr: 1, pb: 1 }}>
            <Chip
              label={
                i.amount +
                (i.unit === "quantity" ? "" : " " + i.unit) +
                " " +
                i.ingredient
              }
              onDelete={() => handleDeleteIngredient(i.ingredient)}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
              color="secondary"
            />
          </Box>
        ))}
      </Stack>
    </Grid>
  );
}
