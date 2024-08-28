import { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { bsServer } from "../common/byteshare-server";

export default function IngredientList({ recipeId }) {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState("");

  useEffect(
    () => {
      async function getRecipeIngredients() {
        try {
          const response = await bsServer.get(`/recipeingredients/${recipeId}`);

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

      setIngredients([
        { id: 1, ingredientName: "can", quantity: 1, unit: "" },
        { id: 2, ingredientName: "air", quantity: 5, unit: "grams" },
      ]);
    },
    [] // when the page first loads
  );

  return (
    <List>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient.id}>
          <ListItemText
            primary={`${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredientName}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
