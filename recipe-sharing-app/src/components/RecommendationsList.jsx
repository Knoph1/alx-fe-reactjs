import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="p-3 border rounded mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-green-600 hover:underline">
              {recipe.title}
            </Link>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add some favorites!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
