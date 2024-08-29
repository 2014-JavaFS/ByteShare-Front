import {useEffect, useState} from "react";
import {List, ListItem, Typography} from "@mui/material";
import {bsServer} from "../common/byteshare-server";

export default function IngredientList({recipeId}) {
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

    function sumList(list): number {
        return list.reduce((sum, next) => sum + next, 0);
    }

    async function getRecipeIngredients() {
        const response = await bsServer.get(`/recipeingredients/${recipeId}`)
        console.log(response);

        if (response.status == 200) {
            // navigate(`/${loggedInUserId()}`)
            setIngredients(response.data);
            const listOfMacros = {
                calories: [],
                fat: [],
                protein: [],
                totalCarbs: [],
                sugars: []
            };
                const promises = response.data.map(async (ingredient) => {
                    const macroResponse = await bsServer.get('/ingredients/macros?ingredientName=' + ingredient.ingredientName);
                    console.log(macroResponse);
                    Object.keys(listOfMacros).forEach((key) => {
                        listOfMacros[key].push(macroResponse.data[key] * ingredient.quantity);
                    });
                });
                Promise.all(promises).then(() => {
                    const sumOfMacros = {
                        calories: sumList(listOfMacros.calories),
                        fat: sumList(listOfMacros.fat),
                        protein: sumList(listOfMacros.protein),
                        totalCarbs: sumList(listOfMacros.totalCarbs),
                        sugars: sumList(listOfMacros.sugars),
                    };
                    console.log('setting');
                    console.log(sumOfMacros);
                    setTotalMacros(sumOfMacros);
                }).catch((error) => {
                    console.log(error);
                    alert("Problem retrieving macros from Nutritionix API");
                    setTotalMacros(zeroMacros);
                });
        } else {
            setError(response.data || "Not able to get ingredient data");
        }
    }

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
                {`Calories: ${totalMacros.calories.toFixed(2)}`}<br/>
                {`Fat: ${totalMacros.fat.toFixed(2)} g`}<br/>
                {`Protein: ${totalMacros.protein.toFixed(2)} g`}<br/>
                {`Total Carbohydrates: ${totalMacros.totalCarbs.toFixed(2)} g`}<br/>
                {`Sugar: ${totalMacros.sugars.toFixed(2)} g`}<br/>
            </Typography>
        </List>
    </>);
}
