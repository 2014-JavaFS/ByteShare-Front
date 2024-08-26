import React from 'react';

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    author: string;
    datePosted: Date;
    content: string;
    prepTime: number;
    cookTime: number;
}

const Recipe: React.FC<Recipe> = ({ id, name, ingredients, instructions, author, datePosted, content, prepTime, cookTime }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Date Posted:</strong> {datePosted.toDateString()}</p>
            <p><strong>Content:</strong> {content}</p>
            <p><strong>Prep Time:</strong> {prepTime} minutes</p>
            <p><strong>Cook Time:</strong> {cookTime} minutes</p>
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