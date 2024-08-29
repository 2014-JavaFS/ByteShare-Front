import { Box, Divider, Typography } from "@mui/material";

export default function DisplayRecipe({ recipe }) {
  return (
    <Box>
      <Typography>
        Prep Time: {recipe.prepTime} minute{recipe.prepTime === 1 ? "" : "s"}
      </Typography>
      <Typography>
        Cook Time: {recipe.cookTime} minute{recipe.cookTime === 1 ? "" : "s"}
      </Typography>
      <Typography>
        Total: {recipe.cookTime + recipe.prepTime} minute
        {recipe.cookTime + recipe.prepTime === 1 ? "" : "s"}
      </Typography>

      <br />
      <Typography>Posted {recipe.date === null ? "" : recipe.date.substring(0, 10)}</Typography>

      <Divider sx={{ m: 2 }} />
      <Typography>{recipe.content}</Typography>
    </Box>
  );
}
