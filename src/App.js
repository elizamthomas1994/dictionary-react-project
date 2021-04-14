import './App.css';
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="project-title">Dictionary Project</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer>
          <div className="coder">
            <a href="https://github.com/elizamthomas1994/dictionary-react-project" target="_blank" rel="noreferrer" className="github">
              <i class="fab fa-github"></i> 
            </a>
            Coded by                         
            <a href="https://www.linkedin.com/in/eliza-thomas-aa0419198/" target="_blank" rel="noreferrer" className="linkedin">
               Eliza Thomas
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
