import React, { useState } from 'react';
import Recipe from './Recipe';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const sampleRecipe = {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic', 'Olive Oil', 'Salt', 'Pepper'],
    instructions: '1. Cook the spaghetti according to the package instructions. 2. In a separate pan, heat olive oil and sauté onions and garlic until translucent. 3. Add ground beef and cook until browned. 4. Pour in tomato sauce and let simmer for 20 minutes. 5. Season with salt and pepper. 6. Serve the sauce over the spaghetti.',
    author: 'John Doe',
    datePosted: new Date(),
    content: 'A classic Italian pasta dish that is perfect for a family dinner.',
    prepTime: 15,
    cookTime: 30
};

const RecipePage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab label="Recipe" />
                </Tabs>
            </AppBar>
            <Box p={3}>
                {selectedTab === 0 && <Recipe {...sampleRecipe} />}
            </Box>
        </div>
    );
};

export default RecipePage;