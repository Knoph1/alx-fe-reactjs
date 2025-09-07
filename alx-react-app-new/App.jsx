import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Knoph" age={24} bio="Web Developer, IT Specialist, and Researcher" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
