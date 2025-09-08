import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>

      {/* Favorite toggle */}
      <FavoriteButton recipeId={recipe.id} />

      {/* Edit and Delete options */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
