import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="p-3 border rounded mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
              {recipe.title}
            </Link>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
