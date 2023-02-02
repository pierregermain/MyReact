import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* Ejemplo de hook useMemo */}
        <Tareas></Tareas>

        {/* Ejemplo de función React.memo
        {<Gestion />}
         */}
      </header>
    </div>
  );
}

export default App;
