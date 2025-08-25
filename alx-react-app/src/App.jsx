import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <div>
            <h1>User Profile</h1>
            {/* UserProfile with props */}
              <UserProfile
                name="Alice"
                age={25}
                bio="Loves hiking and photography"
              />
              <UserProfile
                name="Bob"
                age={30}
                bio="Enjoys coding, gaming, and traveling"
              />
        </div>
        <Footer />
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <span className="visually-hidden">Vite Website</span>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <span className="visually-hidden">React Website</span>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  );
}

export default App;
