import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // ✅ must be public/data.json, not /src/data.json
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Add new recipe button - outside loop */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/add-recipe"
          className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
        >
          + Add New Recipe
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
