import './App.css';
import Movies from './components/Movies';

const movieslist = [
  {
    "title": "film1",
    "actor": "skuespiller1"
  },
  {
    "title": "film2",
    "actor": "skuespiller2"
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Movies
        </h1>
      </header>
      <Movies movies={movieslist}/>
    </div>
  );
}

export default App;
