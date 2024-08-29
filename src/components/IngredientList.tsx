import { useEffect, useState } from "react";
import { List, ListItem, Typography } from "@mui/material";
import { bsServer } from "../common/byteshare-server";

export default function IngredientList({ recipeId }) {
  const [ingredients, setIngredients] = useState([]);
  const [, setError] = useState("");

  useEffect(
    () => {
      async function getRecipeIngredients() {
        try {
          const response = await bsServer.get(`/recipeingredients/${recipeId}`);
          console.log(response);

          if (response.status == 200) {
            // navigate(`/${loggedInUserId()}`)
            setIngredients(response.data);
          } else {
            setError(response.data || "Not able to get user data");
          }
        } catch (error: any) {
          console.log(error);
        }
      }
      getRecipeIngredients(); 
    },
    [] // when the page first loads
  );
  return (
    <List>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient.id}>
          <Typography> 
            {`${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredientName}`}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
