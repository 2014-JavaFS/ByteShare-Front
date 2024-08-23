import React from 'react';

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

const Recipe: React.FC<Recipe> = ({ name, ingredients, instructions }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{instructions}</p>
        </div>
    );
};

export default Recipe;