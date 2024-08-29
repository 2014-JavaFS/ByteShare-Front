import { useEffect, useState } from "react";
import { List, ListItem, Typography } from "@mui/material";
import { bsServer } from "../common/byteshare-server";

export default function IngredientList({ recipeId }) {
  const [ingredients, setIngredients] = useState([]);
  const [, setError] = useState("");
  const zeroMacros = {
    calories: 0,
    fat: 0,
    protein: 0,
    totalCarbs: 0,
    sugars: 0
  };
  const [totalMacros, setTotalMacros] = useState(zeroMacros);

  async function getRecipeIngredients() {
      bsServer.get(`/recipeingredients/${recipeId}`).then((response) => {
      console.log(response);

      if (response.status == 200) {
        // navigate(`/${loggedInUserId()}`)
        setIngredients(response.data);
        const sumOfMacros = {
          calories: 0,
          fat: 0,
          protein: 0,
          totalCarbs: 0,
          sugars: 0
        };
        response.data.forEach((ingredient) => {
          bsServer.get('/macros?ingredientName='+ingredient.ingredientName).then((response) => {
              Object.keys(sumOfMacros).forEach((key) => {
                sumOfMacros[key] += response.data[key];
              })
          })
        })
        setTotalMacros(sumOfMacros);
      } else {
        setError(response.data || "Not able to get ingredient data");
      }
    }).catch((error) => { console.log(error); })

  useEffect(
    () => {
      getRecipeIngredients(); 
    },
    [] // when the page first loads
  );
  return (<>
    <List>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient.id}>
          <Typography> 
            {`${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredientName}`}
          </Typography>
        </ListItem>
      ))}
      <Typography>
        {`Calories: ${totalMacros.calories}`}<br/>
        {`Fat: ${totalMacros.fat} g`}<br/>
        {`Protein: ${totalMacros.protein} g`}<br/>
        {`Total Carbohydrates: ${totalMacros.totalCarbs} g`}<br/>
        {`Sugar: ${totalMacros.sugars} g`}<br/>
      </Typography>
    </List>
  </>);
}
