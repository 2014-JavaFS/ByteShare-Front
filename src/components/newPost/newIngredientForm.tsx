import {
      Typography,
    Stack,
    TextField,
    Tooltip,
    IconButton,
    Autocomplete,
    Grid,
} from "@mui/material";
import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

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
    const [autocompleteResults, setAutocompleteResults] = useState([]);
    const [cachedFoods, setCachedFoods] = useState([]);

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

    const handleIngredientSearch = (newInputValue) => {
        console.log("im looking for: " + newInputValue);
        if (newInputValue.length > 3) {
            axios({
                url: 'https://trackapi.nutritionix.com/v2/search/instant?query=' + newInputValue,
                method: 'GET',
                headers: {
                    'x-app-id': '05e638d6',
                    'x-app-key': '1c4f13909ff79b8a7ab3a975d8940b22',
                    'x-remote-user-id': '0'
                }
            }).then((response) => {
                const searchList = response.data.common;
                const tags = [];
                const filteredSearchList = [];
                searchList.forEach((food) => {
                    if (!(tags.includes(food.tag_id))) {
                        tags.push(food.tag_id);
                        filteredSearchList.push(food);
                    }
                })
                setAutocompleteResults(filteredSearchList.map((food) => food.tag_name));
                setCachedFoods(filteredSearchList);
            })
                .catch((error) => console.log(error))
            // amsServer.get('/ingredients/search/'+newInputValue)
            //     .then((response) => console.log(response.data));
        }
        setInputVal(newInputValue);
    };

    const handleSelect = (newValue) => {
        setIngredient(newValue);
        let newUnit = "?"
        cachedFoods.forEach((food) => {
            console.log(food);
            if (food.tag_name === newValue) {
                console.log("Found food " + food.tag_name);
                newUnit = food.serving_unit;
            }
        });
        console.log("setting " + newUnit);
        setUnit(newUnit);
    };

    const handleNewAmount = (event) => {
        if(event.target.validity.valid || event.target.value === '') {
            setAmount(event.target.value);
        }
    };

    return (
        <Grid item xs={12}>
            <Typography variant="subtitle1">Add Your Ingredients:</Typography>
            <form autoComplete="off" onSubmit={handleSubmitIngredient}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{width: "90%", mt: 1}}
                >
                    <Autocomplete
                        value={ingredient}
                        onChange={(_event, newValue) => {
                            handleSelect(newValue);
                        }}
                        inputValue={inputVal}
                        onInputChange={(_event, newInputValue) => {
                            handleIngredientSearch(newInputValue);
                        }}
                        autoHighlight
                        options={autocompleteResults}
                        sx={{width: "100%"}}
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
                        onChange={(e) => handleNewAmount(e)}
                        inputProps={{pattern: "[0-9]*"}}
                        required
                        color="secondary"
                        sx={{width: "50%"}}
                    />
                    <TextField
                        label="measurement"
                        value={unit}
                        required
                        disabled={true}
                        color="secondary"
                        sx={{width: "40%"}}
                    >

                    </TextField>
                    <Tooltip title={"Add Ingredient"} arrow>
                        <IconButton type="submit" size="small">
                            <AddIcon/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            </form>
        </Grid>
    );
};

export default NewIngredientForm;
