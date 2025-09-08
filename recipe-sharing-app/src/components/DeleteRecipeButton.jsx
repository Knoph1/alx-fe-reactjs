import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted successfully!');
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '1rem', color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
