import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PruebaContext.Provider value="Pierre">
          <AppRouter />
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;
