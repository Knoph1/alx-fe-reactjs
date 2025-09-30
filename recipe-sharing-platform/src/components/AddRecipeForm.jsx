import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // ✅ Steps included
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    // Ensure at least 2 ingredients
    const ingredientList = ingredients
      .split(/,|\n/)
      .map((i) => i.trim())
      .filter((i) => i !== "");
    if (ingredientList.length < 2) {
      newErrors.ingredients = "Please enter at least 2 ingredients";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        title,
        ingredients: ingredients.split(/,|\n/).map((i) => i.trim()).filter((i) => i !== ""),
        steps,
      });

      alert("Recipe submitted successfully!");

      // Reset form
      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Title */}
        <div className="md:grid md:grid-cols-3 md:gap-4 md:items-center">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0">
            Recipe Title
          </label>
          <div className="md:col-span-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <div className="md:grid md:grid-cols-3 md:gap-4 md:items-start">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0">
            Ingredients
          </label>
          <div className="md:col-span-2">
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="List ingredients (separated by commas or new lines)"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="md:grid md:grid-cols-3 md:gap-4 md:items-start">
          <label className="block text-gray-700 font-medium mb-2 md:mb-0">
            Preparation Steps
          </label>
          <div className="md:col-span-2">
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Write the preparation steps here..."
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full md:w-1/2 mx-auto block bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
