import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
        
        <nav className="mb-4">
                  <Link to="/" className="mr-4">Home</Link>
                  <Link to="/favorites" className="mr-4">Favorites</Link>
                  <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe Details Route */}
                  <Route path="/recipe/:id" element={<RecipeDetails />} />
                  <Route path="/favorites" element={<FavoritesList />} />
                  <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
