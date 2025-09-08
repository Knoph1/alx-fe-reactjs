// src/components/RecipeList.jsx
import React from 'react';
import RecipeCard from './RecipeCard';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="recipe-list grid gap-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes match your search.</p>
      )}
    </div>
  );
};

export default RecipeList;
