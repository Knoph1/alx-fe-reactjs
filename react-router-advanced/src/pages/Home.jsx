import { useAuth } from "../context/AuthContext";

function Home() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h2>Home Page</h2>
      {isAuthenticated ? (
        <>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default Home;
