import React from 'react';
import RecipeCard from './RecipeCard';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
          </div>
        ))
      )}
    </div>
  );
};

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
