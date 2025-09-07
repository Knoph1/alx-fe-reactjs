import Counter from './components/Counter';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import Counter from "./Counter";


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div>
      <h1>My React App</h1>
      <Counter />
    </div>
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
