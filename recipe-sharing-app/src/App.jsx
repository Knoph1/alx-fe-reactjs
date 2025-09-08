import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
