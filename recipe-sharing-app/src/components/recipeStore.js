import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase()) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(term.toLowerCase())) ||
      recipe.prepTime?.toString().includes(term) // if prepTime is numeric
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
}));
