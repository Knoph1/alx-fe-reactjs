import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";
import Counter from "./Counter";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    bio: "A passionate software developer who loves React!",
  };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Welcome to the App</h1>
        <ProfilePage />
        <Counter />
      </div>
    </UserContext.Provider>
  );
}

export default App;
