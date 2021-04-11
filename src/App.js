import './App.css';
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary Project</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Eliza Thomas
        </footer>
      </div>
    </div>
  );
}

export default App;
